<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Repositories\Category\ICategoryRepository;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class CategoryApiTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testIndex()
    {
        $categoriesCount = Category::defaultOrder()->withDepth()->get()->toTree()->count();

        $this->json('get', route('category.index'))
            ->assertJsonCount($categoriesCount, 'categories')
            ->assertStatus(200);
    }

    public function testStore()
    {
        $categoriesCountBefore = Category::defaultOrder()->withDepth()->get()->toTree()->count();

        $this->json('post', route('category.store'), ['title'=> 'test!']);

        $categoriesCountAfter = Category::defaultOrder()->withDepth()->get()->toTree()->count();

        $this->assertEquals($categoriesCountBefore + 1, $categoriesCountAfter);
    }
}
