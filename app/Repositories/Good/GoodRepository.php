<?php

namespace App\Repositories\Good;

use App\Models\Good;
use App\Repositories\Repository;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class GoodRepository extends Repository implements IGoodRepository
{
    public function __construct(Good $good)
    {
        $this->model = $good;
    }

    /**
     * Получить товары с пагинацией
     *
     * @param int $perPage
     * @return LengthAwarePaginator
     */
    public function getPaginated($perPage = 10): LengthAwarePaginator
    {
        return $this->model->orderBy('created_at', 'desc')->paginate($perPage);
    }
}

