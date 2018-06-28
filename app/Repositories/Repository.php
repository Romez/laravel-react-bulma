<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

abstract class Repository implements IRepository
{

    /** @var Model */
    protected $model;

    /**
     * @return Model;
     */
    public function getModel()
    {
        return $this->model;
    }

    /**
     * @param string $select
     * @param bool $where
     * @return Collection
     */
    public function get($select = '*', $where = false)
    {
        $builder = $this->model->select($select);

        if ($where) {
            $builder->where($where);
        }

        return $builder->get();
    }

    /**
     * @param $params
     * @return Model|null|static
     */
    public function one(array $params)
    {
        return $this->model->where($params)->first();
    }

    /**
     * @param  int $id
     * @param  bool $withTrashed
     * @return Model
     */
    public function getById($id, $withTrashed = false)
    {
        if ($withTrashed) {
            return $this->model->withTrashed()->findOrFail($id);
        }

        return $this->model->findOrFail($id);
    }

    /**
     * @param array $data
     * @return Model
     */
    public function create(array $data): Model
    {
        return $this->model->create($data);
    }

    /**
     * @param int $id
     * @param array $data
     * @return mixed
     */
    public function update(int $id, array $data)
    {
        return $this->model->findOrFail($id)->update($data);
    }


    /**
     * @param array $data
     * @return mixed
     */
    public function insert(array $data)
    {
        return $this->model->insert($data);
    }

    /**
     * @param int $id
     * @return bool|null
     * @throws \Exception
     */
    public function delete(int $id)
    {
        return $this->model->delete($id);
    }
}
