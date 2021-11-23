import React from "react"

function ImageContainer(props){
    return (
        <div className="image-container">
            <img src={process.env.PUBLIC_URL + '/images/' + props.imageName} alt={props.imageAlt} />
        </div>
    )
}

export default ImageContainer