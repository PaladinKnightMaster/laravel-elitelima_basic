# Elite Lima

Laravel application for a Lima-based models and hostess agency: a bilingual
(English/Spanish) public site backed by an admin panel for managing talent
profiles, photo galleries, videos, agencies and site settings.

Originally deployed on cPanel and running Laravel 5.6. Upgraded to Laravel 12
in September 2026; see [Upgrade notes](#upgrade-notes) for behaviour that still
reflects its origins.

## Requirements

| | |
|---|---|
| PHP | **8.2+** (`^8.2`) |
| Database | MySQL 5.7+ / MariaDB |
| PHP extensions | `gd` **or** `imagick` (Intervention Image), plus `pdo_mysql`, `mbstring`, `fileinfo` |
| Node | 18+ — only to run the asset build, which has no dependencies |
| Composer | 2.x |

The `gd`/`imagick` requirement is not optional: uploading a talent photo
watermarks it and generates a thumbnail, and will fatal without one.

## Running it

### With Docker (recommended)

Brings up the app on PHP 8.3 with `gd`, plus MySQL 8.4, with no local PHP or
MySQL install involved:

```bash
docker compose up --build
```

Then open <http://localhost:8000>. The first boot generates an `APP_KEY`, waits
for MySQL and runs the migrations (`RUN_MIGRATIONS=true`, the compose default —
set it to `false` once the schema is settled).

That generated key is **ephemeral**: it lives in the container only, so every
rebuild invalidates existing sessions and encrypted cookies. Fine while
developing; for anything long-lived, generate one and pass it in:

```bash
php artisan key:generate --show     # or: docker compose run --rm app php artisan key:generate --show
APP_KEY='base64:...' docker compose up -d
```

Uploads and database files live in named volumes (`uploads`, `dbdata`) so they
survive `docker compose down`. Use `down -v` only when you genuinely want to
discard them.

One caveat with that volume: Docker seeds a named volume from the image only
the first time it is created. If you already have an `uploads` volume from
before `public/uploads/.htaccess` existed, the rule that stops PHP executing
there will not appear in it on its own. Copy it in once:

```bash
docker compose cp public/uploads/.htaccess app:/var/www/html/public/uploads/.htaccess
```

Override any of `APP_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD` through
the environment or a local `.env`.

The image is Apache with mod_php rather than nginx, deliberately: the app
depends on `.htaccess` both for Laravel's front-controller rewrites and for the
rule that stops anything in `public/uploads/` being executed.

### Without Docker

You need PHP 8.2+ with `gd` (or `imagick`), `pdo_mysql`, `mbstring` and
`fileinfo`, plus a MySQL server. On Windows, Laragon bundles all of it; on
macOS, Laravel Herd plus a MySQL of your choice. Then:

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

`php -m` has to list `gd` or `imagick`, or photo uploads will fatal.

### Admin panel

Reachable at `/admin/login`, authenticated through a separate `admin` guard
backed by the `admins` table (see `config/auth.php`). `DatabaseSeeder` is empty,
so the first admin row has to be inserted by hand or restored from a database
dump.

The public site reads its configuration from the `settings` table on nearly
every page, so an empty database will error rather than render defaults.

## Deployment

`docker compose up -d` on any host with Docker is the whole deployment. The
image builds the dependencies in, and the entrypoint handles key generation,
waiting for the database and warming the view and route caches.

Two things the host must provide:

- **Persistent storage for `public/uploads/`.** Production media is around
  607 MB; an ephemeral container filesystem will lose it on every restart.
- **A MySQL database.** Either the compose `db` service with a volume, or a
  managed instance with `DB_HOST` pointed at it.

Put a reverse proxy in front for TLS. On nginx, mirror the uploads rule from
[Known issues](#known-issues), since nginx does not read `.htaccess`.

## Assets

`build-assets.mjs` concatenates the vendored CSS and JS under `public/` into
four bundles:

| Bundle | Sources |
|---|---|
| `public/theme/css/theme.css` | 5 |
| `public/admin/css/user.css` | 8 |
| `public/theme/js/theme.js` | 6 |
| `public/admin/js/user.js` | 18 |

```bash
npm run production
```

It has **no dependencies** — `package-lock.json` resolves to zero packages.
It replaced laravel-mix, which was unmaintained since 2022 and pulled in a
webpack toolchain purely to concatenate files that were already built. Nothing
is transpiled or bundled; edit the sources listed in `build-assets.mjs` and
re-run it.

Output is committed, so a deploy does not strictly need Node.

## Uploads

User media is written to `public/uploads/` (`girls/`, `girls/thumbs/`,
`videos/`, `poster/`) and served through `asset('uploads/...')`. The directory
is gitignored.

Production media is roughly **607 MB across 1992 files** — 500 MB of talent
photos, 101 MB of video, the rest site imagery. Any host has to provide real
persistent storage, or the code needs moving to a filesystem disk backed by
object storage.

## Layout

Standard Laravel: the document root is `public/`, with application code,
`.env` and the Composer files above it. Point your web server at `public/`.

Earlier deployments hoisted the contents of `public/` to the web root for
cPanel, which left the whole application inside the served directory. That is
no longer the case and should not be reintroduced.

## Tests

```bash
php artisan test
```

The photo upload path is covered end to end: watermarking, the 300x300
thumbnail, the filename hardening, and slug generation. Those tests need `gd`
or `imagick` and skip without it, so they are effectively CI-only unless your
local PHP has one.

CI (`.github/workflows/build.yml`) goes further: `composer validate`,
`composer install`, `composer audit`, `migrate`, compiling every Blade template,
caching routes, the asset build and its reference check, building the Docker
image, and booting the full stack to request a page and confirm a `.php` file
under `uploads/` is served rather than executed.

## Upgrade notes

Things that still reflect the app's history and are worth knowing before
changing them:

- **String-style route actions.** `routes/web.php` uses
  `'HomeController@index'` in 49 places, so `RouteServiceProvider` applies
  `Route::namespace()` explicitly. Laravel 8 stopped doing this by default.
- **Models live in `app/`**, not `app/Models` — `App\User`, `App\Admin`.
- **`rdx/laravelcollective-html`** stands in for the abandoned
  `laravelcollective/html`, keeping 313 `Form::`/`Html::` calls across 23
  views working unchanged.
- **`webpack` pin is gone** along with laravel-mix; there is no npm
  dependency tree left to pin.
- **`resources/assets/js/`** still contains Vue/axios scaffolding that nothing
  compiles. `public/js/app.js` is a committed artifact from the initial commit,
  loaded by `layouts/app.blade.php`, which exactly one view extends.

## Known issues

- **nginx deployments must replicate `public/uploads/.htaccess`.** It stops
  anything in the uploads tree from being executed, and Apache reads it
  automatically; nginx does not. Add to the server block:

  ```nginx
  location ^~ /uploads/ {
      location ~ \.(php[3457]?|phar|phtml|pht|cgi|pl|py|sh)$ { deny all; }
  }
  ```
- **365 asset references point at files that are not in the repository.** 359
  of those come from the purchased theme's own stylesheets, referencing demo
  images that were never shipped with it; they cannot be resolved without the
  original theme package. Only **1** of the 382 originally found exists in the
  cPanel backup, so these were broken in production too.

  Six are referenced by the application's own templates and are worth knowing
  about: `images/logo.png` (main theme header), `theme/css/video.css` and
  `theme/js/video{,_f}.js` (the videos page), `register.html` (a dead link on
  the admin login), and `uploads/placeholder.jpg` (runtime media, restored with
  the rest of `uploads/`).

  ```bash
  node tools/check-assets.mjs --list
  ```

  CI holds the total at a budget of 365 so it cannot grow.
