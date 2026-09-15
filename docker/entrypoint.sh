#!/bin/sh
set -e

# A missing APP_KEY makes every encrypted cookie and session unreadable, so
# generate one on first boot if the environment has not supplied it.
if [ -z "$APP_KEY" ] && ! grep -qE '^APP_KEY=.+' .env 2>/dev/null; then
    [ -f .env ] || cp .env.example .env
    php artisan key:generate --force
fi

# The app reads the settings table on nearly every page, so starting before
# MySQL accepts connections just produces noise.
if [ "${DB_CONNECTION:-mysql}" = "mysql" ]; then
    printf 'waiting for database'
    for i in $(seq 1 60); do
        if php -r 'exit(@fsockopen(getenv("DB_HOST")?:"127.0.0.1", (int)(getenv("DB_PORT")?:3306)) ? 0 : 1);'; then
            echo ' ok'
            break
        fi
        printf '.'
        sleep 2
    done
fi

if [ "${RUN_MIGRATIONS:-false}" = "true" ]; then
    php artisan migrate --force
fi

# Cached config would bake build-time values in, so only cache what is safe.
# Clear first: a cache written by a previous boot, or a half-written one from a
# failed attempt, is worse than no cache at all.
php artisan view:clear >/dev/null 2>&1 || true
php artisan route:clear >/dev/null 2>&1 || true

php artisan view:cache || echo "warning: view:cache failed, continuing without it"
php artisan route:cache || {
    echo "warning: route:cache failed, continuing without it"
    php artisan route:clear >/dev/null 2>&1 || true
}

chown -R www-data:www-data storage bootstrap/cache public/uploads || true

exec "$@"
