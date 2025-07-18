import React from "react";

const Certificats = () => {
  return (
    <div>
      <section className="py-20 dark:bg-bc bg-white px-4">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-3 text-center dark:text-white text-black">
            Certificates
          </h1>
          <div
            data-aos="zoom-in"
            className="w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto"
          ></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg border border-gray-300 group bg-white  transition delay-150 duration-600 ease-in-out hover:translate-y-1 hover:scale-110 hover:shadow-xl">
            <div className="p-5 space-y-1.5 flex flex-col text-center">
              <div className="transition-transform duration-500 hover:rotate-360">
                <i class="fa-solid fa-award text-orange-600 text-4xl mb-4"></i>
              </div>
              <div className="font-semibold text-lg group-hover:text-orange-600">
                Automation Testing with Selenium
              </div>
            </div>
            <div className="p-5 pt-0 flex flex-col justify-center items-center">
              <p className="mb-4 text-lg">Tefora</p>
              <div className="rounded-full border-transparent bg-[#EEEEEE]  inline-flex items-center px-2.5 py-0.5 text-xs font-semibold hover:bg-orange-100">
                2025
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-300 group bg-white  transition delay-150 duration-600 ease-in-out hover:translate-y-1 hover:scale-110 hover:shadow-xl">
            <div className="p-5 space-y-1.5 flex flex-col text-center">
              <div className="transition-transform duration-500 hover:rotate-360">
                <i class="fa-solid fa-award text-orange-600 text-4xl mb-4"></i>
              </div>
              <div className="font-semibold text-lg group-hover:text-orange-600">
                JavaScript for Beginners
              </div>
            </div>
            <div className="p-5 pt-0 flex flex-col justify-center items-center">
              <p className="mb-4 text-lg">Tefora</p>
              <div className="rounded-full border-transparent bg-[#EEEEEE]  inline-flex items-center px-2.5 py-0.5 text-xs font-semibold hover:bg-orange-100">
                2025
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-300 group bg-white  transition delay-150 duration-600 ease-in-out hover:translate-y-1 hover:scale-110 hover:shadow-xl">
            <div className="p-5 space-y-1.5 flex flex-col text-center">
              <div className="transition-transform duration-500 hover:rotate-360">
                <i class="fa-solid fa-award text-orange-600 text-4xl mb-4"></i>
              </div>
              <div className="font-semibold text-lg group-hover:text-orange-600">
                Full-Stack Web Development
              </div>
            </div>
            <div className="p-5 pt-0 flex flex-col justify-center items-center">
              <p className="mb-4 text-lg">Tefora</p>
              <div className="rounded-full border-transparent bg-[#EEEEEE]  inline-flex items-center px-2.5 py-0.5 text-xs font-semibold hover:bg-orange-100">
                2025
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificats;
