import React from "react";
import ZuriLogo from "../assets/zuriLogo.png";
import IngressImg from "../assets/I4G.png";

const Footer = () => {
  return (
    <div className="bg-[#fff] px-4 max-w-[1212px] mx-auto my-5">
      <div className="w-full">
        <hr />
        <div className=" flex flex-col md:flex-row max-w-[200px] md:max-w-full md:items-center justify-start md:justify-between space-y-3 md:space-y-0 pt-4">
          <img src={ZuriLogo} alt="zuri-logo" />
          <p className="text-[#667085] text-sm">HNG Internship 9 Frontend Task</p>
          <img src={IngressImg} alt="I4G" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
