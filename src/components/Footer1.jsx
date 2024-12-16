import React, { useEffect } from "react";
import "./Footer.css";

const Footer1 = () => {
  useEffect(() => {
    // Dynamically load the Elfsight script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up the script on component unmount
    };
  }, []);
  return (
    <>
      <footer className=" fontTest bg-[#1c1c1e] lg:pt text-white">
        <div className="p-6 lg:pb-[4rem] ">
          <h4 className="font-semibold lg:text[4rem] text-2xl md:text-6xl py-3 lg:py-0 ml-3 lg:ml-[3.5rem]">
            Contact Us
          </h4>
          <h6 className="text-2xl  lg:ml-[3.2rem] lg:text-[5rem] lg:mt-[5.5rem] text-[#787878] py-6 hover:text-white duration-300">
            sales@avtechnosys.com
          </h6>
        </div>
        <hr />
        {/* Review Section with Background */}
        <div className="bg-[#1c1c1e] p-6">
          {/* Embed Google Reviews using Elfsight */}
          <div
            className="elfsight-app-704e64fc-7165-4092-8517-2b178615dcf4"
            data-elfsight-app-lazy
          ></div>
        </div>
        <div className="flex fontTest flex-col md:flex-row p-6 text-[1rem] font-semibold space-y-5 md:space-y-0">
          <div className="md:w-1/2 flex items-center">
            <p className="md:w- lg:ml-14">
              AV Technosys isn’t your typical tech company – we’re the crew that
              flips the script on what’s possible. We take your biggest ideas
              and turn them into digital experiences that make people stop,
              stare, and scroll back.{" "}
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-between md:justify-around">
            <div className="flex relative">
              <div className="p-2 border-r flex flex-col justify-around">
                <div className="relative">
                  <span className="peer cursor-pointer">Contact</span>
                  <div className="hidden peer-hover:flex w-[10rem] text-xs absolute translate-x-[40%] top-[40%] justify-start items-center ml-10 p-2">
                    +91 99830-34111
                  </div>
                </div>
                <div className="relative">
                  <span className="peer cursor-pointer">Address</span>
                  <div className="hidden peer-hover:flex w-[10rem] text-xs absolute translate-x-[40%] -translate-y-[90%] justify-center items-center p-2 ml-10">
                    238, 2nd floor, mangalam metropolis tower, purani chungi,
                    vaishali nagar, Jaipur, Rajasthan 302017
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 border-l">
              <ul>
                <a
                  href="https://www.instagram.com/avtechnosys/"
                  target="_blank"
                >
                  <li>Instagram</li>
                </a>
                <a
                  href="https://www.facebook.com/people/AV-Technosys/"
                  target="_blank"
                >
                  <li>Facebook</li>
                </a>
                <a href="https://x.com/AvTechnosys" target="_blank">
                  <li>Twitter</li>
                </a>
                <a
                  href="https://www.linkedin.com/company/av-technosys/mycompany/"
                  target="_blank"
                >
                  <li>Linkedin</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <h3 className="text-3xl md:text-4xl lg:text-[7rem] xl:text-8xl w-[90%] hover:scale-75 duration-500 hover:opacity-50 text-center">
            Driving Digital Innovation, Powering Marketing Success
          </h3>
        </div>
            
      </footer>
    </>
  );
};

export default Footer1;
