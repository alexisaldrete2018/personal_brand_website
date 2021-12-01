import React from "react";

import ContactoFirstPart from './ContactoFirstPart';
import ContactoSecondPart from './ContactoSecondPart';
import AboutTitle from './AboutTitle';
import Footer from './Footer';

function Contacto(){
    return(
        <div className="contacto" id="dondeBuscarme">
            <ContactoFirstPart/>
            <AboutTitle id="contactame" title1="GET " title2="IN TOUCH"/>
            <ContactoSecondPart/>
            <Footer />
        </div>
    )
}

export default Contacto;

