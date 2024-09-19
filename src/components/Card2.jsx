import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import "./Footer.css"; 

const Card2 = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <div className="fontTest bg-[#1c1c1e] text-white ">
        <h1 className="text-white lg:text-[4rem] font-semibold text-2xl pt-[4rem] lg:pl-[5.5rem] pl-5">Why Choose AV?</h1>
        <p className="pt-[2rem] lg:pl-[5.5rem] text-[1rem] pl-5 text-xs">
          Stay Ahead, Stay Secure, Stay Confident.
        </p>
      </div>
      <div className="bg-[#1c1c1e] lg:pl-[5.5rem] lg:pr-[5.5rem]">
        <Carousel
          containerProps={{
            style: {
              width: "100%",
              userSelect: "none",
            },
          }}
          // swipeTreshold={10}
          itemsToShow={4.5}
          infinite={false}
          activeSlideIndex={activeSlide}
          onRequestChange={setActiveSlide}
        >
          <Card Srno="01" Cardtitle="Seamless Experience" Carddata="Seamlessly support coustomers accross chat, email, phone, and social media." />
          <Card Srno="02" Cardtitle=" Real-Time Insights" Carddata="Understand Customer sentiments and issue in real-time, enabling proactive responses " />
          <Card Srno="03" Cardtitle="Growth Friendly" Carddata="Grow your customer support as your buisness grows, without any hitches" />
          <Card Srno="04" Cardtitle="Data Security" Carddata="Prioritize customer data protection with our top-tier encryption and security protocols"/>
          <Card Srno="05" Cardtitle="AI Automation" Carddata="Automate routine tasks and responses, ensuring faster and consistent support" />
          <Card Srno="06" Cardtitle="Effortless Teamwork" Carddata="Foster stronger team communication with built-in collaboration tools, unified responses" />
        </Carousel>
      </div>
    </>
  );
};

const Card = ({ Srno, Cardtitle, Carddata }) => {
  return (
    <div class="fontTest group flex lg:-mt-[3.5rem] -mt-5 m-5 lg:py-24 py-10 w-full items-center justify-center">
      <div class="relative flex h-[300px] w-[250px]">
        <div>
          <div class="absolute left-[6px] top-[8px] flex h-[45px] w-[46px] items-center justify-center rounded-br-lg border-b border-r text-white  text-xl">
            / {Srno}{" "}
          </div>
          <div class="absolute right-[0px] top-[-1px] h-[45px] w-[199px] rounded-tl-lg rounded-tr-lg border-x border-t"></div>
        </div>
        <div class="absolute top-[52px] h-10 w-10 rounded-tl-lg border-l border-t"></div>
        <div class="absolute right-[0px] top-[40px] h-[30px] w-[1px] border-r"></div>
        <div class="absolute -bottom-2 flex flex-col gap-4 h-[251px] w-full items-center justify-center rounded-b-lg border-x border-b text-white">
          <span class="text-[1.5rem] duration-500 translate-y-10 group-hover:-translate-y-5">{Cardtitle}</span>
          <p className=" text-[1rem] text-center px-[5%]  opacity-0 group-hover:opacity-100 duration-500 translate-y-6 group-hover:translate-y-0"> {Carddata}</p>
        </div>
          
      </div>
    </div>
  );
};

export default Card2;
