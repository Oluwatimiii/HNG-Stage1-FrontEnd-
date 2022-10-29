import React from "react";
import Button from "./Button";
import ProfileImg from "../assets/Profile.jpg";
import SlackImg from "../assets/slack.png";
import GitImg from "../assets/github.png";
import MobileShare from "../assets/mobileShare.png";
import DesktopShare from "../assets/desktopShare.png";
import Footer from "./Footer";

const LINKS = [
  {
    name: "Twitter Link",
    id: "twitter",
    href: "https://t.co/ZUMOtQT7aT",
  },
  {
    name: "Zuri Team",
    id: "btn__zuri",
    href: "“https://training.zuri.team/",
  },
  {
    name: "Zuri Books",
    id: "books",
    href: "http://books.zuri.team",
  },
  {
    name: "Python Books",
    id: "book__python",
    href: "https://books.zuri.team/python-for-beginners?ref_id=Oluwatimii",
  },
  {
    name: "Background Check For Coders",
    id: "pitch",
    href: "https://background.zuri.team",
  },
  {
    name: "Design Books",
    id: "book__design",
    href: "https://books.zuri.team/design-rules",
  },
];

const Section = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1152px] mx-auto py-8 px-10">
        {/* PROFILE SECTION */}
        <div className="flex items-center justify-center mx-auto relative">
          <div className="flex flex-col items-center justify-center">
            <div className="w-[88px] h-[88px]">
              <img
                className="rounded-full w-full h-full object-cover"
                src={ProfileImg}
                alt="profileimg"
              />
            </div>
            <h1 className="mt-4 text-xl font-bold" id="twitter">
              Uncle_Timii
            </h1>
            {/* Hidden slack username */}
            {/* <h1 id='slack'>Oluwatimii</h1> */}
          </div>

          <div className="absolute right-10 md:right-[13rem] top-0">
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
          </div>
        </div>

        {/* LINKS SECTION */}
        <div className="w-full flex flex-col space-y-3 my-[3rem]">
          {LINKS.map((link) => (
            <Button
              key={link.id}
              href={link.href}
              name={link.name}
              id={link.id}
            />
          ))}
        </div>

        <div className="flex items-center justify-center space-x-2">
          <img src={SlackImg} alt="slack icon" />
          <img src={GitImg} alt="github icon" />
        </div>

        <div className="mt-[4rem] md:mt-[6rem]">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Section;
