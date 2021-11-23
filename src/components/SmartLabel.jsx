import React from "react"

function SmartLabel(props){
    return (
        <div className="smart-label-flex-container-left">
            <div className="smart-label-container">
                <h1 id="h1-smart-label-title">{props.h1SmartLabelTitle}</h1>
                <hr/>
                <p id="smart-label-paragraph">{props.smartLabelParagraph} </p> 
            </div>
        </div>
    )
}

export default SmartLabel;