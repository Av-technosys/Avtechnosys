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
import Footer1 from "./Footer1";
import Header2 from "./Header2";
 
const ContactUs = () => {
  return (
    <>
      <Header2/>
      <hr />

      <div className="lg:h-[140vh] bg-[#1c1c1e]">
        <div className="lg:flex grid grid-cols-1 p-14 h-full">
          <div className="bg-[#1c1c1e] lg:w-1/2 lg:h-[105vh] h-[40vh] w-[70vw]">
            <VideoPlayer />
          </div>
          <div className="bg-[#1c1c1e] lg:w-1/2">
            <form className="fontTest" action="">
              <div className="lg:flex ">
                <div className="lg:ml-10 ">
                  <label className="text-white text-sm " for="fname">
                    First Name
                  </label>
                  <br />
                  <input
                    className="text-sm mt-2 p-1  lg:w-56 w-72  border-gray-600 border rounded-lg bg-[#1c1c1e] "
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <br />
                <div className=" lg:ml-[40px]">
                  <label className="text-white text-sm " for="lname">
                    Last Name
                  </label>
                  <br />
                  <input
                    className="text-sm mt-2 p-1 lg:w-56 w-72 rounded-lg border-gray-600 border bg-[#1c1c1e]"
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="lg:ml-10 mt-8">
                <label className="text-white text-sm" htmlFor="">
                  
                  Company Name
                </label>
                <br />
                <input
                  className="text-sm mt-2 p-1 rounded-lg lg:w-[38vw] w-[69vw]  border-gray-600 border bg-[#1c1c1e]"
                  type="text"
                  placeholder="Enter your company name"
                />
              </div>

              <div className="lg:ml-10  lg:w-11/12   mt-8">
                <label className="text-white text-sm" htmlFor="">
                  {" "}
                  Email{" "}
                </label>{" "}
                <br />
                <input
                  className="text-sm mt-2 p-1 rounded-lg lg:w-[38vw] w-[69vw]  border-gray-600 border bg-[#1c1c1e]"
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
              <br />
              <div className="text-sm pt-3">
                <PhoneNumberField/>
              </div>

              <div className="lg:ml-10 mt-8">
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
              <div className="text-white text-xs lg:ml-10 flex  ">
                <input
                  className="mt-4"
                  type="checkbox"
                  placeholder=""
                  name=""
                  id=""
                />
                <p className="lg:mt-4 mt-4">
                  {" "}
                  I’d like to receive more information about company. I
                  understand and agree to the <br />
                  Privacy Policy
                </p>
              </div>

              <button className="p-3 border rounded-lg font-semibold text-black text-xs lg:ml-10   mt-6 text-center lg:px-52 px-28  bg-white">
                Get In Touch
              </button>
            </form>
          </div>
        </div>
      </div>

   {/* map  */}
   <div className='fontTest lg:pl-[80px] lg:h-[100vh] h-[50vh] pt-10 lg:pb-8  bg-[#1c1c1e] font-semibold text-white '>
       <h1 className="text-center justify-center lg:text-4xl text-2xl">
       Get in touch with our team
       </h1>
  
    <div className=' absolute lg:mt-14 mt-8'>
        <img className='opacity-100 hover:opacity-0' src={Map1}  alt="" /> 
    </div>
    <div className=' lg:mt-14 mt-8  opacity-0 hover:opacity-100 duration-700'>
    <img className=' relative ' src={Map2}  alt="" />
    </div>
  </div>

{/* //daisy ui card */}

<div className=" grid grid-cols-1 gap-4 lg:flex lg:justify-evenly lg:pl-0 pl-24 py-2 bg-[#1c1c1e]  ">
<div className="relative card card-compact text-white bg-[#1c1c1e]  w-56 border rounded-lg" >
  <figure>
    <img className="w-5 border rounded-sm absolute left-5 top-5 "
      src={Chat}
      alt=""/>
  </figure>
  <div className="card-body">
    <h2 className="card-title mt-16 ">Chat to sales</h2>
    <p>Speak to our friendly team.</p>
    <div className="card-actions justify-start">
      <button className=" border rounded-lg px-3 py-2">sales@avtechnosys.com</button>
    </div>
  </div>
</div>

{/* card2 */}

<div className="relative card card-compact text-white bg-[#1c1c1e]  w-56 border rounded-lg" >
  <figure>
    <img className="w-5 border rounded-sm absolute left-5 top-5 "
      src={Support}
      alt=""/>
  </figure>
  <div className="card-body">
    <h2 className="card-title mt-16 ">Chat to support</h2>
    <p>We're here to help.</p>
    <div className="card-actions justify-start">
      <button className=" border rounded-lg px-3 py-2">sales@avtechnosys.com</button>
    </div>
  </div>
</div>

{/* card3 */}
<div className="relative card card-compact text-white bg-[#1c1c1e]  w-56 border rounded-lg" >
  <figure>
    <img className="w-5 border rounded-sm absolute left-5 top-5 "
      src={Call}
      alt=""/>
  </figure>
  <div className="card-body">
    <h2 className="card-title mt-16 ">Call Us</h2>
    <p>Mon-Fri from 8am to 5pm.</p>
    <div className="card-actions justify-start">
      <button className=" border rounded-lg px-3 py-2">+91 9983034111</button>
    </div>
  </div>
</div>

{/* card4 */}

<div className="relative card card-compact text-white bg-[#1c1c1e]  w-56 border rounded-lg" >
  <figure>
    <img className="w-5 border rounded-sm absolute left-5 top-5 "
      src={Location}
      alt=""/>
  </figure>
  <div className="card-body">
    <h2 className="card-title mt-16 ">Visit Us</h2>
    <p>Visit our Office HQ.</p>
    <div className="card-actions justify-start">
      <button className=" border rounded-lg px-3 py-2">View on Google Maps</button>
    </div>
  </div>
</div>
</div>

  {/* Footer  */}
    <Footer1/>

    </>
  );
};

export default ContactUs;
