import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

function GalleryMenu(){
    
    return (
        <div className="gallery-menu-container">

             <Router>
                <div className="gallery-menu-grid">
                    
                    <div className="gallery-menu-item" id="gallery-grid-row1-col1">
                        <NavLink exact to="/galeria/videos" activeClassName="active-link">Videos</NavLink>
                    </div>

                    <div className="gallery-menu-item" id="gallery-grid-row1-col2">
                        <NavLink exact to="/galeria/fotos" activeClassName="active-link">Fotos</NavLink>
                    </div> 

                    <div className="gallery-menu-item" id="gallery-grid-row2-col1">
                        <NavLink exact to="/galeria/a" activeClassName="active-link">Viajes</NavLink>
                    </div>

                    <div className="gallery-menu-item" id="gallery-grid-row2-col2">
                        <NavLink exact to="/galeria/b" activeClassName="active-link">Bienes Raices</NavLink>
                    </div>
                    <div className="gallery-menu-item" id="gallery-grid-row2-col3">
                        <NavLink exact to="/galeria/c" activeClassName="active-link">Comerciales</NavLink>
                    </div>
                    <div className="gallery-menu-item" id="gallery-grid-row2-col4">
                        <NavLink exact to="/galeria/d" activeClassName="active-link">Cinematografia</NavLink>
                    </div>

                    <div className="gallery-menu-item" id="gallery-grid-row2-col5">
                        <NavLink exact to="/galeria/e" activeClassName="active-link">Terrenos</NavLink>
                    </div> 

                </div>

                <Switch>
                    <Route exact path="/galeria/x">
                        <GaleriaBienesRaices />
                    </Route>
                    <Route path="/galeria/bienes_raices">
                        <GaleriaBienesRaices />
                    </Route>
                    <Route path="/galeria/comerciales">
                        <GaleriaComerciales />
                    </Route>
                    <Route path="/galeria/cinematografia">
                        <GaleriaCinematografia />
                    </Route>
                    <Route path="/galeria/terrenos">
                        <GaleriaTerrenos />
                    </Route>
                </Switch> 

            </Router>
        </div>
    );
}
  
  function GaleriaBienesRaices() {
    return (
        
        <div>
        <p>serviciosCinematografia</p>
    </div>
        
    );     
  }

  function GaleriaComerciales() {
    return (
        <div>
            <p>serviciosCinematografia</p>
        </div>
            
        
    );     
  }

  function GaleriaCinematografia() {
    return (
        <div>
            <p>serviciosCinematografia</p>
        </div>
        
            
        
    );     
  }

  function GaleriaTerrenos() {
    return (
        <div>
            <p>serviciosCinematografia</p>
        </div>
            
        
    );     
  }



export default GalleryMenu
    