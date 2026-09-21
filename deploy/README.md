# Deployment

Everything needed to stand the site up on a fresh Linux host with Docker, and
to restore the January 2023 cPanel backup into it.

| File | Purpose |
|---|---|
| `bootstrap-host.sh` | Docker, automatic security updates, firewall on a fresh Debian/Ubuntu host |
| `compose.prod.yaml` | Production overlay: adds Caddy, unpublishes the app and MySQL |
| `Caddyfile` | TLS termination and reverse proxy |
| `.env.production.example` | The handful of secrets and the domain |
| `restore-database.sh` | Imports the application's SQL dump |
| `restore-media.sh` | Copies the 607 MB of uploads into the volume |

Needs **Docker Compose 2.24 or newer** — `compose.prod.yaml` uses the
`!override` tag to unpublish ports the base file publishes.

## 1. Prepare the host

```bash
git clone https://github.com/PaladinKnightMaster/laravel-elitelima_basic.git
cd laravel-elitelima_basic
sudo ./deploy/bootstrap-host.sh
```

Installs Docker, enables unattended security upgrades, and closes everything
but SSH, 80 and 443.

Point your domain's A record (and AAAA, if you have one) at the host before
continuing: Caddy gets its certificate from Let's Encrypt, which verifies over
port 80, so DNS has to resolve first.

## 2. Configure

```bash
cp deploy/.env.production.example .env
docker compose run --rm app php artisan key:generate --show   # copy into APP_KEY
nano .env
```

Set `SITE_DOMAIN`, `APP_KEY`, `DB_PASSWORD` and `DB_ROOT_PASSWORD`.

Two things worth getting right the first time:

- **`APP_KEY` must be kept.** Changing it invalidates every session and every
  encrypted cookie.
- **The database credentials are only applied on first boot.** MySQL reads them
  when it initialises an empty data volume and ignores them afterwards, so
  changing `DB_PASSWORD` later means either an `ALTER USER` inside the container
  or `docker compose down -v`, which destroys the data.

## 3. First boot

```bash
docker compose -f compose.yaml -f deploy/compose.prod.yaml up -d --build
docker compose logs -f caddy      # watch the certificate being issued
```

The production overlay sets `RUN_MIGRATIONS=false` deliberately. The schema
comes from the dump in the next step, not from `artisan migrate` — see the
warning there.

For a dry run without a domain, set `SITE_DOMAIN=localhost`; Caddy issues an
internal certificate instead of calling Let's Encrypt.

## 4. Restore the database

```bash
./deploy/restore-database.sh /path/to/cPanel_backup/Database/y00v9c45_elitedb.sql
```

**Only `y00v9c45_elitedb.sql` belongs to this application.** The other two dumps
in that directory are unrelated software that shared the hosting account:
`y00v9c45_elitelima.sql` is an older CMS (`cms_*`, `webshop_*` tables) and
`y00v9c45_live255.sql` is Live Helper Chat (`lh_*`). The script refuses anything
that does not contain the `girls` and `girl_images` tables.

> **The dump is not optional.** The `videos` table exists only there — no
> migration creates it, though `App\Video` and the admin video pages both expect
> it. A database built with `artisan migrate` alone will be missing it.

A correct restore reports:

```
girls 108, girl_images 529, videos 9, admins 2, settings 19
```

## 5. Restore the media

```bash
./deploy/restore-media.sh /path/to/cPanel_backup/public_html/laravel-elitelima/uploads
```

Roughly 607 MB across 1992 files; it takes a few minutes. The app serves these
from `public/uploads/`, a named Docker volume, so the script copies into the
running container rather than onto the host.

It re-copies `public/uploads/.htaccess` afterwards and says so. That file is
what stops anything in the uploads tree being executed, and Docker seeds a
named volume from the image only when it first creates it — so on a volume that
already existed, the guard would otherwise be absent.

A correct restore reports roughly:

```
girls 801, girls/thumbs 1136, videos 10, total 1992 files / 607M
```

## 6. Verify

```bash
curl -I https://your-domain.com/                    # 200, and a valid certificate
docker compose exec app php artisan about           # environment and driver summary
```

Then check by hand:

- the homepage lists models with photographs
- `/models-hostess` and `/videos` render
- `/admin/login` accepts one of the two restored admin accounts
- uploading a photo produces a thumbnail under `uploads/girls/thumbs/`

And confirm the uploads guard is live — this must **not** return `42`:

```bash
docker compose exec app sh -c 'echo "<?php echo 42;" > public/uploads/probe.php'
curl -s https://your-domain.com/uploads/probe.php   # expect 403
docker compose exec app rm public/uploads/probe.php
```

## Operating it

**Deploying a change**

```bash
git pull
docker compose -f compose.yaml -f deploy/compose.prod.yaml up -d --build
```

The entrypoint clears and re-warms the view and route caches on every boot.
Config is deliberately never cached, so environment changes take effect on
restart without a stale cache to clear.

**Running migrations**, when a release adds one:

```bash
docker compose exec app php artisan migrate --force
```

**Backups.** Both the database and the media need taking off the host:

```bash
docker compose exec -T db mysqldump -u root -p"$DB_ROOT_PASSWORD" \
    --single-transaction --default-character-set=utf8mb4 "$DB_DATABASE" \
    | gzip > "elitelima-$(date +%F).sql.gz"

docker compose cp app:/var/www/html/public/uploads ./uploads-backup
```

**Logs**

```bash
docker compose logs -f app
docker compose exec app tail -f storage/logs/laravel.log
```

Laravel's log is unrotated and grew to 508 MB on the old host. Truncate it
periodically, or add `logrotate` for it.

## Troubleshooting

**Caddy cannot get a certificate.** DNS must resolve to this host and ports 80
and 443 must be reachable. Check with `dig +short your-domain.com` and confirm
the firewall from step 1 is what you expect. Rate limits apply while
experimenting — use `SITE_DOMAIN=localhost` for dry runs.

**Pages load but links and assets use `http://`.** The app is not trusting the
proxy. `TRUSTED_PROXIES=*` is set by the production overlay; if you run a
different arrangement, set it yourself, or Laravel sees Caddy's own connection
rather than the original request and builds `http://` URLs for an `https://`
site.

**Photo uploads fail.** The image extension is mandatory:

```bash
docker compose exec app php -m | grep -E 'gd|imagick'
```

**`artisan` complains there is no application key.** An empty `APP_KEY` in the
environment overrides whatever `.env` holds, because real environment variables
win. Either set it properly or remove it from `.env` entirely.
