import React from "react";

import FirstPart from './FirstPart.jsx'
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';
import Footer from './Footer';


function Inicio(props){
    return (
        <div className="inicio">
            <FirstPart />
            <SecondPart id="galeria"/>
            <ThirdPart id="agendar" />
            <Footer />
        </div>
    )
}

export default Inicio;