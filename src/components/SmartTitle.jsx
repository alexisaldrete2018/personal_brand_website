import React from "react"

function SmartTitle(props){
    return (
        <div className={props.className}>
            <div className="smart-title-container">
                <h3 id="h3-title">{props.h3Title}</h3>
                <h1 id="h1-title-a">{props.h1TitleA} </h1> <h1 id="h1-title-b">{props.h1TitleB}</h1>
            </div>
        </div>
    )
}

export default SmartTitle;