import React from "react";
import { useParams } from "react-router-dom";
export default function User(){
    const {userID} = useParams()
    return(
        <div>
            <h1>Hello{userID}</h1>
        </div>
    )
}