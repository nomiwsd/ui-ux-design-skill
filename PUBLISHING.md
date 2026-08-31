# Publishing and releases

This repository publishes `uiux-storybook-architect` to npm and creates a matching GitHub release from a `vX.Y.Z` tag.

## Release architecture

- `.github/workflows/ci.yml` validates pushes and pull requests on Windows and Linux with Node.js 18, 22, and 24.
- `.github/workflows/publish.yml` validates version tags, publishes an unpublished version to npm with provenance, and creates the GitHub release.
- If a version was published manually before its tag was pushed, the workflow skips the duplicate npm upload and still creates the GitHub release.

## One-time npm authentication

Use one of these methods. Trusted publishing is recommended because it does not store a long-lived npm token in GitHub.

### Option A: npm trusted publishing

After the package exists on npm:

1. Open the package on npmjs.com.
2. Open **Settings → Trusted Publisher**.
3. Choose GitHub Actions.
4. Enter:

   - organization or user: `nomiwsd`
   - repository: `ui-ux-design-skill`
   - workflow filename: `publish.yml`
   - environment: leave empty unless the workflow is updated to use one

5. Save the trusted publisher.

The workflow already grants `id-token: write` and publishes with `--provenance`.

### Option B: GitHub Actions secret

1. Create a granular npm access token with read/write access to `uiux-storybook-architect`.
2. In GitHub, open `Settings → Secrets and variables → Actions`.
3. Add the token as a repository secret named `NPM_TOKEN`.

When `NPM_TOKEN` exists, the workflow uses it. Otherwise it uses npm trusted publishing.

## Pre-release checks

Start with a clean working tree, then run:

```bash
npm ci
npm run check
```

`npm run check` runs the tests and `npm pack --dry-run`. The tarball should contain only `bin/`, `src/`, `README.md`, and `LICENSE`, plus npm-generated metadata.

To smoke-test the real tarball:

```bash
npm pack
npx ./uiux-storybook-architect-*.tgz version
npx ./uiux-storybook-architect-*.tgz init --ide claude --dest ./package-smoke-test --yes
npx ./uiux-storybook-architect-*.tgz doctor --dest ./package-smoke-test
```

Remove the tarball and temporary project after inspection.

## Create a release

Choose the semantic-version increment:

```bash
npm version patch   # fixes and documentation
npm version minor   # backward-compatible features
npm version major   # breaking behavior or structure
```

This updates `package.json` and `package-lock.json`, creates a version commit, and adds the matching Git tag. Push both:

```bash
git push origin main --follow-tags
```

The `Publish` workflow then:

1. installs exactly from `package-lock.json`;
2. runs the full test suite;
3. verifies that `vX.Y.Z` matches the package version;
4. checks whether that exact version already exists on npm;
5. publishes it with provenance when needed; and
6. creates a GitHub release with generated notes.

Monitor the run in the repository's **Actions** tab. Tests, tag mismatch, npm authentication, or publication errors stop the release.

## Manual recovery

Use manual npm publishing only when the workflow cannot publish:

```bash
npm login --auth-type=web
npm run check
npm publish --access public
```

After the package is live, push the matching tag. The workflow detects the existing npm version and creates the GitHub release without publishing twice.

Do not delete or overwrite a published npm version. Fix the issue, increment the version, and publish a new release.

## Verify the public release

```bash
npm view uiux-storybook-architect name version dist-tags.latest repository.url --json
npx --yes uiux-storybook-architect@latest version
```

For a clean installation smoke test:

```bash
npx --yes uiux-storybook-architect@latest init --ide claude --dest ./release-smoke-test --yes
npx --yes uiux-storybook-architect@latest doctor --dest ./release-smoke-test
```

Finally verify:

- the npm page shows the expected README and version;
- the GitHub repository is public;
- CI and Publish workflows are green;
- the GitHub release tag matches npm; and
- the release smoke-test directory contains the skill and all 21 commands.
