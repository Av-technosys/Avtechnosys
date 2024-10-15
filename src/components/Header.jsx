import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import bgimg from "../Assets/citybg.jpg";
import bg1 from "../Assets/bg1.jpg";
import cancel from "../Assets/cancel.png";
import button1 from "../Assets/digitaltransform.png";
import button2 from "../Assets/ux.png";
import button3 from "../Assets/bullhorn.png";
import button4 from "../Assets/innovate.png";
import button5 from "../Assets/cloudcomputing.png";
import Drawer from "react-modern-drawer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import avlogoblack from "../Assets/AV LOGO black.svg";
//import styles 👇
import "react-modern-drawer/dist/index.css";

import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import MenuIcon from '@mui/icons-material/Menu';
import "./Footer.css";
import avlogo from "../Assets/AV LOGO.svg"
import logo from "../Assets/Logo 1.png";
import arrow from "../Assets/rightarrow.png";
import Input from "./TextCycle";
import Sidebar from "./Sidebar";
import { Button, Slider } from "antd";
import SideDrawer from "./Sidebar";
import PhoneField from "./PhoneFeild2";
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

// const items = [
//   {
//     key: "1",
//     label: (
//       <a target="_blank" rel=" " href=" ">
//         Digital Enterprise
//       </a>
//     ),
//   },
//   {
//     key: "2",
//     label: (
//       <a target="_blank" rel=" " href=" ">
//         Digital Experience
//       </a>
//     ),
//   },
//   {
//     key: "3",
//     label: (
//       <a target="_blank" rel=" " href=" ">
//         Digital Marketing
//       </a>
//     ),
//   },
//   {
//     key: "4",

//     label: (
//       <a target="_blank" rel=" " href=" ">
//         Digital Innovation
//       </a>
//     ),
//   },
//   {
//     key: "5",

//     label: (
//       <a target="_blank" rel=" " href=" ">
//         Cloud Transformation
//       </a>
//     ),
//   },
// ];

