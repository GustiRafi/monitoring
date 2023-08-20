//import hook useState from react
import React, { useState } from 'react';

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';
// import { Link } from '@inertiajs/inertia-react';

function Login({errors,processing}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e) => {
        e.preventDefault();
        
        Inertia.post('/login', {
            email: email,
            password: password,
        });
    }

    return (
        <>
        <div className="container">
        <div className="row justify-content-center" style={{ marginTop: '100px' }}>
                <div className="col-7">
                    <div className="card border-0 rounded shadow-sm border-top-success">
                        <div className="text-center my-4">
                            <h5 className="font-weight-bold text-center">Monitoring Login</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={login}>

                                <div className="mb-3">
                                    {/* <label className="form-label fw-bold">Email</label> */}
                                    <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                </div>
                                {errors.email && (
                                    <div className="alert alert-danger">
                                        {errors.email}
                                    </div>
                                )}

                                <div className="mb-3">
                                    {/* <label className="form-label fw-bold">Password</label> */}
                                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                </div>
                                {errors.password && (
                                    <div className="alert alert-danger">
                                        {errors.password}
                                    </div>
                                )}
                                <div>
                                <button type="submit" className='btn btn-success w100' disabled={processing}>
                                   {processing ? 'Logging in...' : 'Login'}
                                 </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login