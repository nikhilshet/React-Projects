import React from 'react'
import './todo.css'

export default function ToDo(){
    const [inpData , setInpData] = React.useState({task:""})
    const [work , setWork] = React.useState([])



    const newArr = work.map((data)=>{
        return <div><input 
                type='checkbox'
                id={data}
                />
                <label htmlFor={data}>{data}</label>
                </div>
    })


    function handleChange(event){
        setInpData((prev)=>{
            return {
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    }


    function handleClick(){
        setWork((prevArr)=>{
            return[
               ...prevArr , inpData.task
            ]
        })
    }



    return(
        <div className='outer'>
            <div className='inner'>
                <input
                    value={inpData.task}
                    onChange={handleChange}
                    name='task'
                />
                <button
                    onClick={handleClick}>Add</button>
                {newArr}
            </div>
        </div>
    )
}