/**
 * Structural tests for the skill's own content.
 *
 * These guard the reasoning architecture, not the installer:
 *  - every reference a command or SKILL.md names exists
 *  - SKILL.md carries the pipeline in order and the marketing/product fork
 *  - no reference reintroduces an absolute aesthetic rule (the "house style" regression)
 *  - every command has frontmatter and points at the skill path
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "src");
const referencesDir = path.join(src, "references");
const commandsDir = path.join(src, "commands");
const docsDir = path.join(src, "docs");

const read = (p) => fs.readFileSync(p, "utf8");
const list = (dir, ext = ".md") =>
  fs.readdirSync(dir).filter((f) => f.endsWith(ext)).sort();

const EXPECTED_REFERENCES = [
  "00-design-reasoning.md",
  "01-discovery.md",
  "02-marketing-ux.md",
  "03-product-ux.md",
  "04-visual-system.md",
  "05-responsive-accessibility.md",
  "06-motion.md",
  "07-gsap-recipes.md",
  "08-motion-react-recipes.md",
  "09-threejs-webgl.md",
  "10-copy-voice.md",
  "11-storybook-template.md",
  "12-implementation-handoff.md",
  "13-validation.md",
];

// Storybook output files live in the user's design/ folder, not in the skill.
const STORYBOOK_OUTPUTS = new Set([
  "00-brief.md",
  "01-direction.md",
  "01-art-direction.md",
  "02-information-architecture.md",
  "03-design-tokens.md",
  "04-typography-and-color.md",
  "05-components.md",
  "06-page-blueprints.md",
  "07-motion-spec.md",
  "08-accessibility.md",
  "09-build-plan.md",
]);

const skillFiles = () => [
  path.join(src, "SKILL.md"),
  path.join(src, "AGENTS.md"),
  ...list(commandsDir).map((f) => path.join(commandsDir, f)),
  ...list(referencesDir).map((f) => path.join(referencesDir, f)),
  ...list(docsDir).map((f) => path.join(docsDir, f)),
];

test("the reference set is exactly the fourteen pipeline files", () => {
  assert.deepEqual(list(referencesDir), EXPECTED_REFERENCES);
  assert.ok(!fs.existsSync(path.join(referencesDir, "blueprints")));
});

test("every numbered reference named anywhere in the skill exists", () => {
  const pattern = /\b(\d{2}-[a-z][a-z0-9-]*\.md)\b/g;
  const missing = new Set();
  for (const file of skillFiles()) {
    const body = read(file);
    for (const match of body.matchAll(pattern)) {
      const name = match[1];
      if (STORYBOOK_OUTPUTS.has(name)) continue;
      if (!fs.existsSync(path.join(referencesDir, name))) {
        missing.add(`${path.relative(root, file)} → ${name}`);
      }
    }
  }
  assert.deepEqual([...missing], [], "dangling reference links");
});

test("every explicit references/, assets/, commands/, docs/ path exists", () => {
  const pattern = /\b(references|assets|commands|docs)\/([A-Za-z0-9_.\-/]+\.(?:md|css|json|yaml))\b/g;
  const missing = new Set();
  for (const file of skillFiles()) {
    const body = read(file);
    for (const match of body.matchAll(pattern)) {
      const target = path.join(src, match[1], match[2]);
      if (!fs.existsSync(target)) {
        missing.add(`${path.relative(root, file)} → ${match[1]}/${match[2]}`);
      }
    }
  }
  assert.deepEqual([...missing], [], "dangling explicit paths");
});

test("SKILL.md carries the reasoning pipeline in order", () => {
  const skill = read(path.join(src, "SKILL.md"));
  const stages = [
    "CONTEXT",
    "USER",
    "JOB",
    "TASK",
    "CONTENT",
    "BUSINESS GOAL",
    "TRUST",
    "INFORMATION ARCHITECTURE",
    "INTERACTION MODEL",
    "VISUAL HIERARCHY",
    "DESIGN LANGUAGE",
    "COMPOSITION",
    "COMPONENTS",
    "RESPONSIVE",
    "MOTION",
    "ACCESSIBILITY",
    "IMPLEMENTATION",
    "VALIDATION",
  ];
  let cursor = 0;
  for (const stage of stages) {
    const at = skill.indexOf(stage, cursor);
    assert.ok(at >= 0, `pipeline stage "${stage}" missing or out of order in SKILL.md`);
    cursor = at + stage.length;
  }
});

test("SKILL.md and the reasoning core carry the marketing/product fork and the interchangeability test", () => {
  for (const file of ["SKILL.md", path.join("references", "00-design-reasoning.md")]) {
    const body = read(path.join(src, file));
    assert.match(body, /marketing surface/i, `${file} lacks the marketing surface`);
    assert.match(body, /product surface/i, `${file} lacks the product surface`);
    assert.match(body, /unrelated company/i, `${file} lacks the interchangeability test`);
  }
});

test("the always-loaded reasoning core contains no hex color values", () => {
  const body = read(path.join(referencesDir, "00-design-reasoning.md"));
  assert.equal(body.match(/#[0-9A-Fa-f]{6}\b/g), null, "00-design-reasoning.md must not carry visual values");
});

test("references do not reintroduce absolute aesthetic rules", () => {
  // Each pattern is a rule that produced a house style in earlier versions.
  const forbidden = [
    /neutrals? (?:are|is) always tinted/i,
    /untinted gray is a tell/i,
    /exactly one accent/i,
    /\bthe one accent\b/i,
    /at least 3\.5\s*[×x]/i,
    /push (?:the )?display[- ]to[- ]body (?:ratio )?past/i,
    /never (?:take|choose) variant 1/i,
    /one deliberate (?:grid )?break(?! .*WHEN)/i,
    /must (?:be|not be) uniform/i,
    /premium is subtraction/i,
    /\bban list\b/i,
    /six or more means/i,
    /(?:^|\n)\s*-\s+\*\*Bento grids?\.\*\*/, // bento as a listed recommendation
    /the 20\d\d premium vocabulary/i,
    /is the default choice in 20\d\d/i,
    /the 20\d\d mood/i,
  ];
  const offenders = [];
  const files = [
    path.join(src, "SKILL.md"),
    path.join(src, "AGENTS.md"),
    ...list(commandsDir).map((f) => path.join(commandsDir, f)),
    ...list(referencesDir).map((f) => path.join(referencesDir, f)),
  ];
  for (const file of files) {
    const body = read(file);
    for (const rule of forbidden) {
      const m = body.match(rule);
      if (m) offenders.push(`${path.relative(root, file)}: "${m[0].trim().slice(0, 60)}"`);
    }
  }
  assert.deepEqual(offenders, [], "absolute aesthetic rules found");
});

