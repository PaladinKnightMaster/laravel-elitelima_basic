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

## Setup

```bash
composer install
cp .env.example .env
php artisan key:generate
```

Set your database credentials in `.env`, then:

```bash
php artisan migrate
npm run production
```

The app serves from `public/`. For local development:

```bash
php artisan serve
```

### Admin panel

Reachable at `/admin/login`, authenticated through a separate `admin` guard
backed by the `admins` table (see `config/auth.php`). `DatabaseSeeder` is empty,
so the first admin row has to be inserted by hand or restored from a database
dump.

The public site reads its configuration from the `settings` table on nearly
every page, so an empty database will error rather than render defaults.

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

Coverage is Laravel's default scaffolding only. CI (`.github/workflows/build.yml`)
does the real checking: `composer validate`, `composer install`, `composer audit`,
`migrate` against sqlite, compiling every Blade template, the test suite, and the
asset build.

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

- **`GET /clear` is unauthenticated** (`routes/web.php:13`) and runs
  `config:clear`, `cache:clear` and `config:cache`. Anyone who knows the URL can
  call it. It should be removed or put behind the admin guard before this is
  exposed publicly.
- **nginx deployments must replicate `public/uploads/.htaccess`.** It stops
  anything in the uploads tree from being executed, and Apache reads it
  automatically; nginx does not. Add to the server block:

  ```nginx
  location ^~ /uploads/ {
      location ~ \.(php[3457]?|phar|phtml|pht|cgi|pl|py|sh)$ { deny all; }
  }
  ```
- **Image handling is unverified since the upgrade** — Intervention Image was
  migrated from v2 to v3 (`Image::make`→`read`, `resize`→`scale`,
  `insert`→`place`, `fit`→`cover`), but no environment with `gd`/`imagick` has
  exercised the upload path yet.
