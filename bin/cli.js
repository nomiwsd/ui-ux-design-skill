#!/usr/bin/env node
/**
 * uiux-storybook-architect
 * Installs the UI/UX design skill + slash commands into any agentic IDE.
 * Zero dependencies. Node >= 18.
 */
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import readline from "node:readline";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = path.join(__dirname, "..");
let SRC = path.join(PKG_ROOT, "src");
const NAME = "uiux-storybook-architect";
const VERSION = JSON.parse(
  fs.readFileSync(path.join(PKG_ROOT, "package.json"), "utf8")
).version;

/* ---------------------------------------------------------------- ui ---- */
const tty = process.stdout.isTTY && !process.env.NO_COLOR;
const c = {
  b: (s) => (tty ? `\x1b[1m${s}\x1b[0m` : s),
  dim: (s) => (tty ? `\x1b[2m${s}\x1b[0m` : s),
  g: (s) => (tty ? `\x1b[32m${s}\x1b[0m` : s),
  y: (s) => (tty ? `\x1b[33m${s}\x1b[0m` : s),
  r: (s) => (tty ? `\x1b[31m${s}\x1b[0m` : s),
  cy: (s) => (tty ? `\x1b[36m${s}\x1b[0m` : s),
};
const log = (s = "") => console.log(s);
const ok = (s) => log(`  ${c.g("✓")} ${s}`);
const warn = (s) => log(`  ${c.y("!")} ${s}`);

/* ------------------------------------------------------------ targets ---- */
const HOME = os.homedir();

/**
 * Each target describes where the skill and the commands go, for both scopes.
 * `detect` returns true when the IDE looks present on this machine / repo.
 */
const TARGETS = {
  claude: {
    label: "Claude Code",
    detect: (d) => exists(path.join(HOME, ".claude")) || exists(path.join(d, ".claude")),
    project: (d) => ({
      skill: path.join(d, ".claude/skills"),
      cmds: path.join(d, ".claude/commands"),
      ref: `.claude/skills/${NAME}`,
      memory: path.join(d, "CLAUDE.md"),
    }),
    global: () => ({
      skill: path.join(HOME, ".claude/skills"),
      cmds: path.join(HOME, ".claude/commands"),
      ref: path.join(HOME, ".claude/skills", NAME),
    }),
    verify: "/help  → the ux-* commands should be listed",
  },
  codex: {
    label: "OpenAI Codex CLI",
    detect: (d) => exists(path.join(HOME, ".codex")) || exists(path.join(d, ".agents/skills")),
    project: (d) => ({
      skill: path.join(d, ".agents/skills"),
      cmds: path.join(HOME, ".codex/prompts"),
      ref: path.join(d, ".agents/skills", NAME),
      memory: path.join(d, "AGENTS.md"),
      note: "Codex reads custom prompts from ~/.codex/prompts (global only)",
    }),
    global: () => ({
      skill: path.join(HOME, ".codex/skills"),
      cmds: path.join(HOME, ".codex/prompts"),
      ref: path.join(HOME, ".codex/skills", NAME),
    }),
    verify: "/skills  → uiux-storybook-architect should be listed",
  },
  antigravity: {
    label: "Google Antigravity",
    detect: (d) =>
      exists(path.join(HOME, ".gemini/antigravity")) ||
      exists(path.join(d, ".agents/workflows")) ||
      exists(path.join(d, ".agent")),
    project: (d) => ({
      skill: path.join(d, ".agents/skills"),
      cmds: path.join(d, ".agents/workflows"),
      ref: `.agents/skills/${NAME}`,
      memory: path.join(d, "AGENTS.md"),
    }),
    global: () => ({
      skill: path.join(HOME, ".gemini/antigravity/skills"),
      cmds: path.join(HOME, ".gemini/antigravity/global_workflows"),
      ref: path.join(HOME, ".gemini/antigravity/skills", NAME),
    }),
    verify: "type / in the agent panel → ux-* workflows appear",
  },
  cursor: {
    label: "Cursor",
    detect: (d) => exists(path.join(d, ".cursor")) || exists(path.join(HOME, ".cursor")),
    project: (d) => ({
      skill: path.join(d, ".agents/skills"),
      cmds: path.join(d, ".cursor/commands"),
      ref: `.agents/skills/${NAME}`,
      rule: path.join(d, ".cursor/rules/uiux.mdc"),
      ruleFrontmatter:
        "---\ndescription: UI/UX design workflow — interview first, storybook before code\nglobs: [\"**/*.tsx\",\"**/*.jsx\",\"**/*.vue\",\"**/*.css\",\"design/**\"]\nalwaysApply: false\n---\n",
    }),
    global: null,
    verify: "type / in chat → ux-* commands appear",
  },
  windsurf: {
    label: "Windsurf",
    detect: (d) => exists(path.join(d, ".windsurf")) || exists(path.join(HOME, ".codeium")),
    project: (d) => ({
      skill: path.join(d, ".agents/skills"),
      cmds: path.join(d, ".windsurf/workflows"),
      ref: `.agents/skills/${NAME}`,
      rule: path.join(d, ".windsurf/rules/uiux.md"),
    }),
    global: null,
    verify: "type / in Cascade → ux-* workflows appear",
  },
  copilot: {
    label: "VS Code / GitHub Copilot",
    detect: (d) => exists(path.join(d, ".github")) || exists(path.join(d, ".vscode")),
    project: (d) => ({
      skill: path.join(d, ".agents/skills"),
      cmds: path.join(d, ".github/prompts"),
      suffix: ".prompt.md",
      ref: `.agents/skills/${NAME}`,
      rule: path.join(d, ".github/copilot-instructions.md"),
    }),
    global: null,
    verify: "Agent mode → type / → ux-* prompts appear",
  },
};

