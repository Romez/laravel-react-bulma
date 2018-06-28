<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

interface IRepository
{
    /**
     * @param string $select
     * @param bool $where
     * @return mixed
     */
    public function get($select = '*', $where = false);

    /**
     * @param array $params
     * @return mixed
     */
    public function one(array $params);

    /**
     * @param int $id
     * @param bool $withTrashed
     * @return Model|null
     */
    public function getById($id, $withTrashed = false);

    /**
     * @param array $data
     * @return Model
     */
    public function create(array $data): Model;

    /**
     * @param int $id
     * @param array $data
     * @return mixed
     */
    public function update(int $id, array $data);

    /**
     * @param array $data
     * @return mixed
     */
    public function insert(array $data);

    /**
     * @param int $id
     * @return bool
     */
    public function delete(int $id);
}