import React from "react";
import TitleMenu from "./TitleMenu";
import CoverflowCarousel from "./CoverflowCarousel";

function SecondPart(props){
    return(
        <div id={props.id} className="second-part">
            <TitleMenu title="GALERIA" />
            <CoverflowCarousel />
        </div>
    );
}

export default SecondPart