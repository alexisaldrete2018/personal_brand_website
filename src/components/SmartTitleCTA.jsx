import React from "react"

function SmartTitleCTA(props){
    return (
        <div className={props.className}>
            <div className="smart-title-cta-container">
                <h3 id="h3-title-cta">{props.h3TitleCTA}</h3>
                <h1 id="h1-title-cta-a">{props.h1TitleCTAA} </h1> <h1 id="h1-title-cta-b">{props.h1TitleCTAB}</h1>
                <br/>
                <br/>

                <a href={props.href}>
                    <button className="button">{props.buttonText}</button>
                </a>
            </div>
        </div>
    )
}

export default SmartTitleCTA;