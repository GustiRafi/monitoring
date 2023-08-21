<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\master_sensor;
use Illuminate\Support\Facades\Auth;

class sensorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if(Auth::user()->role == 'user'){
            return inertia('user/sensor/list',[
                'sensor' =>  master_sensor::with('user')->get(),
            ]);
        }
        return inertia('sensor/list',[
            'sensor' =>  master_sensor::with('user')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('sensor/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'sensor' => 'required',
            'sensor_name' => 'required',
            'unit' => 'required'
        ]);

        $validate['created_by'] = Auth::user()->id;
        // $validate['created_by'] = 1;

        master_sensor::create($validate);

        return redirect()->route('sensor.index')->with('success','Berhasil Menambahkan sensor baru');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(master_sensor $sensor)
    {
        return inertia('sensor/edit',[
            'sensors' =>  $sensor,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, master_sensor $sensor)
    {
        $validate = $request->validate([
            'sensor_name' => 'required',
            'unit' => 'required'
        ]);

        $validate['created_by'] = Auth::user()->id;
        // $validate['created_by'] = 1;

       $sensor->update($validate);

        return redirect()->route('sensor.index')->with('success','Berhasil Mengedit sensor');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(master_sensor $sensor)
    {

        if(Auth::user()->role == 'admin'){
            $sensor->delete();
        }else if(Auth::user()->role == 'super admin'){
            $sensor->forceDelete();
        }

        return redirect()->route('sensor.index')->with('success','Berhasil manghapus sensor');
    }
}
