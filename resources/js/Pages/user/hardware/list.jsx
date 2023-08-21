//import React
import React from 'react';

//import layout
import Layout from '../../../layouts/default';

//import Link
import { Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function HardwareIndex({ hardwares, session = { success: null }  }) {


  return (
    <Layout>
        <div style={{ marginTop: '100px' }}>
            
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
                                <th scope="col">hardware</th>
                                <th scope="col">location</th>
                                <th scope="col">time zone</th>
                                <th scope="col">local time</th>
                                <th scope="col">latitude</th>
                                <th scope="col">longitude</th>
                                <th scope="col">sensor</th>
                                <th scope="col">created by</th>
                                <th scope="col">action</th>
                            </tr>
                        </thead>
                        <tbody>
                        { hardwares.map((hardware, index) => (
                            <tr key={ index }>
                                <td>{index + 1}</td>
                                <td>{ hardware.hardware }</td>
                                <td>{ hardware.location }</td>
                                <td>{ hardware.timezone }</td>
                                <td>{ hardware.local_time }</td>
                                <td>{ hardware.latitude }</td>
                                <td>{ hardware.longitude }</td>
                                <td>{hardware.detail.length}</td>
                                <td>{ hardware.user.name }</td>
                                <td className="text-center">
                                    <Link href={`hardware/${hardware.id}/edit`} className="btn btn-sm btn-primary me-2">EDIT</Link>
                                    <Link href={`hardware/${hardware.id}`} className="btn btn-sm btn-success me-2">DETAIL</Link>
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