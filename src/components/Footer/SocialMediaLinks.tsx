import { Link } from 'react-router-dom';
import facebook from "../assets/Facebook.svg";
import reddit from "../assets/Reddit.svg";
import youtube from "../assets/YouTube.svg";
import whatsapp from "../assets/WhatsApp.svg";
import pinterest from "../assets/Pinterest.svg";

const socialMediaData = [
  { name: "Facebook", icon: facebook },
  { name: "Reddit", icon: reddit },
  { name: "Youtube", icon: youtube },
  { name: "Whatsapp", icon: whatsapp },
  { name: "Pinterest", icon: pinterest },
];

const SocialMediaLinks = () => {
  return (
    <div className="flex items-center justify-center md:justify-start gap-3">
      {socialMediaData.map((socialMedia, index) => (
        <Link
          key={index}
          to={"/"}
          className="social-media-links"
          style={{
            animationDelay: `${1.2 + index}s`,
            animationDuration: `${5}s`,
          }}
        >
          <img src={socialMedia.icon} alt={socialMedia.name} />
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
