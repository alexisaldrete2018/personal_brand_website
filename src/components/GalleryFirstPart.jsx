import React from "react"
import SmartTitle from "./SmartTitle";
import GalleryMenu from "./GalleryMenu";



function GalleryFirstPart(){
    return(
        <div className="gallery-first-part">
            <SmartTitle h3Title="SHARE GREAT EXPERIENCES" h1TitleA="TRAVEL" h1TitleB="GALLERY" className="smart-title-right"/>
            <GalleryMenu/> 
            <div className="black-gradient-3"></div>
        </div>
    )
}

export default GalleryFirstPart