import React from 'react';
// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useRef } from 'react';

import './navbar.css'

import SPIT_Logo from '../assets/home/SPIT_Logo_W.png';
import stuco_logo from '../assets/home/stuco.png';

const Navbar = () => {
    // const [activeNav, setActiveNav] = useState('/');

    // const [activeNav, setActiveNav] = useState('#');
    const navbar = useRef(null);
    const home = useRef(null);
    const toggle = useRef(null);
    // const color = () => {
    //     navbar.current.classList.add('bg');
    //     navbar.current.classList.add('bg-gradient');
    // }
    window.onscroll = () => {
        if (window.scrollY < 500) {
            navbar.current.classList.remove('bg');
            navbar.current.classList.remove('bg-gradient');
        }
        else {
            navbar.current.classList.add('bg');
            navbar.current.classList.add('bg-gradient');
        }
        if (window.scrollY <= 500){
            home.current.classList.add('active');
        }
    };

    return (

        <>

        <nav class="navbar navbar-expand-lg navbar-dark fixed-top px-5 py-1" ref={navbar}>
        <a class="navbar-brand" href="#">
            {/* <img src={Council_Logo} width="90" height="90" alt=""/> */}
            <img src={stuco_logo} class="SPIT_Logo p-2" width="90" height="90" alt=""/>
        </a>
            {/* <a class="navbar-brand" href="#">Student's Council S.P.I.T.</a> */}
            <button class="navbar-toggler" type="button" ref={toggle} data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <NavLink to="/"           className="nav-link mx-2"ref={home}>Home</NavLink>
                    {/* <NavLink to="/about"      className="nav-link mx-2">About Us</NavLink> */}
                    <NavLink to="/events"     className="nav-link mx-2">Events</NavLink>
                    <NavLink to="/committees" className="nav-link mx-2">Committees</NavLink>
                    <NavLink to="/team"       className="nav-link mx-2">Team</NavLink>
                </div>
            </div>
        </nav>

        </>
    )
}



export default Navbar;

/* <nav class="navbar navbar-expand-lg bg-gradient navbar-dark fixed-top px-5 py-1" ref={navbar}>
        <a class="navbar-brand" href="#">
            <img src={stuco_logo} class="SPIT_Logo p-2" width="90" height="90" alt=""/>
        </a>
            <button class="navbar-toggler" type="button" ref={toggle} onClick={()=>color()} data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <NavLink to="/"           className="nav-link mx-2"ref={home}>Home</NavLink>
                    <NavLink to="/events"     className="nav-link mx-2">Events</NavLink>
                    <NavLink to="/committees" className="nav-link mx-2">Committees</NavLink>
                    <NavLink to="/team"       className="nav-link mx-2">Team</NavLink>
                </div>
            </div>
        </nav> */