import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Footer.css";
import logo from "../Assets/Logo 1.png";
import arrow from "../Assets/rightarrow.png";
import PhoneNumberField from "./PhoneFeild";
import video from "../Assets/contact.mp4";
import VideoPlayer from "./VideoPlayer";
import Map1 from '../Assets/map1.svg'
import Map2 from '../Assets/map2.svg'
import Footer from "./Footer";
import Chat from "../Assets/ChatIcon.png";
import Call from "../Assets/CallIcon.png";
import Support from "../Assets/SupportIcon.png";
import Location from "../Assets/LocationIcon.png";

const ContactUs = () => {
  return (
    <>
      <div className="fontTest text-white flex h-28 w-full bg-[#1c1c1e]">
        <div className="pt-7 pl-16 w-28 ">
          <img src={logo} alt="" />
        </div>
        <div className="pt-6 ">
          <ul className="flex text-white list-none ml-40 p-4 rounded-full border">
          <li className="px-4"><Link to="/company">Company</Link></li>
            <li className="pl-8"> Services</li>
            <li className="pl-8">Industries</li>
            <li className="pl-8">Portfolio</li>
            <li className="pl-8"><Link to="/blog">Blog</Link></li>
            <li className="pl-8 pr-4"><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <Outlet/>
        <div className="flex ml-16 my-10">
          <button className="border border-gray-500 px-4 rounded-lg ">
            Hire us
          </button>
          <div className="flex border ml-6 px-3 rounded-lg ">
            <img className="size-5 mt-[5px]  " src={arrow} alt="" />
            <button className="">Let's Connect</button>
          </div>
        </div>
      </div>
      <hr />

      <div className="h-[140vh] bg-[#1c1c1e]">
        <div className="flex p-14 h-full">
          <div className="bg-[#1c1c1e] w-1/2">
            <VideoPlayer />
          </div>
          <div className="bg-[#1c1c1e] w-1/2">
            <form className="fontTest" action="">
              <div className="flex">
                <div className="ml-10">
                  <label className="text-white text-sm " for="fname">
                    First Name
                  </label>
                  <br />
                  <input
                    className="text-sm mt-2 p-1 w-56 border-gray-600 border rounded-lg bg-[#1c1c1e] "
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <br />
                <div className=" ml-[40px]">
                  <label className="text-white text-sm " for="lname">
                    Last Name
                  </label>
                  <br />
                  <input
                    className="text-sm mt-2 p-1 w-56 rounded-lg border-gray-600 border bg-[#1c1c1e]"
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="ml-10 mt-8">
                <label className="text-white text-sm" htmlFor="">
                  {" "}
                  Company Name
                </label>{" "}
                <br />
                <input
                  className="text-sm mt-2 p-1 rounded-lg w-11/12 border-gray-600 border bg-[#1c1c1e]"
                  type="text"
                  placeholder="Enter your company name"
                />
              </div>

              <div className="ml-10 mt-8">
                <label className="text-white text-sm" htmlFor="">
                  {" "}
                  Email{" "}
                </label>{" "}
                <br />
                <input
                  className="text-sm mt-2 p-1 rounded-lg w-11/12 border-gray-600 border bg-[#1c1c1e]"
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
              <br />
              <div className="text-sm -ml-28 pt-3">
                <PhoneNumberField />
              </div>

              <div className="ml-10 mt-8">
                <label className="text-white text-sm" htmlFor="">
                  {" "}
                  Message{" "}
                </label>{" "}
                <br />
                <input
                  className="text-sm mt-2 pb-20 rounded-lg w-11/12 border-gray-600 border bg-[#1c1c1e]"
                  type="text"
                  placeholder="Tell us what we can help you with "
                />
              </div>
              <div className="text-white text-xs ml-10 flex  ">
                <input
                  className=""
                  type="checkbox"
                  placeholder=""
                  name=""
                  id=""
                />
                <p className="mt-4">
                  {" "}
                  I’d like to receive more information about company. I
                  understand and agree to the <br />
                  Privacy Policy
                </p>
              </div>

              <button className="p-3 border rounded-lg font-semibold text-black text-xs ml-10 mt-6 text-center items-center justify-center px-52  bg-white">
                {" "}
                Get In Touch{" "}
              </button>
            </form>
          </div>
        </div>
      </div>

   {/* map  */}
   <div className='fontTest pl-[80px] h-[100vh] pt-10 pb-8 text-4xl bg-[#1c1c1e] font-semibold text-white '>
       <h1 className="text-center justify-center">
       Get in touch with our team
       </h1>
  
    <div className=' absolute mt-14'>
        <img className='opacity-100 hover:opacity-0' src={Map1}  alt="" /> 
    </div>
    <div className=' mt-14  opacity-0 hover:opacity-100 duration-700'>
    <img className=' relative ' src={Map2}  alt="" />
    </div>
  </div>

<div className=" flex justify-evenly h-56 w-full bg-[#1c1c1e] text-white ">
  <div className="  m-4 h-48 w-56 border-[1.5px] border-gray-500 rounded-xl ">
      <div className=" h-6 w-6 border m-5 rounded-sm border-gray-500"> 
        <img className="p-1" src={Chat} alt="" />
        </div> 
      <h1 className="ml-3 pt-3"> Chat to sales</h1>
      <p className=" ml-3 pt-2 text-sm font-light">Speak to our friendly team.</p>
      <button className=" ml-3 mt-3 border-[1.5px] font-light text-sm border-gray-500 rounded-md py-1 px-3 ">sales@avtechnosys.com</button>
  </div>

  <div className=" ml-10 m-4 h-48 w-56 border-[1.5px] border-gray-500 rounded-xl ">
  <div className=" h-6 w-6 border m-5 rounded-sm border-gray-500"> 
  <img className="p-1" src={Support} alt="" />
    </div> 
      <h1 className="ml-3 pt-3"> Chat to support</h1>
      <p className=" ml-3 pt-2 text-sm font-light">We're here to help.</p>
      <button className=" ml-3 mt-3 border-[1.5px] font-light text-sm border-gray-500 rounded-md py-1 px-3 ">sales@avtechnosys.com</button>
  </div>

  <div className=" ml-10 m-4 h-48 w-56 border-[1.5px] border-gray-500 rounded-xl ">
  <div className=" h-6 w-6 border m-5 rounded-sm border-gray-500">
  <img className="p-1" src={Location} alt="" />
     </div> 
      <h1 className="ml-3 pt-3"> Visit Us</h1>
      <p className=" ml-3 pt-2 text-sm font-light">Visit our Office HQ.</p>
      <button className=" ml-3 mt-3 border-[1.5px] font-light text-sm border-gray-500 rounded-md py-1 px-3 ">View on Google Maps</button>
  </div>

  <div className=" ml-10 m-4 h-48 w-56 border-[1.5px] border-gray-500 rounded-xl ">
  <div className=" h-6 w-6 border m-5 rounded-sm border-gray-500">
  <img className="p-1" src={Call} alt="" />
     </div> 
      <h1 className="ml-3 pt-3"> Call Us </h1>
      <p className=" ml-3 pt-2 text-sm font-light">Mon-Fri from 8am to 5pm.</p>
      <button className=" ml-3 mt-3 border-[1.5px] font-light text-sm border-gray-500 rounded-md px-8 py-1 ">+91 9983034111</button>
  </div>
</div>

  {/* Footer  */}
    <Footer/>

    </>
  );
};

export default ContactUs;
