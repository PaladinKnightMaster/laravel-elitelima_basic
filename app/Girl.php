<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Girl extends Model
{
    public function images(){
        return $this->hasMany('App\GirlImage','girl_id');
    }
    public function first_image(){
        return $this->hasOne('App\GirlImage','girl_id');
    }

    public function hair(){
        return $this->belongsTo('App\HairColor','hair_color');
    }

    public function eye(){
        return $this->belongsTo('App\EyeColor','eye_color');
    }
    public function city(){
        return $this->belongsTo('App\City','city_id');
    }


}
