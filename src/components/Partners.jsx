import React from 'react'
import './Footer.css';
import Marquee from "react-fast-marquee";
import img1 from '../Assets/finz.jpg';
import img2 from '../Assets/fixpapa.jpg';
import img3 from '../Assets/saaskart.jpg';
import img4 from '../Assets/Reno.jpg';
import img5 from '../Assets/rajhut.jpg';
import arrow from '../Assets/rightarrow.png';
const Partners = () => {
  return (
    <>
       <div className="fontTest">
        <h2 className=" pl-[80px] pt-10  pb-8 text-3xl bg-[#1c1c1e] font-bold text-white">
          Our Partners
        </h2>
        <div className="bg-[#1c1c1e]">
          
            <hr className=" bg-gray-400  lg:w-4/5 mx-20" />
          
        </div>
      </div>
      <div className="sm:h-32  w-full text-white   bg-[#1c1c1e] md:mb-3 mb-3">
        <div className=' lg:opacity-0 hover:opacity-100 transform hover:scale-y-100 transition duration-500'>
        <p className="lg:fontTest lg:pt-4 lg:pl-60 ">
        At AV Technosys, our mission is to leverage innovative technology and industry <br /> 
expertise to propel businesses forward. Our vision is to cultivate a vibrant workplace,<br />
empowering individuals to thrive and drive global success <br />
        </p>
        <div className=' absolute flex'>
          <img className='relative lg:left-60 size-4 top-3 ' src={arrow} alt="" />
        <button className=" fontTest lg:ml-60 mt-2 "> Contact Us</button>
        </div>
        </div>
      </div>


    
 <div className='flex justify-evenly list-none -mt-3 bg-[#1c1c1e] p-7 '>

    <Marquee  speed={100} loop={100}>
     

<div className='h-32 w-52 pt-2 size-fit justify-center text-center items-center bg-[#1c1c1e] border border-white rounded-3xl '>
  <img  className="p-5 " src={img1} alt="Finz" />
  </div>
  <div className='pl-24 '>
  <div className='h-32 w-52 pt-4 size-fit justify-center text-center items-center bg-[#1c1c1e] border border-white rounded-3xl '>
  <img  className="p-5 " src={img2} alt="Finz" />
  </div>
  </div>
  <div className='pl-24'>
  <div className='h-32 w-52 pt-2 size-fit justify-center text-center items-center bg-[#1c1c1e] border border-white rounded-3xl '>
  <img  className="p-5 " src={img3} alt="Finz" />
  </div>
  </div>
  <div className='pl-24'>
  <div className='h-32 w-52 pt-4  size-fit justify-center text-center items-center bg-[#1c1c1e] border border-white rounded-3xl '>
  <img  className="p-5 " src={img4} alt="Finz" />
  </div>
  </div>
  <div className=' pl-24 pr-24'>
  <div className='h-32 w-52  size-fit justify-center text-center items-center bg-[#1c1c1e] border border-white rounded-3xl '>
  <img  className="p-5 " src={img5} alt="Finz" />
  </div>
  </div>

  
  </Marquee>
  </div>
  
    </>
  )
}

export default Partners