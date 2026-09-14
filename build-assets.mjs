#!/usr/bin/env node
/**
 * Asset build.
 *
 * Replaces laravel-mix, which was unmaintained since 2022 and dragged in a
 * webpack toolchain purely to concatenate files. Nothing here is transpiled or
 * bundled: every source below is already a built artifact vendored under
 * public/, and mix.js() was commented out in the old webpack.mix.js, so no npm
 * package ever reached the browser.
 *
 * Usage: node build-assets.mjs
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));

/** @type {Array<{out: string, sources: string[]}>} */
const bundles = [
    {
        out: 'public/theme/css/theme.css',
        sources: [
            'public/theme/bootstrap/dist/css/bootstrap.min.css',
            'public/admin/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.css',
            'public/theme/css/animate.css',
            'public/theme/css/style.css',
            'public/theme/css/colors/megna-dark.css',
        ],
    },
    {
        out: 'public/admin/css/user.css',
        sources: [
            'public/admin/bootstrap/dist/css/bootstrap.min.css',
            'public/admin/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.css',
            'public/admin/plugins/bower_components/chartist-js/dist/chartist.min.css',
            'public/admin/plugins/bower_components/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css',
            'public/admin/plugins/bower_components/vectormap/jquery-jvectormap-2.0.2.css',
            'public/admin/css/animate.css',
            'public/admin/css/style.css',
            'public/admin/css/colors/default.css',
        ],
    },
    {
        out: 'public/theme/js/theme.js',
        sources: [
            'public/admin/plugins/bower_components/jquery/dist/jquery.min.js',
            'public/theme/bootstrap/dist/js/bootstrap.min.js',
            'public/admin/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.js',
            'public/theme/js/jquery.slimscroll.js',
            'public/theme/js/waves.js',
            'public/theme/js/custom.js',
        ],
    },
    {
        out: 'public/admin/js/user.js',
        sources: [
            'public/admin/plugins/bower_components/jquery/dist/jquery.min.js',
            'public/admin/bootstrap/dist/js/bootstrap.min.js',
            'public/admin/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.js',
            'public/admin/plugins/bower_components/waypoints/lib/jquery.waypoints.js',
            'public/admin/plugins/bower_components/counterup/jquery.counterup.min.js',
            'public/admin/js/jquery.slimscroll.js',
            'public/admin/js/waves.js',
            'public/admin/plugins/bower_components/vectormap/jquery-jvectormap-2.0.2.min.js',
            'public/admin/plugins/bower_components/vectormap/jquery-jvectormap-world-mill-en.js',
            'public/admin/plugins/bower_components/vectormap/jquery-jvectormap-in-mill.js',
            'public/admin/plugins/bower_components/vectormap/jquery-jvectormap-us-aea-en.js',
            'public/admin/plugins/bower_components/chartist-js/dist/chartist.min.js',
            'public/admin/plugins/bower_components/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.min.js',
            'public/admin/plugins/bower_components/jquery-sparkline/jquery.sparkline.min.js',
            'public/admin/plugins/bower_components/jquery-sparkline/jquery.charts-sparkline.js',
            'public/admin/js/custom.min.js',
            'public/admin/js/dashboard3.js',
            'public/admin/plugins/bower_components/styleswitcher/jQuery.style.switcher.js',
        ],
    },
];

const kib = (n) => `${(n / 1024).toFixed(0)} KiB`;

let failed = false;
const manifest = {};

for (const { out, sources } of bundles) {
    const parts = [];

    for (const source of sources) {
        try {
            parts.push(await readFile(join(root, source), 'utf8'));
        } catch {
            console.error(`  missing source: ${source}`);
            failed = true;
        }
    }

    if (failed) continue;

    // Separators keep a source that omits its trailing newline or semicolon
    // from running into the next file.
    const glue = out.endsWith('.js') ? ';\n' : '\n';
    const body = parts.join(glue);

    await mkdir(dirname(join(root, out)), { recursive: true });
    await writeFile(join(root, out), body);

    const key = `/${out.replace(/^public\//, '')}`;
    manifest[key] = key;

    console.log(`  ${out.padEnd(34)} ${kib(Buffer.byteLength(body))}  (${sources.length} files)`);
}

if (failed) {
    console.error('\nbuild failed: one or more sources are missing');
    process.exit(1);
}

await writeFile(
    join(root, 'public/mix-manifest.json'),
    JSON.stringify(manifest, null, 4) + '\n'
);

console.log('\nbuild ok');
