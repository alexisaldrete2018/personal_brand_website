import React from "react"

function SmartLabel2 (props){
    return (
        <div className="smart-label2-flex-container" style={
            {
                "--direction":props.direction
            }
        }>
            <div className="smart-label2-container">
                <h1 id="h1-smart-label2-title">{props.h1SmartLabel2Title}</h1>
                <hr/>
                <p id="smart-label2-paragraph">{props.smartLabel2Paragraph} </p> 
            </div>
        </div>
    )
}

export default SmartLabel2;