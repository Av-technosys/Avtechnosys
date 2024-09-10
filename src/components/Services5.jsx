import React from "react";
import "./Footer.css";
import Vect1 from "../Assets/vector1.png";
import ImgFive from "../Assets/service5.jpg";
import Gif5 from "../Assets/Gif5.gif";

const Services5 = () => {
  return (
    <>
      <div className="text-5xl font-bold pt-20  lg:mx-[5.5rem] bg-[#1c1c1e] text-white h-40 ">
        <hr />
      </div>

      <div className="fontTest flex h-96 bg-[#1c1c1e] ">
        <div className=" ml-10 h-9 w-3 pr-1 lg:ml-[5.5rem] bg-white rounded-tl-3xl rounded-br-3xl">
          {" "}
        </div>
        <div className="-mt-2 ml-[2px] h-9 pr-1 w-3 bg-white rounded-tl-3xl rounded-br-3xl"></div>
        <div className="-mt-1 ml-[2px] h-9 pr-1 w-3 bg-white rounded-tl-3xl rounded-br-3xl"></div>
        <div className="-mt-2 ml-[2px] h-9 pr-1 w-3 bg-white rounded-tl-3xl rounded-br-3xl"></div>
        <div className="-mt-1 ml-[2px] h-9 w-3 pr-1 mr-3 bg-white rounded-tl-3xl rounded-br-3xl"></div>
        <div className="lg:pl-28 text-white">
          <h1 className="lg:text-[2.5rem] text-xl font-semibold">Cloud Transformation</h1>
          <p className="text-[1rem] font-semibold lg:pt-16">
            Our enterprise cloud consulting services prioritize <br />
            Operational Excellence, Security, Reliability, Performance, <br />
            Efficiency, and Cost Optimization. <br />
          </p>
        </div>
        <div className=" lg:ml-32  object-fill h-52  w-80 overflow-hidden justify-center items-center ">
          <img className="w-full object-cover h-full" src={ImgFive} alt="" />
        </div>
      </div>

      <div className=" fontTest flex lg:h-72 h-60 lg:-mt-36 -mt-20 lg:-mb-0  bg-[#1c1c1e] ">
        <div className="pl-10 lg:pt-16 lg:ml-[3rem] ">
          <img className="size-16 " src={Vect1} alt="" />
          <button className="text-white font-medium text-xs">
            Read <span>more</span>
          </button>
        </div>
        <div className=" lg:ml-32 mb-48 mr-3   h-52  w-80 overflow-hidden justify-center items-center">
          <img className=" w-full object-cover h-full" src={Gif5} alt="" />
        </div>
      </div>
    </>
  );
};

export default Services5;
