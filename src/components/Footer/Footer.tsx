import { Link } from 'react-router-dom';
import footerLogo from "../assets/images/studentDiwan_logo.png";
import playStore from "../assets/play-store.svg";
import appleStore from "../assets/apple-store-white.svg";
import { footerLinks } from "../constants";
import SocialMediaLinks from "./SocialMediaLinks";
import SubscriptionTemplate from "./SubscriptionTemplate";
import AppleBlack from "../assets/svg/AppleBlack";

const Footer = () => {
  return (
    <footer className=" bg-gradient-footer bg-transparent p-5 md:p-0">
      <div className="  text-black max-w-[1280px] mx-auto relative">
        {/* //--Subscribe Our Application-- */}
        <div>
          <SubscriptionTemplate />
        </div>
        <div className="flex flex-col justify-between md:flex-row md:justify-between pt-24 md:pt-48 px-5 lg:px-0">
          {/* --First Child-- */}
          <div className="basis-1/4">
            {/* -Image | Logo | Social */}
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-40">
                <img src={footerLogo} alt="footer logo" />
              </div>
            </div>
            <p className="text-center md:text-start py-7 text-black text-opacity-70">
            The Student Diwan is your gateway to transforming education through innovation. Our unique platform offers an advanced LMS, designed to make learning engaging and accessible. We empower students and educators alike with tools for operational efficiency and enriched educational experience.
            </p>
            <div className="hidden md:block">
              <SocialMediaLinks />
            </div>
          </div>
          {/* --Second Child-- */}
          <div className="basis-1/2 flex flex-col justify-center md:flex-row md:gap-[100px] lg:gap-[260px]">
            {footerLinks.map((data, index) => (
              <div
                key={index}
                className="flex gap-6 flex-col items-center md:items-start mb-5 border-b border-white border-opacity-20 pb-5 md:border-none"
              >
                <p className="text-[16px] font-bold ">{data.title}</p>

                {data.links.map((item, index) => (
                  <Link
                    key={index}
                    to={item.url}
                    className="text-black text-opacity-70 text-sm flex flex-col hover:underline"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          {/* --Third Child-- */}
          <div className="basis-1/4 flex items-end justify-center md:justify-start md:flex-col gap-7 mt-5 md:mt-0">
            <Link
              to={"/"}
              className="flex items-center justify-center gap-3 bg-black bg-opacity-10 hover:bg-opacity-20 transition-all p-2 rounded-md w-40"
            >
              <img src={playStore} alt="Play Store" />
              <div className="flex flex-col">
                <span className="uppercase text-xs">Get it on</span>
                <b>Google Play</b>
              </div>
            </Link>
            <Link
              to={"/"}
              className="flex items-center justify-center gap-3 bg-black bg-opacity-10 p-2 rounded-md w-40 hover:bg-opacity-20 transition-all"
            >

              <AppleBlack />
              <div className="flex flex-col">
                <span className="text-[11px]">Download on the</span>
                <b>App Store</b>
              </div>
            </Link>
          </div>
        </div>
        {/* --footer bottom data-- */}
        {/* <hr className="h-1 w-full bg-white bg-opacity-30 hidden md:block mb-3" /> */}
        <div className="block md:hidden my-6">
          <SocialMediaLinks />
        </div>
        <div className="flex flex-col-reverse gap-3 md:flex-row md:justify-between md:border-t md:pt-5 border-white border-opacity-20 pb-5 px-5 lg:px-0">
          <div className="text-black text-opacity-60 text-center">
            <p>
              Student Diwan created by{" "}
              <Link
                className="underline hover:text-black hover:font-bold transition-all whitespace-nowrap"
                target="_blank"
                to={"https://expertsquad.net/"}
              >
                Expert Squad
              </Link>
            </p>
          </div>
          <div className="flex items-center justify-center gap-8 text-black text-opacity-60">
            <span>Privacy</span>
            <span>Security</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
