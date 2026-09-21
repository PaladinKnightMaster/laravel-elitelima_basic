#!/usr/bin/env bash
#
# Restore the application database from the cPanel backup.
#
#   ./deploy/restore-database.sh /path/to/cPanel_backup/Database/y00v9c45_elitedb.sql
#
# Only y00v9c45_elitedb.sql belongs to this application. The other two dumps in
# that directory are unrelated software that shared the hosting account:
# y00v9c45_elitelima.sql is an older CMS (cms_*, webshop_*) and
# y00v9c45_live255.sql is Live Helper Chat (lh_*). Do not import either.
set -euo pipefail

DUMP="${1:-}"
COMPOSE="${COMPOSE:-docker compose}"

if [[ -z "$DUMP" ]]; then
    echo "usage: $0 <path-to-y00v9c45_elitedb.sql[.gz]>" >&2
    exit 64
fi
if [[ ! -f "$DUMP" ]]; then
    echo "error: no such file: $DUMP" >&2
    exit 66
fi

# Guard against importing one of the neighbouring dumps by mistake.
probe() { if [[ "$DUMP" == *.gz ]]; then gzip -dc "$DUMP"; else cat "$DUMP"; fi; }
if ! probe | grep -qE 'CREATE TABLE `(girls|girl_images)`'; then
    echo "error: $DUMP does not contain this application's schema." >&2
    echo "       Expected the dump with the girls/girl_images tables" >&2
    echo "       (y00v9c45_elitedb.sql), not the CMS or chat dumps." >&2
    exit 65
fi

DB_NAME="${DB_DATABASE:-elitelima}"
DB_USER="${DB_USERNAME:-elitelima}"
DB_PASS="${DB_PASSWORD:-secret}"

echo "==> importing $(basename "$DUMP") into $DB_NAME"
probe | $COMPOSE exec -T db sh -c \
    "exec mysql --default-character-set=utf8mb4 -u'$DB_USER' -p'$DB_PASS' '$DB_NAME'"

echo "==> verifying"
$COMPOSE exec -T db sh -c \
    "exec mysql -N -B -u'$DB_USER' -p'$DB_PASS' '$DB_NAME' -e '
        SELECT \"girls\", COUNT(*) FROM girls
        UNION ALL SELECT \"girl_images\", COUNT(*) FROM girl_images
        UNION ALL SELECT \"videos\", COUNT(*) FROM videos
        UNION ALL SELECT \"admins\", COUNT(*) FROM admins
        UNION ALL SELECT \"settings\", COUNT(*) FROM settings;'" \
    | awk '{ printf "    %-12s %s\n", $1, $2 }'

cat <<'NOTE'

    A correct restore of the January 2023 backup shows:
        girls 108, girl_images 529, videos 9, admins 2, settings 19

    The videos table exists only in this dump. No migration creates it, so a
    database built with `artisan migrate` alone will not have it and the admin
    video pages will fail.
NOTE
