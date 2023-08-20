//import hook useState from react
import React, { useState } from 'react';

//import layout
import Layout from '../../layouts/default';

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';

export default function CreatePost({ errors }) {

    const [sensor, setSensor] = useState('');
    const [sensor_name, setSensor_name] = useState('');
    const [unit, setUnit] = useState('');

    const storePost = async (e) => {
        e.preventDefault();
        
        Inertia.post('/sensor', {
            sensor: sensor,
            sensor_name: sensor_name,
            unit: unit
        });
    }

    return (
        <Layout>
            <div className="row" style={{ marginTop: '100px' }}>
                <div className="col-12">
                    <div className="card border-0 rounded shadow-sm border-top-success">
                        <div className="card-header">
                            <span className="font-weight-bold">TAMBAH SENSOR</span>
                        </div>
                        <div className="card-body">
                            <form onSubmit={storePost}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Sensor</label>
                                    <input type="text" className="form-control" value={sensor} onChange={(e) => setSensor(e.target.value)} placeholder="Sensor" />
                                </div>
                                {errors.sensor && (
                                    <div className="alert alert-danger">
                                        {errors.sensor}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Sensor Name</label>
                                    <input type="text" className="form-control" value={sensor_name} onChange={(e) => setSensor_name(e.target.value)} placeholder="Sensor name" />
                                </div>
                                {errors.sensor_name && (
                                    <div className="alert alert-danger">
                                        {errors.sensor_name}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label fw-bold">unit</label>
                                    <input type="text" className="form-control" value={unit} onChange={(e) => setUnit(e.target.value)} placeholder="Unit" />
                                </div>
                                {errors.unit && (
                                    <div className="alert alert-danger">
                                        {errors.unit}
                                    </div>
                                )}

                                <div>
                                    <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> SAVE</button>
                                    <button type="reset" className="btn btn-md btn-warning"><i className="fa fa-redo"></i> RESET</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}