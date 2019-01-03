<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    protected $fillable = [
        'product_name',
        'product_description',
        'price',
        'user_id',
    ];

    public function bids()
    {
        return $this->hasMany(Bid::class);
    }
}
