<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Good extends Model
{
    protected $fillable = [
        'name', 'description', 'image'
    ];

    protected $appends = ['imageUrl'];

    /**
     * Категория
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category() {
        return $this->belongsTo(Category::class, 'id', 'category_id');
    }

    /**
     * Accessor учитывает абсолютные и относительные пути
     * @return mixed|string
     */
    public function getImageUrlAttribute()
    {
        if (filter_var($this->image, FILTER_VALIDATE_URL)) {
            return $this->image;
        } else {
            return asset('storage' . config('good.goods-image-path') . '/' . $this->image);
        }
    }
}
