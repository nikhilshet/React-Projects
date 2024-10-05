import React from "react";
import {NavLink} from 'react-router-dom'
function Navbar(){
    return(
        <nav className="w-full h-20 pl-6 pr-8 bg-white flex justify-between items-center"> 
            <img className="w-14 h-14" src="images/logo.png"></img>
            <ul className="flex text-black text-lg font-semibold">
                
                <li> 
                    <NavLink to="/" className="mr-5 hover:text-green-700">
                    Home
                    </NavLink>
                </li>
                <li> 
                    <NavLink to="about" className="mr-5 hover:text-green-700">
                    About
                    </NavLink>
                </li>
                <li> 
                    <NavLink to="shop" className="mr-5 hover:text-green-700">
                    Shop
                    </NavLink>
                </li>
                <li> 
                    <NavLink to="contact" className="mr-5 hover:text-green-700">
                    Contact
                    </NavLink>
                </li>
                <li> 
                    <NavLink to="github" className="mr-5 hover:text-green-700">
                    Github
                    </NavLink>
                </li>
            </ul>
            <div className="">
                <button className=" w-20 h-10 rounded-lg bg-black text-white text-lg font-medium hover:bg-green-700">Sign In</button>
            </div>
        </nav>
    )
}
export default Navbar