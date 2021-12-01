import React from "react";

function SmartCallToAction(props){
    return (
        <div className="smart-call-to-action-flex-container-left">
            <div className="smart-call-to-action-container">
                <h1 id="h1-smart-call-to-action-title">{props.h1SmartToActionTitle}</h1>
                <hr/>
                <p id="smart-call-to-action-paragraph">{props.smartCallToActionParagraph} </p> 
                <br/>
                <br/>

                <a href={props.href}>
                    <button className="button">{props.buttonText}</button>
                </a>
          
            </div>
        </div>
    );
}

export default SmartCallToAction;