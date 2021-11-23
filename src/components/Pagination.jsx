import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

function Pagination(){
    return(
        <div className="pagination">
            <Router>

                <div className="pagination-wrapper">
                    <div className="pag-item-container">
                        <NavLink exact to="/galeria/ab" activeClassName="active-link-pagination">
                            <div class="dot"></div>
                        </NavLink>
                    </div>
                    <div className="pag-item-container">
                        <NavLink exact to="/galeria/ac" activeClassName="active-link-pagination">
                            <div class="dot"></div>
                        </NavLink>
                    </div>
                </div>

            </Router>

            {/* <Switch>
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
            </Switch>  */}

        </div>
    );
}

export default Pagination