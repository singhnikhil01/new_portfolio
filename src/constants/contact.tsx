
import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaDiscord,
  FaCalendarAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const userEmail = 'singhnikhil03@outlook.com'
export const location = 'Kerala, India'
export const center: [number, number] = [9.0910404,76.4901249,];
export const Phone =  '+91 7481030330'

export  const socialLinks = [
    {
      icon: <FaLinkedin className="w-8 h-8 text-[#0A66C2]" />,
      title: "LinkedIn",
      text: "Let's connect professionally",
      link: "https://www.linkedin.com/in/nikhilkumarsingh/",
      color: "hover:bg-blue-900/20"
    },
    {
      icon: <FaGithub className="w-8 h-8 text-gray-200" />,
      title: "GitHub",
      text: "Explore my projects & contributions",
      link: "https://github.com/singhnikhil01",
      color: "hover:bg-gray-700"
    },
    {
      icon: <FaTwitter className="w-8 h-8 text-[#1DA1F2]" />,
      title: "Twitter",
      text: "Daily insights & tech updates",
      link: "https://x.com/NikhilSing45602?t=iHwL3xCoQALn_nsgXiXlSA&s=35",
      color: "hover:bg-blue-900/20"
    },
    {
      icon: <FaDiscord className="w-8 h-8 text-[#5865F2]" />,
      title: "Discord",
      text: "Join my developer community",
      link: "https://discordapp.com/users/nikhil_singh_",
      color: "hover:bg-indigo-900/20"
    },
    {
      icon: <SiGmail className="w-8 h-8 text-[#EA4335]" />,
      title: "Gmail",
      text: "Send me an email directly",
      link: "mailto:singhsansar433@gmail.com",
      color: "hover:bg-red-900/20"
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8 text-[#4285F4]" />,
      title: "Book a Call",
      text: "Schedule a meeting",
      link: "https://calendly.com/singhnikhil03",
      color: "hover:bg-blue-900/20"
    }
  ];
