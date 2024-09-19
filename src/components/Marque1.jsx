import React from "react";
import Marquee from "react-fast-marquee";
import "./Marque1.css";

const Marque1 = () => {
  return (
    <>
  
      <div className="fontTest bg-[#1c1c1e] lg:pt-52 lg:h-[ h-52 ">
      <Marquee direction="left" speed={100}>
        <h1 className=" pt-7 lg:text-[7rem] text-3xl lg:h-[170px] text-white font-bold"> Digital Experience, Digital Enterprise, Cloud transfomation</h1>
        </Marquee>
        <Marquee direction="right" speed={100}>
        <h1 className=" lg:text-[7rem] text-3xl lg:h-[250px]  text-[#1c1c1e] font-bold pt-16 " id="h1">Digital Marketing, Digital Innovation</h1>
        </Marquee>
      </div>
    </>
  );
};

export default Marque1;
