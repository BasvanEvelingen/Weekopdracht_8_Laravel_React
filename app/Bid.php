<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bid extends Model
{
    protected $fillable = ['ad_id', 'price', 'user_id'];

    public function ad()
    {
        return $this->belongsTo(Ad::class);
    }
}
