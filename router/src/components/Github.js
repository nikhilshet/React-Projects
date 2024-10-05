import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    // const [data , setData] = React.useState(0);
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(res => res.json())
    //     .then(data => setData(()=> data))
    // },[])
    const data = useLoaderData()
    return(
        <><h1>FOllowers : {data.followers}</h1>
        <img src={data.avatar_url}></img></>
    )
}

 export const loaderFunction = async()=>{
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response
 }