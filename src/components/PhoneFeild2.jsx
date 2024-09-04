import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const PhoneField = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className="flex flex-col w-full max-w-sm ml-6 ">
      <label className="text-white mb-2 "htmlFor="phone">
      Phone Number
      </label>
      <PhoneInput
        country={'in'}
        value={phone}
        onChange={setPhone}
        placeholder={'Enter your phone number '}
        inputStyle={{
          width: '445px',
          backgroundColor: '#white',
          border: '1px solid #gray',
          borderRadius: '',
          color: 'gray',
        }}
        dropdownStyle={{
          backgroundColor: '#white',
          borderColor: '#gray',
        }}
        buttonStyle={{
          backgroundColor: '#white',
          borderColor: '#gray',
        }}
        containerClass="text-black"
      />
    </div>
  );
};

export default PhoneField;
