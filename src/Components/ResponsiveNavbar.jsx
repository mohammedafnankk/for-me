import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-scroll';
import useDarkMode from './useDarkmode';

const ResponsiveNavbar = () => {
 const[isDark,setIsDark]=useDarkMode()




    const links = [
        {link:"home" , icon:"bx bx-home-alt"},
        {link:"about",icon:"bx bx-user"},
        {link:"skills", icon:"bx bx-cog"},
        {link:"projects", icon:"bx bx-book-alt"},
        {link:"contact",icon:"bx bx-phone"},
        {sun:"fa-solid fa-sun"},
        {moon:"fa-solid fa-moon"}
    ]
    const HandleDarkMode=()=>{
    setIsDark(!isDark)
   }


    return (
        
        <div className="hidden max-sm:flex justify-around items-center py-3 backdrop-blur-md fixed bottom-0 w-full ">
          
          
         {links.map((id,i)=>(
            <div key={i} onClick={HandleDarkMode} className="">
                <Link to={id.link} smooth={true} duration={500} className={`text-orange-600 text-3xl`} ><i className={id.icon}></i></Link>
                  {isDark? <i  class={` ${id.sun} text-3xl text-orange-700 hover:text-orange-600 transition-transform duration-500 hover:rotate-360`}></i>:<i class={` ${id.moon} text-3xl text-orange-600 hover:text-orange-700 transition-transform duration-500 hover:rotate-360`}></i>}
            </div>
            
         ))}
               
        </div>
    );
}

export default ResponsiveNavbar;
