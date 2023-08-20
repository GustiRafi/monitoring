<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\hardware;
use App\Models\master_sensor;
use App\Models\hardware_detail;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;


class hardwareController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('hardware/list',[
            'hardwares' =>  hardware::with('user','detail')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('hardware/create',[
            'sensors' => master_sensor::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'hardware' => 'required|integer',
            'location' => 'required',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric'
        ]);

        $validate['created_by'] = Auth::user()->id;
        $validate['local_time'] = Carbon::now(7);

        $hardware = hardware::create($validate);

        $sensorIds = $request->input('sensor', []);
        foreach ($sensorIds as $sensorId) {
           hardware_detail::create([
              'hardware' => $hardware->id,
              'sensor' => $sensorId,
           ]);
        }
        return redirect()->route('hardware.index')->with('success','Berhasil menambahkan hardware baru');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return inertia('hardware/show',[
            'hardwares' =>  hardware::with('detail.sensors')->findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(hardware $hardware)
    {
        return inertia('hardware/edit',[
            'hardwares' =>  $hardware,
            'sensors' => master_sensor::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, hardware $hardware)
    {
        $validate = $request->validate([
            'hardware' => 'required|integer',
            'location' => 'required',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric'
        ]);

        $validate['created_by'] = Auth::user()->id;
        $validate['local_time'] = Carbon::now(7);

        $hardware->update($validate);

        $hardware->detail()->forceDelete();

        $sensorIds = $request->input('sensor', []);
        foreach ($sensorIds as $sensorId) {
           hardware_detail::create([
              'hardware' => $hardware->id,
              'sensor' => $sensorId,
           ]);
        }

        return redirect()->route('hardware.index')->with('success','Berhasil mengubah hardware');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(hardware $hardware)
    {
        if(Auth::user()->role == 'admin'){
            $hardware->delete();
        }else if(Auth::user()->role == 'super admin'){
            $hardware->forceDelete();
        }

        return redirect()->route('hardware.index')->with('success','Berhasil manghapus hardware');
    }
}
