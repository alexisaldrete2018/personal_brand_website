import React from "react";
import AboutTitleInverted from "./AboutTitleInverted";
import TitleMenu from "./TitleMenu";
import CoverflowCarousel from "./CoverflowCarousel";

function SobreMiFourthPart(props){
    return(
        <div id={props.id} className="sobre-mi-fourth-part-container">
            <AboutTitleInverted height="13%" direction="center" titleInverted1="My" titleInverted2="Work"/>
            <p className="my-work-description">Explore some of my best work</p>
            <br/>
            <TitleMenu title="" />
        </div>
    );
}

export default SobreMiFourthPart;