import React from 'react';
import "./Footer.css";
import Map1 from '../Assets/map1.svg'
import Map2 from '../Assets/map2.svg'

const Location = () => {
  return (
    <>
    <div className='fontTest lg:h-[100vh] h-96 lg:pt-10 lg:pb-8 lg:-mb-0 -mb-28 lg:text-[4rem] text-3xl bg-[#1c1c1e] font-semibold text-white '>
       <h1 className=' lg:ml-[5.5rem] ml-[2rem] '>
       Find us on World Map
       </h1>
  
    <div className=' absolute mt-14'>
        <img className='opacity-100 hover:opacity-0' src={Map1}  alt="" /> 
    </div>
    <div className=' mt-14  opacity-0 hover:opacity-100 duration-700'>
    <img className=' relative ' src={Map2}  alt="" />
    </div>
  </div>
    </>
  )
}

export default Location
