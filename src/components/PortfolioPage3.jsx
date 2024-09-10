import React from "react";
import finz from "../Assets/finz.jpg";
import saaskart from "../Assets/saaskart.jpg";
import reno from "../Assets/Reno.jpg";
import rajhut from "../Assets/rajhut.jpg";
import renoquotes1 from "../Assets/renoquotes1.png";
import renoquotes from "../Assets/renoquotes.svg";
import figma from "../Assets/figma (1).svg";
import ai from "../Assets/Adode ai.svg";
import ps from "../Assets/photo.svg";
import tech1 from "../Assets/saastech1.svg";
import tech2 from "../Assets/saastech2.svg";
import renotech1 from "../Assets/renotech1.svg";
import renotech2 from "../Assets/renotech2.svg";
import renotech3 from "../Assets/renotech3.svg";
import tech6 from "../Assets/fixtech5.svg";
import tech7 from "../Assets/fixtech7.svg";
import tech8 from "../Assets/fixtech8.svg";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const PortfolioPage3 = () => {
  return (
    <>
      <hr className="bg-white text-white" />
      <div className=" bg-[#1c1c1e] lg:overflow-hidden lg:h-[270vh] h-[290vh] ">
        {/* saaskart img */}
        <div className=" flex w-full lg:pt-10">
          <img
            src={renoquotes}
            alt=""
            className=" lg:ml-10 ml-4 lg:w-64 w-32 lg:h-40 h-32"
          />
          <img src={renoquotes1} alt="" className="lg:ml-80 -ml-40 " />
        </div>
        <div className="text-white h-24 lg:ml-14 ml-4 lg:w-[50%] lg:-mt-80 -mt-20  ">
          <h1 className=" lg:text-4xl text-3xl font-semibold">
            Project Brief{" "}
          </h1>
          <p className="lg:text-xl  lg:font-semibold mt-7 ">
          RenoQuotes provide trustworthy contractors for renovation 
projects. They help with any type of project ranging from 
general home improvement and construction to roofing and 
landscaping.
          </p>
          <button className="mt-7 relative border-2 py-1.5 pl-2 text-xl font-medium pr-8 border-white rounded-lg">
            Visit Site{" "}
            <ArrowOutwardRoundedIcon className="absolute right-0 top-2  " />{" "}
          </button>
        </div>

        <div className="flex lg:mt-72 mt-36 text-white   lg:ml-14 ml-4">
          <div className=" lg:text-3xl font-semibold h-fit lg:w-[90vw] w-[20vw]  ">
            
            Design Tools Used
            <div className="lg:flex gap-5 grid  mt-5">
              <img src={figma} alt="" />
              <img src={ai} alt="" />
              <img src={ps} alt="" />
            </div>
          </div>

          <div className="lg:text-3xl text-xl font-semibold  lg:ml-0 ml-10">
            {" "}
            Solutions
            <h1 className="lg:mt-6 mt-2 font-normal"> End User Features </h1>
            <ul className="list-disc lg:text-2xl text-xl font-normal ml-5 mt-5">
              <li className="">
                {" "}
                This user friendly app allows users to buy product smoothly.
              </li>
              <li> Community section to post content</li>
              <li> Membership section </li>
              <li>  Informative blogs  </li>
            </ul>
            <h1 className="lg:mt-6 mt-2 font-normal">Seller Portal</h1>
            <ul className="list-disc lg:text-2xl text-xl font-normal ml-5 mt-5">
              <li className="">  Seller onboarding</li>
              <li>Sales matrix</li>
              <li> Product analytics</li>
              <li> Payment settlement</li>
              <li>Delivery management</li>
            </ul>
          </div>
        </div>
        <div className="lg:ml-14 ml-4 text-white lg:-mt-80 mt-5 ">
          <h1 className="lg:text-3xl text-2xl font-semibold">Technology Stack Used</h1>
          <div className=" flex mt-5 lg:size-32 size-20 ">
            <img src={renotech1} alt="" />
            <img src={renotech2} alt="" />
            <img src={renotech3} alt="" />
            <img src={tech1} alt="" />
          </div>
          <div className=" flex lg:-mt-6 -mt-5 lg:size-32 size-20  ">
            <img src={tech6} alt="" />
            <img src={tech2} alt="" />
            
          </div>
        </div>

        <div className="text-white lg:mt-10 lg:ml-14 ml-4">
          <h1 className="lg:text-3xl  text-2xl font-semibold">Project Breakdown</h1>
          <div className="flex ">
            <ul className="mt-5 lg:text-2xl text-lg lg:w-[36vw] w-[70vw] ">
              <li className="lg:w-[40vw] ">
                {" "}
                <CheckCircleRoundedIcon className="lg:mr-5 mr-2 lg:my-3 " />
                Logo Design
              </li>
              <li>
                <CheckCircleRoundedIcon className="lg:mr-5 mr-2 lg:my-3" />
                UI/UX & Prototyping
              </li>
              <li>
                <CheckCircleRoundedIcon className="lg:mr-5 mr-2 lg:my-3" />
                Web Server - Next.js Apache HTTP
              </li>
              <li className="lg:w-[40vw]">
                <CheckCircleRoundedIcon className="lg:mr-5 mr-2 lg:my-3" />
                Programming Language - Node.js 
              </li>
            </ul>
           <div>
           <ul className="lg:ml-48 ml-2 mt-5 lg:text-2xl text-lg">
              <li className="lg:mr-5 lg:my-3">
                <CheckCircleRoundedIcon className="lg:mr-5 lg:my-3" />JS Framework - React Next.js
              </li>
              <li className="lg:mr-5 lg:my-3">
                <CheckCircleRoundedIcon className="lg:mr-5 lg:my-3" />Security - HSTS
              </li>
            </ul>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage3;
