<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGoods extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('goods', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name')->comment('Название товара');

            $table->string('description')->comment('Описание товара');

            $table->string('image')->comment('Изображение товара');

            $table->integer('category_id', false, true)->nullable(true)
                ->comment('Категория товара');

            $table->foreign('category_id', 'fk_category')
                ->references('id')->on('categories')
                ->onUpdate('cascade')
                ->onDelete('set null');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('goods');
    }
}
