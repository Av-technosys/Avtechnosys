import React from 'react'
import "./Footer.css";
import Vect1 from '../Assets/vector1.png';
import ImgTwo from '../Assets/service2.jpeg';
import Gif2 from '../Assets/Gif2.gif';

const Services2 = () => {
  return (
   <>
   <div className='text-5xl font-bold pt-16 bg-[#1c1c1e] text-white h-40 '>
        < hr />
    </div>
    
    <div className=' fontTest flex h-96 -mt-6 bg-[#1c1c1e] '>
        <div className=' ml-10 h-9 w-3 bg-white rounded-tl-3xl rounded-br-3xl'> </div>
        <div className='-mt-2 ml-[2px] lg:mr-0 mr-2 h-9 w-3 bg-white rounded-tl-3xl rounded-br-3xl'></div>
        <div className='lg:pl-64   text-white'> 
            <h1 className='text-3xl font-bold'>
                Digital Experience
            </h1>
            <p className=' text-sm lg:pt-6'>
            Creating Digital Products and Experiences Centered Around the <br />
User. Our team comprises top-tier creative thinkers, UX architects, <br />
and solution finders, dedicated to excelling in Branding, <br />
Web/App/Mobile UI/UX. <br />
            </p>
        </div>
        <div className=' lg:ml-32 object-fill h-36 w-60  '>
            <img src= {ImgTwo} alt=""  />
        </div>
    </div>

    <div className=' fontTest flex h-72 -mt-36 bg-[#1c1c1e] '>
        <div className='pl-10 lg:pt-16  lg:-mt-0 mr-10 '>
            <img className='size-16' src={Vect1}  alt="" />
            <button className='text-white font-medium text-xs'>
            Read <span>more</span> 
        </button>
        </div >
        <div className=' ml-48 mb-48   h-40  w-72 overflow-hidden justify-center items-center' >
                <img className=' w-full object-cover h-full' src={Gif2} alt=""  />

        </div>
    </div>
   </>
  )
}

export default Services2
