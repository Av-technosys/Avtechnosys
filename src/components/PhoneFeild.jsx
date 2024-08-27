import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const PhoneNumberField = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className="flex flex-col w-full max-w-sm mx-auto">
      <label className="text-white mb-2 "htmlFor="phone">
      Phone Number
      </label>
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
    </div>
  );
};

export default PhoneNumberField;
