# Publishing and releases

`uiux-storybook-architect` is published automatically from the latest tested commit on `main`.

## Automatic release flow

A normal push to `main` runs `.github/workflows/ci.yml` across the supported Node.js and operating-system matrix. When that entire workflow succeeds, `.github/workflows/publish.yml` starts automatically and:

1. checks out the exact commit that passed CI;
2. verifies it is still the newest commit on `main`;
3. installs Node.js 24 and npm 11.6.2;
4. verifies npm registry and OIDC prerequisites;
5. runs `npm ci` and `npm test` again;
6. calculates an unpublished version;
7. runs `npm pack --dry-run` against the release version;
8. rechecks that `main` has not advanced;
9. publishes the package to npm with provenance;
10. commits the synchronized version to `package.json` and `package-lock.json`;
11. creates and pushes the matching `vX.Y.Z` tag; and
12. creates a GitHub release.

A failed CI run never starts publishing. A stale workflow run exits successfully and lets the newer commit's CI run publish instead.

## Version rules

For an ordinary commit, the workflow increments the patch version from npm's current `latest` version:

```text
npm latest 2.0.0 + new main commit → publish 2.0.1
npm latest 2.0.1 + new main commit → publish 2.0.2
```

To request a minor or major release, update `package.json` and `package-lock.json` to a version greater than npm's current version in the feature commit. The workflow respects that explicit version instead of generating a patch:

```bash
npm version minor --no-git-tag-version
# or
npm version major --no-git-tag-version
```

Commit the version change with the feature. After CI passes, that exact version is published.

The release workflow's own version-sync commit uses `[skip ci]` and the repository's `GITHUB_TOKEN`, so it does not create an infinite release loop.

## Required npm authentication

The workflow supports either npm Trusted Publishing or a repository secret. Configure at least one.

### Option A: npm Trusted Publishing (recommended)

On npmjs.com:

1. Open the `uiux-storybook-architect` package.
2. Open **Settings → Trusted Publisher**.
3. Select **GitHub Actions**.
4. Enter:

   - organization or user: `nomiwsd`
   - repository: `ui-ux-design-skill`
   - workflow filename: `publish.yml`
   - environment: leave empty

5. Save the trusted publisher.

The workflow grants `id-token: write` and pins npm 11.6.2, which supports npm's GitHub OIDC flow.

### Option B: repository `NPM_TOKEN`

Create a granular npm access token for `uiux-storybook-architect` with permission to publish and with the required 2FA bypass/automation setting. Add it in GitHub:

**Repository → Settings → Secrets and variables → Actions → New repository secret**

Name it exactly:

```text
NPM_TOKEN
```

When this secret exists, the workflow uses it. Otherwise it uses Trusted Publishing.

Interactive browser-login tokens are unsuitable for GitHub Actions because they expire and require a person to approve each publish.

## Local checks before pushing

Run:

```bash
npm ci
npm run check
```

`npm run check` runs the tests and npm package dry-run. The tarball should contain only the intended `bin/`, `src/`, `README.md`, `LICENSE`, and npm metadata files.

For a full local tarball smoke test:

```bash
npm pack
npx ./uiux-storybook-architect-*.tgz version
```

The generated archive is ignored by Git.

## CI gates

The main CI workflow currently verifies:

- Node.js 18, 22, and 24;
- Ubuntu and Windows;
- CLI version output;
- all bundled command discovery;
- complete, repeatable project installation;
- package construction through `npm pack --dry-run`.

Publishing reruns the primary tests and package inspection after calculating the release version.

## Race and duplicate protection

The publishing workflow uses a single concurrency group and cancels an older release when a newer successful commit is ready.

It checks `origin/main` twice:

- before preparing the release; and
- immediately before npm publication.

The calculated npm version is checked against existing Git tags before publication. npm itself also rejects duplicate immutable versions.

## Recovery

### CI failed

Fix the code or tests and push a new commit. Nothing is published from the failed commit.

### npm authentication failed

Configure Trusted Publishing or `NPM_TOKEN`, then rerun the failed **Publish latest main** workflow from GitHub Actions. The workflow recalculates the same unpublished version unless another release has already succeeded.

### npm succeeded but the version commit or GitHub release failed

Do not delete or overwrite the npm version. Inspect npm's `latest` value, synchronize `package.json` and `package-lock.json` to that version, create the matching tag/release if missing, and push the recovery commit.

### A breaking release is needed

Run `npm version major --no-git-tag-version` locally, include the generated package-file changes with the breaking code, and push normally. CI/CD publishes that major version after validation.

## Verify a release

```bash
npm view uiux-storybook-architect name version dist-tags.latest repository.url --json
npx --yes uiux-storybook-architect@latest version
```

Also verify:

- the latest GitHub Actions **CI** run is green;
- the related **Publish latest main** run is green;
- npm's `latest` version matches `package.json` on `main`;
- the matching Git tag and GitHub release exist; and
- a clean installation contains all 8 commands.
