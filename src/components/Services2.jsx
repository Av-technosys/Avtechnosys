import React from 'react'
import "./Footer.css";
import Vect1 from '../Assets/vector1.png';
import ImgTwo from '../Assets/service2.jpeg';
import Gif2 from '../Assets/Gif2.gif';

const Services2 = () => {
  return (
   <>
   <div className='text-5xl font-bold lg:pt-20 pt-10 lg:mx-[5.5rem] bg-[#1c1c1e] text-white h-40 '>
        < hr className='' />
    </div>
    
    <div className=' fontTest flex h-96 -mt-6 bg-[#1c1c1e] '>
        <div className=' lg:ml-[5.5rem] ml-10 h-9 w-3 bg-white rounded-tl-3xl rounded-br-3xl'> </div>
        <div className='-mt-2 ml-[2px] lg:mr-0 mr-2 h-9 w-3 bg-white rounded-tl-3xl rounded-br-3xl'></div>
        <div className='lg:pl-44   text-white'> 
            <h1 className='text-[2.5rem] font-semibold'>
                Digital Experience
            </h1>
            <p className=' text-[1rem] font-semibold lg:pt-16'>
            Creating Digital Products and Experiences Centered Around the <br />
User. Our team comprises top-tier creative thinkers, UX architects, <br />
and solution finders, dedicated to excelling in Branding, <br />
Web/App/Mobile UI/UX. <br />
            </p>
        </div>
        <div className=' lg:ml-20 object-fill  h-40 w-72  '>
            <img src= {ImgTwo} alt=""  />
        </div>
    </div>

    <div className=' fontTest flex lg:ml-[2.5rem] lg:h-72 h-60 lg:-mt-24 -mt-5 bg-[#1c1c1e] '>
        <div className='lg:pl-10 pl-5 lg:pt-16  lg:-mt-0 mt-10 mr-10 '>
            <img className='size-16' src={Vect1}  alt="" />
            <button className='text-white text-[1rem] font-semibold'>
            Read <span>more</span> 
        </button>
        </div >
        <div className=' lg:ml-24 mb-40  lg:mt-0 mt-10 h-40  w-72 overflow-hidden justify-center items-center' >
                <img className=' w-full object-cover h-full' src={Gif2} alt=""  />

        </div>
    </div>
   </>
  )
}

export default Services2
