import React from 'react'
 import "./Footer.css";
 import Vect1 from '../Assets/vector1.png';
 import ImgTwo from '../Assets/service2.jpeg';
 import Gif2 from '../Assets/Gif2.gif';

const Services2 = () => {
  return (
    <>



    <div class="fontTest min-h-screen bg-[#1c1c1e] text-white space-y-7 p-8">
    <div className="">
    <hr className='lg:mx-[3.5rem] mt-5 ' />
    </div>
  <div class="lg:flex lg:gap-0 grid grid-cols-1 gap-10 lg:pt-5 justify-between lg:mx-[4rem] ">
    <div className='flex gap-0.5'>
      <div className='h-9 w-3 bg-white rounded-tl-3xl rounded-br-3xl'></div>      
      <div className='h-9 w-3 -mt-4 bg-white rounded-tl-3xl rounded-br-3xl'></div> 
    </div>
    {/* <div class="w-[10%] pr-2  "><div class="h-9 w-3 rounded-br-full rounded-ss-full bg-white"></div></div>
    <div class="w-[10%] pr-2 lg:-ml-[4.5rem] "><div class="h-9 w-3 rounded-br-full rounded-ss-full bg-white"></div></div> */}
    
    <div class="w-[70%] text-xs md:text-lg lg:text-2xl lg:ml-[13.5rem]">
      <h3 className='lg:text-[2.5rem] font-semibold lg:pb-10 pb-2'>Digital Experience
      <p className='lg:text-[1rem] lg:font-semibold leading-10'> Your Business, In Their Pockets (And a Dash of Fun)
      </p>
      </h3>
      <p className='lg:text-[1rem] lg:font-semibold'> Let’s create apps that are so engaging, your users will forget they even have friends! <br /></p>
    </div>
    <div>
      <img src={ImgTwo} width="300" />
    </div>
    <div></div>
  </div>
  <div class="flex gap-4  lg:pt-32 lg:ml-[4rem] md:gap-0 items-center">
    <div class="w-[10%] lg:text-[1rem] text-[10px] font-semibold "><img src={Vect1} width="65" />Read more</div>

    <div class=" lg:ml-[8rem]">
      <img className='lg:h-44 h-20 lg:w-72 w-52 ' src={Gif2} width="" height="" />
    </div>
  </div>
</div>
    </>
  )
}

export default Services2













// import React from 'react'
// import "./Footer.css";
// import Vect1 from '../Assets/vector1.png';
// import ImgTwo from '../Assets/service2.jpeg';
// import Gif2 from '../Assets/Gif2.gif';

// const Services2 = () => {
//   return (
//    <>
//    <div className='text-5xl font-bold lg:pt-20 pt-10 lg:px-[5.5rem] bg-[#1c1c1e] text-white h-40 '>
//         < hr className='' />
//     </div>
    
//     <div className=' fontTest flex h-96  justify-between  -mt-6 bg-[#1c1c1e] '>
//         <div className='flex gap-1 lg:ml-[3rem]   '>
//         <div className='   ml-10 h-9 w-3 bg-white rounded-tl-3xl rounded-br-3xl'> </div>
//         <div className='-mt-2  lg:mr-0 mr-2 h-9 w-3 bg-white rounded-tl-3xl rounded-br-3xl'></div>
//         </div>
//         <div className=' lg:ml-[6rem] mt-2 ml-2  text-white'> 
       
//             <h1 className='text-[2.5rem] font-semibold'>
//                 Digital Experience
//             </h1>
//             <p className=' text-[1rem] font-semibold lg:pt-16'>
//             Creating Digital Products and Experiences Centered Around the <br />
// User. Our team comprises top-tier creative thinkers, UX architects, <br />
// and solution finders, dedicated to excelling in Branding, <br />
// Web/App/Mobile UI/UX. <br />
//             </p>
//         </div>
//         <div className='  object-fill  h-40 w-72  '>
//             <img className='lg:-ml-20' src= {ImgTwo} alt=""  />
//         </div>
//     </div>

//     <div className="fontTest flex   lg:h h-60 lg:-mt-36   lg:pt-10 bg-[#1c1c1e] ">
//         <div className="lg:pl-[5.5rem]  pl-5 lg:pt-16 ">
//           <img className="size-16" src={Vect1} alt="" />
//           <button className="text-white text-[1rem] font-semibold">
//             Read <span>more</span>
//           </button>
//         </div>
//         <div className=" lg: ml-3  mb-48   h-40  w-72 ">
//           <img className=" w-full object-cover " src={Gif2} alt="" />
//         </div>
//       </div>
//    </>
//   )
// }

// export default Services2
