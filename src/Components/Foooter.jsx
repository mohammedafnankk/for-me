import React from "react";
import { Link } from "react-scroll";

const Foooter = () => {
   
   const year = new Date().getFullYear();

   
    

  return (
    <div>
      <section className="pt-12 dark:bg-bc bg-white border border-t-[#9a9a9a]">
        <div className="px-4">
          <div className="text-center">
            <h1 className="mb-4 font-bold text-2xl dark:text-white text-black">
              {" "}
              Mohammed Afnan
            </h1>
            <p className="mb-6 text-lg text-[#9a9a9a] dark:text-[#71717a]">
              MERN Stack Developer & QA Enthusiast
            </p>
          </div>
          <div className="flex justify-center gap-5 pb-12">
            <div className="inline-flex items-center group gap-2 ">
              {" "}
              <a href="https://github.com/mohammedafnankk" className="hover:text-orange-600   translate-all duration-700 text-2xl hover:text-4xl cursor-pointer">
                <i class="fa-brands fa-github text-orange-600"></i>{" "}
               
              </a>
            </div>

            <div className="inline-flex items-center group ">
              <a href="https://www.linkedin.com/in/mohammed-afnan-kk" className="hover:text-orange-600  translate-all duration-700 text-2xl hover:text-4xl cursor-pointer">
                <i class="fa-brands fa-linkedin-in text-orange-600"></i>{" "}
               
              </a>
            </div>

            <div className="inline-flex items-center group gap-2">
              <a href="https://afnankk9995@gmail.com" className="hover:text-orange-600  translate-all duration-700 text-2xl hover:text-4xl cursor-pointer">
                <i class="fa-regular fa-envelope text-orange-600"></i>{" "}
              
              </a>
            </div>
          </div>


          <div className="border border-x-0 border-b-0 border-t-[#9a9a9a] py-6"> 
             <div className="text-center"> 
                <p className="text-lg text-[#9a9a9a] dark:text-[#71717a]">© {year} Muhammed Afnan. All rights reserved.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Foooter;
