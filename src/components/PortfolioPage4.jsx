import React from "react";
import finz from "../Assets/finz.jpg";
import saaskart from "../Assets/saaskart.jpg";
import reno from "../Assets/Reno.jpg";
import raajhaat from "../Assets/raajhaat.svg";
import raajhaat1 from "../Assets/rajhut1.png";
import fixpapa1 from "../Assets/fixpapa1.png";
import fixpapa from "../Assets/fixpapa.svg";
import figma from "../Assets/figma (1).svg";
import ai from "../Assets/Adode ai.svg";
import ps from "../Assets/photo.svg";
import tech1 from "../Assets/saastech1.svg";
import tech2 from "../Assets/saastech2.svg";
import tech3 from "../Assets/fixtech1.svg";
import raajtech1 from "../Assets/raajtech1.svg";
import tech5 from "../Assets/saastech5.svg";
import tech6 from "../Assets/fixtech5.svg";
import saastech7 from "../Assets/saastech7.svg";
import tech7 from "../Assets/fixtech7.svg";
import tech8 from "../Assets/fixtech8.svg";
import renotech3 from "../Assets/renotech3.svg";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const PortfolioPage4 = () => {
  return (
    <>
      <hr className="bg-white text-white" />
      <div className=" bg-[#1c1c1e] lg:overflow-hidden pb-10 ">
        {/* saaskart img */}
        <div className=" flex justify-between w-full lg:pt-10">
          <img
            src={raajhaat}
            alt=""
            className=" lg:ml-10 ml-4 lg:w-64 w-32 lg:h-40 h-32"
          />
          <img src={raajhaat1} alt="" className="lg: -ml-40 lg:mt-0 mt-10 " />
        </div>
        <div className="text-white h-24 lg:ml-14 ml-4 lg:w-[50%] lg:-mt-80 -mt-20  ">
          <h1 className=" lg:text-[36px] text-3xl font-semibold">
            Project Brief{" "}
          </h1>
          <p className="lg:text-[1rem]  lg:font-normal mt-7 ">
          RajasthaniHaat showcase the vibrant artistry of Rajasthan. 
Users can explore a diverse range of authentic Rajasthani 
fabrics handicrafts and traditional treasures. Engaging with 
the community users learn about Rajasthan's rich heritage 
and contribute to the empowerment of local artisans.
          </p>
          <button className="mt-7 relative border-2 py-1.5 pl-2 text-[24] font-medium pr-8 border-white rounded-lg">
            Visit Site{" "}
            <ArrowOutwardRoundedIcon className="absolute right-0 top-2  " />{" "}
          </button>
        </div>

        <div className="flex lg:mt-72 mt-48 text-white   lg:ml-14 ml-4">
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
            <h1 className="lg:mt-6 mt-2 lg:text-[32px] font-normal"> Customer App / Web</h1>
            <ul className="list-disc lg:text-[1rem] text-lg font-normal ml-5 mt-5">
              <li className="">
                {" "}
                This user friendly website allows users to access a 
curated selection of genuine Rajasthani authentic 
product
              </li>
              <li>  Diverse range of product</li>
              <li>  Community Engagement empowerment to the 
              Rajasthani artisant educational content </li>
              <li>Secure transactions customer support </li>
            </ul>
            <h1 className="lg:mt-6 mt-2 lg:text-[32px] font-normal">Admin Portal </h1>
            <ul className="list-disc lg:text-[1rem] text-xl font-normal ml-5 mt-5">
              <li className=""> Product Listing</li>
              <li> Price Listing</li>
              <li>  Website analytics - Product & Sell</li>
              <li>  Delivery management</li>
              <li>CMS page content management</li>
            </ul>
          </div>
        </div>
        <div className="lg:ml-14 ml-4 text-white lg:-mt-80 mt-5 ">
          <h1 className="lg:text-3xl text-2xl font-semibold">Technology Stack Used</h1>
          <div className=" flex mt-5 lg:size-32 size-20 ">
            <img src={raajtech1} alt="" />
            <img src={tech2} alt="" />
            <img src={renotech3} alt="" />
            <img src={tech1} alt="" />
          </div>
          <div className=" flex lg:-mt-6 -mt-5 lg:size-32 size-20  ">
            <img src={tech5} alt="" />
            <img src={saastech7} alt="" />            
            <img src={tech8} alt="" />
          </div>
        </div>

        <div className="text-white lg:ml-14 lg:mt-10 ml-4">
          <h1 className="lg:text-3xl text-2xl font-semibold">Project Breakdown</h1>
          <div className="flex ">
            <ul className="mt-5 lg:text-[1rem] text-lg lg:w-[36vw] w-[70vw] ">
              <li className="lg:w-[40vw] ">
                {" "}
                <CheckCircleRoundedIcon className="lg:mr-1 mr-2 lg:my- " />
                UI/UX & Prototyping
              </li>
              <li>
                <CheckCircleRoundedIcon className="lg:mr-1 mr-2 lg:my-" />
                Programming language - PHP
              </li>
              <li>
                <CheckCircleRoundedIcon className="lg:mr-1 mr-2 lg:my-" />
                JS Framework - GSAP
              </li>
              <li className="lg:w-[60vw]">
                <CheckCircleRoundedIcon className="lg:mr-1 mr-2 lg:my-" />
                WordPress - WooCommerce  Elementor,<span className=""> Contact Form 7 Small Ballon Instagram Feed,
                Site Kit</span>
              </li>
              <li className="lg:mr-1 lg:my-">
                <CheckCircleRoundedIcon className="lg:mr-1 lg:my-" /> UI Framework -
                Bootstrap
              </li>
            </ul>
           <div>
           <ul className="lg:ml-48 ml-2 mt-5 lg:text-2xl text-lg">
              
            </ul>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage4;
