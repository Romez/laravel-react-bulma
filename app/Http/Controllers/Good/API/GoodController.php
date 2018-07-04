<?php

namespace App\Http\Controllers\Good\API;

use App\Http\Requests\Good\StoreRequest;
use App\Models\Category;
use App\Models\Good;
use App\Repositories\Category\ICategoryRepository;
use App\Repositories\Good\IGoodRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;

class GoodController extends Controller
{
    /**
     * @var IGoodRepository
     */
    private $goodRepository;
    /**
     * @var ICategoryRepository
     */
    private $categoryRepository;


    /**
     * GoodController constructor.
     *
     * @param IGoodRepository $goodRepository
     * @param ICategoryRepository $categoryRepository
     */
    public function __construct(IGoodRepository $goodRepository, ICategoryRepository $categoryRepository)
    {
        $this->goodRepository = $goodRepository;
        $this->categoryRepository = $categoryRepository;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $goods = $this->goodRepository->getPaginated(10);

        return response()->json(compact('goods'));
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
     * Store a newly created resource in storage.
     *
     * @param StoreRequest $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function store(StoreRequest $request)
    {
        $data = $request->all();

        DB::beginTransaction();

        try {
            /** @var UploadedFile $image */
            $image = $data['image'];
            $imageName = time() . '_' . $image->getClientOriginalName();

            /** @var Category $category */
            $category = $this->categoryRepository->getById($data['category']);
            $category->goods()->create([
                'name'        => $data['name'],
                'description' => $data['description'],
                'image'       => $imageName
            ]);

            $image->storePubliclyAs(config('good.goods-image-path'), $imageName);

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }

        return response()->json(['success' => true]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Good $good
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(Good $good)
    {
        $success = $good->delete();

        return response()->json(compact('success'));
    }
}
