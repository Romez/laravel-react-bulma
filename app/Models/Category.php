<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

class Category extends Model
{
    use NodeTrait;

    protected $fillable = ['title', 'slug'];

    /**
     * Товары
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function goods() {
        return $this->hasMany(Good::class);
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
