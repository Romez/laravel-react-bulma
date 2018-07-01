<?php

namespace App\Http\Controllers\Good\API;

use App\Models\Good;
use App\Repositories\Good\IGoodRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GoodController extends Controller
{
    /**
     * @var IGoodRepository
     */
    private $goodRepository;


    /**
     * GoodController constructor.
     *
     * @param IGoodRepository $goodRepository
     */
    public function __construct(IGoodRepository $goodRepository)
    {
        $this->goodRepository = $goodRepository;
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
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