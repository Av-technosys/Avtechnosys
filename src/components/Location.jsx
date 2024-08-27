import React from 'react';
import "./Footer.css";
import Map1 from '../Assets/map1.svg'
import Map2 from '../Assets/map2.svg'

const Location = () => {
  return (
    <>
    <div className='fontTest pl-[80px] h-[100vh] pt-10 pb-8 text-4xl bg-[#1c1c1e] font-semibold text-white '>
       <h1>
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
