#!/bin/sh
set -e

# A missing APP_KEY makes every encrypted cookie and session unreadable.
#
# Note an empty APP_KEY in the environment still wins over whatever .env holds,
# because real environment variables take precedence, so generating into .env
# alone is not enough: the value has to be exported back out.
if [ -z "$APP_KEY" ]; then
    [ -f .env ] || cp .env.example .env

    if ! grep -qE '^APP_KEY=base64:' .env; then
        php artisan key:generate --force --no-ansi
        echo "warning: generated an ephemeral APP_KEY. It lives only in this"
        echo "         container, so every rebuild invalidates existing sessions"
        echo "         and encrypted cookies. Set APP_KEY in the environment for"
        echo "         anything long-lived."
    fi

    APP_KEY=$(sed -n 's/^APP_KEY=//p' .env | head -1)
    export APP_KEY
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
