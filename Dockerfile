# Apache + mod_php rather than nginx, because the app relies on .htaccess:
# public/.htaccess for Laravel's front-controller rewrites, and
# public/uploads/.htaccess to stop anything in the uploads tree executing.
FROM php:8.3-apache

# The -dev packages are left installed on purpose: purging them with
# --auto-remove can take the runtime libraries gd and intl link against.

# gd is required by Intervention Image: uploading a photo watermarks it and
# generates a thumbnail, and fails without it.
RUN apt-get update && apt-get install -y --no-install-recommends \
        libfreetype6-dev libjpeg62-turbo-dev libpng-dev libwebp-dev \
        libzip-dev libicu-dev unzip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
    && docker-php-ext-install -j"$(nproc)" gd pdo_mysql zip intl exif bcmath opcache \
    && rm -rf /var/lib/apt/lists/*

RUN a2enmod rewrite headers

# Laravel serves from public/, and .htaccess only takes effect with
# AllowOverride All.
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri 's!DocumentRoot /var/www/html!DocumentRoot ${APACHE_DOCUMENT_ROOT}!g' \
        /etc/apache2/sites-available/000-default.conf \
    && printf '<Directory ${APACHE_DOCUMENT_ROOT}>\n    AllowOverride All\n    Require all granted\n</Directory>\n' \
        > /etc/apache2/conf-available/laravel.conf \
    && a2enconf laravel

# The app accepts uploads up to 2 MB for images and considerably more for
# video; PHP's 2 MB default would reject them at the web server.
RUN { \
        echo 'upload_max_filesize = 128M'; \
        echo 'post_max_size = 128M'; \
        echo 'memory_limit = 512M'; \
        echo 'max_execution_time = 120'; \
    } > /usr/local/etc/php/conf.d/app.ini \
    && mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Dependencies first so edits to app code don't invalidate the vendor layer.
COPY composer.json composer.lock ./
RUN composer install --no-interaction --prefer-dist --no-progress \
        --no-dev --no-scripts --no-autoloader

COPY . .

RUN composer dump-autoload --optimize --no-dev \
    && chown -R www-data:www-data storage bootstrap/cache public/uploads

COPY docker/entrypoint.sh /usr/local/bin/entrypoint
RUN chmod +x /usr/local/bin/entrypoint

EXPOSE 80
ENTRYPOINT ["entrypoint"]
CMD ["apache2-foreground"]
