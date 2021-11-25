import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

function TitleMenu(props){
    return(
        <div className="title-menu-container">
            <Router>
                <div className="title-menu-wrapper">
                    <div className="title-menu-item" id="title-menu-row1"> 
                        <h2>{props.title}</h2>
                    </div>
                    <div className="title-menu-item" id="title-menu-row2-col1">
                        <NavLink exact to="/galeria/ag" activeClassName="title-menu-active-link">
                            <p>Videos</p>
                        </NavLink>
                    </div>
                    <div className="title-menu-item" id="title-menu-row2-col2">
                        <NavLink exacto to="/galeria/af" activeClassName="title-menu-active-link">
                            <p>Fotos</p>
                        </NavLink>
                    </div>
                </div>

                <Switch>
                    <Route exact path="/galeria/videos/viajes"></Route>
                    <Route exact path="/galeria/fotografia/viajes"></Route>
                </Switch>
            </Router>
            
        </div>
    );
}

export default TitleMenu