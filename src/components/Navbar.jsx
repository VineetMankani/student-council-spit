import React from 'react';
// import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css'

import SPIT_Logo from '../assets/home/SPIT_Logo_W.png';


const Navbar = () => {
    // const [activeNav, setActiveNav] = useState('/');
    return (

        <>

        <nav class="navbar navbar-expand-lg navbar-dark fixed-top px-5 py-3">
        <a class="navbar-brand" href="#">
            {/* <img src={Council_Logo} width="90" height="90" alt=""/> */}
            <img src={SPIT_Logo} class="SPIT_Logo" width="90" height="90" alt=""/>
        </a>
            {/* <a class="navbar-brand" href="#">Student's Council S.P.I.T.</a> */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <NavLink to="/"       className="nav-link mx-2">Home</NavLink>
                    <NavLink to="/about"  className="nav-link mx-2">About Us</NavLink>
                    <NavLink to="/events" className="nav-link mx-2">Events</NavLink>
                    <NavLink to="/team"   className="nav-link mx-2">Team</NavLink>
                </div>
            </div>
        </nav>

        </>
    )
}

export default Navbar;

