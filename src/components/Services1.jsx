import React from 'react'
import "./Footer.css";
import ImgOne from '../Assets/service1.jpg';
import Vect1 from '../Assets/vector1.png';
import Gif1 from '../Assets/Gif1.gif';

const Services1 = () => {
  return (
    <>
    <div className='FontTest text-5xl font-bold p-6 bg-[#1c1c1e] text-white h-40 '>
        <h1 className='pb-16'>
            Our Services
        </h1>
        <hr />
    </div>
    
    <div className=' fontTest flex h-96 pt-8 bg-[#1c1c1e] '>
        <div className=' ml-10 h-9 w-3 bg-white rounded-tl-3xl rounded-br-3xl'> </div>
        <div className='pl-64  text-white'> 
            <h1 className='text-3xl font-bold'>
                Digital Enterprise
            </h1>
            <p className=' text-sm pt-6'>
            We specialize in optimizing and upgrading the functionality and <br />
performance of your mobile, web, and desktop applications, <br /> 
leveraging contemporary programming languages and platforms to <br />
ensure enhanced value and seamless migration. <br />
            </p>
        </div>
        <div className=' ml-32 object-fill h-40 w-72  '>
            <img src= {ImgOne} alt=""  />
        </div>
    </div>

    <div className=' fontTest flex h-72 -mt-24 bg-[#1c1c1e] '>
    <div className='pl-10 pt-16 '>
            <img className='size-16' src={Vect1}  alt="" />
            <button className='text-white font-medium text-xs'>
            Read <span>more</span> 
        </button>
        </div >
      
        <div className=' ml-48 mb-48   h-40  w-72 overflow-hidden justify-center items-center' >
                <img className=' w-full object-cover h-full' src={Gif1} alt=""  />
        </div>
    </div>
    </>
  )
}

export default Services1
