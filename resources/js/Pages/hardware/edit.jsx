//import hook useState from react
import React, { useState,useEffect } from 'react';

//import layout
import Layout from '../../layouts/default';

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';

export default function EditHardware({ errors,hardwares,sensors }) {

    const [hardware, setHardware] = useState('');
    const [location, setLocation] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [selectedSensors, setSelectedSensors] = useState([]);

    const handleSensorSelect = (sensorId) => {
        setSelectedSensors((prevSelectedSensors) => {
            if (prevSelectedSensors.includes(sensorId)) {
                return prevSelectedSensors.filter(id => id !== sensorId);
            } else {
                return [...prevSelectedSensors, sensorId];
            }
        });
    };

    useEffect(() => {
        if (hardwares) {
            setHardware(hardwares.hardware);
            setLocation(hardwares.location);
            setLatitude(hardwares.latitude);
            setLongitude(hardwares.longitude);
        }
    }, [hardwares]);

    const updateHardware = async (e) => {
        e.preventDefault();
        
        Inertia.put(`/hardware/${hardwares.id}`, {
            hardware: hardware,
            location: location,
            latitude: latitude,
            longitude: longitude,
            sensor: selectedSensors
        });
    }

    return (
        <Layout>
            <div className="row" style={{ marginTop: '100px' }}>
                <div className="col-12">
                    <div className="card border-0 rounded shadow-sm border-top-success">
                        <div className="card-header">
                            <span className="font-weight-bold">EDIT HARDWARE</span>
                        </div>
                        <div className="card-body">
                            <form onSubmit={updateHardware}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">hardware</label>
                                    <input type="number" className="form-control" value={hardware} onChange={(e) => setHardware(e.target.value)} placeholder="hardware" />
                                </div>
                                {errors.hardware && (
                                    <div className="alert alert-danger">
                                        {errors.hardware}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Location</label>
                                    <input type="text" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
                                </div>
                                {errors.location && (
                                    <div className="alert alert-danger">
                                        {errors.location}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label fw-bold">latitude</label>
                                    <input type="text" className="form-control" value={latitude} onChange={(e) => setLatitude(e.target.value)} placeholder="latitude" />
                                </div>
                                {errors.latitude && (
                                    <div className="alert alert-danger">
                                        {errors.latitude}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label fw-bold">longitude</label>
                                    <input type="text" className="form-control" value={longitude} onChange={(e) => setLongitude(e.target.value)} placeholder="longitude" />
                                </div>
                                {errors.longitude && (
                                    <div className="alert alert-danger">
                                        {errors.longitude}
                                    </div>
                                )}

                                <div className="mb-3">
                                   <label className="form-label fw-bold">Pilih Sensor</label>
                                     {sensors.map(sensor => (
                                       <div key={sensor.id} className="form-check">
                                        <input
                                         className="form-check-input"
                                         type="checkbox"
                                         checked={selectedSensors.includes(sensor.id)}
                                         onChange={() => handleSensorSelect(sensor.id)}
                                        />
                                    <label className="form-check-label">{sensor.sensor}</label>
                                 </div>
                                  ))}
                                </div>

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