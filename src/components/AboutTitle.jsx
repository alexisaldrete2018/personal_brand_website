import React from "react";

function AboutTitle(props){
    return(
        <div className="about-title" id={props.id}>
            <div>
                <h1 className="title-1">{props.title1} </h1> <h1 className="title-2">{props.title2}</h1>
                <hr/>
            </div>
        </div>
    )
}

export default AboutTitle;