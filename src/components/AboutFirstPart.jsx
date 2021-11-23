import React from "react"
import SmartTitle from "./SmartTitle"
import Menu from "./Menu"


function AboutFirstPart(){
    return(
        <div className="about-first-part">
            <SmartTitle className="smart-title-left" h3Title="LEADING THE EVOLUTION IN" h1TitleA="DRON" h1TitleB="FOOTAGE"/>
            <Menu></Menu>
            <div className="black-gradient-bottom"></div>
            
        </div>
        
    )
}

export default AboutFirstPart