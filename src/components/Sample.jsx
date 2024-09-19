import React from 'react'
import "./Footer.css";
import ImgOne from "../Assets/service1.jpg";
import Vect1 from "../Assets/vector1.png";
import Gif1 from "../Assets/Gif1.gif";

const Sample = () => {
  return (
    <>

<div className='bg-[#1c1c1e] text-white lg:text-[4rem] text-[2rem] font-semibold'>
      <h1 className=' pb-10 lg:pl-[5.5rem] '>
        Our Services
      </h1>
      <hr className='lg:mx-[5.5rem]' />
    </div>

    <div class="min-h-screenh-screen bg-[#1c1c1e] text-white space-y-7 p-8">
    
  <div class="flex lg:pt-5 justify-between lg:mx-[4rem] ">
    <div class="w-[10%] pr-2"><div class="h-8 w-3 rounded-br-full rounded-ss-full bg-white"></div></div>
    <div class="w-[70%] text-xs md:text-lg lg:text-2xl lg:ml-[10rem]">
      <h3 className='lg:text-[4rem] lg:pb-10 pb-2'>Digital Enterprise</h3>
      <p className='lg:text-[1rem]'> We specialize in optimizing and upgrading the functionality and{" "}
            
            performance of your mobile, web, and desktop applications, 
            leveraging contemporary programming languages and platforms to{" "}
           
            ensure enhanced value and seamless migration. <br /></p>
    </div>
    <div>
      <img src={ImgOne} width="300" />
    </div>
    <div></div>
  </div>
  <div class="flex gap-4  lg:pt-32 lg:ml-[4rem] md:gap-0 items-center">
    <div class="w-[10%] lg:text-[1rem] text-[10px] font-semibold "><img src={Vect1} width="65" />Read more</div>

    <div class=" lg:ml-[8rem]">
      <img className='lg:h-40 h-20 lg:w-72 w-52 ' src={Gif1} width="" height="" />
    </div>
  </div>
</div>
    </>
  )
}

export default Sample