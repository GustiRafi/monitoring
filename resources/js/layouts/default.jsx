// import React
import React from 'react';

//import Link
import { Link,InertiaLink } from '@inertiajs/inertia-react';

function Layout({ children }) {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" href="/">Monitoring</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/sensor">Master Sensor</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/hardware">Hardware</a>
                                </li>
                            </ul>
                            <li className='nav-item'>
                            <InertiaLink href="/logout" method="post">
                               Logout
                            </InertiaLink>
                            {/* <button className="btn nav-link me-2" onSubmit={login}>Logout</button> */}
                            </li>
                            {/* <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container mt-5">
                { children }
            </main>
        </>
    )

}

export default Layout