import React from "react";
import AboutTitleInverted from "./AboutTitleInverted";

function SobreMiFifthPart(props){
    return(
        <div id={props.id} className="sobre-mi-fifth-part">
            <div className="sobre-mi-contact-container">
                
                <div className="sobre-mi-contact-title-container">
                    <AboutTitleInverted height="13%" direction="center" titleInverted1="Let's Work" titleInverted2="Together"/>
                </div>

                <div className="sobre-mi-contact-paragraph-container">
                    <p>My name is Alexis and I am enthusiastic content creator, drone videographer web designer and developer.</p>
                </div>

                <div className="sobre-mi-contact-buttons-container">
                    <div className="sobre-mi-button-container">
                        <a href="https://www.instagram.com/alexis.aldrete/">
                            <button className="button">SOCIAL MEDIA</button>
                        </a> 
                    </div>
                    <div className="empty-container"></div>
                    <div className="sobre-mi-button-container">
                        <a href="/contacto#contactame">
                            <button className="button">LET'S WORK TOGETHER</button>
                        </a>
                    </div>
                </div>

                <div className="sobre-mi-social-media-section">
                    <div className="box" style={{
                        "--direction": "center",
                        "--width":"30%"}}>
                        <div className="sm-item">
                            <div className="instagram-icon-wrapper">
                                <div className="instagram-icon-container">
                                    <a href="https://www.instagram.com/alexis.aldrete/">
                                        <img src={process.env.PUBLIC_URL + '/images/instagram.png'} alt="logo" />
                                    </a>
                                </div>
                            </div>
                            
                        </div>

                        <div className="sm-item">
                            <div className="facebook-icon-wrapper">
                                <div className="facebook-icon-container">
                                    <a href="https://www.facebook.com/alexisaldretemx/">
                                        <img src={process.env.PUBLIC_URL + '/images/facebook.png'} alt="logo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="sm-item">
                            <div className="tiktok-icon-wrapper">
                                <div className="tiktok-icon-container">
                                    <a href="https://www.tiktok.com/@alexis.aldrete?">
                                        <img src={process.env.PUBLIC_URL + '/images/tiktok.png'} alt="logo" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="sm-item">
                            <div className="youtube-icon-wrapper">
                                <div className="youtube-icon-container">
                                    <a href="https://www.youtube.com/channel/UCehfpeTmMUFGlSQoBbE4l-w">
                                        <img src={process.env.PUBLIC_URL + '/images/youtube.png'} alt="logo" />
                                    </a>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SobreMiFifthPart;