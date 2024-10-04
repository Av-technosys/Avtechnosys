import React from 'react'
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../Assets/Logo 1.png";
import arrow from "../Assets/rightarrow.png";
import PhoneField from './PhoneFeild2';
import { Slider } from 'antd';
import { Dropdown, Space } from "antd";
import bgimg from '../Assets/citybg.jpg';
import bg1 from '../Assets/bg1.jpg';
import cancel from '../Assets/cancel.png';
import button1 from '../Assets/digitaltransform.png';
import button2 from '../Assets/ux.png';
import button3 from '../Assets/bullhorn.png';
import button4 from '../Assets/innovate.png';
import button5 from '../Assets/cloudcomputing.png';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import avlogo from "../Assets/AV LOGO.svg"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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

const Header2 = () => {
    const [isOpen, setIsOpen] = useState(false);

const [first, setfirst] = useState(false);
    const togglemenu = () => {
      setfirst(!first);
    };
    
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <header className="  fontTest text-white flex flex-wrap justify-between  h-32 w-full bg-[#1c1c1e]">
   
    

 <div className="pt-7 pl-16 w-32 ">
  <Link to="/">  <img src={avlogo} alt="logo" /></Link>
  
 </div>
<div className='lg:hidden absolute right-5 top-14 ' onClick={togglemenu}><MenuIcon sx={{
   fontSize: '30px',
   color: '#fff',
   cursor: 'pointer',

}}/>
<div 
        className={`fixed top-0 right-0 h-full ml-[1000px] transform ${first ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40 flex`}>
         <div 
             
             className=" items-center px-3 py-2 rounded-xl w-[60vw] bg-[#1c1c1e]  border hover:border-gray-800 "
           >
             <div className='mt-12  text-white pr-3 float-end'>
             <CancelIcon onClick={()=>setfirst(!first)} />
             </div>
            <ul className='mt-16 ml-10'>
              <li className='py-3 text-xl '> <Link to="/company">Company</Link></li>
              <li className='py-3 text-xl '><Link to="/Services">Services</Link></li>
              <li className='py-3 text-xl '><Link to="/Portfolio">Portfolio</Link></li>
              <li className='py-3 text-xl '><Link to="/Blog">Blog</Link></li>
              <li className='py-3 text-xl '><Link to="/contact">Contact Us</Link></li>
            </ul>
            <div className='grid gap-2'>
                  <button className='py-1  border rounded-sm '><Link to="/hireus">Hire Us</Link></button>
                  <button className='py-1  border rounded-sm ' > <Link to="/contact"> <ArrowForwardIosIcon className='bg-white text-black rounded-full mr-1 p-1'/>Let's Connect</Link></button>
                </div>
           </div>
               
        </div>

</div>
 
 
 <div className="pt-6 ">
   <ul className="lg:flex sm:hidden hidden  md:hidden flex-wrap text-white list-none ml-44  mt-3 p-4 rounded-full border ">
     <li className="px-">
       <Link to="/company">Company</Link>
     </li>
     {/* <Dropdown
                    menu={{
                      items,
                    }}
                  > */}
                    <li className="ml-10 ">
                   
                      <Link to="/Services">Services</Link>
                     
                    </li>
                  {/* </Dropdown> */}
     
     <li className="pl-10"><Link to="/Portfolio">Portfolio</Link></li>
     <li className="pl-10">
       <Link to="/Blog">Blog</Link>
     </li>
     <li className="pl-10 pr-">
       <Link to="/contact">Contact Us</Link>
     </li>
   </ul>
 </div>
 <Outlet />
 <div className=" lg:flex hidden ml-28 my-11">
   <button className="border border-gray-700 px-8 rounded-lg ">
    <Link to="/hireus"> Hire us</Link>
   </button>
   <div className="flex border ml-6 px-3 rounded-lg ">
     <img className="size-5 mr-1 mt-[9px]" src={arrow} alt="arrow" />
     <button className=" h-10" onClick={toggleDrawer} >Let's Connect</button>
   </div>
 </div>

 <div 
        className={`fixed top-0 right-0 h-full w-[70%] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40 flex`}>
         
         {/* ml-[1000px] */}
        
        <div className='relative h-full flex flex-row'>
          
         
          <div className=' relative  w-]'>
            <img className="h-full w-full  " src={bgimg} alt="Background" />
            <div className='absolute inset-0 p-6'>
            <h1 className="text-white font-semibold text-5xl mb-5 "> Our <br /> Offices</h1>
              <div className='text-sm text-white font-medium space-y-16'>
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
                    <p>
                    M01, AL Mulla Building 2, <br />
Near Burj Nahar Mall, Deira, Dubai <br />
Phone no. :- +971 521665467 <br />
                      {/* Jaipur:- Plot no.8, Govind Marg,<br/>
                    Block-B, Malviya Nagar, Jaipur,<br/>
                    Rajasthan, 302017<br/>
                    Phone no.:- +91 9983034111 */}
                    </p>
                  </div>
                  <img className='h-16 w-16 rounded-full' src={bg1} alt="Office" />
                </div>
                <br />
                <div className='flex justify-between'>
                  <div>
                    <p>
                    1-3 St Nicholas Street Worcester <br /> 
WR1 1UW, United Kingdom  <br />
Phone no. :- +44 7470994018 <br />
                      {/* Jaipur:- Plot no.8, Govind Marg,<br/>
                    Block-B, Malviya Nagar, Jaipur,<br/>
                    Rajasthan, 302017<br/>
                    Phone no.:- +91 9983034111 */}
                    </p>
                  </div>
                  <img className='h-16 w-16 rounded-full' src={bg1} alt="Office" />
                </div>
                <br />
                {/* <div className='flex justify-between'>
                  <div>
                    <p>Jaipur:- Plot no.8, Govind Marg,<br/>
                    Block-B, Malviya Nagar, Jaipur,<br/>
                    Rajasthan, 302017<br/>
                    Phone no.:- +91 9983034111</p>
                  </div>
                  <img className='h-16 w-16 rounded-full' src={bg1} alt="Office" />
                </div> */}
                
              </div>
            </div>
          </div>
                   
          {/* w-[850px] */}
          
          <div className='p-6 flex-1  bg-white text-black overflow-y-auto overflow-x-hidden '>
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
             <div className=' flex ml-3  gap-20'>
                 <input className='border py-1 bg-white' type="text" placeholder='  Name*' />
                 <input className='border py-1 bg-white' type="text" placeholder='    Email*' />
             </div>
               <div>
             <select className='border bg-white justify-start  pr-72 py-2 mt-8 ml-3 font-medium' name="" id="">
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
             <textarea className='ml-3 mt-8 text-sm bg-white font-normal border pr-[285px] pb-16 ' placeholder= '   Message'></textarea>
             <button className=' px-5 py-3 border rounded-xl mt-3 float-end text-white bg-indigo-600 
//              '>Submit</button>
         </form>
          </div>
        </div>
      </div>
            
 
</header>

    </>
  )
}

export default Header2




