import React from 'react'

import Servicios from './Servicios.jsx'

import FirstPart from './FirstPart.jsx'
import Navbar from './Navbar.jsx';
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';
import Footer from './Footer';

import GalleryFirstPart from './GalleryFirstPart';
import GallerySecondPart from './GallerySecondPart';
import Pagination from "./Pagination";

import AboutFirstPart from './AboutFirstPart';
import AboutTitle from './AboutTitle';
import AboutSecondPart from './AboutSecondPart';
import AboutThirdPart from './AboutThirdPart';
import AboutFourthPart from './AboutFourthPart';
import AboutFifthPart from './AboutFifthPart.jsx';

import ContactoFirstPart from './ContactoFirstPart';
import ContactoSecondPart from './ContactoSecondPart';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

function App(){
    
    return (
        <div className="full-site">

            <Router>
                <div className="navbar">
                    
                    <div className="navbar-item">
                        <NavLink exact to="/" activeClassName="active-link">INICIO</NavLink>
                    </div>

                    <div className="navbar-item">
                        <NavLink exact to="/galeria" activeClassName="active-link">GALERIA</NavLink>
                    </div>

                    <div className="navbar-item">
                        <NavLink exact to="/servicios" activeClassName="active-link">SERVICIOS</NavLink>
                    </div>

                    <div className="navbar-item"></div>

                    <div className="navbar-item">
                        <img src={process.env.PUBLIC_URL + '/images/logoNoText.png'} alt="logo" />
                    </div>

                    <div className="navbar-item"></div>

                    <div className="navbar-item">
                        <NavLink exact to="/experiencia" activeClassName="active-link">CURSOS</NavLink>
                    </div>

                    <div className="navbar-item">
                        <NavLink exact to="/viaja" activeClassName="active-link">SOBRE MI</NavLink>
                    </div>

                    <div className="navbar-item">
                        <NavLink exact to="/contacto" activeClassName="active-link">CONTACTO</NavLink>
                    </div>

                </div>

                <Switch>
                    <Route exact path="/">
                        <Inicio />
                    </Route>
                    <Route path="/galeria">
                        <Galeria />
                    </Route>
                    <Route path="/servicios">
                        <Servicios />
                    </Route>
                    <Route path="/contacto">
                        <Contacto />
                    </Route>
                </Switch>

            </Router>
        </div>
    );
}

function Inicio() {
    return (
        <div className="inicio">
            <FirstPart />
            <SecondPart />
            <ThirdPart />
            <Footer />
        </div>
    );
  }
  
  function Galeria() {
    return (
        <div className="galeria">
            <GalleryFirstPart />
            <GallerySecondPart />
            <Pagination />
            <Footer />
        </div>
    );     
  }

  function Contacto(){
      return(
          <div className="contacto">
              <ContactoFirstPart/>
              <AboutTitle title1="GET " title2="IN TOUCH"/>
              <ContactoSecondPart/>
              <Footer />
          </div>
      )
  }

  

export default App