import React, { useRef, useState } from "react";
import "./Footer.css";
import emailjs from "@emailjs/browser";
import VideoPlayer from "./VideoPlayer";
import Header2 from "./Header2";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PhoneNumberField from "./PhoneFeild";
const Form = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    phone: "",
  });

  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));
  };

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
      <div className=" lg:flex  gap-10 w-full justify-between bg-[#1c1c1e] px-[2.5rem] pt-[4rem]">
        {/* video */}
        <div className=" lg:w-[80%] lg:h-[130vh] h-[30vh] ">
          <VideoPlayer />
        </div>

        <div className="text-white w-full lg:mt-0 mt-10">
          <form action="" ref={form} onSubmit={sendEmail} className="">
            {/* name Feild */}
            <div className=" lg:flex justify-between ">
              <div className="lg:w-[40%] w-full">
                <label>First Name *</label> <br />
                <input
                  type="text"
                  id="fname"
                  name="from_name"
                  placeholder="Enter your first name"
                  className="bg-[#1c1c1e] border border-gray-700 rounded-lg p-1 w-full mt-4"
                  required
                />
              </div>
              <div className="lg:w-[40%] w-full lg:mt-0 mt-[40px] ">
                <label>Last Name *</label> <br />
                <input
                  type="text"
                  id="fname"
                  name="from_name"
                  placeholder="Enter your last name"
                  className="bg-[#1c1c1e] border border-gray-700 rounded-lg p-1 w-full mt-4"
                />
              </div>
            </div>

            {/* company name */}
            <div className=" w-full mt-[40px]">
              <label htmlFor=""> Company Name </label> <br />
              <input
                type="text"
                placeholder="Enter your company name"
                className="bg-[#1c1c1e] border border-gray-700 rounded-lg p-1 w-full mt-4"
              />
            </div>

            {/* Email */}
            <div className="w-full mt-[40px]">
              <label htmlFor=""> Email *</label> <br />
              <input
                type="email"
                name="from_email"
                placeholder="Enter your email"
                className="bg-[#1c1c1e] border border-gray-700 rounded-lg p-1 w-full mt-4"
              />
            </div>

            {/* phone */}
            <div className="w-full mt-[40px]">
              <label htmlFor=""> Phone *</label> <br />
              {/* <input
                type="text"
                placeholder="Enter your phone number"
                className="bg-[#1c1c1e] border border-gray-700 rounded-lg p-1 w-full mt-4"
              /> */}
            </div>

            {/* messaeg textarea */}
            <div className="w-full mt-[40px]">
              <label htmlFor=""> Message </label> <br />
              <textarea
                rows={5}
                placeholder="Tell us what we can help you with"
                className="bg-[#1c1c1e] border border-gray-700 rounded-lg p-1 w-full mt-4"
              />
            </div>

            {/* checkbox */}
            <div className="w-full mt-[40px]">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="bg-[#1c1c1e] p-1"
              />
              <label htmlFor="terms">
                I’d like to receive more information about company. I understand
                and agree to the Privacy Policy
              </label>
            </div>

            {/* button */}
            <div className="mt-[40px] w-full ">
              <button
                type="submit"
                className="w-full border text-black bg-white p-4 rounded-xl"
              >
                Get In Touch
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
