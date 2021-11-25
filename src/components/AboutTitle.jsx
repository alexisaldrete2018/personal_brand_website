import React from "react";

function AboutTitle(props){
    return(
        <div className="about-title">
            <div>
                <h1 id="title-1">{props.title1} </h1> <h1 id="title-2">{props.title2}</h1>
                <hr/>
            </div>
        </div>
    )
}

export default AboutTitle;