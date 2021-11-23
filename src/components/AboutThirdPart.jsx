import React from 'react';

function AboutThirdPart(){
    return(
        <div className="about-third-part">
            <div className="about-grid" >
                <div className="about-row1-col1">
                    <div className="flex-icon-wrapper">
                        <div className="icon-container">
                            <img src={process.env.PUBLIC_URL + '/images/plane.png'} alt="logo" />
                        </div>
                    </div>
                </div>
                <div className="about-row1-col2">
                    <div className="flex-icon-wrapper">
                        <div className="icon-container">
                            <img src={process.env.PUBLIC_URL + '/images/tent.png'} alt="logo" />
                        </div>
                    </div>
                </div>
                <div className="about-row1-col3">
                    <div className="flex-icon-wrapper">
                        <div className="icon-container">
                            <img src={process.env.PUBLIC_URL + '/images/helicopter.png'} alt="logo" />
                        </div>
                    </div>
                </div>
                <div className="about-row1-col4">
                    <div className="flex-icon-wrapper">
                        <div className="icon-container">
                            <img src={process.env.PUBLIC_URL + '/images/road.png'} alt="logo" />
                        </div>
                    </div>
                </div>
                <div className="about-row1-col5">
                    <div className="flex-icon-wrapper">
                        <div className="icon-container">
                            <img src={process.env.PUBLIC_URL + '/images/temple.png'} alt="logo" />
                        </div>
                    </div>
                </div>
                <div className="about-row1-col6">
                    <div className="flex-icon-wrapper">
                        <div className="icon-container">
                            <img src={process.env.PUBLIC_URL + '/images/nature.png'} alt="logo" />
                        </div>
                    </div>
                </div>

                <div className="about-row2-col1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </div>
            </div>
        </div>
    )
}

export default AboutThirdPart