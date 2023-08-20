<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class master_sensor extends Model
{
    use HasFactory,SoftDeletes;

    protected $guarded = [];

    public function user(){
        return $this->hasOne(User::class,'id','created_by');
    }

    public function detail(){
        return $this->hasMany(hardware_detail::class,'id','sensor');
    }
}
