<?php

use App\Models\Category;
use App\Models\Good;
use App\Repositories\Category\ICategory;
use Illuminate\Database\Seeder;

class GoodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /** @var \Kalnoy\Nestedset\Collection $categories */
        $categories = $this->getAllCategories()->toTree();

        $goodsCount = 60;

        for ($i = 0; $i <= $goodsCount; $i++) {
            $this->makeGood($categories->random());
        }
    }

    /**
     * @return \Kalnoy\Nestedset\Collection
     */
    private function getAllCategories()
    {
        /** @var ICategory $categoryRepo */
        $categoryRepo = resolve(ICategory::class);

        return $categoryRepo->get();
    }

    /**
     * Создать товар с указанной категорией
     * @param Category $category
     */
    private function makeGood(Category $category) {
        $category->goods()->save(
            factory(Good::class)->make()
        );
    }
}
