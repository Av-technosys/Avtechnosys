import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
     

      <footer className="fontTest bg-[#1c1c1e] text-white py-8 h-[160vh]">
        <div className="pl-6 lg:pl-16 py-6">
          <h3 className="fontTest text-4xl p-12  font-semibold ">Contact Us</h3>
          <h3 className="fontTest text-xl md:text-2xl lg:text-6xl p-12 text-gray-400">
            sales@avtechnosys.com
          </h3>
        </div>
        <hr />
        <div className="p-4 mt-20 text-sm flex justify-around flex-wrap">
          <div className="fontTest">
            It takes more than just a brilliant idea to transform <br />
            it into the greatest solution, you also need the <br />
            proper team to help you realize your vision. <br />
          </div>
          <div>
            <ul className="border-r-[1px] pr-1 space-y-4">
              <li>Contact</li>
              <li>Address</li>
            </ul>
          </div>
          <div className="border-l-[1px] pl-1">
            <ul>
              <li>LinkedIn </li>
              <li>Facebook</li>
              <li>Pinterest</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center  mt-16 pt-4 w-full ">
          <p className="w-4/5 text-center opacity-100 hover:scale-90 hover:opacity-70 duration-500 md:text-3xl lg:text-7xl ">
          Driving Digital Innovation, <br />
        Powering Marketing <br />
            Success <br />
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
