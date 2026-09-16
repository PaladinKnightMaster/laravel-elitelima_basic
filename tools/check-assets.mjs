#!/usr/bin/env node
/**
 * Resolve every asset reference we can see and report the ones that point at
 * files which are not in the repository.
 *
 * Sources:
 *   - url(...) inside public/ stylesheets, resolved relative to the stylesheet
 *   - asset() and literal href/src values in resources/views
 *
 * Usage:
 *   node tools/check-assets.mjs              # summary
 *   node tools/check-assets.mjs --list       # every missing target
 *   node tools/check-assets.mjs --max N      # exit 1 if the count exceeds N
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, dirname, resolve, relative, sep } from 'node:path';

const root = process.cwd();
const pub = join(root, 'public');
const views = join(root, 'resources/views');

const args = process.argv.slice(2);
const wantList = args.includes('--list');
const maxIndex = args.indexOf('--max');
const max = maxIndex === -1 ? null : Number(args[maxIndex + 1]);

async function walk(dir, keep, out = []) {
    let entries;
    try {
        entries = await readdir(dir, { withFileTypes: true });
    } catch {
        return out;
    }
    for (const e of entries) {
        const p = join(dir, e.name);
        if (e.isDirectory()) await walk(p, keep, out);
        else if (keep(e.name)) out.push(p);
    }
    return out;
}

const exists = async (p) => {
    try {
        await stat(p);
        return true;
    } catch {
        return false;
    }
};

// Anything that is not a path to a file we could ship.
const NOT_A_FILE = /^(https?:|\/\/|data:|javascript:|mailto:|tel:|#|\{\{|\{!!)/i;

const clean = (ref) => {
    const r = ref.split('?')[0].split('#')[0].trim();
    if (!r || NOT_A_FILE.test(ref.trim())) return null;
    // Blade expressions and malformed markup the regexes can catch.
    if (r.includes('$') || r.includes('<') || r.includes('>')) return null;
    return r;
};

const missing = new Map();
const note = (target, from) => {
    const key = relative(root, target).split(sep).join('/');
    if (!missing.has(key)) missing.set(key, new Set());
    missing.get(key).add(relative(root, from).split(sep).join('/'));
};

for (const css of await walk(pub, (n) => n.endsWith('.css'))) {
    const body = await readFile(css, 'utf8');
    for (const m of body.matchAll(/url\(\s*['"]?([^)'"]+?)['"]?\s*\)/g)) {
        const ref = clean(m[1]);
        if (!ref) continue;
        const target = ref.startsWith('/') ? join(pub, ref) : resolve(dirname(css), ref);
        if (!(await exists(target))) note(target, css);
    }
}

for (const view of await walk(views, (n) => n.endsWith('.blade.php'))) {
    const body = await readFile(view, 'utf8');
    const refs = [
        ...[...body.matchAll(/asset\(\s*["']([^"'$]+?)["']\s*\)/g)].map((m) => m[1]),
        ...[...body.matchAll(/(?:href|src)\s*=\s*["']([^"'{}<>]+?)["']/g)].map((m) => m[1]),
    ];
    for (const raw of refs) {
        const ref = clean(raw);
        if (!ref) continue;
        const target = join(pub, ref.replace(/^\//, ''));
        if (!(await exists(target))) note(target, view);
    }
}

const entries = [...missing.entries()].sort();
const fromViews = entries.filter(([, f]) => [...f].some((x) => x.startsWith('resources/views')));
const fromCss = entries.filter(([, f]) => ![...f].some((x) => x.startsWith('resources/views')));

console.log(`missing asset targets: ${entries.length}`);
console.log(`  ${fromViews.length} referenced by the application's own templates`);
console.log(`  ${fromCss.length} referenced only by vendored theme stylesheets`);

if (wantList) {
    console.log('\n-- referenced by templates --');
    for (const [t, f] of fromViews) console.log(`  ${t}\n      <- ${[...f].join(', ')}`);
    console.log('\n-- referenced by vendored CSS --');
    for (const [t] of fromCss) console.log(`  ${t}`);
}

if (max !== null && entries.length > max) {
    console.error(
        `\n::error::asset references regressed: ${entries.length} missing, budget is ${max}`
    );
    process.exit(1);
}
