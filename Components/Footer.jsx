import React from "react";
import {
  FaFacebookF,
  FaGooglePlus,
  FaGooglePlusG,
  FaTwitter,
} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center text-white">
      <h1>Blogger</h1>
      <p className="text-sm text-white ">
        All right reserved. Copyright @blogger
      </p>
      <div className="flex text-black gap-3">
        <div className="flex items-center justify-center w-[25px] h-[25px] rounded-full  bg-white">
          <FaFacebookF />
        </div>
        <div className="flex items-center justify-center w-[25px] h-[25px] rounded-full  bg-white">
          <FaTwitter />
        </div>
        <div className="flex items-center justify-center w-[25px] h-[25px] rounded-full  bg-white">
          <FaGooglePlusG />
        </div>
      </div>
    </div>
  );
};

export default Footer;
