import React from 'react'
import "./Footer.css";
import { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { Form, Select, Slider } from 'antd';
import bgimg from '../Assets/citybg.jpg';
import bg1 from '../Assets/bg1.jpg';
import cancel from '../Assets/cancel.png';
import button1 from '../Assets/digitaltransform.png';
import button2 from '../Assets/ux.png';
import button3 from '../Assets/bullhorn.png';
import button4 from '../Assets/innovate.png';
import button5 from '../Assets/cloudcomputing.png';
import PhoneNumberField from "./PhoneFeild";
import { Option } from 'antd/es/mentions';
import PhoneField from './PhoneFeild2';

const SideDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Toggle button */}
      <button 
        onClick={toggleDrawer} 
        className="fixed top-4 right-4 z-50 bg-blue-600 text-white p-2 rounded-md">
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>

      {/* Side Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full ml-[1000px] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40 flex`}>
        
        {/* Content inside the drawer */}
        <div className='relative h-full flex flex-row'>
          
          {/* Background image */}
          <div className=' relative  w-]'>
            <img className="h-full w-full " src={bgimg} alt="Background" />
            <div className='absolute inset-0 p-6'>
              <h1 className='text-4xl text-white font-semibold mb-4'>Our Offices</h1>
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
                {/* Repeat the block for other offices */}
              </div>
            </div>
          </div>

          {/* Content below the image */}
          <div className='p-6 flex-1 w-[900px] overflow-y-auto '>
            <div className='flex justify-between  items-center  mb-6'>
              <h1>Platform of Your Project?</h1>
              <img className='h-6 w-6 cursor-pointer' src={cancel} alt="Cancel" onClick={toggleDrawer} />
            </div>

            <div className='mt-3 flex gap-5 justify-evenly'>
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
             <h1 className='p-3 mt-5 ml-2 font-medium'> How much time</h1>
            <Slider
            className='mx-6 '
    defaultValue={30}
    included={true}
    step={10}
    dots={true}
    key={ 'value'  }
    // range={{ min: 10, max: 100 }}
    tipFormatter={(value) => `${value} days`}
    tooltip={{
      open: true,
    }}
  />
</div>
        <div>
            <h1 className= ' p-3 mt-5 ml-2 font-medium'>Set your budget</h1>
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
                // open: true,
              }}
              
              />
        </div>
 
        <h1 className= ' p-3 mt-5 ml-2 font-medium text-sm'>Fill the form and get an estimate</h1>
         <form action="">
             <div className=' flex pl-6 gap-[83px]'>
                 <input className='border py-1' type="text" placeholder='  Name*' />
                 <input className='border py-1' type="text" placeholder='    Email*' />
             </div>
               <div>
             <select className='border justify-start  pr-72 py-2 mt-8 ml-6 font-medium' name="" id="">
               <option className='' value="">--Select Country--</option>
               <option value="1">USA</option>
               <option value="2">UK</option>
               <option value="3">India</option>
               <option value="4">Other</option>
             </select>
             </div>
             <div className=' '>
               <PhoneField/>
            {/* <h1 className='p-3 mt-5 ml-2 font-medium'> here for phone feild</h1> */}
             </div>
             <textarea className='ml-6 mt-8 text-sm font-normal border pr-[285px] pb-16 ' placeholder= '   Message'></textarea>
             <button className=' px-5 py-3 border rounded-xl mt-3 ml-[375px] text-white bg-indigo-600 
//              '>Submit</button>
         </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;




















// import React from 'react'
// import "./Footer.css";
// import { useState } from 'react';
// import 'react-phone-input-2/lib/style.css';
// import PhoneInput from 'react-phone-input-2';
// import { Form, Select, Slider } from 'antd';
// import bgimg from '../Assets/citybg.jpg';
// import bg1 from '../Assets/bg1.jpg';
// import cancel from '../Assets/cancel.png';
// import button1 from '../Assets/digitaltransform.png';
// import button2 from '../Assets/ux.png';
// import button3 from '../Assets/bullhorn.png';
// import button4 from '../Assets/innovate.png';
// import button5 from '../Assets/cloudcomputing.png';
// import PhoneNumberField from "./PhoneFeild";
// import { Option } from 'antd/es/mentions';
// import PhoneField from './PhoneFeild2';


// const Sidebar = () => {
//   return (
//     <>
   
//     <div className=' fontTest flex relative '>
        
//         <div className=' fixed  left-[340px]  text-white w-1/3 h-[110vh]'>
//          <img className=" -mt-20 h-full w-full" src={bgimg} alt="" />
//          <div className=' top-0 left-0 absolute '>
//         <h1 className=' text-5xl font-semibold p-2'>Our <br />Offices</h1>
//     <div className='  flex p-2 text-sm font-medium'>
//         <h1> Jaipur:- Plot no.8, Govind Marg, <br />
//         Block-B, Malviya Nagar, Jaipur, <br />
//         Rajasthan, 302017 <br />
//         Phone no.:- +91 9983034111</h1>
//         <img className='rounded-full ml-20' src={bg1} alt="" />
//     </div>

