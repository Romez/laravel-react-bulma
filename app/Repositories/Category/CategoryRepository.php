<?php

namespace App\Repositories\Category;

use App\Models\Category;
use App\Repositories\Repository;

class CategoryRepository extends Repository implements ICategoryRepository
{
    public function __construct(Category $category)
    {
        $this->model = $category;
    }
}

