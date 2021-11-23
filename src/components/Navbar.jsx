import React from 'react';
import NavbarItem from "./NavbarItem"

function Navbar(){
    return(
        <div className="navbar">

            <NavbarItem name="MI MUNDO" />
            <NavbarItem name="MI EXPERIENCIA" />
            <NavbarItem name="VIAJA" />
            <NavbarItem name="" />

            <div className="navbar-item">
                <img src={process.env.PUBLIC_URL + '/images/logoNoText.png'} alt="logo" />
            </div>

            <NavbarItem name="" />
            <NavbarItem name="RECUERDA" />
            <NavbarItem name="SERVICIOS" />
            <NavbarItem name="CONTACTO" />

        </div>  
    );
}

export default Navbar