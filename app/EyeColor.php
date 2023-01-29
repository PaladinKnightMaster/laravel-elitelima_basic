<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EyeColor extends Model
{
    public function girls(){
        return $this->hasMany('App\Girl');
    }
}
