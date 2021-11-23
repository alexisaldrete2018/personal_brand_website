import React from "react";

import Footer from './Footer';
import AboutFirstPart from './AboutFirstPart';
import AboutTitle from './AboutTitle';
import AboutSecondPart from './AboutSecondPart';
import AboutThirdPart from './AboutThirdPart';
import AboutFourthPart from './AboutFourthPart';
import AboutFifthPart from './AboutFifthPart.jsx';

function Servicios(props){
    return (
        <div className="servicios">
            <AboutFirstPart />
            <AboutTitle title1="EXPERIENCES " title2="leave memories"/>
            <AboutSecondPart />
            <AboutTitle title1="MEMORIES " title2="last forever"/>
            <AboutThirdPart />
            <AboutFourthPart />
            <AboutTitle title2="TOGETHER" title1="Let's create something great "/>
            <AboutFifthPart />
            <Footer />  
        </div>
    )
}

export default Servicios;