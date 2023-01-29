<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    public function girls(){
        return $this->hasMany('App\Girl');
    }
}
