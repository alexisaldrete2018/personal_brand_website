import React from "react";

import SobreMiFirstPart from './SobreMiFirstPart.jsx';
import SobreMiSecondPart from './SobreMiSecondPart.jsx';
import SobreMiThirdPart from './SobreMiThirdPart.jsx';
import SobreMiFourthPart from './SobreMiFourthPart.jsx';
import SobreMiFifthPart from './SobreMiFifthPart.jsx';
import UnleashMoreButton from './UnleashMoreButton.jsx';
import Footer from './Footer';

function SobreMi(){
    return (
        <div className="sobreMi">
            <SobreMiFirstPart />
            <SobreMiSecondPart id="mi_historia" />
            <SobreMiThirdPart id="mis_pasiones" />
            <SobreMiFourthPart id="mi_trabajo" />
            <UnleashMoreButton href="/sobre_mi#contactame"/>
            <SobreMiFifthPart id="contactame" />
            <Footer />
        </div>
    )
}

export default SobreMi;

