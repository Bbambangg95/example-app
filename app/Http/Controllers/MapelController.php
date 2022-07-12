<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMapelRequest;
use App\Http\Requests\UpdateMapelRequest;
use App\Models\Mapel;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Unique;

class MapelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $mapels = Mapel::all(); 
        $mapelsB = Mapel::where('id', '>', '4')->get();
        return response() -> json(['status' => 200, 'mapels' => $mapels, 'mapelsB' => $mapelsB]);
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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newMapel = Mapel::create([
            'nama_mapel' => $request->nama_mapel,
            'kelompok' => $request->kelompok,
            'kode_mapel' => rand(7000, 1000000),
            'kkm' => $request->kkm,
        ]);
        if($newMapel){
            return response()->json(["status" => 200]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Mapel  $mapel
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $mapel = Mapel::find($id);
  
          return $mapel->toJson();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Mapel  $mapel
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $mapel = Mapel::find($id);
        return response()->json(['status' => 200, 'mapel' => $mapel]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMapelRequest  $request
     * @param  \App\Models\Mapel  $mapel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $mapels = Mapel::find($id);
        $mapels->nama_mapel = $request->nama_mapel;
        $mapels->kelompok = $request->kelompok;
        $mapels->kkm = $request->kkm;
        if($mapels -> save()){
            return response()->json(["status" => 200]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Mapel  $mapel
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $mapels = Mapel::find($id);
        if($mapels->delete()){
            return response()->json(["status" => 200]);
        }
    }
}
