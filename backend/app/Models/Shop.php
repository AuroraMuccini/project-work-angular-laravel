<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    use HasFactory;

    /**
     * Summary of products
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function products(){

        return $this->hasMany(Product::class);
    }
}
