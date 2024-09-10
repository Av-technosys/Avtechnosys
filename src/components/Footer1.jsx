import React from 'react'
import "./Footer.css";

const Footer1 = () => {
  return (
    <>
    <footer className=' fontTest bg-[#1c1c1e] lg:pt-[4rem] text-white'>
      <div className='p-6 lg:pb-[4rem] '>
        <h4 className='font-semibold lg:text[4rem] text-2xl md:text-6xl py-3 lg:py-0 ml-3 lg:ml-[3.5rem]'>Contact Us</h4>
        <h6 className='text-xl sm:text-3xl lg:ml-[3.2rem] md:text-[5rem] lg:pt-[5.5rem] text-[#787878] py-6'>sales@avtechnosys.com</h6>
      </div>
      <hr />
      <div className='flex fontTest flex-col md:flex-row p-6 text-[1rem] font-semibold space-y-5 md:space-y-0'>
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
                <div className='hidden peer-hover:flex w-[10rem] text-xs absolute translate-x-[40%] top-[40%] justify-start items-center ml-10 p-2'>
                  +91 76345 67235
                </div>
              </div>
              <div className='relative'>
                <span className='peer cursor-pointer'>Address</span>
                <div className='hidden peer-hover:flex w-[10rem] text-xs absolute translate-x-[40%] -translate-y-[90%] justify-center items-center p-2 ml-10'>
                  Plot no. 8, Govind Marg, Block-B, Malviya Nagar, Jaiput, Rajasthan 302017
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
        <h3 className='text-3xl md:text-4xl lg:text-[7rem] xl:text-8xl w-[90%] hover:scale-75 duration-500 hover:opacity-50 text-center'>Driving Digital Innovation, Powering Marketing Success</h3>
      </div>
    </footer>
    </>
  )
}

export default Footer1