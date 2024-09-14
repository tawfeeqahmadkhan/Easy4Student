import React from "react";
import WatchVideosbg from "../assets/watchVideobg.svg";
import roundedShap from "../assets/roundedShap.svg";
import YoutubeVideo from "../Shared/YoutubeVideo";

const WatchVideo = () => {
  return (
    <div className="text-black md:my-80 my-0 max-w-[1280px] mx-auto flex items-center justify-center h-full px-4">
      <div className="flex items-center justify-center h-[500px]">
        <div className="w-full relative ">
          {/* video background */}
          <div className="w-full animate-pulse">
            <img
              className="[width:clamp(700px,4vw,300px)]"
              src={WatchVideosbg}
              alt="watch videos background Image"
            />
            <img
              className=" w-[30%] absolute top-7 md:top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
              src={roundedShap}
              alt="watch videos background Image"
            />
          </div>

          {/* react youtube videos  */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full ">
            <YoutubeVideo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
