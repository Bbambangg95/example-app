<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSem1Request;
use App\Http\Requests\UpdateSem1Request;
use App\Models\Sem1;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class Sem1Controller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
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
     * @param  \App\Http\Requests\StoreSem1Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSem1Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Sem1  $sem1
     * @return \Illuminate\Http\Response
     */
    public function show($nisn)
    {
        
        $nilai = DB::table('mapels')
            ->leftJoin('sem1s', function ($join) use ($nisn) {
                $join->on('mapels.kode_mapel', '=', 'sem1s.kode_mapel')->where('sem1s.nisn', '=', $nisn);
            })
            ->leftJoin('sem2s', function ($join) use ($nisn) {
                $join->on('mapels.kode_mapel', '=', 'sem2s.kode_mapel')->where('sem2s.nisn', '=', $nisn);
            })
            ->select('mapels.nama_mapel', 'mapels.kode_mapel','mapels.kkm','sem1s.nisn', 'sem1s.kode_mapel as kode2', 'sem1s.nilai as sem1', 'sem2s.nilai as sem2' )
            
            ->orderBy('mapels.kode_mapel', 'asc')
            ->get();
        return response() -> json(['status' => 200, 'nilai' => $nilai]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Sem1  $sem1
     * @return \Illuminate\Http\Response
     */
    public function edit(Sem1 $sem1)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSem1Request  $request
     * @param  \App\Models\Sem1  $sem1
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSem1Request $request, Sem1 $sem1)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Sem1  $sem1
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sem1 $sem1)
    {
        //
    }
}
