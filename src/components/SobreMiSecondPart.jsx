import React from "react";
import AboutTitleInverted from "./AboutTitleInverted";

function SobreMiSecondPart(){
    return(
        <div className="sobre-mi-second-part">

            <div className="my-story-container">

                <div className="title-logo-container">

                    <AboutTitleInverted height="30%" direction="center" titleInverted1="What's" titleInverted2="my Story"  />

                    <div className="title-logo-logo-container">
                        <img src={process.env.PUBLIC_URL + '/images/logoNoText.png'} alt="logo" />
                    </div>

                </div>

                <div className="description-container">

                    <div className="left-description-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                    </div>

                    <div className="middle-description-container">
                        <img src={process.env.PUBLIC_URL + '/images/arrow.jpeg'} alt="logo" />
                    </div>

                    <div className="right-description-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default SobreMiSecondPart;