const handleEmailClick = () => {
  window.location.href = `mailto:sales@avtechnosys.com?subject=Subject&body=Body`;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [first, setfirst] = useState(false);
  const togglemenu = () => {
    setfirst(!first);
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // const [isOpen, setIsOpen] = React.useState(false);
  // const toggleDrawer = () => {
  //   setIsOpen((prevState) => !prevState);
  // };
  return (
    <div className="">
      <div className="fontTest   bg-[#1c1c1e] p-[2.5rem]">
        <div className="md:hidden bg-white rounded-t-3xl ">
          <div className=" ml-10">
          <img className="" src={avlogoblack} alt="" />
        </div>
          
        <div className='lg:hidden absolute right-12 top-[4.5rem]' onClick={togglemenu}>
          <MenuIcon sx={{
   fontSize: '30px',
   color: '#000000',
   cursor: 'pointer',

}} 
/>
<div 
        className={`fixed top-0 right-0 h-full ml-[1000px] transform ${first ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40 flex`}>
         <div 
             
             className=" items-center px-3 py-2 rounded-xl w-[60vw] bg-white text-black border hover:border-gray-800 "
           >
             <div className='mt-12  text-white pr-3 float-end'>
             <CancelIcon onClick={()=>setfirst(!first)} className="text-black"/>
             </div>
            <ul className='mt-16 ml-10'>
              <li className='py-3 text-xl '> <Link to="/company">Company</Link></li>
              <li className='py-3 text-xl '><Link to="/Services">Services</Link></li>
              <li className='py-3 text-xl '><Link to="/Portfolio">Portfolio</Link></li>
              <li className='py-3 text-xl '><Link to="/Blog">Blog</Link></li>
              <li className='py-3 text-xl '><Link to="/contact">Contact Us</Link></li>
            </ul>
            <div className='grid gap-2'>
                  <button className='py-1  border rounded-sm border-black '><Link to="/Hireus" >Hire Us</Link></button>
                  <button className='py-1  border rounded-sm border-black' > <Link to="/contact"> <ArrowForwardIosIcon className='bg-black text-white rounded-full mr-1 p-1'/>Let's Connect</Link></button>
                </div>
           </div>
               
        </div>
</div>
          
          </div>
          <hr  className="bg-[#1c1c1e] border border-[#1c1c1e]"/>
        <nav className="hidden md:block bg-[#1c1c1e]">
          <div className="w-full flex">
            <div className="w-1/6 h-24  bg-white ">
              <div className=" bg-[#1c1c1e] w-full h-full flex justify-center items-center rounded-br-[35px]">
                <Link to="/" ><img className="w-[4.5rem] mb-[1rem] scale-[1.3rem] -mt-2" src={avlogo} alt="" /></Link>
                
              </div>
            </div>

            <div className="w-3/4 h-24 bg-white pt-4 rounded-t-[35px]">
              <div className="mx-5 lg:mx-20 -mt-4  ">
                <ul className="flex justify-around cursor-pointer text-black  mt-5 p-3 text-sm lg:text-lg font-medium  border-[1.5px] border-black rounded-full">
                  {/* <li className="pr-4"> */}
                  <li className="">
                    <Link to="/company">Company</Link>
                  </li>
                  
                    <li className=" ">
                      {/* <li className=" px-4"> */}
                      <Link to="/Services">Services</Link>
                      
                    </li>
                  

                  <li className=""><Link to="/Portfolio">Portfolio</Link></li>
                  {/* <li className="px-4">Portfolio</li> */}
                  <li className="">
                    {/* <li className="px-4"> */} <Link to="/Blog">Blog</Link>
                  </li>
                  <li className="">
                    {/* <li className="pl-4"> */}
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <Outlet />
            </div>

            <div className="w-1/4   h-24 bg-white">
              <div className="bg-[#1c1c1e] w-full h-full rounded-bl-[35px] text-white flex items-center flex-wrap text-sm justify-around gap-1">
                <button className="px-3  border border-gray-700 rounded-lg h-10">
                  <Link to="/hireus" >Hire Us</Link>
                </button>
                <div className="flex border rounded-xl px-3  ">
                  <button className=" pl-2 h-10" onClick={toggleDrawer}>
                    <ChevronRightOutlinedIcon  className="bg-white text-black rounded-full "  fontSize="inherit"/> Let's Connect
                  </button>
                  <div
                    className={`fixed top-0 right-0 h-full w-[62%] transform ${
                      isOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out z-40 flex`}
                  >
                    {/* ml-[1000px] */}
                    <div className="relative h-full flex flex-row">
                      <div className=" relative  w-]">
                        <img
                          className="h-full w-full "
                          src={bgimg}
                          alt="Background"
                        />
                        <div className="absolute inset-0 p-6">
                          <h1 className="text-white font-semibold text-5xl mb-5 ">
                            {" "}
                            Our <br /> Offices
                          </h1>
                          <div className="text-[1rem] text-white font-medium space-y-16">
                            <div className="flex justify-between">
                              <div>
                                <p>
                                  Jaipur:- Plot no.8, Govind Marg,
                                  <br />
                                  Block-B, Malviya Nagar, Jaipur,
                                  <br />
                                  Rajasthan, 302017
                                  <br />
                                  Phone no.:- +91 9983034111
                                </p>
                              </div>
                              <img
                                className="h-16 w-16 rounded-full"
                                src={bg1}
                                alt="Office"
                              />
                            </div>
                            <br />

                            <div className="flex justify-between">
                              <div>
                                <p>



                                M01, AL Mulla Building 2, <br />
Near Burj Nahar Mall, Deira, Dubai <br />
Phone no. :- +971 521665467 <br />
                                  {/* Jaipur:- Plot no.8, Govind Marg,
                                  <br />
                                  Block-B, Malviya Nagar, Jaipur,
                                  <br />
                                  Rajasthan, 302017
                                  <br />
                                  Phone no.:- +91 9983034111 */}
                                </p>
                              </div>
                              <img
                                className="h-16 w-16 rounded-full"
                                src={bg1}
                                alt="Office"
                              />
                            </div>
                            <br />
                            <div className="flex justify-between">
                              <div>
                                <p>
                                1-3 St Nicholas Street Worcester 
WR1 1UW, United Kingdom <br />
Phone no. :- +44 7470994018 <br />
                                  {/* Jaipur:- Plot no.8, Govind Marg,
                                  <br />
                                  Block-B, Malviya Nagar, Jaipur,
                                  <br />
                                  Rajasthan, 302017
                                  <br />
                                  Phone no.:- +91 9983034111 */}
                                </p>
                              </div>
                              <img
                                className="h-16 w-16 rounded-full"
                                src={bg1}
                                alt="Office"
                              />
                            </div>
                            <br />
                            {/* <div className="flex justify-between">
                              <div>
                                <p>
                                  Jaipur:- Plot no.8, Govind Marg,
                                  <br />
                                  Block-B, Malviya Nagar, Jaipur,
                                  <br />
                                  Rajasthan, 302017
                                  <br />
                                  Phone no.:- +91 9983034111
                                </p>
                              </div>
                              <img
                                className="h-16 w-16 rounded-full"
                                src={bg1}
                                alt="Office"
                              />
                            </div> */}
                          </div>
                        </div>
                      </div>

                      <div className="p-6 flex-1 w-[850px]   bg-white text-black overflow-y-auto overflow-x-hidden ">
                        <div className="flex justify-between  items-center  mb-6">
                          <h1 className="ml-3">Platform of Your Project?</h1>
                          <img
                            className="h-6 mr-3 w-6 cursor-pointer"
                            src={cancel}
                            alt="Cancel"
                            onClick={toggleDrawer}
                          />
                        </div>

                        <div className="mt-3 flex gap-5  justify-evenly">
                          <button className=" shadow-box font-light text-sm items-center   h-24 w-32  border-gray-500 shadow rounded-lg">
                            <img className="w-12 ml-10 " src={button1} alt="" />
                            <h1>Digital Enterprise</h1>
                          </button>
                          <button className="shadow-box font-light text-sm h-24 w-32 border-gray-500 shadow rounded-lg">
                            <img className="w-12 ml-10 " src={button2} alt="" />
                            <h1>Digital Experience</h1>
                          </button>
                          <button className="shadow-box font-light text-sm h-24 w-32 border-gray-500 shadow rounded-lg">
                            <img className="w-12 ml-10 " src={button3} alt="" />
                            <h1>Digital Marketing</h1>
                          </button>
                        </div>

                        <div className="mt-6 flex gap-12  justify-center">
                          <button className="shadow-box font-light text-sm h-24 w-32  border-gray-500 shadow rounded-lg">
                            <img className="w-12 ml-10 " src={button4} alt="" />
                            <h1>Digital Innovation</h1>
                          </button>
                          <button className="shadow-box font-light text-sm h-24 w-32 border-gray-500 shadow rounded-lg">
                            <img className="w-12 ml-10 " src={button5} alt="" />
                            <h1>Cloud Transformation</h1>
                          </button>
                        </div>

                        <div>
                          <h1 className="p-3 mt-5 ml-1 font-medium">
                            {" "}
                            How much time
                          </h1>

                          <Slider
                            className="mx-6 "
                            defaultValue={30}
                            included={true}
                            step={10}
                            dots={true}
                            key={"value"}
                            range={{ min: 10, max: 100 }}
                            tipFormatter={(value) => `${value} days`}
                            // tooltip={{
                            //   open: true,
                            // }}
                            tooltip={true}
                          />
                        </div>
                        <div>
                          <h1 className=" p-3 mt-5 ml-1 font-medium">
                            Set your budget
                          </h1>
                          <Slider
                            className="mx-6"
                            range={{ draggableTrack: true }}
                            defaultValue={[15000, 70000]}
                            included={true}
                            step={10}
                            min={100}
                            max={100000}
                            key={"value"}
                            tipFormatter={(value) => `$ ${value} `}
                            tooltip={{}}
                          />
                        </div>

                        <h1 className=" p-3 mt-5  font-medium text-sm">
                          Fill the form and get an estimate
                        </h1>
                        <form action="">
                          <div className=" flex ml-3  gap-28">
                            <input
                              className="border bg-white  py-1"
                              type="text"
                              placeholder="  Name*"
                            />
                            <input
                              className="border bg-white py-1 "
                              type="text"
                              placeholder="    Email*"
                            />
                          </div>
                          <div>
                            <select
                              className="border bg-white justify-start  pr-72 py-2 mt-8 ml-3 font-medium"
                              name=""
                              id=""
                            >
                              <option className="" value="">
                                --Select Country--
                              </option>
                              <option value="1">USA</option>
                              <option value="2">UK</option>
                              <option value="3">India</option>
                              <option value="4">Other</option>
                            </select>
                          </div>
                          <div className="-ml-3">
                            <PhoneField />
                          </div>
                          <textarea
                            className="ml-3 mt-8 bg-white text-sm font-normal border pr-[285px] pb-16 "
                            placeholder="   Message"
                          ></textarea>
                          <button
                            className=" px-5 py-3 border rounded-xl mt-3 float-end text-white bg-indigo-600 
//              "
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          {/* <div className="h-8 w-full bg-red-600 md:hidden">
            Hamburger
          </div> */}
          <div className="w-full rounded-t-3xl"></div>
        </nav>

        <div className="bg-[#1c1c1e] ">
          <div className="w-full lg:pb-10 pb-1 bg-white lg:rounded-t-3xl lg:rounded-tl-3xl rounded-br-3xl">
            <div className="lg:pl-[1rem]">
              <h1 className="lg:text-[4rem] lg:pb-5 text-2xl text-black pl-10 lg:pt-32  pt-5 font-medium">
                Our Services <br />
                <span className="text-[#4643cc] lg:text-[4rem] h-5 font-semibold">
                  {" "}
                  <Input />
                </span>
              </h1>
              <p className="lg:mt-[6rem] mt-10 text-[1rem]  text-black ml-10">
              Got a dream that sounds a bit out there? Perfect! At AV Technosys, we specialize in <br />turning the ‘Wait, what?!’ into ‘Wow, no way!’ Join us on a wild tech adventure that’s as <br /> fun as it is groundbreaking!
              </p>
            </div>
            <div className=" lg:pl-[1rem]  m-10 text-sm ">
              <button onClick={handleEmailClick} className=" border rounded-lg  bg-[#4643cc] text-white hover:bg-white hover:text-black  border-black font-medium p-3 ">
                Talk To Expert
              </button>
              <button 
                className=" lg:ml-10 ml-[0.2rem] border rounded-lg font-medium text-black hover:bg-[#4643cc]
            hover:text-white border-black p-3"
              >
                <Link to="/contact">Book Service</Link>
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
    </div>
  );
};

export default Header;
