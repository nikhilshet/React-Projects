import React from "react";

export default function Input(props){
    return(
        <div>
        <div className="inpBox"> 
      
            <input 
            placeholder="Top Text" 
            className="inp" 
            type="text"
            onChange={props.onChange}
            name = "topText"
            value = {props.topText}/>
   
            <input 
            placeholder="Bottom Text"
            className="inp" 
            type="text"
            onChange={props.onChange}
            name = "bottomText"
            value = {props.bottomText}/>


        </div>
            <button onClick={props.onClick} className="btn"> Generate New Meme</button>
        </div>
    )
}