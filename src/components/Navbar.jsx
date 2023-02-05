import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ borderBottom: '1px solid rgba(200, 200, 200, 0.5)' }}>
            <NavLink className="navbar-brand font-bold" to="/" style={{ fontWeight: 'bold' }}>
                <img src="https://www.nitj.ac.in/physics/caneupa2020/images/logo_250.png" width={42} height={42} alt="NIT Jalandhar" />
                &nbsp;&nbsp;NITJ's Jobify
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    <NavLink className="nav-item nav-link" exact to="/about">About</NavLink>
                    <NavLink className="nav-item nav-link" exact to="/dashboard">Dashboard</NavLink>
                    <NavLink className="nav-item nav-link" exact to="/add-company">Add Details</NavLink>
                    <NavLink className="nav-item nav-link" exact to="/login">Login</NavLink>
                    <NavLink className="nav-item nav-link" exact to="/contact">Contact</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar