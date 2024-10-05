import React from "react";

function Input(props){

    // const arrOfOptions = props.apiData.map((e)=>{
    //     return <option>{e}</option>
    // })
    return(
        <div className="">
            <div className={`w-96 h-28 bg-slate-200 flex justify-evenly ${props.className}` } >
                <div className="flex flex-col justify-evenly flex-grow">
                    <label className="ml-5">
                        {props.label}
                    </label>
                    <input
                        type="number"
                        className="ml-5 w-52"
                        onChange={props.inpChange}
                        name= {props.boxNames}
                        value={props.amount}>
                        
                    </input>
                </div>

                <div className=" flex flex-col justify-evenly items-center flex-grow">
                    <p>Currency Type</p>
                    <select className="w-16"
                            name={props.label}
                            onChange={props.inpChange}
                            value={props.default}>
                                {props.options}
                    </select>
                </div>
            </div>
        </div>

    )
}

export default Input