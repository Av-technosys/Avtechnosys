import React from "react";
import saaskart from "../Assets/saaskart.jpg";
import reno from "../Assets/Reno.jpg";
import raajhaat from "../Assets/raajhaat.svg";
import raajhaat1 from "../Assets/rajhut1.png";
import finz1 from "../Assets/finz1.png";
import finz from "../Assets/finz.svg";
import figma from "../Assets/figma (1).svg";
import ai from "../Assets/Adode ai.svg";
import ps from "../Assets/photo.svg";
import tech2 from "../Assets/saastech2.svg";
import finztech1 from "../Assets/finztech1.svg";
import finztech2 from "../Assets/finztech2.svg";
import finztech3 from "../Assets/finztech3.svg";
import finztech4 from "../Assets/finztech4.svg";
import finztech5 from "../Assets/finztech5.svg";
import finztech6 from "../Assets/finztech6.svg";
import finztech7 from "../Assets/finztech7.svg";
import tech7 from "../Assets/fixtech7.svg";
import tech8 from "../Assets/fixtech8.svg";
import renotech3 from "../Assets/renotech3.svg";
import tavago from "../Assets/tavago.svg";
import tavaga from "../Assets/tavaga.png";

import tavago1 from "../Assets/tavago1.png";
import tavagalogo from "../Assets/tavaga-logo_1.png";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const PortfolioPage6 = () => {
  return (
    <>
      <hr className="bg-white text-white" />
      <div className=" bg-[#1c1c1e] lg:overflow-hidden pb-10 ">
        {/* saaskart img */}
        <div className=" flex justify-between w-full lg:pt-10">
          <img
            src={tavaga}
            alt=""
            className=" lg:ml-10 ml-4 lg:w-64 w-32  h-20"
          />
          <img src={tavago1} alt="" className="lg: -ml-40 " />
        </div>
        <div className="text-white h-24 lg:ml-14 ml-4 lg:w-[50%] lg:-mt-80 -mt-20  ">
          <h1 className=" lg:text-[32px] text-3xl font-semibold">
            Project Brief{" "}
          </h1>
          <p className="lg:text-[1rem]  lg:font-normal mt-7 ">
            Tavaga offers personalized rob-advisory services provide precise
            investment portfolios as per individual needs with automated
            algorithms it manages investments to achieve financial goals
            efficiently. Services include customized portfolio management tax
            planning insurance review and specialized offerings for NRIs.
          </p>
          <button className="mt-7 relative border-2 py-1.5 pl-2 text-[24] font-medium pr-8 border-white rounded-lg">
            <a href="https://tavaga.com/" target="_blank">
              Visit Site{" "}
            </a>
            <ArrowOutwardRoundedIcon className="absolute right-0 top-2  " />{" "}
          </button>
        </div>

        <div className="flex lg:mt-72 mt-52 text-white   lg:ml-14 ml-4">
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
            <h1 className="lg:mt-6 mt-2 lg:text-[32px] font-normal">
              {" "}
              Customer App / Web
            </h1>
            <ul className="list-disc lg:text-[1rem] text-xl font-normal ml-5 mt-5">
              <li className="">
                {" "}
                This user friendly app allows users to buy product smoothly
              </li>
              <li> Community section to post content</li>
              <li> Membership section </li>
              <li>Informative blogs </li>
            </ul>
            <h1 className="lg:mt-6 mt-2 font-normal">Seller Portal </h1>
            <ul className="list-disc lg:text-[1rem] text-xl font-normal ml-5 mt-5">
              <li className=""> Seller onboarding</li>
              <li> Sales matrix</li>
              <li> Product analytics</li>
              <li> Payment settlement</li>
              <li> Delivery management</li>
            </ul>
          </div>
        </div>
        <div className="lg:ml-14 ml-4 text-white lg:-mt-72 mt-5 ">
          <h1 className="lg:text-3xl text-[32px] font-semibold">
            Technology Stack Used
          </h1>
          <div className=" flex mt-5 lg:size-32 size-20 ">
            <img src={finztech1} alt="" />
            <img src={finztech2} alt="" />
            <img src={finztech3} alt="" />
            <img src={finztech4} alt="" />
          </div>
          <div className=" flex lg:-mt-6 -mt-5 lg:size-32 size-20  ">
            <img src={finztech5} alt="" />
            <img src={finztech6} alt="" />
            <img src={finztech7} alt="" />
            <img src={tech2} alt="" />
          </div>
        </div>

        <div className="text-white lg:ml-14 lg:mt-10 ml-4 ">
          <h1 className="lg:text-[32px] text-2xl font-semibold">
            Project Breakdown
          </h1>
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
                WordPress - WooCommerce Elementor, Contact Form 7 Small Ballon
                Instagram Feed, Site Kit
              </li>
              <li className="lg:mr-1 lg:my-">
                <CheckCircleRoundedIcon className="lg:mr-1 lg:my-" /> UI
                Framework - Bootstrap
              </li>
            </ul>
            <div>
              <ul className="lg:ml-48 ml-2 mt-5 lg:text-2xl text-lg"></ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage6;
