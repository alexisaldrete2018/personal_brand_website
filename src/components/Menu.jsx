import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

function Menu(){
    
    return (
        <div className="menu-container">

            <Router>
                <div className="menu-flex-box">
                    
                    <div className="menu-item">
                        <NavLink exact to="/servicios" activeClassName="active-link">Viajes</NavLink>
                    </div>
                    <div className="menu-item">
                        <NavLink exact to="/servicios/bienes_raices" activeClassName="active-link">Bienes Raices</NavLink>
                    </div>
                    <div className="menu-item">
                        <NavLink exact to="/servicios/comerciales" activeClassName="active-link">Comerciales</NavLink>
                    </div>
                    <div className="menu-item">
                        <NavLink exact to="/servicios/cinematografia" activeClassName="active-link">Cinematografia</NavLink>
                    </div>

                    <div className="menu-item">
                        <NavLink exact to="/servicios/terrenos" activeClassName="active-link">Terrenos</NavLink>
                    </div>

                </div>

                <Switch>
                    <Route exact path="/servicios">
                        <ServiciosBienesRaices />
                    </Route>
                    <Route path="/servicios/bienes_raices">
                        <ServiciosBienesRaices />
                    </Route>
                    <Route path="/servicios/comerciales">
                        <ServiciosComerciales />
                    </Route>
                    <Route path="/servicios/cinematografia">
                        <ServiciosCinematografia />
                    </Route>
                    <Route path="/servicios/terrenos">
                        <ServiciosTerrenos />
                    </Route>
                </Switch>

            </Router>
        </div>
    );
}

// function Servicios() {
//     return (
//         <div className="servicios">
//             <AboutFirstPart />
//             <AboutTitle title1="EXPERIENCES " title2="leave memories"/>
//             <AboutSecondPart />
//             <AboutTitle title1="MEMORIES " title2="last forever"/>
//             <AboutThirdPart />
//             <AboutFourthPart />
//             <AboutFifthPart />
//             <Footer />  
//         </div>    
//     );
//   }
  
  function ServiciosBienesRaices() {
    return (
        
            <p>serviciosBR</p>
        
    );     
  }

  function ServiciosComerciales() {
    return (
        <p>serviciosComerciales</p>
            
        
    );     
  }

  function ServiciosCinematografia() {
    return (
        <p>serviciosCinematografia</p>
            
        
    );     
  }

  function ServiciosTerrenos() {
    return (
        <p>serviciosTerrenos</p>
            
        
    );     
  }



export default Menu
    