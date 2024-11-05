import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import styles from "./Footer.css";

const PhoneNumberField = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="flex flex-col lg:w-[30vw] lg:mr-0 mr-5 lg:ml-10">
        <label className="text-white mb-2 " htmlFor="phone">
          Phone Number
        </label>
        {/* <div className='lg:w-0 w-5'>
      <PhoneInput
        country={'in'}
        value={phone}
        onChange={setPhone}
        placeholder={'Enter your phone number '}
        inputStyle={{
          width: '490px',
          backgroundColor: '#1c1c1e',
          border: '1px solid #3a3a3a',
          borderRadius: '10px',
          color: 'white',
        }}
        dropdownStyle={{
          backgroundColor: '#1c1c1e',
          borderColor: '#3a3a3a',
        }}
        buttonStyle={{
          backgroundColor: '#1c1c1e',
          borderColor: '#3a3a3a',
        }}
        containerClass="text-white"
      />
      </div> */}
      </div>
      <div className="lg:ml-10 w-[100%] lg:w-[95%]">
        <PhoneInput
          className="bg-[#1c1c1e]  "
          defaultCountry="IN"
          placeholder="Enter your phone number"
          country={"in"}
          name="from_number"
          value={value}
          inputStyle={{
            background: "transparent",
            width: "90%",
            borderColor: "gray",
            color: "gray",
          }}
          dropdownStyle={{ background: "#1c1c1e" }}
          buttonStyle={{ background: "transparent", borderColor: "gray" }}
          onChange={setValue}
        />
      </div>
    </>
  );
};

export default PhoneNumberField;
