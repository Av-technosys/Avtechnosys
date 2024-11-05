import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Outlet, Link } from "react-router-dom";
import "./Footer.css";
import PhoneNumberField from "./PhoneFeild";
import VideoPlayer from "./VideoPlayer";
import Map1 from "../Assets/map1.svg";
import Map2 from "../Assets/map2.svg";
import Chat from "../Assets/ChatIcon.png";
import Call from "../Assets/CallIcon.png";
import Support from "../Assets/SupportIcon.png";
import Location from "../Assets/LocationIcon.png";
import Footer1 from "./Footer1";
import Header2 from "./Header2";

const handleEmailClick = () => {
  // window.location.href = `mailto:sales@avtechnosys.com?`;
  window.location.href = `mailto:avtechnosys02@gmail.com?`;
};

const ContactUs = () => {
  // const form = useRef();
  // const [errors, setErrors] = useState({});

  // const validateForm = (formData) => {
  //   let errors = {};

  //   // Check if the first name is empty
  //   if (!formData.get('first_name')) {
  //     errors.first_name = "First name is required";
  //   }

  //   // Check if the last name is empty
  //   if (!formData.get('last_name')) {
  //     errors.last_name = "Last name is required";
  //   }

  //   // Check if the company name is empty
  //   if (!formData.get('company_name')) {
  //     errors.company_name = "Company name is required";
  //   }

  //   // Check if the email is empty or invalid
  //   const email = formData.get('email');
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
  //   if (!email) {
  //     errors.email = "Email is required";
  //   } else if (!emailRegex.test(email)) {
  //     errors.email = "Invalid email address";
  //   }

  //   // Check if the phone number is empty
  //   const phone = formData.get('phone');
  //   const phoneRegex = /^[0-9]{10}$/; // Simple phone number validation (10 digits)
  //   if (!phone) {
  //     errors.phone = "Phone number is required";
  //   } else if (!phoneRegex.test(phone)) {
  //     errors.phone = "Invalid phone number";
  //   }

  //   // Check if the message is empty
  //   if (!formData.get('message')) {
  //     errors.message = "Message is required";
  //   }

  //   return errors;
  // };

  // // Function to send email using EmailJS
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData(form.current);
  //   const validationErrors = validateForm(formData);

  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //     return;
  //   }

  //   emailjs
  //     .sendForm('service_tz902dr', 'template_bjzmbng', form.current, {
  //       publicKey: '7e3pjCOJgYjLD4Mu-',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //         form.current.reset(); // Clear form fields after submission
  //         setErrors({}); // Clear validation errors
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       }
  //     );
  // };

  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    let errors = {};

    // Validate first name
    if (!formData.get("first_name")) {
      errors.first_name = "First name is required";
    }

    // Validate last name
    if (!formData.get("last_name")) {
      errors.last_name = "Last name is required";
    }

    // Validate company name
    if (!formData.get("from_company")) {
      errors.company_name = "Company name is required";
    }

    // Validate email
    const email = formData.get("from_email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email address";
    }

    // Validate phone number
    const phone = formData.get("phone");
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Invalid phone number";
    }

    // Validate message
    if (!formData.get("message")) {
      errors.message = "Message is required";
    }

    // Validate checkbox
    const checkbox = formData.get("privacy_policy");
    if (!checkbox) {
      errors.checkbox = "You must agree to the Privacy Policy.";
    }

    return errors;
  };

  // Function to send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .sendForm("service_tz902dr", "template_bjzmbng", form.current, {
        publicKey: "7e3pjCOJgYjLD4Mu-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset(); // Clear form fields after submission
          setErrors({}); // Clear validation errors
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <Header2 />
      <hr />

      <div className="lg:h-[140vh] bg-[#1c1c1e]">
        <div className="lg:flex grid grid-cols-1 p-14 h-full">
          <div className="bg-[#1c1c1e] lg:w-1/2 lg:h-[105vh] h-[40vh] w-[70vw]">
            <VideoPlayer />
          </div>
          <div className="bg-[#1c1c1e] lg:w-1/2">
            <form className="fontTest" ref={form} onSubmit={sendEmail}>
              <div className="lg:flex ">
                <div className="lg:ml-10 lg:mt-0 mt-5 ">
                  <label className="text-white text-sm " for="fname">
                    First Name
                  </label>
                  <br />
                  <input
                    className="text-sm mt-2 p-1 text-white  lg:w-56 w-72  border-gray-600 border rounded-lg bg-[#1c1c1e] "
                    type="text"
                    id="fname"
                    name="from_name"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <br />
                <div className=" lg:ml-[40px]">
                  <label className="text-white text-sm " for="lname">
                    Last Name
                  </label>
                  <br />
                  <input
                    className="text-sm mt-2 text-white p-1 lg:w-56 w-72 rounded-lg border-gray-600 border bg-[#1c1c1e]"
                    type="text"
                    id="lname"
                    name="from_name"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="lg:ml-10 mt-8">
                <label className="text-white text-sm" htmlFor="">
                  Company Name
                </label>
                <br />
                <input
                  className="text-sm mt-2 p-1 text-white  rounded-lg lg:w-[38vw] w-[69vw]  border-gray-600 border bg-[#1c1c1e]"
                  type="text"
                  name="from_company"
                  placeholder="Enter your company name"
                />
                {errors.company_name && (
                  <span className="text-red-500">{errors.company_name}</span>
                )}
              </div>

              <div className="lg:ml-10  lg:w-11/12   mt-8">
                <label className="text-white text-sm" htmlFor="">
                  {" "}
                  Email{" "}
                </label>{" "}
                <br />
                <input
                  className="text-sm mt-2 p-1 text-white rounded-lg lg:w-[38vw] w-[69vw]  border-gray-600 border bg-[#1c1c1e]"
                  type="text"
                  name="from_email"
                  placeholder="Enter your email"
                />
              </div>
              <br />
              <div className="text-sm  pt-3">
                <PhoneNumberField />
              </div>

              <div className="lg:ml-10 mt-8">
                <label className="text-white text-sm" htmlFor="">
                  {" "}
                  Message{" "}
                </label>{" "}
                <br />
                <input
                  className="text-sm mt-2 pb-20 text-white rounded-lg w-11/12 border-gray-600 border bg-[#1c1c1e]"
                  type="text"
                  name="message"
                  placeholder="Tell us what we can help you with "
                />
              </div>
              <div className="text-white text-xs lg:ml-10 flex  ">
                <input
                  className="mt-4"
                  type="checkbox"
                  placeholder=""
                  name=""
                  id=""
                />
                <p className="lg:mt-4 mt-4">
                  {" "}
                  I’d like to receive more information about company. I
                  understand and agree to the <br />
                  Privacy Policy
                </p>
              </div>

              <button className="p-3 border rounded-lg font-semibold text-black text-xs lg:ml-10   mt-6 text-center lg:px-52 px-28  bg-white">
                Get In Touch
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* map  */}
      <div className="fontTest lg:pl-[80px] lg:h-[100vh]  lg:pt-0 pt-10 lg:pb-8 pb-10 bg-[#1c1c1e] font-semibold text-white ">
        <h1 className="text-center justify-center lg:text-[4rem] font-semibold text-2xl">
          Get in touch with our team
        </h1>

        <div className=" absolute lg:mt-14 mt-8">
          <img className="opacity-100 hover:opacity-0" src={Map1} alt="" />
        </div>
        <div className=" lg:mt-14 mt-8  opacity-0 hover:opacity-100 duration-700">
          <img className=" relative " src={Map2} alt="" />
        </div>
      </div>

      {/* //daisy ui card */}

      <div className=" grid grid-cols-1 gap-4 lg:flex lg:justify-evenly lg:pl-0 pl-24 py-2 bg-[#1c1c1e]  ">
        <div className="relative card card-compact text-white bg-[#1c1c1e] h-48 w-56 border rounded-lg">
          <figure>
            <img
              className="w-5 border rounded-sm absolute left-5 top-5 "
              src={Chat}
              alt=""
            />
          </figure>
          <div className="ml-4 card-body">
            <h2 className="card-title mt-16 ">Chat to sales</h2>
            <p className="mt-4">Speak to our friendly team.</p>
            <div className="card-actions justify-start">
              <button
                onClick={handleEmailClick}
                className=" border rounded-lg px-3 py-0.5 mt-2"
              >
                sales@avtechnosys.com
              </button>
            </div>
          </div>
        </div>

        {/* card2 */}

        <div className="relative card card-compact text-white bg-[#1c1c1e] h-48  w-56 border rounded-lg">
          <figure>
            <img
              className="w-5 border rounded-sm absolute left-5 top-5 "
              src={Support}
              alt=""
            />
          </figure>
          <div className="card-body ml-4">
            <h2 className="card-title mt-16 ">Chat to support</h2>
            <p className="mt-4">We're here to help.</p>
            <div className="card-actions justify-start">
              <button
                onClick={handleEmailClick}
                className=" border rounded-lg px-3 py-0.5 mt-2"
              >
                sales@avtechnosys.com
              </button>
            </div>
          </div>
        </div>

        {/* card3 */}
        <div className="relative card card-compact text-white bg-[#1c1c1e] h-48 w-56 border rounded-lg">
          <figure>
            <img
              className="w-5 border rounded-sm absolute left-5 top-5 "
              src={Call}
              alt=""
            />
          </figure>
          <div className="card-body ml-4">
            <h2 className="card-title mt-16 ">Call Us</h2>
            <p className="mt-4">Mon-Fri from 8am to 5pm.</p>
            <div className="card-actions justify-start">
              <button className=" border rounded-lg px-3 py-0.5 mt-2">
                {" "}
                +91 9983034111{" "}
              </button>
            </div>
          </div>
        </div>

        {/* card4 */}

        <div className="relative card card-compact text-white bg-[#1c1c1e] h-48 w-56 border rounded-lg">
          <figure>
            <img
              className="w-5 border rounded-sm absolute left-5 top-5 "
              src={Location}
              alt=""
            />
          </figure>
          <div className="card-body ml-4">
            <h2 className="card-title mt-16 ">Visit Us</h2>
            <p className="mt-4">Visit our Office.</p>
            <div className="card-actions justify-start">
              <button className=" border rounded-lg px-3 py-0.5 mt-2">
                <a href="https://www.google.com/maps/place/AV+Technosys/@26.8556917,75.8163217,15z/data=!4m6!3m5!1s0x396db785410035f5:0xdd22882a4cf4a94!8m2!3d26.8556917!4d75.8163217!16s%2Fg%2F11vwm329f7?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D">
                  View on Google Maps
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <Footer1 />
    </>
  );
};

export default ContactUs;
