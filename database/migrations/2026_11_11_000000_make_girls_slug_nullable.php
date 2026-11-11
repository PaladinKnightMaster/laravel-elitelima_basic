<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * `girls` exists in two shapes, and the application only works against one.
 *
 * Production, restored from the cPanel dump, has 31 columns and no `slug`. The
 * original create_girls_table migration defines 50, including `slug` as NOT
 * NULL and unique. Nothing in the application ever reads or writes a girl's
 * slug: public profiles are looked up by id (Theme\HomeController::singleGirl),
 * and the admin form has no such field. On a database built from migrations, a
 * NOT NULL column that nothing fills in means every "add model" fails.
 *
 * Making it nullable lets both shapes work with the same code. Where the column
 * does not exist, as in production, this does nothing.
 */
return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasColumn('girls', 'slug')) {
            return;
        }

        Schema::table('girls', function (Blueprint $table) {
            $table->string('slug')->nullable()->change();
        });
    }

    public function down(): void
    {
        // Deliberately empty. Restoring NOT NULL would bring back the state this
        // fixes, and would fail outright on any row saved without a slug.
    }
};
