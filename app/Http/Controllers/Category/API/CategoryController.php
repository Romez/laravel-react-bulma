<?php

namespace App\Http\Controllers\Category\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Category\StoreRequest;
use App\Http\Requests\Category\UpdateRequest;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $categories = Category::defaultOrder()->withDepth()->get();

        if (!$request->query('plain', false)) {
            $categories = $categories->toTree();
        }

        return response()->json(compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.sad
     * @param StoreRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreRequest $request)
    {
        /** @var Category $category */
        $category = Category::create($request->getData());
        return response()->json(compact('category'));
    }

    /**
     * Display the specified resource.
     *
     * @param  Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        $goodsPerPage = config('category.goods-per-page');

        $category->load([
            'goods' => function ($goods) use($goodsPerPage) {
                return $goods->orderBy('created_at', 'desc')->paginate($goodsPerPage);
            }
        ]);

        $totalGoodsCount = $category->goods()->count();

        return response()->json(compact('category', 'totalGoodsCount', 'goodsPerPage'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Category $category
     * @return void
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * @param UpdateRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateRequest $request)
    {
        $tree = json_decode($request->get('categories'), true);

        Category::rebuildTree($tree, true);

        return response()->json(['success' => true]);
    }

    /**
     * Remove the specified resource from storage.
     * @param Category $category
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Category $category)
    {
        return response()->json(['result' => $category]);
    }
}
