<?php

use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Collection;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $parents = $this->makeParents();

        $this->makeChildren($parents);
    }

    /**
     * @param int $count
     * @return array
     */
    private function makeParents($count = 10): array
    {
        $parentIds = [];

        for ($i = 0; $i <= $count; $i++) {
            array_push($parentIds, factory(Category::class)->create()->id);
        }

        return $parentIds;
    }


    private function makeChildren(array $parentIds, $count = 15)
    {
        for ($i = 0; $i <= $count; $i++) {
            /** @var Category $child */
            factory(Category::class)->create(['parent_id' => array_random($parentIds)]);
        }
    }
}
