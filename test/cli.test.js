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

  assert.equal(commands.length, 21);
  for (const command of commands) {
    assert.match(output, new RegExp(`/${path.basename(command, ".md")}\\b`));
  }
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
    assert.ok(fs.existsSync(path.join(skill, "agents", "openai.yaml")));
    assert.equal(fs.readdirSync(path.join(skill, "references")).length, 14);
    assert.equal(fs.readdirSync(path.join(skill, "docs")).length, 12);
    assert.equal(
      fs.readdirSync(commands).filter((file) => file.startsWith("ux-")).length,
      21,
    );
    assert.match(rules, /^# Existing project rules/m);
    assert.equal(rules.match(/uiux-storybook-architect/g)?.length, 1);
  } finally {
    fs.rmSync(destination, { recursive: true, force: true });
  }
});
