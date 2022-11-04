import React from "react";
import Button from "./Button";
import ProfileImg from "../assets/Profile.jpg";
import SlackImg from "../assets/slack.png";
import GitImg from "../assets/github.png";
import MobileShare from "../assets/mobileShare.png";
import Camera from "../assets/camera.png";
import DesktopShare from "../assets/desktopShare.png";
import { Link } from "react-router-dom";

const LINKS = [
  {
    name: "Twitter Link",
    id: "twitter",
    href: "https://t.co/ZUMOtQT7aT",
  },
  {
    name: "Zuri Team",
    id: "btn__zuri",
    href: "https://training.zuri.team/",
  },
  {
    name: "Zuri Books",
    id: "books",
    href: "http://books.zuri.team",
    subtext: "This links leads to our site where you find books about design and coding",
  },
  {
    name: "Python Books",
    id: "book__python",
    href: "https://books.zuri.team/python-for-beginners?ref_id=Oluwatimii",
    subtext: "This links to my python for beginners books",
  },
  {
    name: "Background Check For Coders",
    id: "pitch",
    href: "https://background.zuri.team",
    subtext: "We offer great background checks on your codes, click to continue."
  },
  {
    name: "Design Books",
    id: "book__design",
    href: "https://books.zuri.team/design-rules",
    subtext: "This leads to a free and great design book offered buy Zuri."
  },
];

const Section = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1152px] mx-auto py-8 px-10">
        {/* PROFILE SECTION */}
        <div className="flex items-center justify-center mx-auto relative">
          <div className="flex flex-col items-center justify-center">
            <div className="images relative w-[88px] h-[88px]">
              <img
                className="rounded-full w-full h-full object-cover"
                src={ProfileImg}
                alt="profileimg"
              />
              <div className="bg-[#344054BF] absolute rounded-full top-0 w-[88px] h-[88px] left-0 camera flex items-center justify-center">
                <img src={Camera} alt="camera" className="absolute bottom-1" />
              </div>
            </div>
            <h1 className="mt-4 text-xl font-bold" id="twitter">
              Uncle_Timii
            </h1>
            {/* Hidden slack username */}
            <h1 id='slack' className="hidden">Oluwatimii</h1>
          </div>

          <div className="tooltip absolute right-10 md:right-[13rem] top-0">
            <img
              className="hidden md:block hover:shadow-md"
              src={DesktopShare}
              alt="shareDesktop icon"
            />
            <img
              className="md:hidden"
              src={MobileShare}
              alt="shareMobile icon"
            />
            <span className="tooltiptext">Share Link</span>
          </div>
        </div>

        {/* LINKS SECTION */}
        <div className="w-full flex flex-col space-y-3 my-[3rem]">
          {LINKS.map((link) => (
            <Button
              key={link.id}
              href={link.href}
              name={link.name}
              title={link.subtext}
              id={link.id}
            />
          ))}
          <Link to="/contact" id="contact" className="filter py-4 outline-none text-center rounded-md" >
            Contact
          </Link>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <img src={SlackImg} alt="slack icon" />
          <img src={GitImg} alt="github icon" />
        </div>
      </div>
    </section>
  );
};

export default Section;
