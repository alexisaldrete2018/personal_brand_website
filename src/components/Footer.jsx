import React from 'react'

function Footer(){
    return (
        <div className="footer">
            <div className="footer-grid">

                <div class="row1-col1">
                    <div className="slogan-container">Leading the evolution in drone fotografy and branded quality. Always look from the sky.</div>
                </div>

                <div class="row2-col1">
                    <div className="links-container">
                        <h3>MI MUNDO</h3>
                        <br></br>
                        <a href="https://www.w3schools.com/">Concept</a>
                        <a href="https://www.w3schools.com/">Company</a>
                        <a href="https://www.w3schools.com/">Design</a>
                        <a href="https://www.w3schools.com/">Services</a>
                    </div>
                </div>

                <div class="row2-col2">
                    <div className="links-container">
                        <h3>GALERIA</h3>
                        <br></br>
                        <a href="https://www.w3schools.com/">Concept</a>
                        <a href="https://www.w3schools.com/">Company</a>
                        <a href="https://www.w3schools.com/">Design</a>
                        <a href="https://www.w3schools.com/">Services</a>
                    </div>  
                </div>

                <div class="row2-col3">
                    <div className="links-container">
                        <h3>SERVICIOS</h3>
                        <br></br>
                        <a href="https://www.w3schools.com/">Concept</a>
                        <a href="https://www.w3schools.com/">Company</a>
                        <a href="https://www.w3schools.com/">Design</a>
                        <a href="https://www.w3schools.com/">Services</a>
                    </div> 
                </div>

                <div class="row2-col4">
                    <div className="links-container">
                        <h3>SOBRE MI</h3>
                        <br></br>
                        <a href="https://www.w3schools.com/">Concept</a>
                        <a href="https://www.w3schools.com/">Company</a>
                        <a href="https://www.w3schools.com/">Design</a>
                        <a href="https://www.w3schools.com/">Services</a>
                    </div>                
                </div>

                <div class="row2-col5">
                    <div className="links-container">
                        <h3>CONTACTO</h3>
                        <br></br>
                        <a href="https://www.w3schools.com/">Concept</a>
                        <a href="https://www.w3schools.com/">Company</a>
                        <a href="https://www.w3schools.com/">Design</a>
                        <a href="https://www.w3schools.com/">Services</a>
                    </div>
                </div>

                <div class="row2-col6">
                    <div className="col6-wrapper">
                        <div class="footer-logo-wrapper">
                            <div className="footer-logo-container">
                                <img src={process.env.PUBLIC_URL + '/images/logoText.png'} alt="logo" />
                            </div>
                        </div>
                        <div class="instagram-icon-wrapper">
                            <div className="instagram-icon-container">
                                <img src={process.env.PUBLIC_URL + '/images/instagram.png'} alt="logo" />
                            </div>
                        </div>
                        <div class="facebook-icon-wrapper">
                            <div className="facebook-icon-container">
                                <img src={process.env.PUBLIC_URL + '/images/facebook.png'} alt="logo" />
                            </div>
                        </div>
                        <div class="tiktok-icon-wrapper">
                            <div className="tiktok-icon-container">
                                <img src={process.env.PUBLIC_URL + '/images/tiktok.png'} alt="logo" />
                            </div>
                        </div>
                        <div class="youtube-icon-wrapper">
                            <div className="youtube-icon-container">
                                <img src={process.env.PUBLIC_URL + '/images/youtube.png'} alt="logo" />
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Footer