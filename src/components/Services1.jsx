import React from 'react'
import "./Footer.css";
import ImgOne from "../Assets/service1.jpg";
import Vect1 from "../Assets/vector1.png";
import Gif1 from "../Assets/Gif1.gif";

const Services1 = () => {
  return (
    <>

<div className='fontTest bg-[#1c1c1e] text-white lg:text-[4rem] text-[2rem] font-semibold'>
      <h1 className=' pb-10 lg:pl-[5.5rem] '>
        Our Services
      </h1>
      <hr className=' lg:mt-0 mt-10 lg:mx-[5.5rem]' />
    </div>

    <div class="fontTest lg:pt-0 pt-10  min-h-screen  bg-[#1c1c1e] text-white space-y-7 p-8">
    
  <div class="lg:flex lg:gap-0 grid grid-cols-1 gap-10 lg:pt-5 justify-between lg:mx-[4rem] ">
    <div class="w-[10%] pr-2"><div class="h-8 w-3 rounded-br-full rounded-ss-full bg-white"></div></div>
    <div class="w-[70%] text-xs md:text-lg lg:text-2xl lg:ml-[10rem]">
      <h3 className='lg:text-[2.5rem] font-semibold lg:pb-10 pb-2'>Web Development 
      <p className='lg:text-[1rem] lg:font-semibold leading-10'> Crafting Digital Masterpieces (No Paintbrush Required)
      </p>
      </h3>
      <p className='lg:text-[1rem] lg:font-semibold'> Your website is your digital stage! We make it bold, fast, and so stunning it’ll leave your visitors questioning their life choices! <br /></p>
    </div>
    <div>
      <img src={ImgOne} width="300" />
    </div>
    <div></div>
  </div>
  <div class="flex gap-4  lg:pt-32 pt-10 lg:ml-[4rem] md:gap-0 items-center">
    <div class="w-[10%] lg:text-[1rem] text-[10px] font-semibold "><img src={Vect1} width="65" />Read more</div>

    <div class=" lg:ml-[8rem]">
      <img className='lg:h-40 h-20 lg:w-72 w-52 ' src={Gif1} width="" height="" />
    </div>
  </div>
</div>
    </>
  )
}

export default Services1




















// import React from "react";
// import "./Footer.css";
// import ImgOne from "../Assets/service1.jpg";
// import Vect1 from "../Assets/vector1.png";
// import Gif1 from "../Assets/Gif1.gif";

// const Services1 = () => {
//   return (
//     <>
//       <div className="FontTest text-[2rem] lg:text-[4rem] lg:pl-[5.5rem] lg:-mt-[5.5rem] font-semibold bg-[#1c1c1e] text-white  ">
//         <h1 className="pb-16">Our Services</h1>
//         <hr className="lg:mr-[5.5rem]" />
//       </div>


//       <div className=" fontTest flex justify-between  h-96 pt-8 lg:px-[5rem] bg-[#1c1c1e] ">
//         <div className="ml-10 lg:ml-2 h-9 w-3 bg-white rounded-tl-3xl rounded-br-3xl ">
//           {" "}
//         </div>
//         <div className="lg:ml-[12.8rem]  mt-2 ml-2 text-white">
//           <h1 className="lg:text-[2.5rem] text-[1.5rem] font-semibold">Digital Enterprise</h1>
//           <p className=" text-[1rem] font-semibold  lg:pt-16">
//             We specialize in optimizing and upgrading the functionality and{" "}
//             <br />
//             performance of your mobile, web, and desktop applications, <br />
//             leveraging contemporary programming languages and platforms to{" "}
//             <br />
//             ensure enhanced value and seamless migration. <br />
//           </p>
//         </div>
//         <div className="object-fill h-40 w-72  ">
//         {/* <div className=" lg:ml-16 mt-2 object-fill h-40 w-72  "> */}
//           <img src={ImgOne} alt="" />
//         </div>
//       </div>



//       <div className=" fontTest lg:flex lg:justify-center lg:h-72 h-60 lg:py-8 pt-10 lg:-mt-20 bg-[#1c1c1e] flex justify-end">
    
//         <div className="absolute lg:mt-32 left-[5.5rem]">
//         {/* <div className="lg:pl-10 lg:pt-16 lg:-mt-10 -mt-20 ml-10"> */}
//           <img className="size-16" src={Vect1} alt="" />
//           <button className="text-white text-[1rem] font-semibold">
//             Read <span>more</span>
//           </button>
//         </div>
        
//         <img className="lg:-translate-x-[35%] -translate-x-0 lg:ml-0 ml-10 object-cover min-w-fit
//          " src={Gif1} alt="" width={350}   />
         
        
//       </div>
//     </>
//   );
// };

// export default Services1;