/* ------------------------------------------------------------- helpers ---- */
function exists(p) {
  try { fs.accessSync(p); return true; } catch { return false; }
}
function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const e of fs.readdirSync(from, { withFileTypes: true })) {
    const s = path.join(from, e.name), d = path.join(to, e.name);
    e.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
}
function installSkill(parent) {
  const dest = path.join(parent, NAME);
  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(dest, { recursive: true });
  fs.copyFileSync(path.join(SRC, "SKILL.md"), path.join(dest, "SKILL.md"));
  copyDir(path.join(SRC, "agents"), path.join(dest, "agents"));
  copyDir(path.join(SRC, "references"), path.join(dest, "references"));
  copyDir(path.join(SRC, "assets"), path.join(dest, "assets"));
  copyDir(path.join(SRC, "docs"), path.join(dest, "docs"));
  return dest;
}
function installCommands(dir, skillRef, suffix = ".md") {
  fs.mkdirSync(dir, { recursive: true });
  const files = fs.readdirSync(path.join(SRC, "commands")).filter((f) => f.endsWith(".md"));
  for (const f of files) {
    const body = fs
      .readFileSync(path.join(SRC, "commands", f), "utf8")
      .replaceAll("{{SKILL_PATH}}", skillRef);
    fs.writeFileSync(path.join(dir, path.basename(f, ".md") + suffix), body);
  }
  return files.length;
}
function appendPointer(file, skillRef, frontmatter) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const current = exists(file) ? fs.readFileSync(file, "utf8") : "";
  if (current.includes(NAME)) return "already present";
  const block = fs
    .readFileSync(path.join(SRC, "AGENTS.md"), "utf8")
    .replaceAll(`.agents/skills/${NAME}`, skillRef)
    .trim();
  const head = !current && frontmatter ? frontmatter : "";
  fs.writeFileSync(file, current + (current ? "\n\n" : head) + block + "\n");
  return "written";
}
function removeIfOurs(p) {
  if (exists(p)) { fs.rmSync(p, { recursive: true, force: true }); return true; }
  return false;
}

