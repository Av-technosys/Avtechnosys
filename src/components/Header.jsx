import React from "react";
import "./Footer.css";
import "./Footer.css";
import logo from "../Assets/Logo 1.png";
import arrow from '../Assets/rightarrow.png';
const Header = () => {
  return (
    <>
      <div className="fontTest  bg-[#1c1c1e] p-6">
        <nav className=" bg-[#1c1c1e]">
          <div className="w-full flex ">
            <div className="w-1/6 h-28 bg-white ">
              <div className=" bg-[#1c1c1e] w-full h-full rounded-br-3xl">
                <img className="pt-4 pl-14 " src={logo} alt="" />
              </div>
            </div>
            <div className="w-3/4 h-28 bg-white rounded-t-2xl">
            <div className="mx-6">            
                <ul className="flex cursor-pointer flex-wrap list-none justify-center mt-5 mx-13  p-4 text-xl border-solid border border-black rounded-full">
                <li className=" px-4">Services</li>
                <li className="px-4">Company</li>
                <li className="px-4">Industries</li>
                <li className="px-4">Portfolio</li>
                <li className="px-4">Blog</li>
                <li className="px-4">Contact Us</li>
              </ul>
              </div>

            </div>
            <div className="w-1/4   h-28 bg-white">
              <div className=" flex bg-[#1c1c1e] w-full h-full rounded-bl-3xl text-white">


                <button className=" px-3  mt-7 ml-4 border rounded-xl h-10">Hire Us</button>
                <div className="flex absolute ml-28  mt-7 border rounded-xl px-3  ">
                <img className='relative size-4 top-3 ' src={arrow} alt="" />
                <button className=" h-10" > Let's Connect </button>
                </div>
                
              </div>
            </div>
          </div>
          <div className="w-full bg-white rounded-t-3xl"></div>
        </nav>

        <div className="bg-[#1c1c1e]  ">
          <div className="w-full h-[80vh] bg-white rounded-t-3xl rounded-tl-3xl rounded-br-3xl">
            <div>
              <h1 className="text-5xl pl-10 pt-32 font-semibold">
                Our Services <br />
                Includes{" "}
                <span className="text-blue-950 text-5xl font-bold">
                  {" "}
                  Development
                </span>
              </h1>
              <p className="mt-4 ml-10">
                Our committed team is always available to help you maximize the
                benefits of using Appraised. <br />
                We provide support for both UK and US time zones, inclusive
                success plans, and immediate <br />
                web chat assistance for managers and employees. Get in touch
                with us to discover more.{" "}
              </p>
            </div>
            <div className=" m-10 text-sm ">
              <button className=" border rounded-lg bg-[#050344]  border-black font-medium text-white p-3 ">
                Talk To Expert
              </button>
              <button
                className=" ml-10 border rounded-lg font-medium hover:bg-[#050344]
            hover:text-white border-black p-3"
              >
                Book Service
              </button>
            </div>
          </div>
        </div>
        <div className="flex bg-[#1c1c1e]">
          <div className="w-3/4 bg-white h-28 rounded-b-3xl"></div>
          <div className="w-1/4 bg-white">
            <div className=" bg-[#1c1c1e] h-28 rounded-tl-3xl"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
