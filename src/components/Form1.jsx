import React from 'react'

const Form1 = () => {
  return (
    <>
    <div className='bg-[#1c1c1e] min-h-screen'>
    <h1 className='text-4xl md:text-6xl lg:text-7xl text-white font-semibold p-6 md:p-10 md:ml-12 lg:ml-20'>
        Let's Connect
    </h1>
    <form action='#'>
        <div className='flex flex-col md:flex-row outline-none justify-center md:justify-around gap-7 md:gap-16 lg:gap-30 mt-8 md:mt-12 px-4'>
            <input
                type='text'
                placeholder='What is your name ?'
                className='bg-transparent border-b-2 border-b-gray-200 outline-none text-lg md:text-3xl lg:text-4xl pb-4 pr-8 md:pb-6 md:pr-12 lg:pb-6 lg:pr-16 text-white placeholder-white w-full md:w-auto'
            />
            <input
                type='text'
                placeholder='What is your Email ?'
                className='bg-transparent border-b-2 border-b-gray-200 outline-none text-lg md:text-3xl lg:text-4xl pb-4 pr-8 md:pb-6 md:pr-12 lg:pb-6 lg:pr-16 text-white placeholder-white w-full md:w-auto'
            />
        </div>
        <div className='mt-10 lg:mt-24 md:mt-16 px-4 lg:ml-16'>
            <input
                type='text'
                placeholder='Tell us about your business and scope of the project'
                className='bg-transparent border-b-2 border-b-gray-200 outline-none text-lg md:text-3xl lg:text-4xl pb-4 md:pb-6 text-white placeholder-white w-full lg:w-[95%] '
            />
        </div>
        <div className='mt-14 lg:mt-20 flex justify-end lg:mr-36 '>
            <button
                className='bg-white text-lg md:text-xl lg:text-2xl text-black font-semibold py-6 w-full md:w-auto lg:px-3 md:px-12 rounded-lg'
            >
                Get in Touch
            </button>
        </div>
    </form>
</div>
</>
  )
}

export default Form1