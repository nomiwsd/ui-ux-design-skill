# Publishing and releases

This repository publishes `uiux-storybook-architect` to npm and creates a matching GitHub release from a version tag.

## One-time setup

1. Confirm that you have publish access to the npm package.
2. Create a granular npm access token with read/write access to `uiux-storybook-architect`.
3. Add it to the GitHub repository as an Actions secret named `NPM_TOKEN`:
   `Settings → Secrets and variables → Actions → New repository secret`.
4. Keep the repository's Actions workflow permissions enabled. The publish workflow uses `id-token: write` to attach npm provenance.

For the first release of an unclaimed package name, publish once from an authenticated local shell or run the tag workflow with a token that can create public packages.

## Verify before release

```bash
npm ci
npm run check
```

`npm run check` runs all tests and `npm pack --dry-run`. The tarball should contain only `bin/`, `src/`, `README.md`, and `LICENSE` plus npm-generated package metadata.

You can also test the real tarball in a temporary project:

```bash
npm pack
npx ./uiux-storybook-architect-1.1.0.tgz init --ide claude --dest ./package-smoke-test --yes
npx ./uiux-storybook-architect-1.1.0.tgz doctor --dest ./package-smoke-test
```

Delete the generated tarball and smoke-test directory after inspection.

## Release through CI/CD

Choose the correct semantic-version increment:

```bash
npm version patch   # fixes and documentation
npm version minor   # backward-compatible features
npm version major   # breaking behavior or structure
```

`npm version` updates `package.json` and `package-lock.json`, creates a commit, and creates a matching `vX.Y.Z` tag. Push the commit and tag:

```bash
git push origin main --follow-tags
```

The `Publish` workflow then:

1. installs from the lockfile;
2. runs the full test suite;
3. verifies that the Git tag matches `package.json`;
4. publishes the public npm package with provenance; and
5. creates a GitHub release with generated notes.

Monitor the run under the repository's **Actions** tab. A failed test or a mismatched tag stops the release before publication.

## Manual npm publish

Use this only when the release workflow is unavailable:

```bash
npm login
npm run check
npm publish --access public --provenance
```

Then create and push the matching Git tag if one does not already exist.

## Verify the public release

```bash
npm view uiux-storybook-architect version
npx uiux-storybook-architect@latest version
npx uiux-storybook-architect@latest init --ide claude --dest ./release-smoke-test --yes
```

Confirm the GitHub release uses the same version and that its CI and Publish checks are green.
