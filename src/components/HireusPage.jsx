import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Select } from "antd";
import Header2 from "./Header2";
import "./Footer.css";
import User1 from "../Assets/Hireuser1.png";
import User2 from "../Assets/Hireuser2.png";
import User3 from "../Assets/Hireuser3.png";
import vector from "../Assets/Vector.svg";
import vector1 from "../Assets/Vector1.svg";
import vector2 from "../Assets/Vector2.svg";
import vector3 from "../Assets/Vector3.svg";
import vector4 from "../Assets/Vector4.svg";
import DoneIcon from "@mui/icons-material/Done";
import { IconCloudDemo } from "./aa";
import Tabs from "./Technologies";
import Footer1 from "./Footer1";
import Form from "./Form";
import Form1 from "./Form1";
import PhoneField from "./PhoneFeild2";
import hirevideo from "../Assets/hirevideo.mp4";

const HireusPage = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Header2 />

      <div className=' "fontTest" bg-[#1c1c1e]  lg:flex grid-rows-1  justify-between lg:px-[3.5rem] px-[1rem] pt-10'>
        <div className="lg:w-[65%]">
          <div className="flex bg-[#1c1c1e]">
            <h1 className="lg:text-[4rem] text-[1.5rem] lg:mt-0 mt-2  text-white font-semibold">
              Hire A Developer
            </h1>
            <div className="rounded-3xl  ">
              <video
                className="rounded-full object-cover h-16 w-44 lg:mt-7 lg:ml-7 ml-3 "
                loop={true}
                muted={true}
                autoPlay={true}
              >
                <source src={hirevideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <h1 className="lg:text-[4rem] text-[1.5rem] lg:mt-0 mt-5 text-white font-semibold">
            {" "}
            For Your Next Project{" "}
          </h1>
          <div className="mt-6">
            <p className="text-[1rem] text-white font-medium">
              Are you looking for top-notch developers to bring your ideas to
              life? Whether you're building a website, mobile app, or custom
              software, our team of skilled developers is here to help. We
              provide experienced developers who are experts in a wide range of
              technologies and frameworks, ready to work on your project and
              deliver quality results.
            </p>
          </div>
        </div>

        <div className="border-none">
          <IconCloudDemo />
          {/* <img src={dev} alt="" width={500} height={500}/> */}
        </div>
      </div>

      <div className=" bg-[#1c1c1e] lg:flex lg:justify-between grid grid-cols-1 justify-items-center self-center lg:px-[5.5rem] px-[1rem] py-20 text-white font-semibold">
        <div className="w-52 h-32 border-2 lg:mb-0 mb-5 border-white rounded-3xl text-center justify-center items-center ">
          <h1 className="text-[2rem] pt-5"> 266+</h1>
          <p className="text-[1rem]">Projects Delivered Till Date </p>
        </div>
        <div className="w-52 h-32 border-2 lg:mb-0 mb-5 border-white rounded-3xl text-center justify-center items-center ">
          <h1 className="text-[2rem] pt-5"> 99+</h1>
          <p className="text-[1rem]">Industry Experience</p>
        </div>
        <div className="w-52 h-32 border-2 lg:mb-0 mb-5 border-white rounded-3xl text-center justify-center items-center ">
          <h1 className="text-[2rem] pt-5"> 250+</h1>
          <p className="text-[1rem]">Experienced Resources </p>
        </div>
        <div className="w-52 h-32 border-2 lg:mb-0 mb-5 border-white rounded-3xl text-center justify-center items-center ">
          <h1 className="text-[2rem] pt-5"> 250+</h1>
          <p className="text-[1rem]">Client Retention </p>
        </div>
      </div>

      <div className="bg-[#1c1c1e] lg:mb-72 w-full">
        <div className="lg:h-[100vh] h-full bg-white -mt-10 lg:rounded-t-[10rem] rounded-t-[6rem] ">
          <h1 className=" lg:ml-[5.5rem] ml-[1rem] lg:text-[4rem] font-[1rem] pt-[50px] lg:leading-[4rem]">
            Every business has <br />
            <span className="text-[#4643CC]">unique security needs</span>
          </h1>
          <p className="lg:ml-[5.5rem] ml-[1rem]  mt-[16px]">
            Flexible pricing plans that are tailored to meet the <br />
            demands of various industries and company sizes
          </p>

          <div className=" fontTest lg:flex lg:justify-between grid gap-10  lg:mx-[5.5rem] mx-[1rem] lg:mt-[56px] pb-20">
            <div className="lg:h-[55vh] lg:w-[25vw] w-full mt-[82px] group lg:hover:h-[60vh] lg:hover:-translate-y-1 border border-black rounded-md lg:hover:hover:bg-black lg:hover:text-white duration-500   ">
              <h1 className="text-[1rem] font-semibold p-2  text-center">
                Hire a contractor
              </h1>
              <p className="px-2 pb-2  text-center">
                Ideal when you want to hire independent <br />
                professionals, with limited compliance.
              </p>
              <hr className="border-black lg:group-hover:border-white" />
              <div className="pl-[43px] pt-[26px] text-[1rem] font-medium">
                <div>
                  <DoneIcon /> Deeply Vetted Talent{" "}
                </div>
                <div>
                  <DoneIcon /> Gen-AI Assessed{" "}
                </div>
                <div>
                  <DoneIcon /> Payout Management
                </div>
                <div>
                  <DoneIcon /> 14 Days Easy Cancellation{" "}
                </div>
                <div>
                  <DoneIcon /> Limited-Period Replacement{" "}
                </div>
                <div>
                  <DoneIcon /> Account Management Support{" "}
                </div>
              </div>

              <div className="pl-[43px] py-5">
                <button
                  className="px-[90px] py-[8px] text-[1rem] lg:group-hover:opacity-100 lg:opacity-0 duration-300  rounded-md font-medium lg:text-black text-white lg:bg-white bg-black"
                  type="primary"
                  onClick={() => setOpen(true)}
                >
                  Hire Now
                </button>

                <Modal
                  open={open}
                  title=""
                  height=""
                  width={700}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={[]}
                >
                  <form action="">
                    <div className="">
                      <div className="flex justify-between px-[2rem] pt-[2rem]">
                        <div>
                          <label className="" htmlFor="">
                            First Name
                          </label>{" "}
                          <br />
                          <input
                            className="mt-[1rem] pr-20 py-2 border-2 border-black rounded-lg"
                            type="text"
                            placeholder="   Enter your First name"
                          />
                        </div>
                        <div>
                          <label htmlFor="">Last Name</label> <br />
                          <input
                            className=" mt-[1rem] pr-20 py-2 border-2 border-black rounded-lg"
                            type="text"
                            placeholder="   Enter your First name"
                          />
                        </div>
                      </div>

                      <div className="mx-[2rem] mt-[2.5rem]">
                        <label htmlFor="">Company Name</label> <br />
                        <input
                          className=" pr-[33vw] py-2 border-2  border-black rounded-lg"
                          type="text"
                          placeholder="   Enter your company name   "
                        />{" "}
                        <br />
                      </div>

                      <div className="mx-[2rem] mt-[2.5rem]">
                        <label htmlFor="">Email</label> <br />
                        <input
                          className=" pr-[33vw] py-2 border-2 border-black rounded-lg"
                          type="email"
                          placeholder="   Enter your email"
                        />
                      </div>
                    </div>

                    <div className="mx-[0.7rem] mt-[2.5rem] ">
                      <PhoneField />
                    </div>

                    <div className="mx-[2rem] mt-[2.5rem]">
                      <label htmlFor="">Choose how you want to hire</label>{" "}
                      <br />
                      <select
                        className=" pr-[28.3vw] border-2 border-black py-2 rounded-lg"
                        placeholder="Choose A Category"
                      >
                        Choose how you want to hire
                        <option value="0">Choose a Category</option>
                        <hr />
                        <option value="1">Hire A Contractor</option> <hr />
                        <option value="2">
                          Hire An Employee On AV Payroll
                        </option>{" "}
                        <hr />
                        <option value="3">
                          Direct-hire On Your Payroll
                        </option>{" "}
                        <hr />
                      </select>
                    </div>
                    <br />

                    <div className="mx-[2rem] mt-[2.5rem]">
                      <label htmlFor="">Which Role are you hiring for?</label>{" "}
                      <br />
                      <select
                        className="pr-[27.8vw] border-2 border-black py-2 rounded-lg"
                        placeholder="Choose A Category"
                      >
                        Choose how you want to hire
                        <option value="0">Choose a Category</option>
                        <hr />
                        <option value="1">Front-End Developer</option> <hr />
                        <option value="2">Back-End Developer</option> <hr />
                        <option value="4">UI/UX Designer</option> <hr />
                        <option value="5">Graphic Designer</option> <hr />
                        <option value="6">Web App Development</option> <hr />
                        <option value="7">Mobile App Development</option> <hr />
                        <option value="8">Database Integration</option> <hr />
                        <option value="7">
                          Shopify/Wordpress Development
                        </option>{" "}
                        <hr />
                      </select>
                    </div>

                    <button
                      className="mt-[2.5rem] ml-[2rem] py-4 px-64 bg-black text-white rounded-lg"
                      key="submit"
                      type="primary"
                      loading={loading}
                      onClick={handleOk}
                    >
                      Get In touch
                    </button>
                  </form>
                </Modal>
              </div>
            </div>

            <div className="lg:h-[85vh] lg:w-[25vw]   text-white bg-black border border-black rounded-xl group lg:hover:h-[90vh] lg:hover:-translate-y-1 lg:hover:bg-white lg:hover:text-black duration-500 ">
              <h1 className="text-[1rem] font-semibold p-2  text-center">
                Hire an employee on AV payroll
              </h1>
              <p className="px-2 pb-2  text-center">
                Full-time Employment, without the hassle <br />
                of payroll management
              </p>
              <hr className="border-white lg:group-hover:border-black" />
              <div className="pl-[43px] pt-[26px] text-[1rem] font-medium">
                <div>
                  <DoneIcon /> Deeply Vetted Talent{" "}
                </div>
                <div>
                  <DoneIcon /> Gen-AI Assessed{" "}
                </div>
                <div>
                  <DoneIcon /> Background Check
                </div>
                <div>
                  <DoneIcon /> Life-Time Replacement{" "}
                </div>
                <div className="flex">
                  <DoneIcon />
                  <div>
                    Post Confirmation, 30 Days <br />
                    Cancellation Policy{" "}
                  </div>{" "}
                </div>
                <div className="flex">
                  <DoneIcon />{" "}
                  <div>
                    Leaves & Employee Benefits <br />
                    Applicable as per Client
                  </div>{" "}
                </div>
                <div>
                  <DoneIcon /> Account Management Support{" "}
                </div>
                <div className="flex">
                  <DoneIcon />{" "}
                  <div>
                    First 3 Months Probation with 2 <br />
                    Weeks Easy-exit Terms
                  </div>{" "}
                </div>
                <div className="flex">
                  <DoneIcon />{" "}
                  <div>
                    Payroll Processing & Compliance <br />
                    Included{" "}
                  </div>
                </div>
              </div>
              <div className="pl-[43px] py-5">
                <button
                  className="px-[90px] py-[8px] text-[1rem] lg:group-hover:opacity-100 lg:opacity-0 duration-300  rounded-md font-medium lg:text-white text-black lg:bg-black bg-white "
                  type="primary"
                  onClick={() => setOpen(true)}
                >
                  Hire Now
                </button>

                <Modal
                  open={open}
                  title=""
                  height=""
                  width={700}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={[]}
                >
                  <form action="">
                    <div className="">
                      <div className="flex justify-between px-[2rem] pt-[2rem]">
                        <div>
                          <label className="" htmlFor="">
                            First Name
                          </label>{" "}
                          <br />
                          <input
                            className="mt-[1rem] pr-20 py-2 border-2 border-black rounded-lg"
                            type="text"
                            placeholder="   Enter your First name"
                          />
                        </div>
                        <div>
                          <label htmlFor="">Last Name</label> <br />
                          <input
                            className=" mt-[1rem] pr-20 py-2 border-2 border-black rounded-lg"
                            type="text"
                            placeholder="   Enter your First name"
                          />
                        </div>
                      </div>

                      <div className="mx-[2rem] mt-[2.5rem]">
                        <label htmlFor="">Company Name</label> <br />
                        <input
                          className=" pr-[33vw] py-2 border-2  border-black rounded-lg"
                          type="text"
                          placeholder="   Enter your company name   "
                        />{" "}
                        <br />
                      </div>

                      <div className="mx-[2rem] mt-[2.5rem]">
                        <label htmlFor="">Email</label> <br />
                        <input
                          className=" pr-[33vw] py-2 border-2 border-black rounded-lg"
                          type="email"
                          placeholder="   Enter your email"
                        />
                      </div>
                    </div>

                    <div className="mx-[0.7rem] mt-[2.5rem] ">
                      <PhoneField />
                    </div>

                    <div className="mx-[2rem] mt-[2.5rem]">
                      <label htmlFor="">Choose how you want to hire</label>{" "}
                      <br />
                      <select
                        className=" pr-[28.3vw] border-2 border-black py-2 rounded-lg"
                        placeholder="Choose A Category"
                      >
                        Choose how you want to hire
                        <option value="0">Choose a Category</option>
                        <hr />
                        <option value="1">Hire A Contractor</option> <hr />
                        <option value="2">
                          Hire An Employee On AV Payroll
                        </option>{" "}
                        <hr />
                        <option value="3">
                          Direct-hire On Your Payroll
                        </option>{" "}
                        <hr />
                      </select>
                    </div>
                    <br />

                    <div className="mx-[2rem] mt-[2.5rem]">
                      <label htmlFor="">Which Role are you hiring for?</label>{" "}
                      <br />
                      <select
                        className="pr-[27.8vw] border-2 border-black py-2 rounded-lg"
                        placeholder="Choose A Category"
                      >
                        Choose how you want to hire
                        <option value="0">Choose a Category</option>
                        <hr />
                        <option value="1">Front-End Developer</option> <hr />
                        <option value="2">Back-End Developer</option> <hr />
                        <option value="4">UI/UX Designer</option> <hr />
                        <option value="5">Graphic Designer</option> <hr />
                        <option value="6">Web App Development</option> <hr />
                        <option value="7">Mobile App Development</option> <hr />
                        <option value="8">Database Integration</option> <hr />
                        <option value="7">
                          Shopify/Wordpress Development
                        </option>{" "}
                        <hr />
                      </select>
                    </div>

                    <button
                      className="mt-[2.5rem] ml-[2rem] py-4 px-64 bg-black text-white rounded-lg"
                      key="submit"
                      type="primary"
                      loading={loading}
                      onClick={handleOk}
                    >
                      Get In touch
                    </button>
                  </form>
                </Modal>
              </div>
            </div>

            <div className="lg:h-[50vh] lg:w-[25vw] lg:mt-[82px] group lg:hover:h-[60vh] lg:hover:-translate-y-1 border border-black rounded-md hover: lg:hover:bg-black hover:text-white duration-500   ">
              <h1 className="text-[1rem] font-semibold p-2  text-center">
                Direct-hire on your payroll
              </h1>
              <p className="px-2 pb-2  text-center">
                Perfect when you want to hire and <br />
                manage payroll on your own.
              </p>
              <hr className="border-black lg:group-hover:border-white" />
              <div className="pl-[43px] pt-[26px] text-[1rem] font-medium">
                <div>
                  <DoneIcon /> Deeply Vetted Talent{" "}
                </div>
                <div>
                  <DoneIcon /> Gen-AI Assessed{" "}
                </div>
                <div>
                  <DoneIcon /> Talent Discovery
                </div>
                <div>
                  <DoneIcon /> 90 days Replacement
                </div>
                <div>
                  <DoneIcon /> Account Management Support{" "}
                </div>
              </div>

              <div className="pl-[43px] py-5">
                <button
                  className="px-[90px] py-[8px] text-[1rem] group-hover:opacity-100 lg:opacity-0    duration-300  rounded-md font-medium lg:text-black text-white lg:bg-white bg-black"
                  type="primary"
                  onClick={() => setOpen(true)}
                >
                  Hire Now
                </button>
                <Modal
                  open={open}
                  title=""
                  height=""
                  width={700}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={[]}
                >
                  <form action="">
                    <div className="">
                      <div className="flex justify-between px-[2rem] pt-[2rem]">
                        <div>
                          <label className="" htmlFor="">
                            First Name
                          </label>{" "}
                          <br />
                          <input
                            className="mt-[1rem] pr-20 py-2 border-2 border-black rounded-lg"
                            type="text"
                            placeholder="   Enter your First name"
                          />
                        </div>
                        <div>
                          <label htmlFor="">Last Name</label> <br />
                          <input
                            className=" mt-[1rem] pr-20 py-2 border-2 border-black rounded-lg"
                            type="text"
                            placeholder="   Enter your First name"
                          />
                        </div>
                      </div>

                      <div className="mx-[2rem] mt-[2.5rem]">
                        <label htmlFor="">Company Name</label> <br />
                        <input
                          className=" pr-[33vw] py-2 border-2  border-black rounded-lg"
                          type="text"
                          placeholder="   Enter your company name   "
                        />{" "}
                        <br />
                      </div>

                      <div className="mx-[2rem] mt-[2.5rem]">
                        <label htmlFor="">Email</label> <br />
                        <input
                          className=" pr-[33vw] py-2 border-2 border-black rounded-lg"
                          type="email"
                          placeholder="   Enter your email"
                        />
                      </div>
                    </div>

                    <div className="mx-[0.7rem] mt-[2.5rem] ">
                      <PhoneField />
                    </div>

                    <div className="mx-[2rem] mt-[2.5rem]">
                      <label htmlFor="">Choose how you want to hire</label>{" "}
                      <br />
                      <select
                        className=" pr-[28.3vw] border-2 border-black py-2 rounded-lg"
                        placeholder="Choose A Category"
                      >
                        Choose how you want to hire
                        <option value="0">Choose a Category</option>
                        <hr />
                        <option value="1">Hire A Contractor</option> <hr />
                        <option value="2">
                          Hire An Employee On AV Payroll
                        </option>{" "}
                        <hr />
                        <option value="3">
                          Direct-hire On Your Payroll
                        </option>{" "}
                        <hr />
                      </select>
                    </div>
                    <br />

                    <div className="mx-[2rem] mt-[2.5rem]">
                      <label htmlFor="">Which Role are you hiring for?</label>{" "}
                      <br />
                      <select
                        className="pr-[27.8vw] border-2 border-black py-2 rounded-lg"
                        placeholder="Choose A Category"
                      >
                        Choose how you want to hire
                        <option value="0">Choose a Category</option>
                        <hr />
                        <option value="1">Front-End Developer</option> <hr />
                        <option value="2">Back-End Developer</option> <hr />
                        <option value="4">UI/UX Designer</option> <hr />
                        <option value="5">Graphic Designer</option> <hr />
                        <option value="6">Web App Development</option> <hr />
                        <option value="7">Mobile App Development</option> <hr />
                        <option value="8">Database Integration</option> <hr />
                        <option value="7">
                          Shopify/Wordpress Development
                        </option>{" "}
                        <hr />
                      </select>
                    </div>

                    <button
                      className="mt-[2.5rem] ml-[2rem] py-4 px-64 bg-black text-white rounded-lg"
                      key="submit"
                      type="primary"
                      loading={loading}
                      onClick={handleOk}
                    >
                      Get In touch
                    </button>
                  </form>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1c1c1e]  w-full ">
        <h1 className="text-white text-[4rem] lg:ml-[5.5rem] ml-[1rem] font-semibold lg:pt-[64px] lg:pb-[56px]">
          Technologies Offered
        </h1>
        <Tabs />
      </div>

      <div className="text-white bg-[#1c1c1e] w-full lg:h-[100vh] lg:px-[5.5rem] lg:pt-0 pt-5 px-[1rem]">
        <h1 className="lg:text-[4rem] text-[2rem] font-semibold">
          Hire Best Tech Minds in <br />5 Simple Steps
        </h1>
        <p>
          Connect, hire and build compelling tech solutions with top offshore
          software developers instantly.
        </p>

        <div className="lg:flex lg:justify-between grid grid-cols-2 gap-5  lg:mt-[56px] lg:py-0 py-10 ">
          <div className="">
            <img src={vector} alt="" />
            <h1 className="lg:mt-[32px]">
              Send accross your detailed <br /> project requirements
            </h1>
          </div>
          <div>
            <img src={vector1} alt="" />
            <h1 className="lg:mt-[32px]">
              Connect with our tech <br />
              experts
            </h1>
          </div>
          <div>
            <img src={vector2} alt="" />
            <h1 className="lg:mt-[32px]">
              Choose the top candidates <br />
              for screening
            </h1>
          </div>
          <div>
            <img src={vector3} alt="" />
            <h1 className="lg:mt-[32px]">
              Conduct interviews with <br />
              the shortlisted candidates
            </h1>
          </div>
          <div>
            <img src={vector4} alt="" />
            <h1 className="lg:mt-[32px]">
              Choose the top <br /> candidates for screening
            </h1>
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default HireusPage;
