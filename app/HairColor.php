<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HairColor extends Model
{
    public function girls(){
        return $this->hasMany('App\Girl');
    }
}
