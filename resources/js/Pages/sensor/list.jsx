//import React
import React from 'react';

//import layout
import Layout from '../../layouts/default';

//import Link
import { Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function SensorIndex({ sensor, session = { success: null }  }) {

    const deleteSensor = async (sensor) => {
        Inertia.delete(`/sensor/${sensor}`);
    }

  return (
    <Layout>
        <div style={{ marginTop: '100px' }}>
            
            <Link href="/sensor/create" className="btn btn-success btn-md mb-3">TAMBAH Master Sensor</Link>
            
            {session.success && (
                <div className="alert alert-success border-0 shadow-sm rounded-3">
                    {session.success}
                </div>
            )}

            <div className="card border-0 rounded shadow-sm">
                <div className="card-body">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">sensor</th>
                                <th scope="col">sensor name</th>
                                <th scope="col">sensor unit</th>
                                <th scope="col">created by</th>
                                <th scope="col">action</th>
                            </tr>
                        </thead>
                        <tbody>
                        { sensor.map((post, index) => (
                            <tr key={ index }>
                                <td>{index + 1}</td>
                                <td>{ post.sensor }</td>
                                <td>{ post.sensor_name }</td>
                                <td>{ post.unit }</td>
                                <td>{ post.user.name }</td>
                                <td className="text-center">
                                    <Link href={`sensor/${post.id}/edit`} className="btn btn-sm btn-primary me-2">EDIT</Link>
                                    <button onClick={() => deleteSensor(post.id)} className="btn btn-sm btn-danger">DELETE</button>
                                 </td>
                            </tr>
                        )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Layout>
  )
}