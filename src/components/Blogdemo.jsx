import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Item from "antd/es/list/Item";
import SouthEastIcon from "@mui/icons-material/SouthEast";

const Blogdemo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1337/api/blogs?populate=*"
        );
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
      <div className="flex mt-10 lg:pl-14 pl-16  bg-[#1c1c1e] flex-wrap gap-10">
        {data && data.length > 0 ? (
          data.map((i, index) => (
            <div key={index}>
              <div className="flex flex-col gap-2 rounded-lg p-4 w-64 relative">
                <div className="rounded-lg w-full h-40 text-white">
                  {/* <img src={i.Image.url} alt="Blogs Image"  /> */}
                  <img
                    className="w-full h-full "
                    src={`http://localhost:1337${i.Image.url}`}
                    alt={i.title}
                  />

                  <button className=" absolute bg-black w-7 h-7 right-10 top-40">
                    <Link to={`blogDetails/${i.id}`}>
                      <SouthEastIcon fontSize="inherit" />
                    </Link>
                  </button>
                </div>
                <h1 className="text-white font-semibold text-sm">{i.Date}</h1>
                <p className="text-[10px] text-gray-700 font-normal">
                  {i.Keyword}
                </p>
                <h1 className="text-gray-600 font-medium text-sm">
                  ------{i.Title}
                </h1>
                <p className="text-gray-300 text-[10px]">{i.Description}</p>
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
