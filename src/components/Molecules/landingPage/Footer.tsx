import React from "react";
import {
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex p-8 items-center justify-between mt-auto px-8 bg-gypsum border-t border-black">
      <div className="flex items-center gap-8">
        <div className="text-black">&copy; 2023 LMS STUDIO</div>
        <div className="text-black">Built with ❤️ by Ernest Nnamdi</div>
      </div>

      <div className="flex gap-6">
        <FaGithubSquare color="black" size={20} />
        <FaTwitterSquare color="black" size={20} />
      </div>
    </div>
  );
};

export default Footer;
