import React from "react"
import Button from "./Button/Button"

function GridContainer(props){
    return (
        <div className="grid-container">
            <h3>{props.h3}</h3>
            <h1 id="drone-h1">{props.h1a} </h1> <h1 id="footage-h1">{props.h1b}</h1>
            <br></br>
            <Button buttonText={props.buttonText}></Button>
        </div>
    )
}

export default GridContainer;