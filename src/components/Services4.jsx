import React from "react";
import "./Footer.css";
import Vect1 from "../Assets/vector1.png";
import ImgFour from "../Assets/service4.jpg";
import Gif4 from "../Assets/Gif4.gif";

const Services4 = () => {
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
      <div className='h-9 w-3 bg-white rounded-tl-3xl rounded-br-3xl'></div>
      <div className='h-9 w-3 -mt-4 bg-white rounded-tl-3xl rounded-br-3xl'></div> 
    </div>

   {/* <div class="w-[10%] pr-2"><div class="h-9 w-3 rounded-br-full rounded-ss-full bg-white"></div></div>
   <div class="w-[10%] pr-2 lg:-ml-[4.3rem] "><div class="h-9 w-3 rounded-br-full rounded-ss-full bg-white"></div></div>
   <div class="w-[10%] pr-2 lg:-ml-[4.3rem] "><div class="h-9 w-3 rounded-br-full rounded-ss-full bg-white"></div></div>
   <div class="w-[10%] pr-2 lg:-ml-[4.3rem] "><div class="h-9 w-3 rounded-br-full rounded-ss-full bg-white"></div></div> */}
   <div class="w-[70%] text-xs md:text-lg lg:text-2xl lg:ml-[11rem]">
     <h3 className='lg:text-[2.5rem] font-semibold lg:pb-10 pb-2'>Digital Innovation</h3>
     <p className='lg:text-[1rem] lg:font-semibold'>  Harnessing state-of-the-art technology, innovative 
             ideation, and the prowess of digital innovation to drive 
             forward next-generation business transformation.</p>
   </div>
   <div>
     <img src={ImgFour} width="300" />
   </div>
   <div></div>
 </div>
 <div class="flex gap-4  lg:pt-32 lg:ml-[4rem] md:gap-0 items-center">
   <div class="w-[10%] lg:text-[1rem] text-[10px] font-semibold "><img src={Vect1} width="65" />Read more</div>

   <div class=" lg:ml-[8rem]">
     <img className='lg:h-44 h-20 lg:w-72 w-52 ' src={Gif4} width="" height="" />
   </div>
  </div>
</div>
   </>
 )
}

export default Services4

// const Services4 = () => {
//   return (
//     <>
//       <div className="text-5xl font-bold pt-20 lg:px-[5.5rem] bg-[#1c1c1e] text-white h-40 ">
//         <hr />
//       </div>

//       <div className="fontTest flex  h-96 -mt-4 bg-[#1c1c1e] ">
//         <div className=" ml-10 h-9 w-3 lg:ml-[5.5rem] bg-white rounded-tl-3xl rounded-br-3xl">
//           {" "}
//         </div>
//         <div className="-mt-2 ml-[2px] h-9 w-3 bg-white rounded-tl-3xl rounded-br-3xl"></div>
//         <div className="-mt-1 ml-[2px] h-9 w-3 bg-white rounded-tl-3xl rounded-br-3xl"></div>
//         <div className="-mt-2 ml-[2px] h-9 w-3  lg:mr-0 bg-white rounded-tl-3xl rounded-br-3xl"></div>
//         <div className="lg:pl-36  text-white">
//           <h1 className="text-[2.5rem] font-semibold">Digital Innovation</h1>
//           <p className="text-[1rem] font-semibold lg:pt-16">
//             Harnessing state-of-the-art technology, innovative <br />
//             ideation, and the prowess of digital innovation to drive <br />
//             forward next-generation business transformation. <br />
//           </p>
//         </div>
//         <div className=" lg:ml-48 object-fill h-40  w-72 overflow-hidden justify-center items-center ">
//           <img className="w-full object-cover h-full" src={ImgFour} alt="" />
//         </div>
//       </div>

//       <div className="fontTest flex lg:h-72 h-60 lg:-mt-36 lg:pt-10 -mt-20 bg-[#1c1c1e] ">
//         <div className="pl-10 lg:ml-[3rem]  lg:pt-16 lg:mr-0 ">
//           <img className="size-16 " src={Vect1} alt="" />
//           <button className="text-white text-[1rem] font-semibold">
//             Read <span>more</span>
//           </button>
//         </div>
//         <div className=" lg:ml-28 ml:3 lg:mb-48   h-40  w-72 overflow-hidden justify-center items-center">
//           <img className=" w-full object-cover h-full" src={Gif4} alt="" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services4;
