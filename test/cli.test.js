import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cli = path.join(root, "bin", "cli.js");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

function countFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).reduce(
    (count, entry) =>
      count +
      (entry.isDirectory()
        ? countFiles(path.join(directory, entry.name))
        : 1),
    0,
  );
}

function run(args, options = {}) {
  return execFileSync(process.execPath, [cli, ...args], {
    cwd: root,
    encoding: "utf8",
    env: { ...process.env, NO_COLOR: "1" },
    ...options,
  });
}

test("version reports the package version", () => {
  assert.equal(run(["version"]).trim(), pkg.version);
});

test("list exposes every bundled UX command", () => {
  const output = run(["list"]);
  const commands = fs
    .readdirSync(path.join(root, "src", "commands"))
    .filter((file) => file.endsWith(".md"));

  assert.equal(commands.length, 8);
  for (const command of commands) {
    assert.match(output, new RegExp(`/${path.basename(command, ".md")}\\b`));
  }
});
test("skill metadata stays within the portable Agent Skills limits", () => {
  const skill = fs.readFileSync(path.join(root, "src", "SKILL.md"), "utf8");
  const name = skill.match(/^name:\s*(.+)$/m)?.[1].trim();
  const description = skill.match(/^description:\s*(.+)$/m)?.[1].trim();

  assert.match(name, /^[a-z0-9-]{1,64}$/);
  assert.ok(description);
  assert.ok(description.length <= 1024);
});
test("project installation is complete, additive, and safe to repeat", () => {
  const destination = fs.mkdtempSync(path.join(os.tmpdir(), "uiux-skill-"));
  const memory = path.join(destination, "CLAUDE.md");

  try {
    fs.writeFileSync(memory, "# Existing project rules\n", "utf8");
    run(["init", "--ide", "claude", "--dest", destination, "--yes"]);
    run(["init", "--ide", "claude", "--dest", destination, "--yes"]);

    const skill = path.join(
      destination,
      ".claude",
      "skills",
      "uiux-storybook-architect",
    );
    const commands = path.join(destination, ".claude", "commands");
    const rules = fs.readFileSync(memory, "utf8");

    assert.ok(fs.existsSync(path.join(skill, "SKILL.md")));
    assert.ok(fs.existsSync(path.join(skill, "AGENTS.md")));
    assert.ok(fs.existsSync(path.join(skill, "agents", "openai.yaml")));
    assert.equal(countFiles(path.join(skill, "references")), 26);
    assert.equal(countFiles(path.join(skill, "docs")), 3);
    assert.ok(fs.existsSync(path.join(skill, "references", "00-anti-slop.md")));
    assert.ok(
      fs.existsSync(path.join(skill, "references", "blueprints", "saas.md")),
    );
    assert.equal(
      fs.readdirSync(commands).filter((file) => file.startsWith("ux-")).length,
      8,
    );
    assert.ok(!fs.existsSync(path.join(commands, "ux-3d.md")));
    assert.match(rules, /^# Existing project rules/m);
    assert.equal(rules.match(/uiux-storybook-architect/g)?.length, 1);
  } finally {
    fs.rmSync(destination, { recursive: true, force: true });
  }
});

test("global installation uses every IDE's current native skill path", () => {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), "uiux-home-"));
  const destination = fs.mkdtempSync(path.join(os.tmpdir(), "uiux-project-"));
  const env = { ...process.env, NO_COLOR: "1", UIUX_TEST_HOME: home };
  const skillPaths = [
    ".claude/skills",
    ".codex/skills",
    ".gemini/config/skills",
    ".cursor/skills",
    ".codeium/windsurf/skills",
    ".copilot/skills",
  ];

  try {
    run(["init", "--all", "--global", "--dest", destination, "--yes"], { env });

    for (const skillRoot of skillPaths) {
      assert.ok(
        fs.existsSync(path.join(home, skillRoot, "uiux-storybook-architect", "SKILL.md")),
        `missing global skill in ${skillRoot}`,
      );
    }
    assert.equal(
      fs.readdirSync(path.join(home, ".gemini", "config", "global_workflows"))
        .filter((file) => file.startsWith("ux-")).length,
      8,
    );
    assert.ok(!fs.existsSync(path.join(home, ".gemini", "antigravity", "skills")));
    assert.ok(!fs.existsSync(path.join(destination, ".agents")));
  } finally {
    fs.rmSync(home, { recursive: true, force: true });
    fs.rmSync(destination, { recursive: true, force: true });
  }
});
