import React from "react";
import "./Footer.css";
import Marquee from "react-fast-marquee";
import img1 from "../Assets/finz.jpg";
import img2 from "../Assets/fixpapa.jpg";
import img3 from "../Assets/saaskart.jpg";
import img4 from "../Assets/Reno.jpg";
import img5 from "../Assets/rajhut.jpg";
import arrow from "../Assets/rightarrow.png";
import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";

const Partners = () => {
  return (
    <>
      <Snowfall
        color="white" // Snowflake color
        snowflakeCount={150} // Number of snowflakes
      />
      <div className="fontTest">
        <h2 className=" pl-[5.5rem] pt-10  lg:pb-8 text-[2rem] lg:text-[4rem] bg-[#1c1c1e] font-semibold text-white">
          Our Partners
        </h2>
        <div className="bg-[#1c1c1e]">
          <hr className=" bg-gray-400 ml-[5.5rem] mr-[5.5rem] lg: " />
        </div>
      </div>
      <div className="sm:h-32  w-full text-white   bg-[#1c1c1e] md:mb-3 lg:pb-0 pb-10 lg:pl-0 pl-4">
        <div className=" lg:opacity-0 hover:opacity-100 transform hover:scale-y-100 transition duration-500">
          <p className="fontTest lg:pt-4 lg:text-[1rem] lg:pl-24 px-2 lg:mr-40 ">
            At AV Technosys, our mission is to leverage innovative technology
            and industry expertise to propel businesses forward. Our vision is
            to cultivate a vibrant workplace, empowering individuals to thrive
            and drive global success.
          </p>
          <div className=" absolute flex hover:opacity-50  ">
            <img
              className="relative lg:left-24 size-4 top-3 mr-1 duration-75 group-hover:translate-x-10 "
              src={arrow}
              alt=""
            />
            <button className=" fontTest lg:text-[1rem] lg:ml-24 mt-2  ">
              {" "}
              <Link to="/Contact">Contact Us</Link>{" "}
            </button>
            <div></div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly list-none -mt-3 bg-[#1c1c1e] p-7 ">
        <Marquee speed={100} loop={100}>
          <div className="h-32 w-52 pt-2 size-fit justify-center text-center items-center bg-[#1c1c1e] border border-white rounded-3xl ">
            <img className="p-5 " src={img1} alt="Finz" />
          </div>
          <div className="pl-24 ">
            <div className="h-32 w-52 pt-4 size-fit justify-center text-center items-center bg-[#1c1c1e] border border-white rounded-3xl ">
              <img className="p-5 " src={img2} alt="Finz" />
            </div>
          </div>
          <div className="pl-24">
            <div className="h-32 w-52 pt-2 size-fit justify-center text-center items-center bg-[#1c1c1e] border border-white rounded-3xl ">
              <img className="p-5 " src={img3} alt="Finz" />
            </div>
          </div>
          <div className="pl-24">
            <div className="h-32 w-52 pt-4  size-fit justify-center text-center items-center bg-[#1c1c1e] border border-white rounded-3xl ">
              <img className="p-5 " src={img4} alt="Finz" />
            </div>
          </div>
          <div className=" pl-24 pr-24">
            <div className="h-32 w-52  size-fit justify-center text-center items-center bg-[#1c1c1e] border border-white rounded-3xl ">
              <img className="p-5 " src={img5} alt="Finz" />
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Partners;
