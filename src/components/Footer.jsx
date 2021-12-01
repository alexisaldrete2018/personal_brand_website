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
                    
                        <a href="/">
                            <h3>INICIO</h3>
                        </a>

                        <br></br>
                        <a className="footer-section-subtitle" href="/#galeria">Galeria</a>
                        <a className="footer-section-subtitle" href="/#agendar">Agendar Cita</a>
                    </div>
                </div>

                <div class="row2-col2">
                    <div className="links-container">

                        <a href="/galeria">
                            <h3>GALERÍA</h3>
                        </a>
                        
                        <br></br>
                        <a className="footer-section-subtitle" href="/galeria">Viajes</a>
                        <a className="footer-section-subtitle" href="/galeria">Bienes Raíces</a>
                        <a className="footer-section-subtitle" href="/galeria">Comerciales</a>
                        <a className="footer-section-subtitle" href="/galeria">Cinematografía</a>
                        <a className="footer-section-subtitle" href="/galeria">Terrenos</a>
                    </div>  
                </div>

                <div class="row2-col3">
                    <div className="links-container">

                        <a href="/servicios">
                            <h3>SERVICIOS</h3>
                        </a>

                        <br></br>
                        <a className="footer-section-subtitle" href="/servicios">Viajes</a>
                        <a className="footer-section-subtitle" href="/servicios">Bienes Raíces</a>
                        <a className="footer-section-subtitle" href="/servicios">Comerciales</a>
                        <a className="footer-section-subtitle" href="/servicios">Cinematografía</a>
                        <a className="footer-section-subtitle" href="/servicios">Terrenos</a>
                    </div> 
                </div>

                <div class="row2-col4">
                    <div className="links-container">

                        <a href="/cursos">
                            <h3>CURSOS</h3>
                        </a>

                        <br></br>
                        <a className="footer-section-subtitle" href="/cursos">Pendiente</a>
                        <a className="footer-section-subtitle" href="/cursos">Pendiente</a>
                        <a className="footer-section-subtitle" href="/cursos">Pendiente</a>
                        <a className="footer-section-subtitle" href="/cursos">Pendiente</a>
                    </div>                
                </div>

                <div class="row2-col5">
                    <div className="links-container">

                        <a href="/sobre_mi">
                            <h3>SOBRE MI</h3>
                        </a>

                        <br></br>
                        <a className="footer-section-subtitle" href="/sobre_mi#mi_historia">Mi Historia</a>
                        <a className="footer-section-subtitle" href="/sobre_mi#mis_pasiones">Mis Pasiones</a>
                        <a className="footer-section-subtitle" href="/sobre_mi#mi_trabajo">Mi Trabajo</a>
                        <a className="footer-section-subtitle" href="/sobre_mi#contactame">Contáctame</a>
                    </div>
                </div>

                <div class="row2-col6">
                    <div className="links-container">
                    
                        <a href="/contacto">
                            <h3>CONTACTO</h3>
                        </a>

                        <br></br>
                        <a className="footer-section-subtitle" href="/contacto">¿Dónde Buscarme?</a>
                        <a className="footer-section-subtitle" href="/contacto#contactame">Contáctame</a>
                    </div>
                </div>

                <div class="row2-col7">
                    <div className="col6-wrapper">
                        <div class="footer-logo-wrapper">
                            <div className="footer-logo-container">
                                <a href="/">
                                    <img src={process.env.PUBLIC_URL + '/images/logoText.png'} alt="logo" />
                                </a>
                            </div>
                        </div>
                        <div class="instagram-icon-wrapper">
                            <div className="instagram-icon-container">
                                <a href="https://www.instagram.com/alexis.aldrete/">
                                    <img src={process.env.PUBLIC_URL + '/images/instagram.png'} alt="logo" />
                                </a>
                            </div>
                        </div>
                        <div class="facebook-icon-wrapper">
                            <div className="facebook-icon-container">
                                <a href="https://www.facebook.com/alexisaldretemx/">
                                    <img src={process.env.PUBLIC_URL + '/images/facebook.png'} alt="logo" />
                                </a>
                            </div>
                        </div>
                        <div class="tiktok-icon-wrapper">
                            <div className="tiktok-icon-container">
                                <a href="https://www.tiktok.com/@alexis.aldrete?">
                                    <img src={process.env.PUBLIC_URL + '/images/tiktok.png'} alt="logo" />
                                </a>  
                            </div>
                        </div>
                        <div class="youtube-icon-wrapper">
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
    );
}


export default Footer