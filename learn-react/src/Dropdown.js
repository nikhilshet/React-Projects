import React from "react";
import data from "./data";

function Dropdown(props){
    const [current , setCurrent] = React.useState({country:"" , city:""})
    const [currentCountryIndex , setCurrentCountryIndex] = React.useState(0)
    
    console.log(current)


    function handleCountryChange(e){
        
        setCurrentCountryIndex(e.target.selectedIndex);
        setCurrent((prev)=>{
            return{
                ...prev,
                country : e.target.value,
                city : ""
            }
        })
    }  
    

    function handleCityChange(e){
        setCurrent((prev)=>{
            return{
                ...prev,
                city : e.target.value
            }
        })
    }  
    
    const arr = data.countries.map((country , i) =>{
    return <option key={i}>{country.name}</option>
    })


    const newArr = data.countries[currentCountryIndex].cities.map((city , i)=>{
        return <option key={i}>{city.name}</option>
     })
    
    return(
        <div>
            <select
            name="country"
            onChange={handleCountryChange}
            value={current.country}>
               {arr} 
            </select>
            <select
            name="city"
            onChange={handleCityChange}
            value={current.city}>
                {newArr}
            </select>
            <h1>{current.country} {current.city}</h1>
        </div>
    )
}
export default Dropdown
