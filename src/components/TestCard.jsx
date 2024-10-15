import React, { useState } from "react";
import "./Footer.css";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import user1 from "../Assets/earlcan.png";
import user2 from "../Assets/prateek.png";
import user3 from "../Assets/nitin-tavaga.png";
import TestImg2 from "../Assets/rajhut.jpg";
import Carousel from "react-simply-carousel";
import Marquee from "react-fast-marquee";
import "./Marque1.css";

const ImageWithBorders = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <Marquee className="bg-[#1c1c1e] "
        containerProps={{
          style: {
            width: "100%",
            userSelect: "none",
            backgroundColor :"", 
          },
        }}
        autoplay={true}
        speed={100}
    
        infinite={true}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
      >
        <Card name="— Earl" desgination="S4 Digi, Digital Marketing" desc="AV Technosys helped us turn our ideas into a functional digital solution. Their team was reliable and supportive throughout the process" profileImg={user1} />
        <Card name="— Nitin" desgination="Tavaga, Stock Consulatncy" desc="Our app has significantly improved user engagement. The AV Technosys team delivered a quality product that met our needs efficiently." profileImg={user3} />
        <Card name="— Prateek" desgination="Saaskart, Saas Company" desc= "We threw some wild ideas at AV Technosys, and they turned them into features we didn’t even know we needed! Fast, efficient, and a blast to work with." profileImg={user2} />

      </Marquee>
    </>
  );
};

const Card = ({ desc, name, desgination, profileImg }) => {
  return (
  <div className="bg-[#1c1c1e]  fontTest py-10 overflow-hidden">
    <div class="lg:flex lg:h-[400] h-72 lg:w-[60vw] w-[130vw]  overflow-hidden lg:mx-10 mx-4 p-4 border-2 rounded-3xl  ">
      <div className="lg:w-[60%] w-[50%] ">
        <p className="text-white text-wrap leading-6  overflow-hidden lg:text-[1rem] lg:font-medium text-xs p-4 mt-5">
          <FormatQuoteIcon className="-mt-3 -ml-3 rotate-180"/>{desc}<FormatQuoteIcon className="-mt-3 lg:mr-3 mr-0"/> <br/>
        </p>
      </div>
      {/* <div class="relative size-72 flex justify-center items-center   overflow-hidden"> */}
      <div class="relative lg:w-[40%]  lg:-mt-0 -mt-44 lg:ml-0 ml-64  h-72 flex justify-center rounded-2xl items-center   overflow-hidden">
        <div class="absolute right-2 top-2  rounded-sm lg:w-[210px] border-t-4"></div>
        <div class="absolute right-2 top-2  rounded-sm lg:h-[210px] border-l-4"></div>
        <div class="absolute left-2  bottom-2 rounded-sm lg:w-[210px] border-t-4"></div>
        <div class="absolute left-2  bottom-2 rounded-sm lg:h-[210px] border-r-4"></div>
        <img  src={profileImg} alt="" className="" />
          
      </div>
      <div className="bg-[#1c1c1e] size-fit absolute left- top-52  overflow-hidden">
        <h1 className="text-white lg:text-xl text-md font-medium pt-4 pl-4">{name}</h1>
        <p className="text-white lg:text-md text-sm pl-4 ">{desgination}</p>
      </div>
    </div>
    </div>
  );
};

export default ImageWithBorders;

// import React from 'react'

// const TestCard = () => {
//   return (
//    <>

//    <div className=' flex h-[250px] w-1/2 rounded-3xl border border-white bg-[#1c1c1e]'>
//     <div>
//         <p className='text-white text-xs p-4'>
//         "This website project ran smoothly and Akansha was quick <br />
//  to answer any questions I had. The newly launched website <br />
//  has helped our marketing and lead generation efforts" <br />
//         </p>
//     </div>
//     <div className='  rounded-tr-lg rounded-bl-lg border-4 border-white m-10 p-4 '>
//     <div className='border-white border-2 rounded-2xl ' >
//         <img className='rounded-full h-32 w-40 object-fill' src='https://via.placeholder.com/100' alt='user-img' />
//     </div>
//     </div>

// {
//   /* m-6 mt-10 ml-20 mb-14 */
// }
//    </div>
//    </>
//   )
// }

// export default TestCard


