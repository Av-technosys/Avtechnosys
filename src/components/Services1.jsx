import React from 'react'
import "./Footer.css";
import ImgOne from '../Assets/service1.jpg';
import Vect1 from '../Assets/vector1.png';
import Gif1 from '../Assets/Gif1.gif';

const Services1 = () => {
  return (
    <>
    <div className='FontTest text-[2rem] lg:text-[4rem] lg:pl-[5.5rem] lg:-mt-[5.5rem] font-semibold bg-[#1c1c1e] text-white  '>
        <h1 className='pb-16'>
            Our Services
        </h1>
        <hr className='lg:mr-[5.5rem]' />
    </div>
    
    <div className=' fontTest lg:flex flex  h-96 pt-8 bg-[#1c1c1e] '>
        <div className='lg:ml-[5.5rem] ml-10 h-9 w-3 bg-white rounded-tl-3xl rounded-br-3xl '> </div>
        <div className='lg:ml-[12.8rem]  mt-2 ml-2 text-white'> 
            <h1 className='text-[2.5rem] font-semibold'>
                Digital Enterprise
            </h1>
            <p className=' text-[1rem] font-semibold  lg:pt-16'>
            We specialize in optimizing and upgrading the functionality and <br />
performance of your mobile, web, and desktop applications, <br /> 
leveraging contemporary programming languages and platforms to <br />
ensure enhanced value and seamless migration. <br />
            </p>
        </div>
        <div className=' lg:ml-16 mt-2 object-fill h-40 w-72  '>
            <img src= {ImgOne} alt=""  />
        </div>
    </div>

    <div className=' fontTest lg:flex lg:justify-start lg:h-72 h-60 lg:pt-24 pt-32 lg:-mt-24 bg-[#1c1c1e] flex justify-end  '>
    <div className='lg:pl-10 lg:pt-16 lg:-mt-10 -mt-20 ml-10'>
            <img className='size-16' src={Vect1}  alt="" />
            <button className='text-white text-[1rem] font-semibold'>
            Read <span>more</span> 
        </button>
        </div >
      
        <div className=' lg:ml-36 mb-48 lg:-mt-10 -mt-20 ml-3 h-40  w-72 overflow-hidden justify-center items-center' >
                <img className=' w-full object-cover h-full' src={Gif1} alt=""  />
        </div>
    </div>
    </>
  )
}

export default Services1
