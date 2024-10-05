import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


export default function Github(){

    const [data , setData] = useState({})
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // },[])
    const data1 = useLoaderData()
    return(
        <div>
            <h1>{data1.followers}</h1>
        </div>
    )
}

export const loader = async()=>{
    const res = await fetch("https://api.github.com/users/hiteshchoudhary")
    return res
}