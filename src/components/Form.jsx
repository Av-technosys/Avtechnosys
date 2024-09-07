import React from "react";
import "./Footer.css";
const Form = () => {
  return (
    <>
      <div>
        <h2 className="FontTest pl-[80px] pt-10 pb-8 text-5xl bg-[#1c1c1e] font-bold text-white">
          Let's Connect
        </h2>
      </div>
      <form
        action=""
        className=" fontTest bg-[#1c1c1e] text-white text-3xl font-light h-[90vh]"
      >
        <div className="flex flex-wrap p-10  justify-between cursor-auto ">
          <div className="ml-6">
            <br />
            <input
              type="text"
              placeholder="What Is Your name?"
              className="border-2 border-white h-20 bg-[#1c1c1E] border-l-0 border-t-0 outline-none border-r-0  "
            />
          </div>
          <div className="">
            <br />
            <input
              type="text"
              placeholder="What Is Your Email?"
              className="border-2  border-white h-20 bg-[#1c1c1E] border-l-0 border-t-0 outline-none border-r-0  mr-6"
            />
          </div>
        </div>
        <div className="m-14 mt-4   ">
          <br />
          <input
            type="text"
            placeholder="Tell Us About Your Buisness And Scope Of Your Project"
            className="border-2 border-white h-20  bg-[#1c1c1E] border-l-0 border-t-0 outline-none border-r-0 w-full"
          />
        </div>

        <div className=" text-xs relative  ">
          <button className=" p-4 text-black bg-white rounded-lg font-bold border absolute right-14 ">
            Get In Touch
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
