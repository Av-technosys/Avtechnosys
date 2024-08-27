import React from 'react';
import myVideo from '../Assets/contact.mp4';

const VideoPlayer = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <video
        className=" object-cover rounded-xl h-full w-full " loop={true} muted={true} autoPlay={true}
      >
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
