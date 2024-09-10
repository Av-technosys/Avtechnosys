import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Card2 from './Card2'
import Partners from './Partners'
import Marque1 from './Marque1'
import Location from './Location'
import Form from './Form'
import TestCard from './TestCard'
import Testimonial from './Testimonial'
import Services1 from './Services1'
import Services2 from './Services2'
import Services3 from './Services3'
import Services4 from './Services4'
import Services5 from './Services5'
import Demo from './PhoneFeild'
import PhoneNumberField from './PhoneFeild'
import VideoPlayer from './VideoPlayer'
import CompanyPage from './CompanyPage'
import Input from './TextCycle'
import Blog from './Blog';
import ContactUs from './ContactUs';
import Sidebar from './Sidebar';
import ServicePage from './ServicePage';
import Header2 from './Header2';
import Footer1 from './Footer1'
import Form1 from './Form1';
import PortfolioPage from './PortfolioPage';
// import Sidebar from './Sidebar';

export default function Home(){
    return(
      
    <div className=''>
      
      {/* <Sidebar/> */}
      {/* <Header/> */}
{/* <PortfolioPage/> */}
      {/* <Header2/> */}
{/* <ServicePage/> */}
      {/* <ContactUs/> */}
{/* <CompanyPage/> */}
{/* <Blog/> */}

{/* <Footer/> */}
{/* <Footer1/> */}

        <Header />
         <Partners /> 
          <Card2 /> 
      
        <div className='relative'>
        <div className='sticky -top-20'><Services1 /></div>
        <div className='sticky top-0'><Services2 /></div>
        <div className='sticky top-0'><Services3 /></div>
        <div className='sticky top-0'><Services4 /></div>
        <div className='sticky top-0'><Services5 /></div>
        </div>
        <Location />
        <Marque1 />
      <Form1/>
        <Hero />
         <TestCard />
        <Footer1 /> 
        {/* <ContactUs/> */}
  {/* {/* <PhoneNumberField/> */}
  
 
      </div>)
}