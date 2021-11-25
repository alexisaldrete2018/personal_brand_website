import React from "react";
import AboutTitleInverted from "./AboutTitleInverted";
import TitleMenu from "./TitleMenu";
import CoverflowCarousel from "./CoverflowCarousel";

function SobreMiFourthPart(){
    return(
        <div className="sobre-mi-fourth-part-container">
            <AboutTitleInverted height="13%" direction="center" titleInverted1="My" titleInverted2="Work"/>
            <p className="my-work-description">Explore some of my best work</p>
            <br/>
            <TitleMenu title="" />
        </div>
    );
}

export default SobreMiFourthPart;