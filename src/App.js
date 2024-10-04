import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Card2 from './components/Card2'
import Partners from './components/Partners'
import Marque1 from './components/Marque1'
import Location from './components/Location'
import Form from './components/Form'
import TestCard from './components/TestCard'
import Testimonial from './components/Testimonial'
import Services1 from './components/Services1'
import Services2 from './components/Services2'
import Services3 from './components/Services3'
import Services4 from './components/Services4'
import Services5 from './components/Services5'
import Demo from './components/PhoneFeild'
import ContactUs from './components/ContactUs'
import PhoneNumberField from './components/PhoneFeild'
import VideoPlayer from './components/VideoPlayer'
import CompanyPage from './components/CompanyPage'
import Input from './components/TextCycle'
import Home from './components/Home';
import Blog from './components/Blog';
import PortfolioPage from './components/PortfolioPage';
import ServicePage from './components/ServicePage';
import { useState ,useEffect } from 'react';

import {RotateLoader } from 'react-spinners';
import HireusPage from './components/HireusPage';


const App = () => {
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 4000)
  }, [])
  return (
   <div className={` h-screen ${loading && " grid place-items-center"} `}>
    {
      loading?

      <RotateLoader className=' ' color='black'  />

      :
  
    <BrowserRouter>
    
      <Routes path="/" element={<Home />}>
        <Route index element={<Home />} />
       <Route path="home" element={<Home />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Portfolio" element={<PortfolioPage />} />
        <Route path="Services" element={<ServicePage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="company" element={<CompanyPage />} />
        <Route path="hireus" element={<HireusPage />} />
      </Routes>
    </BrowserRouter>
      }
    </div>
  )
  
}
export default App
