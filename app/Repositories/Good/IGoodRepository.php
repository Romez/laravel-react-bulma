<?php

namespace App\Repositories\Good;

use App\Repositories\IRepository;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

interface IGoodRepository extends IRepository
{
    /**
     * Получить товары с пагинацией
     * @param int $perPage
     * @return LengthAwarePaginator
     */
    public function getPaginated($perPage = 10): LengthAwarePaginator;
}