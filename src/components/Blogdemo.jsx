import { useState, useEffect } from "react";
import axios from "axios";
import Item from "antd/es/list/Item";

const Blogdemo = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:1337/api/blogs?populate=*");
                console.log(res.data.data); // Storing the response data in state
                setData(res.data.data); // Storing the response data in state
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="flex mt-10 lg:ml-14 ml-16  bg-[#1c1c1e] flex-wrap gap-10">
            {data && data.length > 0 ? (
                data.map((i, index) => (
                    <div  key={index}>
                        
                        <div className="flex flex-col gap-2 rounded-lg p-4 w-64 relative">
                            <div className="rounded-lg border w-full h-40 text-white">
                                <img src={i.Image.url} alt="Blogs Image"  />
                            </div>
                            <h1 className="text-white font-semibold text-sm" >{i.Date}</h1>
                            <p className="text-[10px] text-gray-700 font-normal">{i.Keyword}</p> 
                            <h1 className="text-gray-600 font-medium text-sm">------{i.Title}</h1>
                             <p className="text-gray-300 text-[10px]" >{i.Description}</p> 
                        </div>
                       </div>

                ))
            ) : (
                <div>No data available</div>
            )}
            </div>
        </>
    );
};

export default Blogdemo;
