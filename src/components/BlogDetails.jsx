import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const BlogDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `http://localhost:1337/api/blogs?populate=*`
        );
        console.log(res.data.data);
        setBlog(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <>
      <div className="text-white  bg-[#1c1c1e] h-[100vh] w-[100vw]">
        {data && data.length > 0 ? (
          data.map((i, index) => (
            <div key={index}>
              {
                <img
                  className="w-full h-full "
                  src={`http://localhost:1337${i.Image.url}`}
                  alt={i.title}
                />
              }
            </div>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </>
  );
};

export default BlogDetails;
{
  /* <img
className="w-full h-full "
src={`http://localhost:1337${i.Image.url}`}
alt={i.title}
/> */
}
