import React from "react";

function SmartTitle2(props){
    return(
        <div className={props.className}>
            <h1 id="h1-title-a">{props.h1TitleA} </h1> <h1 id="h1-title-b">{props.h1TitleB}</h1>
        </div>
    );
}

export default SmartTitle2;