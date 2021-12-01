import React from 'react'



import Inicio from './Inicio';
import Galeria from './Galeria.jsx';
import Servicios from './Servicios.jsx'
import SobreMi from './SobreMi.jsx';
import Contacto from './Contacto.jsx';

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
                        <NavLink exact to="/cursos" activeClassName="active-link">CURSOS</NavLink>
                    </div>

                    <div className="navbar-item">
                        <NavLink exact to="/sobre_mi" activeClassName="active-link">SOBRE MI</NavLink>
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
                    <Route path="/sobre_mi">
                        <SobreMi />
                    </Route>
                    <Route path="/contacto">
                        <Contacto />
                    </Route>
                </Switch>

            </Router>
        </div>
    );
}

  

export default App;