import React from 'react'
import Header from './Header'
import Partners from './Partners'
import Card2 from './Card2'
import Location from './Location'
import Footer from './Footer'
import Marque1 from './Marque1'
import Form from './Form'
import Testimonial from './Testimonial'


const CompanyPage = () => {
  return (
    <>
    <div className='opacity-95'> 
    <Header/>
    </div>
    <Partners/>
    <Card2/>
    <div className='-mt-20'>
    <Location/>
    </div>
    <Marque1/>
    <Form/>
    <Testimonial/>

    <Footer/>
    </>
  )
}

export default CompanyPage
