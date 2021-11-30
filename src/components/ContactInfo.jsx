import React from "react";

function ContactInfo(){
    return(
        <div className="contact-info-container">
            <h1 id="h1-title-a">Let's create something great <span id="h1-title-b">TOGETHER</span></h1>

            <div className="sm-container">
                <p>Email: support@alexisaldrete.com</p>
                <p>Social Media:</p>
                <div class="box">
                    <div className="sm-item">
                        <div className="instagram-icon-wrapper">
                            <div className="instagram-icon-container">
                                <img src={process.env.PUBLIC_URL + '/images/instagram.png'} alt="logo" />
                            </div>
                        </div>
                        
                    </div>

                    <div className="sm-item">
                        <div className="facebook-icon-wrapper">
                            <div className="facebook-icon-container">
                                <img src={process.env.PUBLIC_URL + '/images/facebook.png'} alt="logo" />
                            </div>
                        </div>
                    </div>

                    <div className="sm-item">
                        <div className="tiktok-icon-wrapper">
                            <div className="tiktok-icon-container">
                                <img src={process.env.PUBLIC_URL + '/images/tiktok.png'} alt="logo" />
                            </div>
                        </div>
                    </div>

                    <div className="sm-item">
                        <div className="youtube-icon-wrapper">
                            <div className="youtube-icon-container">
                                <img src={process.env.PUBLIC_URL + '/images/youtube.png'} alt="logo" />
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            
    
        </div>
    )
}

export default ContactInfo;