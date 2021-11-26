import React from "react";

function UnleashMoreButton(){
    return(
        <div className="unleash-more-button-section">
            <div className="unleash-more-button-container">
                <img src={process.env.PUBLIC_URL + '/images/unleashMore.jpeg'} alt="logo" />
            </div>
        </div>
        
    );
}

export default UnleashMoreButton;