//     <div className=' flex p-2 text-sm font-medium'>
//         <h1> Jaipur:- Plot no.8, Govind Marg, <br />
//         Block-B, Malviya Nagar, Jaipur, <br />
//         Rajasthan, 302017 <br />
//         Phone no.:- +91 9983034111</h1>
//         <img className='rounded-full ml-20' src={bg1} alt="" />
//     </div>

//     <div className=' flex p-2 text-sm font-medium'>
//         <h1> Jaipur:- Plot no.8, Govind Marg, <br />
//         Block-B, Malviya Nagar, Jaipur, <br />
//         Rajasthan, 302017 <br />
//         Phone no.:- +91 9983034111</h1>
//         <img className='rounded-full ml-20' src={bg1} alt="" />
//     </div>

//     <div className=' flex p-2 text-sm font-medium'>
//         <h1> Jaipur:- Plot no.8, Govind Marg, <br />
//         Block-B, Malviya Nagar, Jaipur, <br />
//         Rajasthan, 302017 <br />
//         Phone no.:- +91 9983034111</h1>
//         <img className='rounded-full ml-20' src={bg1} alt="" />
//     </div>
//     </div>
//         </div>

//         <div className=' absolute right-0 z-0 ml-80 h-[150vh] w-[40%]'>
//        <div className=' p-3 ml-3 font-medium flex relative '>
//         <h1>Platform of Your Project?</h1>
//         <img className='size-5 absolute right-5 top-4' src={cancel} alt="" />
//        </div>

//        <div className='mt-3 flex gap-5 justify-evenly'>
//         <button className=' shadow-box font-light text-sm items-center   h-24 w-32  border-gray-500 shadow rounded-lg'>
//         <img className='w-12 ml-10 ' src={button1} alt="" />
//         <h1>Digital Enterprise</h1>
//         </button>
//         <button className='shadow-box font-light text-sm h-24 w-32 border-gray-500 shadow rounded-lg'>
//         <img className='w-12 ml-10 ' src={button2} alt="" />
//         <h1>Digital Experience</h1>
//         </button>
//         <button className='shadow-box font-light text-sm h-24 w-32 border-gray-500 shadow rounded-lg'>
//         <img className='w-12 ml-10 ' src={button3} alt="" />
//         <h1>Digital Marketing</h1>
//         </button>
//        </div>

//        <div className='mt-6 flex gap-12  justify-center'>
//         <button className='shadow-box font-light text-sm h-24 w-32  border-gray-500 shadow rounded-lg'>
//         <img className='w-12 ml-10 ' src={button4} alt="" />
//         <h1>Digital Innovation</h1>
//         </button>
//         <button className='shadow-box font-light text-sm h-24 w-32 border-gray-500 shadow rounded-lg'>
//         <img className='w-12 ml-10 ' src={button5} alt="" />
//         <h1>Cloud Transformation</h1>
//         </button>
//        </div>

//         <div>
//             <h1 className='p-3 mt-5 ml-2 font-medium'> How much time</h1>
//             <Slider
//             className='mx-6 '
//     defaultValue={30}
//     included={true}
//     step={10}
//     dots={true}
//     key={ 'value'  }
//     // range={{ min: 10, max: 100 }}
//     tipFormatter={(value) => `${value} days`}
//     tooltip={{
//       open: true,
//     }}
//   />
// </div>
//         <div>
//             <h1 className= ' p-3 mt-5 ml-2 font-medium'>Set your budget</h1>
//             <Slider
//             className='mx-6'
//              range={{ draggableTrack: true }} 
//              defaultValue={[15000, 70000]}
//              included={true}
//              step={10}
//              min={100}
//              max={100000}
//              key={ 'value'  }
             
//              tipFormatter={ (value) => `$ ${value} `}
//              tooltip={{
//                 // open: true,
//               }}
              
//               />
//         </div>

//         <h1 className= ' p-3 mt-5 ml-2 font-medium text-sm'>Fill the form and get an estimate</h1>
//         <form action="">
//             <div className=' flex pl-6 gap-[83px]'>
//                 <input className='border py-1' type="text" placeholder='  Name*' />
//                 <input className='border py-1' type="text" placeholder='    Email*' />
//             </div>
//               <div>
//             <select className='border justify-start  pr-72 py-2 mt-8 ml-6 font-medium' name="" id="">
//               <option className='' value="">--Select Country--</option>
//               <option value="1">USA</option>
//               <option value="2">UK</option>
//               <option value="3">India</option>
//               <option value="4">Other</option>
//             </select>
//             </div>
//             <div className=''>
//               <PhoneField/>
//            {/* <h1 className='p-3 mt-5 ml-2 font-medium'> here for phone feild</h1> */}
//             </div>
//             <textarea className='ml-6 mt-8 text-sm font-normal border pr-[285px] pb-16 ' placeholder= '   Message'></textarea>
//             <button className=' px-5 py-3 border rounded-xl mt-3 ml-[375px] text-white bg-indigo-600 
//              '>Submit</button>
//         </form>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Sidebar;