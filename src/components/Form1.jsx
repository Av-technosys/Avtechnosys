import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import "./Footer.css";

const Form1 = () => {
    const form = useRef();
    const [errors, setErrors] = useState({});

    const validateForm = (formData) => {
        let errors = {};
    
        // Check if the name is empty
        if (!formData.get('from_name')) {
          errors.from_name = "Name is required";
        }
    
        // Check if the email is empty or invalid
        const email = formData.get('from_email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
        if (!email) {
          errors.from_email = "Email is required";
        } else if (!emailRegex.test(email)) {
          errors.from_email = "Invalid email address";
        }
    
        // Check if the message is empty
        if (!formData.get('message')) {
          errors.message = "Message is required";
        }
    
        return errors;
      };
    

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
        emailjs
          .sendForm('service_tz902dr', 'template_qqpxlae', form.current, {
            publicKey: '7e3pjCOJgYjLD4Mu-',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              form.current.reset();
              setErrors({});
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (

    <>
    <div className='bg-[#1c1c1e] fontTest lg:pt- pb-10 lg:px-[5.5rem] px-[1rem] '>
    <h1 className='text-4xl md:text-[4rem] lg:text-[4rem] text-white font-semibold p- md:pt-10 md:ml- lg:'>
        Let's Connect
    </h1>
    <form ref={form} onSubmit={sendEmail}>
        <div className='flex flex-col md:flex-row lg:ml-0 outline-none justify-between md:justify- gap-7 md:gap- lg:gap- mt-8 md:mt-12 '>
            <input
                type='text' name="from_name"
                placeholder='What is your name ?'
                className='bg-transparent border-b-2 border-b-gray-200 outline-none text-lg md:text-3xl lg:text-[1.5rem] pb-4 pr-8 md:pb-6 md:pr-12 lg:pb-6 lg:pr-16 text-white placeholder-white w-full md:w-auto'
            />
             {errors.from_name && (
            <span className="text-red-500">{errors.from_name}</span>
          )}

            <input
                type='text' name="from_email"
                placeholder='What is your Email ?'
                className='bg-transparent border-b-2 border-b-gray-200 outline-none text-lg md:text-3xl lg:text-[1.5rem] pb-4 pr-8 md:pb-6 md:pr-12 lg:pb-6 lg:pr-16 text-white placeholder-white  md:w-auto'
            /> 


                 {errors.from_email && (
            <span className="text-red-500">{errors.from_email}</span>
          )}

        </div>
        <div className='mt-10 lg:mt-24 md:mt-16 px- lg:px- lg:ml-'>
            <input
                type='text'  name="message"
                placeholder='Tell us about your business and scope of the project'
                className='bg-transparent border-b-2 border-b-gray-200 outline-none text-lg md:text-3xl lg:text-[1.5rem] pb-4 md:pb-6 text-white placeholder-white w-full lg:w-[100%] '
            />
            {errors.message && (
            <span className="text-red-500">{errors.message}</span>
          )}

        </div>
        <div className='mt-14  lg:mt-20 flex justify-end lg:mr- '>
            <button type='submit' onSubmit="" value="Send"
                className='bg-white text-lg md:text-xl lg:text-[1rem] text-black font-semibold py-5 w-full md:w-auto lg:px-4 md:px-12 rounded-lg'
            >
                Get in Touch
            </button>
        </div>
    </form>
</div>
</>





//     <>
//     <div className='bg-[#1c1c1e] fontTest lg:pt-96 pb-10'>
//     <h1 className='text-4xl md:text-[4rem] lg:text-7xl text-white font-semibold p-6 md:p-10 md:ml-12 lg:ml-[3rem]'>
//         Let's Connect
//     </h1>
//     <form action='#'>
//         <div className='flex flex-col md:flex-row lg:ml-0 outline-none justify-center md:justify-between mx-40 gap-7  mt-8 md:mt-12 px-'>
//             <input
//                 type='text'
//                 placeholder='What is your name ?'
//                 className='bg-transparent border-b-2 border-b-gray-200 outline-none text-lg md:text-3xl lg:text-[1.5rem] pb-4 pr-8 md:pb-6 md:pr- lg:pb-6 lg:pr-16 text-white placeholder-white w-full md:w-auto'
//             />
//             <input
//                 type='text'
//                 placeholder='What is your Email ?'
//                 className='bg-transparent border-b-2 border-b-gray-200 outline-none text-lg md:text-3xl lg:text-[1.5rem] pb-4 pr-8 md:pb-6 md:pr-12 lg:pb-6 lg:pr-16 text-white placeholder-white w-full md:w-auto'
//             />
//         </div>
//         <div className='mt-10 lg:mt-24 md:mt-16 px-4 lg:px-20 lg:ml-16'>
//             <input
//                 type='text'
//                 placeholder='Tell us about your business and scope of the project'
//                 className='bg-transparent border-b-2 border-b-gray-200 outline-none text-lg md:text-3xl lg:text-[1.5rem] pb-4 md:pb-6 text-white placeholder-white w-full lg:w-[95%] '
//             />
//         </div>
//         <div className='mt-14  lg:mt-20 flex justify-end lg:mr-20 '>
//             <button
//                 className='bg-white text-lg md:text-xl lg:text-[1rem] text-black font-semibold py-5 w-full md:w-auto lg:px-4 md:px-12 rounded-lg'
//             >
//                 Get in Touch
//             </button>
//         </div>
//     </form>
// </div>
// </>
  )
}

export default Form1