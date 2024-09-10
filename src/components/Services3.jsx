import React from "react";
import "./Footer.css";
import Vect1 from "../Assets/vector1.png";
import ImgThree from "../Assets/Service3.jpg";
import Gif3 from "../Assets/Gif3.gif";

const Services3 = () => {
  return (
    <>
      <div className="text-5xl font-bold pt-20 lg:mx-[5.5rem] bg-[#1c1c1e] text-white h-40 ">
        <hr />
      </div>

      <div className="fontTest flex h-96   -mt-4 bg-[#1c1c1e] ">
        <div className="lg:ml-[5.5rem] ml-10 h-9  w-3  bg-white rounded-tl-3xl rounded-br-3xl">
          {" "}
        </div>
        <div className="-mt-2 ml-[2px] h-9 w-3  bg-white rounded-tl-3xl rounded-br-3xl"></div>
        <div className="-mt-1 ml-[2px] lg:mr-0 mr-3 h-9 w-3  bg-white rounded-tl-3xl rounded-br-3xl"></div>
        <div className=" lg:pl-40 text-white">
          <h1 className="text-[2.5rem] font-semibold">Digital Marketing</h1>
          <p className=" text-[1rem] font-semibold lg:pt-16">
            We provide intelligent, resilient, and cutting-edge <br />omnichannel{" "}
            experiences through personalized <br />digital solutions, leveraging{" "} 
            customer insights to <br />enhance engagement and satisfaction.
          </p>
        </div>
        <div className="  lg:ml-52 object-fill h-40  w-72 overflow-hidden justify-center items-center ">
          <img className="w-full object-cover h-full" src={ImgThree} alt="" />
        </div>
      </div>

      <div className="fontTest flex lg:h-72 h-60 lg:-mt-36   lg:pt-10 bg-[#1c1c1e] ">
        <div className="lg:pl-[5.5rem] pl-5 lg:pt-16 ">
          <img className="size-16" src={Vect1} alt="" />
          <button className="text-white text-[1rem] font-semibold">
            Read <span>more</span>
          </button>
        </div>
        <div className=" lg:ml-28 ml-3 mb-48   h-40  w-72 ">
          <img className=" w-full object-cover h-full" src={Gif3} alt="" />
        </div>
      </div>
    </>
  );
};

export default Services3;
