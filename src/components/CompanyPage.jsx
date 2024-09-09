import React from 'react'
import Header from './Header'
import Partners from './Partners'
import Card2 from './Card2'
import Location from './Location'
import Footer from './Footer'
import Marque1 from './Marque1'
import Form from './Form'
import Testimonial from './Testimonial'
import Hero from './Hero'
import Footer1 from './Footer1'
import Form1 from './Form1'


const CompanyPage = () => {
  return (
    <>
    <div> 
    <Header/>
    </div>
    <Partners/>
    <Card2/>
    <div className=''>
    <Location/>
    </div>
    
    <Marque1/>
    <Form1/>
    <Hero/>
    <Testimonial />

    <Footer1/>
    </>
  )
}

export default CompanyPage
