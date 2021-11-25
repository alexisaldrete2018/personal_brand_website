import React from "react";
import AboutTitleInverted from "./AboutTitleInverted";
import SmartLabel2 from "./SmartLabel2";

function SobreMiThirdPart(){
    return(
        <div className="sobre-mi-third-part">
            
            <div className="my-passions-first-part">
                <AboutTitleInverted height="35%" direction="center" titleInverted1="My" titleInverted2="Passions"  />
                <p>Many things make my day, but these two make me not to work any single day of my life</p>
            </div>
    
            <div className="my-passions-second-part">
                <SmartLabel2 direction="left" h1SmartLabel2Title="FILMING COOL VIDEOS" smartLabel2Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </div>

            <div className="my-passions-third-part">
                <SmartLabel2 direction="right" h1SmartLabel2Title="CREATING CONTENT" smartLabel2Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </div>

            <div className="my-passions-fourth-part">
                <SmartLabel2 direction="left" h1SmartLabel2Title="FLYING A FREAKING DRONE" smartLabel2Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </div>

            <div className="my-passions-fifth-part">
                <SmartLabel2 direction="right" h1SmartLabel2Title="HAVING FUN!" smartLabel2Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </div>
        </div>
        
    );
}

export default SobreMiThirdPart;