/* ---------------------------------------------------------------- args ---- */
function parseArgs(argv) {
  const out = { _: [], flags: {} };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const [k, v] = a.slice(2).split("=");
      if (v !== undefined) out.flags[k] = v;
      else if (argv[i + 1] && !argv[i + 1].startsWith("-")) out.flags[k] = argv[++i];
      else out.flags[k] = true;
    } else if (a.startsWith("-")) {
      out.flags[a.slice(1)] = true;
    } else out._.push(a);
  }
  return out;
}
function ask(q) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((res) => rl.question(q, (a) => { rl.close(); res(a.trim()); }));
}

/* -------------------------------------------------------------- banner ---- */
function banner() {
  log();
  log(`  ${c.b("UI/UX Storybook Architect")} ${c.dim("v" + VERSION)}`);
  log(`  ${c.dim("Interview-first design skill + 21 slash commands for every agentic IDE")}`);
  log();
}

/* ---------------------------------------------------------------- init ---- */
async function cmdInit(args) {
  const dest = path.resolve(args.flags.dest || process.cwd());
  const scope = args.flags.global ? "global" : "project";
  const yes = !!(args.flags.yes || args.flags.y || args.flags.all);
  const keys = Object.keys(TARGETS);

  banner();

  let chosen;
  if (args.flags.ide) {
    chosen = String(args.flags.ide).split(",").map((s) => s.trim()).filter(Boolean);
  } else if (args.flags.all) {
    chosen = keys;
  } else {
    const detected = keys.filter((k) => TARGETS[k].detect(dest));
    log(`  ${c.b("Detected on this machine:")}`);
    keys.forEach((k, i) => {
      const hit = detected.includes(k);
      log(
        `   ${c.dim(String(i + 1) + ")")} ${hit ? c.g("●") : c.dim("○")} ${TARGETS[k].label}` +
          (hit ? c.dim("  found") : "")
      );
    });
    log();
    if (!process.stdin.isTTY) {
      chosen = detected.length ? detected : keys;
      warn("non-interactive shell — installing for detected IDEs");
    } else {
      const a = await ask(
        `  Install for which? ${c.dim("[enter = detected, a = all, or numbers e.g. 1,3]")} `
      );
      if (!a) chosen = detected.length ? detected : keys;
      else if (a.toLowerCase() === "a") chosen = keys;
      else
        chosen = a
          .split(/[,\s]+/)
          .map((n) => keys[parseInt(n, 10) - 1])
          .filter(Boolean);
    }
  }

  chosen = chosen.filter((k) => {
    if (!TARGETS[k]) { warn(`unknown IDE "${k}" — skipped`); return false; }
    return true;
  });
  if (!chosen.length) { warn("nothing selected — exiting"); return; }

  log();
  log(`  ${c.b("Scope:")} ${scope}${scope === "project" ? c.dim("  " + dest) : ""}`);
  log();

  const summary = [];
  for (const key of chosen) {
    const t = TARGETS[key];
    let plan = scope === "global" ? t.global?.() : t.project(dest);
    if (!plan) {
      plan = t.project(dest);
      warn(`${t.label} has no global scope — installing into the project instead`);
    }
    log(`  ${c.cy(t.label)}`);
    const skillDir = installSkill(plan.skill);
    ok(`skill    ${c.dim(path.relative(dest, skillDir) || skillDir)}`);
    const n = installCommands(plan.cmds, plan.ref, plan.suffix || ".md");
    ok(`commands ${c.dim(path.relative(dest, plan.cmds) || plan.cmds)} ${c.dim(`(${n})`)}`);
    if (plan.note) log(`    ${c.dim(plan.note)}`);
    const rulesFile = plan.rule || plan.memory;
    if (rulesFile && scope === "project") {
      const r = appendPointer(rulesFile, plan.ref, plan.ruleFrontmatter);
      ok(`rules    ${c.dim(path.relative(dest, rulesFile))} ${c.dim("(" + r + ")")}`);
    }
    summary.push([t.label, t.verify]);
    log();
  }

  log(`  ${c.b("Done.")} Restart your IDE / start a new session, then:`);
  log();
  log(`    ${c.cy("/ux-discover")} a landing page for a fintech app aimed at 55+ users`);
  log();
  log(`  ${c.dim("It must ask you 8 numbered questions before designing anything.")}`);
  log(`  ${c.dim("If it starts designing immediately, the skill did not load — run:")} ${c.cy("npx " + NAME + " doctor")}`);
  log();
  log(`  ${c.b("Verify per IDE")}`);
  for (const [label, v] of summary) log(`   ${c.dim("·")} ${label}: ${c.dim(v)}`);
  log();
  log(`  ${c.dim("Commands:")} npx ${NAME} list      ${c.dim("Guides:")} ${path.join("<skill>", "docs")}`);
  log();
}

