/* eslint-disable @next/next/no-img-element */
import React from "react";
import OurJourney from "../assets/svg/OurJourney";
import stepMd from "../assets/images/ourJourney.png";
import stepSm from "../assets/images/ourJourneyMobile.png";

const Step = () => {
  return (
    <section className="max-w-[1280px] mx-auto md:mt-64 mt-[520px] image-drag-none">
      {/* blur ball */}

      <div className="flex items-center justify-between">
        <div className="md:h-20 md:w-44 h-20 w-20 bg-[#AE00FF]  md:blur-[160px] blur-[70px]"></div>
        {/* <div className="md:h-20 md:w-44 h-20 w-20 bg-[#AE00FF]  md:blur-[160px] blur-[70px]"></div> */}
      </div>

      {/* top heading */}
      <div className="text-black ">
        <h2 className="[font-size:_clamp(2em,4vw,2.8em)] text-center ">
          Our Journey
        </h2>
        <div className="flex items-center justify-center">
          <OurJourney />
        </div>
        <div className="flex items-center justify-center">
          <div className="md:h-20 md:w-44 h-20 w-20 bg-[#AE00FF]  md:blur-[160px] blur-[70px]"></div>
        </div>
      </div>

      {/* step start */}
      <div className="flex items-center justify-items-center ">
        <div className="w-full">
          <div className="flex items-center justify-center">
            <img
              className="md:block hidden image-drag-none"
              src={stepMd}
              width={1240}
              height={500}
              alt="Picture of the author"
            />
            <img
              className="md:hidden block"
              src={stepSm}
              width={330}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>

      {/* blur ball */}

      <div className="flex items-center justify-between ">
        <div className="md:h-20 md:w-44 h-20 w-20 bg-[#AE00FF]  md:blur-[160px] blur-[70px]  opacity-50   "></div>
        <div className="md:h-20 md:w-44 h-20 w-20 bg-[#AE00FF]  md:blur-[160px] blur-[70px]  opacity-50    "></div>
        <div className="md:h-20 md:w-44 h-20 w-20 bg-[#AE00FF]  md:blur-[160px] blur-[70px]  opacity-50    "></div>
      </div>
    </section>
  );
};

export default Step;
