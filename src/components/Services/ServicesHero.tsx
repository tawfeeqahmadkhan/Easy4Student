import React from "react";
import earthImg from "../assets/images/world.png";
import ServiceUnderLine from "../assets/svg/ServiceUnderLine";

const ServicesHero = () => {
  return (
    <section className="text-black">

      <title className="text-center text-[22px] md:text-5xl text-black mb-2.5 md:mb-5 font-bold ">
        Student Diwan | Services
      </title>
      <div className="">
        {/* blur ball start */}
        <div className="flex items-center justify-between ">
          <div>
            {" "}
            <div className="md:h-20 md:w-20 h-12 w-12 bg-[#AE00FF]  md:blur-[100px] blur-[50px]    "></div>
          </div>
          {/* earth section start */}

          <div className="relative flex flex-col items-center justify-center mt-32 mx-auto">
            <div className="custom-animation-360deg-opacity overflow-hidden max-w-[280px] md:max-w-[750px]">
              <img src={earthImg} alt="service section earth img " className="opacity-40" />
            </div>
            <div className="flex items-center justify-center gap-5 flex-col absolute">
              <h2 className="[font-size:_clamp(1.3em,4vw,1.8em)]">Services</h2>
              <ServiceUnderLine />
              <h1 className="text-[22px] md:text-[38px] lg:text-[45px] font-bold text-center w-[280px] md:w-[750px] lg:w-[900px] mx-auto">
              Welcome to a New Era of Learning
              </h1>
              <p className="text-center">The Student Diwan is at the forefront of revolutionizing education by integrating technology, personalization, and seamless communication within the educational journey. We pride ourselves on offering comprehensive services designed to empower educators, engage students, enrich families involvement, and streamline administrative tasks with a focus on financial convenience and transparency. Here is how we are making it happen</p>
            </div>
          </div>
          <div>
            {" "}
            <div className="md:h-20 md:w-20 h-12 w-12 bg-[#AE00FF]  md:blur-[100px] blur-[50px]    "></div>
          </div>
        </div>
        {/* blur ball start */}

        <div className="flex items-center justify-center">
          <div className="md:h-32 md:w-44 h-12 w-12 bg-[#AE00FF] md:blur-[170px] blur-[50px]"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
