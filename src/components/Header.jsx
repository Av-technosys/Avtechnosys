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

//import styles 👇
import "react-modern-drawer/dist/index.css";

import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

import "./Footer.css";
import logo from "../Assets/Logo 1.png";
import arrow from "../Assets/rightarrow.png";
import Input from "./TextCycle";
import Sidebar from "./Sidebar";
import { Button, Slider } from "antd";
import SideDrawer from "./Sidebar";
import PhoneField from "./PhoneFeild2";

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel=" " href=" ">
        Digital Enterprise
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel=" " href=" ">
        Digital Experience
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel=" " href=" ">
        Digital Marketing
      </a>
    ),
  },
  {
    key: "4",

    label: (
      <a target="_blank" rel=" " href=" ">
        Digital Innovation
      </a>
    ),
  },
  {
    key: "5",

    label: (
      <a target="_blank" rel=" " href=" ">
        Cloud Transformation
      </a>
    ),
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  

  // const [isOpen, setIsOpen] = React.useState(false);
  // const toggleDrawer = () => {
  //   setIsOpen((prevState) => !prevState);
  // };
  return (
    <div className="">
      <div className="fontTest   bg-[#1c1c1e] p-6">
        <nav className="  bg-[#1c1c1e]">
          <div className="w-full flex">
            <div className="w-1/6 h-24 bg-white ">
              <div className=" bg-[#1c1c1e] w-full h-full rounded-br-[35px]">
                <img className="pt-4 pl-14 " src={logo} alt="" />
              </div>
            </div>
            <div className="w-3/4 h-24 bg-white pt-4 rounded-t-[35px]">
              <div className="mx-20 -mt-4 ">
                <ul className="flex gap-5 cursor-pointer justify-center mt-5 p-3 text-lg font-medium  border-[1.5px] border-black rounded-full">
                  <li className="pr-4">
                    <Link to="/company">Company</Link>
                  </li>
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <li className=" px-4">
                      Services <DownOutlined />
                    </li>
                  </Dropdown>

                  <li className="px-4">Portfolio</li>
                  <li className="px-4">
                    {" "}
                    <Link to="/Blog">Blog</Link>
                  </li>
                  <li className="pl-4">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <Outlet />
            </div>
            <div className="w-1/4   h-24 bg-white">
              <div className=" lg:flex bg-[#1c1c1e] w-full h-full rounded-bl-[35px] text-white flex flex-wrap">
                <button className=" px-4  pr-3 mt-7 ml-4 border border-gray-700 rounded-lg h-10">
                  Hire Us
                </button>
                <div className="flex absolute ml-28 mt-7 border rounded-xl px-3  ">
                  <img className="relative size-4 top-3 " src={arrow} alt="" />
                  <button className=" pl-2 h-10" onClick={toggleDrawer}> Let's Connect </button>
                  <div 
        className={`fixed top-0 right-0 h-full ml-[1000px] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40 flex`}>
        
        
        <div className='relative h-full flex flex-row'>
          
         
          <div className=' relative  w-]'>
            <img className="h-full w-full " src={bgimg} alt="Background" />
            <div className='absolute inset-0 p-6'>
            <h1 className="text-white font-semibold text-5xl mb-5 "> Our <br /> Offices</h1>
              <div className='text-sm text-white font-medium space-y-4'>
                <div className='flex justify-between'>
                  <div>
                    <p>Jaipur:- Plot no.8, Govind Marg,<br/>
                    Block-B, Malviya Nagar, Jaipur,<br/>
                    Rajasthan, 302017<br/>
                    Phone no.:- +91 9983034111</p>
                  </div>
                  <img className='h-16 w-16 rounded-full' src={bg1} alt="Office" />
                </div>
<br />
                
                <div className='flex justify-between'>
                  <div>
                    <p>Jaipur:- Plot no.8, Govind Marg,<br/>
                    Block-B, Malviya Nagar, Jaipur,<br/>
                    Rajasthan, 302017<br/>
                    Phone no.:- +91 9983034111</p>
                  </div>
                  <img className='h-16 w-16 rounded-full' src={bg1} alt="Office" />
                </div>
                <br />
                <div className='flex justify-between'>
                  <div>
                    <p>Jaipur:- Plot no.8, Govind Marg,<br/>
                    Block-B, Malviya Nagar, Jaipur,<br/>
                    Rajasthan, 302017<br/>
                    Phone no.:- +91 9983034111</p>
                  </div>
                  <img className='h-16 w-16 rounded-full' src={bg1} alt="Office" />
                </div>
                <br />
                <div className='flex justify-between'>
                  <div>
                    <p>Jaipur:- Plot no.8, Govind Marg,<br/>
                    Block-B, Malviya Nagar, Jaipur,<br/>
                    Rajasthan, 302017<br/>
                    Phone no.:- +91 9983034111</p>
                  </div>
                  <img className='h-16 w-16 rounded-full' src={bg1} alt="Office" />
                </div>
                
              </div>
            </div>
          </div>

          
          <div className='p-6 flex-1 w-[850px] bg-white text-black overflow-y-auto overflow-x-hidden '>
            <div className='flex justify-between  items-center  mb-6'>
              <h1 className="ml-3">Platform of Your Project?</h1>
              <img className='h-6 mr-3 w-6 cursor-pointer' src={cancel} alt="Cancel" onClick={toggleDrawer} />
            </div>

            <div className='mt-3 flex gap-5  justify-evenly'>
        <button className=' shadow-box font-light text-sm items-center   h-24 w-32  border-gray-500 shadow rounded-lg'>
        <img className='w-12 ml-10 ' src={button1} alt="" />
        <h1>Digital Enterprise</h1>
        </button>
        <button className='shadow-box font-light text-sm h-24 w-32 border-gray-500 shadow rounded-lg'>
         <img className='w-12 ml-10 ' src={button2} alt="" />
         <h1>Digital Experience</h1>
        </button>
         <button className='shadow-box font-light text-sm h-24 w-32 border-gray-500 shadow rounded-lg'>
         <img className='w-12 ml-10 ' src={button3} alt="" />
         <h1>Digital Marketing</h1>
         </button>
        </div>

       <div className='mt-6 flex gap-12  justify-center'>
         <button className='shadow-box font-light text-sm h-24 w-32  border-gray-500 shadow rounded-lg'>
         <img className='w-12 ml-10 ' src={button4} alt="" />
         <h1>Digital Innovation</h1>
        </button>
       <button className='shadow-box font-light text-sm h-24 w-32 border-gray-500 shadow rounded-lg'>
        <img className='w-12 ml-10 ' src={button5} alt="" />
         <h1>Cloud Transformation</h1>
         </button>
        </div>

        <div>
             <h1 className='p-3 mt-5 ml-1 font-medium'> How much time</h1>
             
           <Slider
            className='mx-6 '
    defaultValue={30}
    included={true}
    step={10}
    dots={true}
    key={ 'value'  }
    range={{ min: 10, max: 100 }}
    tipFormatter={(value) => `${value} days`}
    // tooltip={{
    //   open: true,
    // }}
    tooltip={true}
  />
 </div>
        <div>
       
            <h1 className= ' p-3 mt-5 ml-1 font-medium'>Set your budget</h1>
            <Slider
            className='mx-6'
             range={{ draggableTrack: true }} 
             defaultValue={[15000, 70000]}
             included={true}
             step={10}
             min={100}
             max={100000}
             key={ 'value'  }
             
             tipFormatter={ (value) => `$ ${value} `}
             tooltip={{
                
              }}
              
              />
        </div>
 
        <h1 className= ' p-3 mt-5  font-medium text-sm'>Fill the form and get an estimate</h1>
         <form action="">
             <div className=' flex ml-3  gap-10'>
                 <input className='border py-1' type="text" placeholder='  Name*' />
                 <input className='border py-1 ' type="text" placeholder='    Email*' />
             </div>
               <div>
             <select className='border justify-start  pr-72 py-2 mt-8 ml-3 font-medium' name="" id="">
               <option className='' value="">--Select Country--</option>
               <option value="1">USA</option>
               <option value="2">UK</option>
               <option value="3">India</option>
               <option value="4">Other</option>
             </select>
             </div>
             <div className='-ml-3'>
               <PhoneField/>
            
             </div>
             <textarea className='ml-3 mt-8 text-sm font-normal border pr-[285px] pb-16 ' placeholder= '   Message'></textarea>
             <button className=' px-5 py-3 border rounded-xl mt-3 float-end text-white bg-indigo-600 
//              '>Submit</button>
         </form>
          </div>
        </div>
      </div>
                  {/* <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                size={850}vw
                

                className='bla bla bla'
            >
                <div className="  flex">
<div className="min-w-96 relative h-screen">
  
  
            <img className="h-full w-full " src={bgimg} alt="Background" />
            <div className='absolute inset-0'>
            <h1 className="text-white font-semibold text-5xl m-5 "> Our <br /> Offices</h1>
              <div className='text-sm text-white font-medium p-6 space-y-4'>
                <div className='flex justify-between'>
                  <div>
                    <p>Jaipur:- Plot no.8, Govind Marg,<br/>
                    Block-B, Malviya Nagar, Jaipur,<br/>
                    Rajasthan, 302017<br/>
                    Phone no.:- +91 9983034111</p>
            </div>
                  <img className='h-16 w-16 rounded-full' src={bg1} alt="Office" />
                </div>

                
                <div className='flex justify-between'>
                  <div>
                    <p>Jaipur:- Plot no.8, Govind Marg,<br/>
                    Block-B, Malviya Nagar, Jaipur,<br/>
                    Rajasthan, 302017<br/>
                    Phone no.:- +91 9983034111</p>
                  </div>
                  <img className='h-16 w-16 rounded-full' src={bg1} alt="Office" />
                </div>

                <div className='flex justify-between'>
                  <div>
                    <p>Jaipur:- Plot no.8, Govind Marg,<br/>
                    Block-B, Malviya Nagar, Jaipur,<br/>
                    Rajasthan, 302017<br/>
                    Phone no.:- +91 9983034111</p>
                  </div>
                  <img className='h-16 w-16 rounded-full' src={bg1} alt="Office" />
                </div>
                <div className='flex justify-between'>
                  <div>
                    <p>Jaipur:- Plot no.8, Govind Marg,<br/>
                    Block-B, Malviya Nagar, Jaipur,<br/>
                    Rajasthan, 302017<br/>
                    Phone no.:- +91 9983034111</p>
                  </div>
                  <img className='h-16 w-16 rounded-full' src={bg1} alt="Office" />
                </div>
                
              </div>
            </div>
          
</div>

<div className=" text-black w-full bg-purple-500 " >

</div>
                </div>
            </Drawer> */}

                  
                </div>
              </div>
            </div>
          </div>
          {/* <div className="h-8 w-full bg-red-600 md:hidden">
            Hamburger
          </div> */}
          <div className="w-full bg-white rounded-t-3xl"></div>
        </nav>

        <div className="bg-[#1c1c1e]  ">
          <div className="w-full h-[80vh] bg-white rounded-t-3xl rounded-tl-3xl rounded-br-3xl">
            <div>
              <h1 className="text-5xl pl-10 pt-32 font-semibold">
                Our Services <br />
                <span className="text-blue-950 text-5xl font-bold">
                  {" "}
                  <Input />
                </span>
              </h1>
              <p className="mt-14  ml-10">
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
    </div>
  );
};

export default Header;
