import React from "react";
import "./Footer.css";
import Vect1 from "../Assets/vector1.png";
import ImgFour from "../Assets/service4.jpg";
import Gif4 from "../Assets/Gif4.gif";

const Services4 = () => {
  return (
    <>
      <div className="text-5xl font-bold pt-20 lg:mx-[5.5rem] bg-[#1c1c1e] text-white h-40 ">
        <hr />
      </div>

      <div className="fontTest flex  h-96 -mt-4 bg-[#1c1c1e] ">
        <div className=" ml-10 h-9 w-3 lg:ml-[5.5rem] bg-white rounded-tl-3xl rounded-br-3xl">
          {" "}
        </div>
        <div className="-mt-2 ml-[2px] h-9 w-3 bg-white rounded-tl-3xl rounded-br-3xl"></div>
        <div className="-mt-1 ml-[2px] h-9 w-3 bg-white rounded-tl-3xl rounded-br-3xl"></div>
        <div className="-mt-2 ml-[2px] h-9 w-3  lg:mr-0 bg-white rounded-tl-3xl rounded-br-3xl"></div>
        <div className="lg:pl-36  text-white">
          <h1 className="text-[2.5rem] font-semibold">Digital Innovation</h1>
          <p className="text-[1rem] font-semibold lg:pt-16">
            Harnessing state-of-the-art technology, innovative <br />
            ideation, and the prowess of digital innovation to drive <br />
            forward next-generation business transformation. <br />
          </p>
        </div>
        <div className=" lg:ml-48 object-fill h-40  w-72 overflow-hidden justify-center items-center ">
          <img className="w-full object-cover h-full" src={ImgFour} alt="" />
        </div>
      </div>

      <div className="fontTest flex lg:h-72 h-60 lg:-mt-36 lg:pt-10 -mt-20 bg-[#1c1c1e] ">
        <div className="pl-10 lg:ml-[3rem]  lg:pt-16 lg:mr-0 ">
          <img className="size-16 " src={Vect1} alt="" />
          <button className="text-white text-[1rem] font-semibold">
            Read <span>more</span>
          </button>
        </div>
        <div className=" lg:ml-28 ml:3 lg:mb-48   h-40  w-72 overflow-hidden justify-center items-center">
          <img className=" w-full object-cover h-full" src={Gif4} alt="" />
        </div>
      </div>
    </>
  );
};

export default Services4;
