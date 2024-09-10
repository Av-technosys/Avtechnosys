import React from 'react'
import Header2 from './Header2'
import PortfolioPage1 from './PortfolioPage1'
import PortfolioPage2 from './PortfolioPage2'
import PortfolioPage3 from './PortfolioPage3'
import PortfolioPage4 from './PortfolioPage4'
import PortfolioPage5 from './PortfolioPage5'
import PortfolioPage6 from './PortfolioPage6'
import Form1 from './Form1'
import Hero from './Hero'
import TestCard from './TestCard'
import Footer1 from './Footer1'

const PortfolioPage = () => {
  return (
   <>
   <Header2/>   
   <div className='relative  '>
        <div className='sticky lg:-top-[140%] -top-[160%]'><PortfolioPage1 /></div>
        <div className='sticky lg:-top-[170%] -top-[200%] '><PortfolioPage2 /></div>
        <div className='sticky lg:-top-[170%] -top-[190%]'><PortfolioPage3 /></div>
        <div className='sticky lg:-top-[170%] -top-[230%]'><PortfolioPage4 /></div>
        <div className='sticky lg:-top-[170%] -top-[195%]'><PortfolioPage5 /></div>
        <div className='sticky lg:-top-[140%] '><PortfolioPage6 /></div>
        </div>
   <Form1/>
   <Hero />
  <TestCard />
  <Footer1 /> 

   </>
  )
}

export default PortfolioPage