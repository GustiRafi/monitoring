<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class hardware_detail extends Model
{
    use HasFactory,SoftDeletes;

    protected $guarded = [];

    public function hardware(){
        return $this->hasOne(hardware::class,'hardware','id');
    }

    public function sensors(){
        return $this->hasOne(master_sensor::class,'id','sensor');
    }
}
