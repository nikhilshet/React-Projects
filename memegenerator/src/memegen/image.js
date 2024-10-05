import React from "react";

export default function ImageBox(props){
    return(
        <div className="imageBox">
            <img alt="" className="meme-image" src={props.url}></img>
            <h2 className="meme-text top">{props.topText}</h2>
            <h2 className="meme-text bottom">{props.bottomText}</h2>
        </div>
    )
}