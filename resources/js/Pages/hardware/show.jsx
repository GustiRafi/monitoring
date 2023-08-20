//import hook useState from react
import React, { useState,useEffect } from 'react';

//import layout
import Layout from '../../layouts/default';
import MapComponent from '../component/MapComponent';

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';

export default function ShowHardware({ errors,hardwares }) {


    return (
        <Layout>
            <div className="row" style={{ marginTop: '100px' }}>
                <div className="col-12">
                <div className="card border-0 rounded shadow-sm">
                <div className="card-body">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">hardware</th>
                                <th scope="col">sensor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{hardwares.hardware}</td>
                                <td>{hardwares.sensor}</td>
                            </tr>
                        {/* { hardwares.detail.map((detail, index) => (
                            <tr>
                                <td></td>
                                <td>{ detail.hardware }</td>
                                <td>{ detail.sensor }</td>
                            </tr>
                        )) } */}
                        </tbody>
                    </table>
                </div>
            </div>
                </div>
            </div>

            <MapComponent latitude={hardwares.latitude} longitude={hardwares.longitude} />

            {/* <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-12">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-body">
              <MapComponent alat={hardwares.detail} />
            </div>
          </div>
        </div>
      </div> */}
        </Layout>
    )
}