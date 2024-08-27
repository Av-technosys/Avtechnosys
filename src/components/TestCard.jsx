import React, { useState } from "react";
import "./Footer.css";
import TestImg from "../Assets/text.png";
import TestImg2 from "../Assets/rajhut.jpg";
import Carousel from "react-simply-carousel";

const ImageWithBorders = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            userSelect: "none",
            backgroundColor : "#1c1c1e",
          },
        }}
        autoplay
        speed={10000}
        centerMode
        infinite={true}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
      >
        <Card name="Justin" desgination="developer" desc="This website project ran smoothly and Akansha was quick to answer any questions I had. The newly launched website  has helped our marketing and lead generation efforts" profileImg={TestImg} />
        <Card name="lavesh 2" desgination="developer 2" desc="wsxfdgchbm,bj fhytjk fjy sdjh fvkhriy vjkh. gliu rfjvbjy ,rfu 6kfvj,ku6 r " profileImg={TestImg2} />
        <Card name="lavesh" desgination="developer" desc="wsxfdgchbm,bj fhytjk fjy sdjh fvkhriy vjkh. gliu rfjvbjy ,rfu 6kfvj,ku6 r " profileImg={TestImg} />

      </Carousel>
    </>
  );
};

const Card = ({ desc, name, desgination, profileImg }) => {
  return (
  <div className="bg-[#1c1c1e] pt-10">
    <div class="flex h-[400] w-[60vw] mx-4 p-4 border-2 rounded-3xl bg-[#1c1c1e]">
      <div>
        <p className="text-white text-xs p-4 mt-5">
          "{desc}" <br />
        </p>
      </div>
      <div class="relative size-72 flex justify-center items-center  ">
        <div class="absolute right-0 top-0 w-1/3 border-t-2"></div>
        <div class="absolute right-0 top-0 h-1/3 border-l-2"></div>
        <div class="absolute left-0 bottom-0 w-1/3 border-t-2"></div>
        <div class="absolute left-0 bottom-0 h-1/3 border-r-2"></div>
        <img src={profileImg} alt="" className="" />
          
      </div>
      <div className="bg-[#1c1c1e] size-fit absolute left- top-52 ">
        <h1 className="text-white text-xl pt-4 pl-4">{name}</h1>
        <p className="text-white text-xs pl-4 ">{desgination}</p>
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

{
  /* m-6 mt-10 ml-20 mb-14 */
}
//    </div>
//    </>
//   )
// }

// export default TestCard


