#!/usr/bin/env bash
#
# Copy the uploaded media from the cPanel backup into the app's uploads volume.
#
#   ./deploy/restore-media.sh /path/to/cPanel_backup/public_html/laravel-elitelima/uploads
#
# Roughly 607 MB across 1992 files. The app serves these from
# public/uploads/, which is a named Docker volume, so they are copied into the
# running container rather than onto the host filesystem.
set -euo pipefail

SRC="${1:-}"
COMPOSE="${COMPOSE:-docker compose}"
DEST="/var/www/html/public/uploads"

if [[ -z "$SRC" ]]; then
    echo "usage: $0 <path-to-backup/uploads>" >&2
    exit 64
fi
if [[ ! -d "$SRC" ]]; then
    echo "error: no such directory: $SRC" >&2
    exit 66
fi
if [[ ! -d "$SRC/girls" ]]; then
    echo "error: $SRC has no girls/ subdirectory; is that the uploads root?" >&2
    exit 65
fi

echo "==> source: $(du -sh "$SRC" | cut -f1) across $(find "$SRC" -type f | wc -l) files"

# .htaccess ships in the image and must survive the copy: it is what stops
# anything in this tree being executed. Copy contents, not the directory.
echo "==> copying into the uploads volume (this takes a few minutes)"
$COMPOSE cp "$SRC/." "app:$DEST/"

echo "==> restoring the execution guard and ownership"
$COMPOSE cp public/uploads/.htaccess "app:$DEST/.htaccess"
$COMPOSE exec -T app sh -c "chown -R www-data:www-data '$DEST'"

echo "==> verifying"
$COMPOSE exec -T app sh -c "
    printf '    %-16s %s\n' \
        girls        \"\$(find $DEST/girls -maxdepth 1 -type f | wc -l) files\" \
        girls/thumbs \"\$(find $DEST/girls/thumbs -type f 2>/dev/null | wc -l) files\" \
        videos       \"\$(find $DEST/videos -type f 2>/dev/null | wc -l) files\" \
        total        \"\$(find $DEST -type f | wc -l) files, \$(du -sh $DEST | cut -f1)\"
    test -f $DEST/.htaccess && echo '    .htaccess        present' || echo '    .htaccess        MISSING'
"

cat <<'NOTE'

    A correct restore of the January 2023 backup shows roughly:
        girls 801, girls/thumbs 1136, videos 10, total 1992 files / 607M

    If .htaccess reads MISSING, PHP under uploads/ can execute. Fix it with:
        docker compose cp public/uploads/.htaccess app:/var/www/html/public/uploads/.htaccess
NOTE