test("references contain no year-stamped trend claims", () => {
  const pattern = /\b(?:in|for|of|the) 20(?:2[4-9]|3\d)\b/i;
  const offenders = [];
  for (const f of list(referencesDir)) {
    const body = read(path.join(referencesDir, f));
    const m = body.match(pattern);
    if (m) offenders.push(`${f}: "${m[0]}"`);
  }
  assert.deepEqual(offenders, []);
});

test("every command has frontmatter, a description, and names the skill path", () => {
  for (const f of list(commandsDir)) {
    const body = read(path.join(commandsDir, f));
    assert.match(body, /^---\r?\n[\s\S]*?description:\s*.+[\s\S]*?\r?\n---/, `${f} lacks frontmatter with a description`);
    assert.match(body, /\{\{SKILL_PATH\}\}/, `${f} does not reference {{SKILL_PATH}}`);
  }
});

test("the surface-specific references never cross-apply marketing chrome to products", () => {
  const product = read(path.join(referencesDir, "03-product-ux.md"));
  // Product file must explicitly forbid marketing chrome
  assert.match(product, /no hero/i);
  assert.match(product, /scroll reveal/i);
  // Motion file must not license scroll reveal for product surfaces
  const motion = read(path.join(referencesDir, "06-motion.md"));
  assert.match(motion, /never on repeated-use|any repeated-use surface/i);
});

test("the token templates still carry tripwire values, not example colors", () => {
  const css = read(path.join(src, "assets", "tokens.template.css"));
  const json = read(path.join(src, "assets", "tokens.template.json"));
  for (const body of [css, json]) {
    assert.match(body, /#FF00FF/);
    assert.match(body, /#7FFF00/);
    assert.doesNotMatch(body, /#4F46E5|#6366F1|#8B5CF6|#C2410C|#FAF8F3/i, "example brand colors must not appear in token templates");
    assert.doesNotMatch(body, /\b(?:Inter|Fraunces|Poppins|Montserrat)\b/, "named fonts must not appear in token templates");
  }
});
