import React from 'react'
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../Assets/Logo 1.png";
import arrow from "../Assets/rightarrow.png";
import "./Footer.css";
import { Collapse } from 'antd'
import bigarrow from "../Assets/bigarrow.png";
import bigarrowup from "../Assets/bigarrowup.png";
import digital1 from "../Assets/bg11.jpg";
import Header2 from './Header2';

const text = 
<div className='h-[280vh]'>
<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-96 font-semibold' >App Modernization</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-28'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex    '>
<div className='  '>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Microservices-Based Web Application Development</h1>
   
</div>
<div className='h-60' >
<h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-28'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Buisness Mobility Solution</h1>
   
</div>
<div className='h-60' >
<h1 className='pt-10 ml-8 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Cloud & DevOps</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg ml-8 mt-16'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Quality Engineering</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg ml-8 mt-16'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Continous Management Services</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg ml-8 mt-16'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />
<div>
<div className='text-base font-bold absolute right-5  '>
<img className='size-16' src={bigarrowup} alt="" />
       <button className='ml-2'>Close</button>
       
       
       </div>
</div>

</div>

const text2 =
<div className='h-[280vh]'>
<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-96 font-semibold' >App Modernization</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 ml-28 rounded-lg mt-12 '>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex    '>
<div className='  '>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Microservices-Based Web Application Development</h1>
   
</div>
<div className='h-60' >
<h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-28'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Buisness Mobility Solution</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg ml-8 mt-12'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Cloud & DevOps</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg ml-8 mt-12'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Quality Engineering</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Continous Management Services</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />
<div>
<div className='text-base font-bold absolute right-5  '>
<img className='size-16' src={bigarrowup} alt="" />
       <button className='ml-2'>Close</button>
       
       
       </div>
</div>

</div>

const text3 =
<div className='h-[280vh]'>
<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-96 font-semibold' >App Modernization</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg  mt-12 ml-28'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex    '>
<div className='  '>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Microservices-Based Web Application Development</h1>
   
</div>
<div className='h-60' >
<h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-28'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Buisness Mobility Solution</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Cloud & DevOps</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Quality Engineering</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Continous Management Services</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />
<div>
<div className='text-base font-bold absolute right-5  '>
<img className='size-16' src={bigarrowup} alt="" />
       <button className='ml-2'>Close</button>
       
       
       </div>
</div>

</div>

const text4 =
<div className='h-[280vh]'>
<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-96 font-semibold' >App Modernization</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-28'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex    '>
<div className='  '>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Microservices-Based Web Application Development</h1>
   
</div>
<div className='h-60' >
<h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-28'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Buisness Mobility Solution</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Cloud & DevOps</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Quality Engineering</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Continous Management Services</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />
<div>
<div className='text-base font-bold absolute right-5  '>
<img className='size-16' src={bigarrowup} alt="" />
       <button className='ml-2'>Close</button>
       
       
       </div>
</div>

</div>

const text5 =
<div className='h-[280vh]'>
<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-96 font-semibold' >App Modernization</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-28'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex    '>
<div className='  '>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Microservices-Based Web Application Development</h1>
   
</div>
<div className='h-60' >
<h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-28'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Buisness Mobility Solution</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Cloud & DevOps</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Quality Engineering</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Continous Management Services</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />
<div>
<div className='text-base font-bold absolute right-5  '>
<img className='size-16' src={bigarrowup} alt="" />
       <button className='ml-2'>Close</button>
       
       
       </div>
</div>

</div>


const items = [
    {
      key: '1',
      label: <div className='  flex text-6xl relative font-semibold h-96 '> 
      {/* <img className='-ml-10 w-screen' src="https://unsplash.it/2700/600/?random" alt="" /> */}
        <h1 className='pt-72 absolute '> Digital Enterprise</h1> 
       <div className='text-base font-bold absolute bottom-7 right-5 '>
       <button className='-ml-2'>Tap for more</button>
       <img className='size-16' src={bigarrow} alt="" />
       
       </div>
      </div>,
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: <div className=' flex text-6xl relative font-semibold h-96 '> 
      <h1 className='pt-72'> Digital Experience</h1> 
     <div className='text-base font-bold absolute bottom-7 right-5 '>
     <button className='-ml-2'>Tap for more</button>
     <img className='size-16' src={bigarrow} alt="" />
     
     </div>
    </div>,
      children: <p>{text2}</p>,
    },
    {
      key: '3',
      label: <div className=' flex text-6xl relative font-semibold h-96 '> 
      <h1 className='pt-72'> Digital Marketing</h1> 
     <div className='text-base font-bold absolute bottom-7 right-5 '>
     <button className='-ml-2'>Tap for more</button>
     <img className='size-16' src={bigarrow} alt="" />
     
     </div>
    </div>,
      children: <p>{text3}</p>,
    },
    {
        key: '4',
        label: <div className=' flex text-6xl relative font-semibold h-96 '> 
        <h1 className='pt-72'> Digital Innovation</h1> 
       <div className='text-base font-bold absolute bottom-7 right-5 '>
       <button className='-ml-2'>Tap for more</button>
       <img className='size-16' src={bigarrow} alt="" />
       
       </div>
      </div>,
        children: <p>{text4}</p>,
      },
      {
        key: '5',
        label: <div className=' flex text-6xl relative font-semibold h-96 '> 
        <h1 className='pt-72'> Cloud Transformation</h1> 
       <div className='text-base font-bold absolute bottom-7 right-5 '>
       <button className='-ml-2'>Tap for more</button>
       <img className='size-16' src={bigarrow} alt="" />
       
       </div>
      </div>,
        children: <p>{text5}</p>,
      },
  ];

