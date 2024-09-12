import React from "react";
import "./Footer.css";
import finz from "../Assets/finz.jpg";
import fixpapa from "../Assets/fixpapa.jpg";
import saaskart from "../Assets/saaskart.jpg";
import reno from "../Assets/Reno.jpg";
import rajhut from "../Assets/rajhut.jpg";
import saaskart1 from "../Assets/saaskart1.png";
import saaskart2 from "../Assets/saaskart2.svg";
import figma from "../Assets/figma (1).svg";
import ai from "../Assets/Adode ai.svg";
import ps from "../Assets/photo.svg";
import tech1 from "../Assets/saastech1.svg";
import tech2 from "../Assets/saastech2.svg";
import tech3 from "../Assets/saastech3.svg";
import tech4 from "../Assets/saastech4.svg";
import tech5 from "../Assets/saastech5.svg";
import tech6 from "../Assets/saastech6.svg";
import tech7 from "../Assets/saastech7.svg";
import tech8 from "../Assets/saastech8.svg";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const PortfolioPage1 = () => {
  return (
    <>
      <hr className="bg-white text-white" />
      <div className=" bg-[#1c1c1e] fontTest lg:overflow-hidden overflow-y-hidden pb-10 ">
        {/* saaskart img */}
        <div className=" flex justify-between w-full  lg:pt-10">
          <img
            src={saaskart2}
            alt=""
            className=" lg:ml-10 ml-4 lg:w-64 w-32 lg:h-40 h-32"
          />
          <img src={saaskart1} alt="" className="lg: -ml-40 " />
        </div>
        <div className="text-white h-24 lg:ml-14 ml-4 lg:w-[45%] lg:-mt-72 -mt-20  ">
          <h1 className=" lg:text-[36px] text-3xl font-semibold">
            Project Brief{" "}
          </h1>
          <p className="lg:text-[1rem]  lg:font-normal mt-7 ">
            Saaskart India's leading SaaS discovery platform providing
            data-driven insights and exclusive deals for buyers. With a focus on
            learningK excellenceK adaptabilityK and diversity Saaskart
            streamlines the software buying process while fostering innovation
            and inclusivity within the industry.
          </p>
          <button className="mt-7 relative border-2 py-1.5 pl-2 text-[1rem] font-medium pr-8 border-white rounded-lg">
            Visit Site{" "}
            <ArrowOutwardRoundedIcon className="absolute right-0 top-2  " />{" "}
          </button>
        </div>

        <div className="flex lg:mt-60 mt-48 text-white   lg:ml-14 ml-4">
          <div className=" lg:text-[32px] font-semibold h-fit lg:w-[90vw] w-[20vw]  ">
            
            Design Tools Used
            <div className="lg:flex gap-5 grid  mt-5">
              <img src={figma} alt="" />
              <img src={ai} alt="" />
              <img src={ps} alt="" />
            </div>
          </div>

          <div className="lg:text-[32px] text-xl font-semibold  lg:ml-56 ml-10">
            {" "}
            Solutions
            <h1 className="lg:mt-6 mt-2  font-normal"> End User Features</h1>
            <ul className="list-disc lg:text-[1rem] text-xl font-normal ml-5 mt-5">
              <li className="">
                {" "}
                This creative website showcases Saaskarts best features provide
                solutions to buyers & seller investment solutions collaboration
                to partners.
              </li>
              <li> Marketplace to see and buy product</li>
              <li> Informative blogs </li>
            </ul>
          </div>
        </div>
        <div className="lg:ml-14 ml-4 text-white lg:-mt-20 mt-5 ">
          <h1 className="lg:text-3xl text-[32px] font-semibold">Technology Stack Used</h1>
          <div className=" flex mt-5 lg:size-32 size-20 ">
            <img src={tech1} alt="" />
            <img src={tech2} alt="" />
            <img src={tech3} alt="" />
            <img src={tech4} alt="" />
          </div>
          <div className=" flex lg:-mt-6 -mt-5 lg:size-32 size-20  ">
            <img src={tech5} alt="" />
            <img src={tech6} alt="" />
            <img src={tech7} alt="" />
            <img src={tech8} alt="" />
          </div>
        </div>

        <div className="text-white lg:ml-14 ml-4">
          <h1 className="lg:text-3xl text-2xl font-semibold">Project Breakdown</h1>
          <div className="flex gap-72 ">
            <ul className=" mt-5 lg:text-[1rem] text-lg lg:w-[36vw] w-[60vw] ">
              <h1><CheckCircleRoundedIcon className="lg: mr-1 " />
            Logo Design</h1>
            <li className="w-56 ">
              </li>
               <CheckCircleRoundedIcon className="lg: mr-1 lg:my-" />
                UI/UX & Prototyping
              <li>
               
              </li>
              <li>
                <CheckCircleRoundedIcon className="lg: mr-1 lg:my-" />
                Database - MySQL
              </li>


              <h1><CheckCircleRoundedIcon className="lg: mr-1 lg:my- " /> JS Libraries - jQuery,  <span className=""> Underscore.js, etc.,</span> </h1>
              
              {/* <li>
                <CheckCircleRoundedIcon className="lg:mr-5 mr-2 lg:my-3" />
                JS Libraries - jQuery,
                <span className="ml-10"> Underscore.js, etc.,</span>
              </li> */}




<li className="lg:mr-5 lg:my-">
                <CheckCircleRoundedIcon className="lg: mr-1 lg:my-" /> UI Framework -
                Bootstrap
              </li>
              <div classname="flex  ">
                
              <p  className=""><CheckCircleRoundedIcon className="lg: mr-1 lg:" />Elementor (page builder) WordPress, WooCommerce, <span className="ml-7">Elementor.</span></p> 
              </div> 
            </ul>
           <div>
           <ul className="lg: relative  mt-5 lg:text-[1rem] text-lg">
              

            </ul>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage1;
