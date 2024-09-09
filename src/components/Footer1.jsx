import React from 'react'
import "./Footer.css";

const Footer1 = () => {
  return (
    <>
    <footer className=' fontTest bg-[#1c1c1e] text-white'>
      <div className='p-6 '>
        <h4 className='font-semibold text-2xl md:text-6xl py-3 lg:py-6 ml-3 lg:ml-10'>Contact Us</h4>
        <h6 className='text-xl sm:text-3xl lg:ml-10 md:text-6xl font-normal text-gray-400 py-8'>sales@avtechnosys.com</h6>
      </div>
      <hr />
      <div className='flex flex-col md:flex-row p-6 text-sm space-y-5 md:space-y-0'>
        <div className='md:w-1/2 flex items-center'>
          <p className='md:w-4/5 lg:ml-32'>It takes more than just a brilliant idea to transform <br />
            it into the greatest solution, you also need the <br />
            proper team to help you realize your vision. <br /></p>
        </div>
        <div className='w-full md:w-1/2 flex justify-between md:justify-around'>
          <div className='flex relative'>
            <div className='p-2 border-r flex flex-col justify-around'>
              <div className='relative'>
                <span className='peer cursor-pointer'>Contact</span>
                <div className='hidden peer-hover:flex w-[10rem] text-xs absolute translate-x-[40%] top-[40%] justify-start items-center p-2'>
                  +91 76345 67235
                </div>
              </div>
              <div className='relative'>
                <span className='peer cursor-pointer'>Address</span>
                <div className='hidden peer-hover:flex w-[10rem] text-xs absolute translate-x-[40%] -translate-y-[90%] justify-center items-center p-2'>
                  Driving Digital Innovation, Powering Marketing
                </div>
              </div>
            </div>
          </div>
          <div className='p-2 border-l'>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex justify-center py-10'>
        <h3 className='text-3xl md:text-4xl lg:text-5xl xl:text-8xl w-[90%] hover:scale-75 duration-500 hover:opacity-50 text-center'>Driving Digital Innovation, Powering Marketing Success</h3>
      </div>
    </footer>
    </>
  )
}

export default Footer1