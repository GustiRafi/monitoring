//import React
import React from 'react';

//import layout
import Layout from '../../../layouts/default';

//import Link
import { Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function SensorIndex({ sensor, session = { success: null }  }) {

  return (
    <Layout>
        <div style={{ marginTop: '100px' }}>
            
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