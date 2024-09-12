import React from "react";
import "./Footer.css";
import finz from "../Assets/finz.jpg";
import saaskart from "../Assets/saaskart.jpg";
import reno from "../Assets/Reno.jpg";
import rajhut from "../Assets/rajhut.jpg";
import fixpapa1 from "../Assets/fixpapa1.png";
import fixpapa from "../Assets/fixpapa.svg";
import figma from "../Assets/figma (1).svg";
import ai from "../Assets/Adode ai.svg";
import ps from "../Assets/photo.svg";
import tech1 from "../Assets/saastech1.svg";
import tech2 from "../Assets/saastech2.svg";
import tech3 from "../Assets/fixtech1.svg";
import tech4 from "../Assets/saastech4.svg";
import tech5 from "../Assets/saastech5.svg";
import tech6 from "../Assets/fixtech5.svg";
import tech7 from "../Assets/fixtech7.svg";
import tech8 from "../Assets/fixtech8.svg";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const PortfolioPage2 = () => {
  return (
    <>
      <hr className="bg-white text-white" />
      <div className=" fontTest bg-[#1c1c1e] lg:overflow-hidden pb-10 ">
        {/* saaskart img */}
        <div className=" flex w-full justify-between lg:pt-10">
          <img
            src={fixpapa}
            alt=""
            className=" lg:ml-10 ml-4 lg:w-64 w-32 lg:h-40 h-32"
          />
          <img src={fixpapa1} alt="" className="lg: -ml-40 " />
        </div>
        <div className="text-white h-24 lg:ml-14 ml-4 lg:w-[50%] lg:-mt-80 -mt-20  ">
          <h1 className=" lg:text-[36px] text-3xl font-semibold">
            Project Brief{" "}
          </h1>
          <p className="lg:text-[24]  lg:font- mt-7 ">
          FixPapa offers a comprehensive solution for all your IT 
hardware needs. From repairing and servicing to purchasing
 and responsibly disposing of e-waste we ensure hassle-free
 transactions while promoting environmental sustainability. 
Explore our wide range of products including refurbished 
laptops desktops printers servers projectors and CCTV 
along with low price and open box deals for budget-friendly 
options.
          </p>
          <button className="mt-7 relative border-2 py-1.5 pl-2 text-[24] font-medium pr-8 border-white rounded-lg">
            Visit Site{" "}
            <ArrowOutwardRoundedIcon className="absolute right-0 top-2  " />{" "}
          </button>
        </div>

        <div className="flex lg:mt-72 mt-64 text-white   lg:ml-14 ml-4">
          <div className=" lg:text-[32px] font-semibold h-fit lg:w-[90vw] w-[20vw]  ">
            
            Design Tools Used
            <div className="lg:flex gap-5 grid  mt-5">
              <img src={figma} alt="" />
              <img src={ai} alt="" />
              <img src={ps} alt="" />
            </div>
          </div>

          <div className="lg:text-[32px] text-xl font-semibold  lg:ml-0 ml-10">
            {" "}
            Solutions
            <h1 className="lg:mt-6 mt-2 font-normal"> Web Design And Development</h1>
            <ul className="list-disc lg:text-[24px] text-xl font-normal ml-5 mt-5">
              <li className="">
                {" "}
                This creative website allows users to buy and sell products online.
              </li>
              <li> Users can filter product by brand</li>
              <li> Users can rent products from website </li>
            </ul>
            <h1 className="lg:mt-6 mt-2 text-[32px]  font-medium">Seller Portal</h1>
            <ul className="list-disc lg:text-2xl text-xl font-normal ml-5 mt-5">
              <li className=""> Sellers can list there products easily.</li>
              <li>Sales matrix</li>
              <li> Product analytics</li>
              <li> Payment settlement</li>
              <li>Delivery management</li>
            </ul>
          </div>
        </div>
        <div className="lg:ml-14 ml-4 text-white lg:-mt-80 mt-5 ">
          <h1 className="lg:text-[32px] text-2xl font-semibold">Technology Stack Used</h1>
          <div className=" flex mt-5 lg:size-32 size-20 ">
            <img src={tech4} alt="" />
            <img src={tech5} alt="" />
            <img src={tech3} alt="" />
            <img src={tech1} alt="" />
          </div>
          <div className=" flex lg:-mt-6 -mt-5 lg:size-32 size-20  ">
            <img src={tech6} alt="" />
            <img src={tech2} alt="" />
            <img src={tech7} alt="" />
            <img src={tech8} alt="" />
          </div>
        </div>

        <div className="text-white lg:ml-14 lg:mt-10 ml-4">
          <h1 className="lg:text-[32px] text-2xl font-semibold">Project Breakdown</h1>
          <div className="flex ">
            <ul className="mt-5 lg:text-2xl text-lg lg:w-[36vw] w-[70vw] ">
              <li className="lg:w-[40vw] ">
                {" "}
                <CheckCircleRoundedIcon className="lg:mr-5 mr-2 lg:my-3 " />
                UI/UX & Prototyping
              </li>
              <li>
                <CheckCircleRoundedIcon className="lg:mr-5 mr-2 lg:my-3" />
                Programming language - PHP
              </li>
              <li>
                <CheckCircleRoundedIcon className="lg:mr-5 mr-2 lg:my-3" />
                JS Framework - GSAP
              </li>
              <li className="lg:w-[40vw]">
                <CheckCircleRoundedIcon className="lg:mr-5 mr-2 lg:my-3" />
                WordPress - WooCommerce <span className="ml-10">  Elementor, Contact Form 7 Small Ballon
                   <span className=""/> Instagram Feed,
                 Site Kit</span>
              </li>
            </ul>
           <div>
           <ul className="lg:ml-48 ml-2 mt-5 lg:text-2xl text-lg">
              <li className="lg:mr-5 lg:my-3">
                <CheckCircleRoundedIcon className="lg:mr-5 lg:my-3" /> UI Framework -
                Bootstrap
              </li>
            </ul>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage2;
