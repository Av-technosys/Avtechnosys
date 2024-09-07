import React from "react";
import Marquee from "react-fast-marquee";
import "./Marque1.css";

const Marque1 = () => {
  return (
    <>
  
      <div className="fontTest bg-[#1c1c1e] lg:h-[400px] h-52 ">
      <Marquee direction="left" speed={100}>
        <h1 className=" lg:text-9xl text-3xl lg:h-[150px] text-white font-bold"> Digital Experience, Digital Enterprise, Cloud transfomation</h1>
        </Marquee>
        <Marquee direction="right" speed={100}>
        <h1 className=" lg:text-9xl text-3xl lg:h-[250px]  text-[#1c1c1e] font-bold pt-20 " id="h1">Digital Marketing, Digital Innovation</h1>
        </Marquee>
      </div>
    </>
  );
};

export default Marque1;