/* ---------------------------------------------------------------- list ---- */
function cmdList() {
  banner();
  const dir = path.join(SRC, "commands");
  const groups = {
    "Research & structure": ["ux-discover", "ux-brief", "ux-ia"],
    Deliverable: ["ux-storybook"],
    Foundations: ["ux-tokens", "ux-type", "ux-color", "ux-theme", "ux-style"],
    Specifications: ["ux-components", "ux-pages"],
    "Motion & 3D": ["ux-motion", "ux-gsap", "ux-framer", "ux-3d"],
    Audits: ["ux-critique", "ux-a11y", "ux-perf", "ux-responsive"],
    Implementation: ["ux-build", "ux-handoff"],
  };
  const desc = (n) => {
    const f = path.join(dir, n + ".md");
    if (!exists(f)) return "";
    const m = fs.readFileSync(f, "utf8").match(/^description:\s*(.+)$/m);
    return m ? m[1] : "";
  };
  for (const [g, cmds] of Object.entries(groups)) {
    log(`  ${c.b(g)}`);
    for (const n of cmds) log(`   ${c.cy("/" + n).padEnd(tty ? 26 : 16)} ${c.dim(desc(n))}`);
    log();
  }
  log(`  ${c.dim("Normal path:")} /ux-discover → /ux-storybook → /ux-build → /ux-a11y → /ux-handoff`);
  log();
}

/* -------------------------------------------------------------- doctor ---- */
function cmdDoctor(args) {
  const dest = path.resolve(args.flags.dest || process.cwd());
  banner();
  log(`  ${c.b("Checking")} ${c.dim(dest)}`);
  log();
  let found = 0;
  for (const [key, t] of Object.entries(TARGETS)) {
    for (const scope of ["project", "global"]) {
      const plan = scope === "global" ? t.global?.() : t.project(dest);
      if (!plan) continue;
      const skillPath = path.join(plan.skill, NAME, "SKILL.md");
      if (!exists(skillPath)) continue;
      const cmdCount = exists(plan.cmds)
        ? fs.readdirSync(plan.cmds).filter((f) => f.startsWith("ux-")).length
        : 0;
      // several IDEs share .agents/skills — without commands this target isn't really installed
      if (cmdCount === 0 && plan.skill.includes(path.join(".agents", "skills"))) continue;
      found++;
      const gated = fs.readFileSync(skillPath, "utf8").includes("When to interview");
      log(`  ${c.cy(t.label)} ${c.dim("(" + scope + ")")}`);
      ok(`skill    ${c.dim(path.join(plan.skill, NAME))}`);
      cmdCount
        ? ok(`commands ${cmdCount} installed ${c.dim(plan.cmds)}`)
        : warn(`no commands found in ${plan.cmds}`);
      gated ? ok("interview logic present (new projects only)") : warn("interview logic MISSING — reinstall");
      log();
    }
  }
  if (!found) {
    warn("no installation found");
    log(`  ${c.dim("run:")} npx ${NAME} init`);
    log();
    process.exitCode = 1;
  } else {
    log(`  ${c.dim("Tip: the real test is behavioural — run /ux-discover and confirm it asks questions.")}`);
    log();
  }
}

