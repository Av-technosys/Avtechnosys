import React from 'react'
import BlogVideo from "../Assets/blogvideo.mp4";

const VideoBlog = () => {
    return (
        <div className="flex justify-center items-center h-full w-full">
          <video
            className=" object-cover h-full w-full " loop={true} muted={true} autoPlay={true}
          >
            <source src={BlogVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
}

export default VideoBlog
