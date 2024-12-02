import React from "react";
import "./Footer.css";
import Vect1 from "../Assets/vector1.png";
import ImgThree from "../Assets/Service3.jpg";
import Gif3 from "../Assets/Gif3.gif";

const Services3 = () => {
  return (
    <>
      <div class="fontTest min-h-screen bg-[#1c1c1e] text-white space-y-7 p-8">
        <div className="">
          <hr className="lg:mx-[3.5rem] mt-5 " />
        </div>
        <div class="lg:flex lg:gap-0 grid grid-cols-1 gap-10 lg:pt-5 justify-between lg:mx-[4rem] ">
          <div className="flex gap-0.5">
            <div className="h-9 w-3 bg-white rounded-tl-3xl rounded-br-3xl"></div>
            <div className="h-9 w-3 -mt-4 bg-white rounded-tl-3xl rounded-br-3xl"></div>
            <div className="h-9 w-3 bg-white rounded-tl-3xl rounded-br-3xl"></div>
          </div>
          {/* <div class="w-[10%] pr-2"><div class="h-9 w-3 rounded-br-full rounded-ss-full bg-white"></div></div>
    <div class="w-[10%] pr-2 lg:-ml-[5.1rem] "><div class="h-9 w-3 rounded-br-full rounded-ss-full bg-white"></div></div>
    <div class="w-[10%] pr-2 lg:-ml-[5.1rem] "><div class="h-9 w-3 rounded-br-full rounded-ss-full bg-white"></div></div> */}

          <div class="w-[70%] text-xs md:text-lg lg:text-2xl lg:ml-[12rem]">
            <h3 className="lg:text-[2.5rem] font-semibold lg:pb-10 pb-2">
              Digital Marketing
              <p className="lg:text-[1rem] lg:font-semibold leading-10">
                Turning Clicks into Fans
              </p>
            </h3>
            <p className="lg:text-[1rem] lg:font-semibold">
              {" "}
              We don’t just want clicks; we want fans! Our strategies are so
              compelling, your audience will be nodding along, shouting, ‘Yes!
              This is exactly what I need!’
            </p>
          </div>
          <div>
            <img src={ImgThree} width="200" />
          </div>
          <div></div>
        </div>
        <div class="flex gap-4  lg:pt-20 lg:ml-[4rem] md:gap-0 items-center">
          <div class="w-[10%] lg:text-[1rem] text-[10px] font-semibold ">
            <img src={Vect1} width="65" />
            Read more
          </div>
          <div class=" lg:ml-[8rem]">
            <img
              className="lg:h-44 h-20 lg:w-72 w-52 "
              src={Gif3}
              width=""
              height=""
            />
          </div>
            
        </div>
      </div>
    </>
  );
};

export default Services3;

// import React from "react";
// import "./Footer.css";
// import Vect1 from "../Assets/vector1.png";
// import ImgThree from "../Assets/Service3.jpg";
// import Gif3 from "../Assets/Gif3.gif";

// const Services3 = () => {
//   return (
//     <>
//       <div className="text-5xl font-bold pt-20 lg:px-[5.5rem] bg-[#1c1c1e] text-white h-40 ">
//         <hr />
//       </div>

//       <div className="fontTest flex h-96   -mt-4 bg-[#1c1c1e] ">
//         <div className="lg:ml-[5.5rem] ml-10 h-9  w-3  bg-white rounded-tl-3xl rounded-br-3xl">
//           {" "}
//         </div>
//         <div className="-mt-2 ml-[2px] h-9 w-3  bg-white rounded-tl-3xl rounded-br-3xl"></div>
//         <div className="-mt-1 ml-[2px] lg:mr-0 mr-3 h-9 w-3  bg-white rounded-tl-3xl rounded-br-3xl"></div>
//         <div className=" lg:pl-40 text-white">
//           <h1 className="text-[2.5rem] font-semibold">Digital Marketing</h1>
//           <p className=" text-[1rem] font-semibold lg:pt-16">
//             We provide intelligent, resilient, and cutting-edge <br />omnichannel{" "}
//             experiences through personalized <br />digital solutions, leveraging{" "}
//             customer insights to <br />enhance engagement and satisfaction.
//           </p>
//         </div>
//         <div className="  lg:ml-52 object-fill h-40  w-72 overflow-hidden justify-center items-center ">
//           <img className="w-full object-cover h-full" src={ImgThree} alt="" />
//         </div>
//       </div>

//       <div className="fontTest flex lg:h-72 h-60 lg:-mt-36   lg:pt-10 bg-[#1c1c1e] ">
//         <div className="lg:pl-[5.5rem] pl-5 lg:pt-16 ">
//           <img className="size-16" src={Vect1} alt="" />
//           <button className="text-white text-[1rem] font-semibold">
//             Read <span>more</span>
//           </button>
//         </div>
//         <div className=" lg:ml-28 ml-3 mb-48   h-40  w-72 ">
//           <img className=" w-full object-cover h-full" src={Gif3} alt="" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services3;
