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
php artisan view:cache || true
php artisan route:cache || true

chown -R www-data:www-data storage bootstrap/cache public/uploads || true

exec "$@"
