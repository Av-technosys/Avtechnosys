import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Footer.css";
import logo from "../Assets/Logo 1.png";
import arrow from "../Assets/rightarrow.png";
import blogImg from "../Assets/blog.jpg";
import VideoBlog from "./VideoBlog";
import search from "../Assets/searchicon.png";
import brarrow from "../Assets/arrowbtm.png";
import Form from "./Form";
import Footer from "./Footer";
import Header2 from "./Header2";
import Form1 from "./Form1";
import Footer1 from "./Footer1";

const Blog = () => {
  const data = [
    {
      img: "https://unsplash.it/800/400/?random",
      date: "August 11, 2024",
      desc: "E-Learning, or electronic learning, has emerged as a powerful tool, Breaking down [....]",
      title: "App Development",
      keyword: "App Development",
    },
    {
      img: "https://unsplash.it/800/400/?random",
      date: "August 11, 2024",
      desc: "E-Learning, or electronic learning, has emerged as a powerful tool, Breaking down [....]",
      title: "App Development",
      keyword: "Buisness",
    },
    {
      img: "https://unsplash.it/800/400/?random",
      date: "August 11, 2024",
      desc: "E-Learning, or electronic learning, has emerged as a powerful tool, Breaking down [....]",
      title: "App Development",
      keyword: "Odoo",
    },
    {
      img: "https://unsplash.it/800/400/?random",
      date: "August 11, 2024",
      desc: "E-Learning, or electronic learning, has emerged as a powerful tool, Breaking down [....]",
      title: "App Development",
      keyword: "On Demand",
    },
    {
      img: "https://unsplash.it/800/400/?random",
      date: "August 11, 2024",
      desc: "E-Learning, or electronic learning, has emerged as a powerful tool, Breaking down [....]",
      title: "App Development",
      keyword: "Open AI",
    },
    {
      img: "https://unsplash.it/800/400/?random",
      date: "August 11, 2024",
      desc: "E-Learning, or electronic learning, has emerged as a powerful tool, Breaking down [....]",
      title: "App Development",
      keyword: "Software",
    },
    {
      img: "https://unsplash.it/800/400/?random",
      date: "August 11, 2024",
      desc: "E-Learning, or electronic learning, has emerged as a powerful tool, Breaking down [....]",
      title: "App Development",
      keyword: "Web",
    },
    {
      img: "https://unsplash.it/800/400/?random",
      date: "August 11, 2024",
      desc: "E-Learning, or electronic learning, has emerged as a powerful tool, Breaking down [....]",
      title: "App Development",
      keyword: "Tech",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [blogData, setBlogData] = useState(data);

  const filteredBlogs = blogData.filter(({ keyword }) =>
    keyword.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Header2/>
      {/* <div className="fontTest text-white flex flex-wrap h-28 w-full bg-[#1c1c1e]">
        <div className="pt-7 pl-16 w-28 ">
          <img src={logo} alt="logo" />
        </div>
        <div className="pt-6 ">
          <ul className="flex flex-wrap text-white list-none ml-40 p-4 rounded-full border">
            <li className="px-4">
              <Link to="/company">Company</Link>
            </li>
            <li className="pl-8"> Services</li>
            <li className="pl-8">Industries</li>
            <li className="pl-8">Portfolio</li>
            <li className="pl-8">
              <Link to="/Blog">Blog</Link>
            </li>
            <li className="pl-8 pr-4">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <Outlet />
        <div className="flex ml-16 my-10">
          <button className="border border-gray-500 px-4 rounded-lg ">
            Hire us
          </button>
          <div className="flex border ml-6 px-3 rounded-lg ">
            <img className="size-5 mt-[5px]" src={arrow} alt="arrow" />
            <button>Let's Connect</button>
          </div>
        </div>
      </div> */}

      <img src={blogImg} alt="blog" />
      <div className="fontTest bg-[#1c1c1e] h-[40vh] flex flex-wrap justify-center">
        <div className="bg-white text-black items-center  lg:-mt-64 -mt-16    rounded-3xl lg:h-[85vh] w-[95vw]">
          <div className="lg:mt-16  ml-10">
            <h1 className="font-bold lg:text-4xl text-xl">Blog</h1>
            <br />
            <p className="font-normal lg:-mt-0 -mt-5 lg:text-sm text-xs">
              Get daily news and insights on mobile apps, web, and software
              development to make money!
            </p>
          </div>

          <div className="flex lg:flex-wrap lg:h-[50vh] w-[50vw] lg:ml-72 ml-20  mt-5 items-center">
            <div className="w-1/2 bg-black text-white text-center items-center justify-center text-sm border border-black lg:h-[17rem] h-40">
              <h1 className="lg:mt-32 mt-10">Quick/New Update of AV Technosys</h1>
            </div>
            <div className="lg:w-1/2 w-72  lg:-mb-0  lg:h-[17rem] h-40">
              <VideoBlog />
            </div>
          </div>
        </div>
      </div>

      <div className="fontTest bg-[#1c1c1e] lg:h-[160vh] h-full">
        <h1 className="text-white text-4xl font-semibold lg:p-16 p-5">Latest Articles</h1>
        <div className="">
          <div className=" lg:flex">
          <div>
          <ul className="flex cursor-pointer text-white lg:pl-16 pl-5 lg:gap-12 gap-12 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
            <li onClick={() => setBlogData(data)}>All</li>
            <li onClick={() => setBlogData(data.filter((obj) => obj.keyword === "App Development"))}>
              App Development
            </li>
            <li onClick={() => setBlogData(data.filter((obj) => obj.keyword === "Buisness"))}>
              Buisness
            </li>
            <li onClick={() => setBlogData(data.filter((obj) => obj.keyword === "Odoo"))}>
              Odoo
            </li>
            <li onClick={() => setBlogData(data.filter((obj) => obj.keyword === "On Demand"))}>
              On Demand
            </li>
            <li onClick={() => setBlogData(data.filter((obj) => obj.keyword === "Open AI"))}>
              Open AI
            </li>
            <li onClick={() => setBlogData(data.filter((obj) => obj.keyword === "Software"))}>
              Software
            </li>
            <li onClick={() => setBlogData(data.filter((obj) => obj.keyword === "Tech"))}>
              Tech
            </li>
            <li onClick={() => setBlogData(data.filter((obj) => obj.keyword === "Web"))}>
              Web
            </li></ul>
            </div>
            <div className=" flex  lg:mt-0 mt-2 lg:ml-0 ml-5 ">
              
              <input
                className="lg:ml-5  bg-[#1c1c1e] border-b-2"
                type="search"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img className="size-5 lg:mt-0 mt-2 -ml-5 " src={search} alt="search icon" />
            </div>
            </div>
          

          <div className="flex mt-10 lg:ml-14 ml-5 flex-wrap gap-10">
            {filteredBlogs.map((blog) => (
              <div key={blog.keyword} className="flex flex-col gap-2 rounded-lg p-4 w-64 relative">
                <div className="rounded-lg bg-white w-full h-40">
                  <img className="h-full" src={blog.img} alt={blog.title} />
                </div>
                <div className="h-6 w-6 bg-black absolute top-40 right-8">
                  <img className="p-2" src={brarrow} alt="arrow" />
                </div>
                <p className="text-gray-600 font-medium text-sm">{blog.date}</p>
                <p className="text-white font-semibold text-sm">{blog.keyword}</p>
                <p className="text-[10px] text-gray-700 font-normal">------{blog.title}</p>
                <p className="text-gray-300 text-[10px]">{blog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Form1 />

      
        <Footer1 />
      
    </>
  );
};

export default Blog;



























// import React, { useState } from "react";
// import { Outlet, Link } from "react-router-dom";
// import "./Footer.css";
// import logo from "../Assets/Logo 1.png";
// import arrow from "../Assets/rightarrow.png";
// import blogImg from "../Assets/blog.jpg";
// import VideoBlog from "./VideoBlog";
// import search from "../Assets/searchicon.png";
// import brarrow from "../Assets/arrowbtm.png";
// import Form from "./Form";
// import Footer from "./Footer";

// const SearchFilter = () =>{
//   const [searchTerm, setSearchTerm] = useState('');
// }

// const Blog = () => {
//   const data = [
//     {
//       img: "https://unsplash.it/800/400/?random",
//       date:"August 11,2024",
//      desc: "E-Learning, or electronic learning, has emerged as a powerful tool, Breaking down [....]",
//       title: "App Development",
//       keyword: "App Development",
//     },
//     { img: "https://unsplash.it/800/400/?random",
//       date:"August 11,2024",
//       desc: "E-Learning, or electronic learning, has emerged as a powerful tool, Breaking down [....]",
//       title: "App Development", keyword: "Buisness" },
//     {img: "https://unsplash.it/800/400/?random",
//       date:"August 11,2024",
//       desc: "E-Learning, or electronic learning, has emerged as a powerful tool, Breaking down [....]",
//        title: "App Development", keyword: "Odoo" },
//     { img: "https://unsplash.it/800/400/?random",
//       date:"August 11,2024",
//       desc: "E-Learning, or electronic learning, has emerged as a powerful tool, Breaking down [....]",
//       title: "App Development", keyword: "On Demand" },
//     { img: "https://unsplash.it/800/400/?random",
//       date:"August 11,2024",
//       desc: "E-Learning, or electronic learning, has emerged as a powerful tool, Breaking down [....]",
//       title: "App Development", keyword: "Open AI" },
//     { img: "https://unsplash.it/800/400/?random",
//       date:"August 11,2024",
//       desc: "E-Learning, or electronic learning, has emerged as a powerful tool, Breaking down [....]",
//       title: "App Development", keyword: "Software" },
//     { img: "https://unsplash.it/800/400/?random",
//       date:"August 11,2024",
//       desc: "E-Learning, or electronic learning, has emerged as a powerful tool, Breaking down [....]",
//       title: "App Development", keyword: "Web" },
//     { img: "https://unsplash.it/800/400/?random",
//       date:"August 11,2024",
//       desc: "E-Learning, or electronic learning, has emerged as a powerful tool, Breaking down [....]",
//       title: "App Development", keyword: "Tech" },
//   ];

//   const FilteredBlogs = Blog.filter(({keyword})=>
//   keyword.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   console.log(data);
//   const [blogData, setBlogData] = useState(data);
//   return (
//     <>
//       <div className="fontTest text-white flex flex-wrap h-28 w-full bg-[#1c1c1e]">
//         <div className="pt-7 pl-16 w-28 ">
//           <img src={logo} alt="" />
//         </div>
//         <div className="pt-6 ">
//           <ul className="flex flex-wrap text-white list-none ml-40 p-4 rounded-full border">
//             <li className="px-4">
//               <Link to="/company">Company</Link>
//             </li>
//             <li className="pl-8"> Services</li>
//             <li className="pl-8">Industries</li>
//             <li className="pl-8">Portfolio</li>
//             <li className="pl-8"><Link to="/Blog">Blog</Link></li>
//             <li className="pl-8 pr-4"><Link to="/contact">Contact Us</Link></li>
//           </ul>
//         </div>
//         <Outlet />
//         <div className="flex ml-16 my-10">
//           <button className="border border-gray-500 px-4 rounded-lg ">
//             Hire us
//           </button>
//           <div className="flex border ml-6 px-3 rounded-lg ">
//             <img className="size-5 mt-[5px]  " src={arrow} alt="" />
//             <button className="">Let's Connect</button>
//           </div>
//         </div>
//       </div>

//       <img src={blogImg} alt="" />
//       <div className="fontTest bg-[#1c1c1e] h-[40vh] flex flex-wrap justify-center  ">
//         <div className="bg-white text-black items-center -mt-64  rounded-3xl h-[85vh] w-[95vw]">
//           <div className="mt-16 ml-10">
//             <h1 className="font-bold text-4xl"> Blog</h1>
//             <br />
//             <p className="font-normal text-sm">
//               Get daily news and insights on mobile apps, web, and software
//               development to make money!
//             </p>
//           </div>

//           <div className="flex flex-wrap  h-[50vh] w-[50vw] ml-72 mt-5 items-center">
//             <div className="w-1/2 bg-black text-white text-center items-center justify-center text-sm border border-black h-[17rem] ">
//               <h1 className="mt-32"> Quick/New Update of AV Technosys </h1>
//             </div>
//             <div className="w-1/2 h-[17rem]">
//               <VideoBlog />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="fontTest bg-[#1c1c1e] h-[160vh] ">
//         <h1 className="text-white text-4xl font-semibold p-16">
//           Latest Articles
//         </h1>
//         <div>
//           <ul className="flex cursor-pointer list-none text-white pl-16 gap-12">
//             <li onClick={() => setBlogData(data)}>All </li>
//             <li
//               onClick={() =>
//                 setBlogData(
//                   data.filter((obj) => obj.keyword === "App Development")
//                 )
//               }
//             >
//               App Development
//             </li>
//             <li
//               onClick={() =>
//                 setBlogData(data.filter((obj) => obj.keyword === "Buisness"))
//               }
//             >
//               Buisness
//             </li>
//             <li
//               onClick={() =>
//                 setBlogData(data.filter((obj) => obj.keyword === "Odoo"))
//               }
//             >
//               Odoo
//             </li>
//             <li
//               onClick={() =>
//                 setBlogData(data.filter((obj) => obj.keyword === "On Demand"))
//               }
//             >
//               On Demand
//             </li>
//             <li
//               onClick={() =>
//                 setBlogData(data.filter((obj) => obj.keyword === "Open AI"))
//               }
//             >
//               Open AI
//             </li>
//             <li
//               onClick={() =>
//                 setBlogData(data.filter((obj) => obj.keyword === "Software"))
//               }
//             >
//               Software
//             </li>
//             <li
//               onClick={() =>
//                 setBlogData(data.filter((obj) => obj.keyword === "Tech"))
//               }
//             >
//               Tech{" "}
//             </li>
//             <li
//               onClick={() =>
//                 setBlogData(data.filter((obj) => obj.keyword === "Web"))
//               }
//             >
//               Web
//             </li>
//             <div className="flex">
//               <input
//                 className="ml-5 bg-[#1c1c1e] border-b-2"
//                 type="search"
//                 placeholder="Search"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 id=""
//               />
//               <img className="size-5 -ml-5" src={search} alt="" />
//             </div>
//           </ul>

//           <div className="flex mt-10 ml-14 flex-wrap gap-10">
//             {blogData.map((data) => (
//               <div className="flex flex-col gap-2  rounded-lg p-4 w-64 relative">
//                 <div className="rounded-lg bg-white w-full h-40"><img className="h-full" src={data.img} alt="" /></div>
//                 <div className="h-6 w-6 bg-black absolute top-40 right-8 ">
//                   <img className="p-2" src={brarrow} alt="" />
//                 </div>
//                 <p className="text-gray-600 font-medium text-sm">{data.date}</p>
//                 <p className="text-white font-semibold text-sm">{data.keyword}</p>
//                 <p className=" text-[10px] text-gray-700 font-normal">------{data.title}</p>
//                 <p className="text-gray-300 text-[10px] ">{data.desc}  </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Form/>
//       <div className=" -mt-28 ">
//         <Footer/>
//       </div>
      
//     </>
//   );
// };

// export default Blog;
