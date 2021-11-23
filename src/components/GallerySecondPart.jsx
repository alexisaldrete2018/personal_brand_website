import React from "react"

function GallerySecondPart(){
    return(
        <div className="gallery-second-part">
            <div className="gallery-grid">

                <div class="gallery-row1-col1">
                    <div className="gallery-image-container">
                        <img src={process.env.PUBLIC_URL + '/images/la_mision.png'} alt="logo" />
                    </div>
                </div>
                <div class="gallery-row1-col2">
                    <div className="gallery-image-container">
                        <img src={process.env.PUBLIC_URL + '/images/guadalajara.png'} alt="logo" />
                    </div>
                </div>

                <div class="gallery-row2-col1">
                    <div className="gallery-image-container">
                        <img src={process.env.PUBLIC_URL + '/images/ensenada.png'} alt="logo" />
                    </div>
                </div>
                <div class="gallery-row2-col2">
                    <div className="gallery-image-container">
                        <img src={process.env.PUBLIC_URL + '/images/guanajuato.png'} alt="logo" />
                    </div>
                </div>

                <div class="gallery-row3-col1">
                    <div className="gallery-image-container">
                        <img src={process.env.PUBLIC_URL + '/images/cancun.png'} alt="logo" />
                    </div>
                </div>
                <div class="gallery-row3-col2">
                    <div className="gallery-image-container">
                        <img src={process.env.PUBLIC_URL + '/images/holbox.png'} alt="logo" />
                    </div>
                </div>

                <div class="gallery-row4-col1">
                    <div className="gallery-image-container">
                        <img src={process.env.PUBLIC_URL + '/images/tijuana.png'} alt="logo" />
                    </div>
                </div>
                <div class="gallery-row4-col2">
                    <div className="gallery-image-container">
                        <img src={process.env.PUBLIC_URL + '/images/valle.png'} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GallerySecondPart