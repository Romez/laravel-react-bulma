<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AdminPagesTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testAdminPage()
    {
        $this->get(route('admin'))->assertStatus(200);
    }

    public function testAdminCategoryPage()
    {
        $this->get(route('admin.category'))->assertStatus(200);
    }

    public function testAdminGoodPage()
    {
        $this->get(route('admin.goods'))->assertStatus(200);
    }
}