/* ----------------------------------------------------------- uninstall ---- */
function cmdUninstall(args) {
  const dest = path.resolve(args.flags.dest || process.cwd());
  banner();
  let n = 0;
  for (const [key, t] of Object.entries(TARGETS)) {
    for (const scope of ["project", "global"]) {
      const plan = scope === "global" ? t.global?.() : t.project(dest);
      if (!plan) continue;
      if (removeIfOurs(path.join(plan.skill, NAME))) { ok(`removed skill ${c.dim(path.join(plan.skill, NAME))}`); n++; }
      if (exists(plan.cmds)) {
        for (const f of fs.readdirSync(plan.cmds)) {
          if (/^ux-.*\.md$/.test(f)) { fs.rmSync(path.join(plan.cmds, f)); n++; }
        }
      }
    }
  }
  log();
  log(`  ${n ? c.g("Removed " + n + " items.") : c.y("Nothing to remove.")}`);
  log(`  ${c.dim("Rule files (CLAUDE.md, AGENTS.md, .cursor/rules) were left alone — edit them by hand.")}`);
  log();
}

/* ---------------------------------------------------------------- eject --- */
function cmdEject(args) {
  const dest = path.resolve(args.flags.dest || path.join(process.cwd(), NAME));
  banner();
  copyDir(SRC, dest);
  ok(`source copied to ${c.dim(dest)}`);
  log();
  log(`  Edit it, then install your version from that folder:`);
  log(`    ${c.cy(`npx ${NAME} init --src ${path.relative(process.cwd(), dest) || "."}`)}`);
  log();
  log(`  ${c.dim("Best first edits: SKILL.md defaults table, references/04-visual-styles.md (your house style), assets/tokens.template.css")}`);
  log();
}

/* ----------------------------------------------------------------- help --- */
function help() {
  banner();
  log(`  ${c.b("Usage")}`);
  log(`    npx ${NAME} <command> [options]`);
  log();
  log(`  ${c.b("Commands")}`);
  log(`    init          install the skill + slash commands (interactive)`);
  log(`    list          show all 21 slash commands`);
  log(`    doctor        check what is installed and whether the gate is intact`);
  log(`    eject         copy the source out so you can customize it`);
  log(`    uninstall     remove skill and ux-* commands`);
  log();
  log(`  ${c.b("Options")}`);
  log(`    --all                 every supported IDE`);
  log(`    --ide claude,codex    pick specific IDEs`);
  log(`    --global              install into ~ instead of the project`);
  log(`    --dest <dir>          project root (default: cwd)`);
  log(`    --yes                 no prompts`);
  log();
  log(`  ${c.b("IDEs")}  ${Object.values(TARGETS).map((t) => t.label).join(" · ")}`);
  log();
  log(`  ${c.b("Examples")}`);
  log(`    npx ${NAME} init                       ${c.dim("detect and install")}`);
  log(`    npx ${NAME} init --all --global        ${c.dim("everything, everywhere")}`);
  log(`    npx ${NAME} init --ide claude --global`);
  log(`    pnpm dlx ${NAME} init --all`);
  log();
}

/* ----------------------------------------------------------------- main --- */
const args = parseArgs(process.argv.slice(2));
const cmd = args._[0] || (args.flags.help || args.flags.h ? "help" : "init");

// allow `--src` to install from an ejected/edited copy
if (args.flags.src) {
  const custom = path.resolve(String(args.flags.src));
  if (exists(path.join(custom, "SKILL.md"))) SRC = custom;
  else warn(`--src ${custom} has no SKILL.md — using the bundled source instead`);
}

switch (cmd) {
  case "init":
  case "install":
    await cmdInit(args);
    break;
  case "list":
  case "commands":
    cmdList();
    break;
  case "doctor":
  case "check":
    cmdDoctor(args);
    break;
  case "eject":
    cmdEject(args);
    break;
  case "uninstall":
  case "remove":
    cmdUninstall(args);
    break;
  case "version":
    log(VERSION);
    break;
  default:
    help();
}