const ServicePage = () => {
  return (
    <>

    <Header2/>
    {/* <header className="fontTest text-white flex flex-wrap h-32 w-full bg-[#1c1c1e]">
 
        <div className="pt-7 pl-16 w-32 ">
          <img src={logo} alt="logo" />
        </div>
        <div className="pt-6 ">
          <ul className="flex flex-wrap text-white list-none ml-44 mt-3 p-4 rounded-full border">
            <li className="px-">
              <Link to="/company">Company</Link>
            </li>
            <li className="pl-12"> Services</li>
            
            <li className="pl-12">Portfolio</li>
            <li className="pl-12">
              <Link to="/Blog">Blog</Link>
            </li>
            <li className="pl-12 pr-">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <Outlet />
        <div className="flex ml-28 my-11">
          <button className="border border-gray-700 px-8 rounded-lg ">
            Hire us
          </button>
          <div className="flex border ml-6 px-3 rounded-lg ">
            <img className="size-5 mt-[9px]" src={arrow} alt="arrow" />
            <button>Let's Connect</button>
          </div>
        </div>
        
    </header> */}
<hr />
    <main className=' flex bg-[#1c1c1e] w-full h-[60vh]'> 
    <div> 
        <h1 className='text-white text-6xl mt-32 ml-20 font-bold'>
            Our Company <br />
             <h1 className='mt-4'>Services!</h1>
        </h1>
    </div>

    <div>
        <div className='bg-slate-200 relative h-8 w-12 rounded-full mt-48 ml-44 '>
                    <div className=' absolute top-[10px] left-[13px] h-3 w-5 rounded-full bg-white'>
                        <div className='absolute top-[4.7px] left-[8px] w-[4px] h-[2.9px] bg-black rounded-full'></div>
                    </div>
                
        </div>
    </div>
    <div className='  h-full w-96'>
       <div className='   ml-24 h-full font-light text-[14px] w-[28rem]'>
        <h1 className='text-white  pt-40 '>
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia unde alias ex officia ipsum totam minima saepe qui sit maxime vitae praesentium cum, odio repellendus dignissimos quo earum eum officiis? Corrupti deleniti, voluptatum placeat illo, nisi quas dignissimos vel et, id dolorem distinctio amet. Unde modi officia pariatur ipsa neque.
            "
        </h1>
       </div>
    </div>
    </main>
 <div>
 <Collapse accordion items={items} />
 </div>


<div className='bg-[#1c1c1e] h-[150vh] w-full'>
<div className='fontTest text-white pt-20 ml-20'>
    <h1 className='text-6xl  font-bold'>Industries </h1> <br />
    <p className='font-light'>Discover Our Diverse Industry Partnerships</p>
</div>

<div className=' mt-10 ml-20 mr-20 grid grid-cols-3  gap-20  justify-evenly'>
    <div className='bg-white text-3xl font-bold h-56 w-80 rounded-xl border'>
        <img className='rounded-t-xl' src="https://unsplash.it/800/400/?random" alt="" />
       <h1 className=' ml-24 mt-3 '>Fashion </h1>
    </div>

    <div className='bg-white text-3xl font-bold h-56 w-80 rounded-xl border'>
        <img className='rounded-t-xl' src="https://unsplash.it/800/400/?rando" alt="" />
       <h1 className=' ml-24 mt-3 '>Fashion </h1>
    </div>

    <div className='bg-white text-3xl font-bold h-56 w-80 rounded-xl border'>
        <img className='rounded-t-xl' src="https://unsplash.it/800/400/?randm" alt="" />
       <h1 className=' ml-24 mt-3 '>Fashion </h1>
    </div>

    <div className='bg-white text-3xl font-bold h-56 w-80 rounded-xl border'>
        <img className='rounded-t-xl' src="https://unsplash.it/800/400/?ranom" alt="" />
       <h1 className=' ml-24 mt-3 '>Fashion </h1>
    </div>

    <div className='bg-white text-3xl font-bold h-56 w-80 rounded-xl border'>
        <img className='rounded-t-xl' src="https://unsplash.it/800/400/?radom" alt="" />
       <h1 className=' ml-24 mt-3 '>Fashion </h1>
    </div>

    <div className='bg-white text-3xl font-bold h-56 w-80 rounded-xl border'>
        <img className='rounded-t-xl' src="https://unsplash.it/800/400/?rndom" alt="" />
       <h1 className=' ml-24 mt-3 '>Fashion </h1>
    </div>
</div>




</div>
    </>
  )
}

export default ServicePage