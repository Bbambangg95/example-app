<?php 

namespace App\Http\Controllers;

use App\Http\Requests\StoreSiswaRequest;
use App\Http\Requests\UpdateSiswaRequest;
use App\Models\Siswa;
use Illuminate\Http\Request; 

class SiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $siswas = Siswa::all();
        $jumlah_siswa = Siswa::count();
        return response() -> json(['status' => 200, 'siswas' => $siswas, 'jumlahSiswa' => $jumlah_siswa]);
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
        $newSiswa = Siswa::create([
            'nama' => $request->nama,
            'asal' => $request->asal,
            'nisn' => $request->nisn,
            'nis' => $request->nis,
            'tahun_masuk' => $request->tahun_masuk,
        ]);
        if($newSiswa){
            return response()->json(["status" => 200]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Siswa  $siswa
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $siswa = Siswa::find($id);
  
          return $siswa->toJson();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Siswa  $siswa
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $siswas = Siswa::find($id);
        return response()->json(['status' => 200, 'siswas' => $siswas]);
    }
    

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSiswaRequest  $request
     * @param  \App\Models\Siswa  $siswa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $siswas = Siswa::find($id);
        $siswas->nama = $request->nama;
        $siswas->asal = $request->asal;
        $siswas->nisn = $request->nisn;
        $siswas->nis = $request->nis;
        $siswas->tahun_masuk = $request->tahun_masuk;
        if($siswas -> save()){
            return response()->json(["status" => 200]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Siswa  $siswa
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $siswas = Siswa::find($id); 
        if($siswas -> delete()){
            return response()->json(["status" => 200]);
        }
    }
}
