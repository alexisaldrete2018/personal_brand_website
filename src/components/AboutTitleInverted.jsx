import React from "react";

function AboutTitleInverted(props){
    return(
        <div className="about-title-inverted-section" style={
            {
                "--direction": props.direction,
                "--height": props.height
            }
        }>
            <div className="about-title-inverted-container">
                <h1 id="title-inverted-1">{props.titleInverted1} </h1> <h1 id="title-inverted-2">{props.titleInverted2}</h1>
                <hr/>
            </div>
        </div>
    )
}

export default AboutTitleInverted;