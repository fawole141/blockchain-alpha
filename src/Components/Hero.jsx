import React from "react";
import { illustrations, logo } from "../Assets";
import styles from "./style";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row heroo items-center px-6 md:px-16 mx-auto mt-0 py-8 md:py-8 space-y-0 md:space-y-0">
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1 className="max-w-sm text-4xl font-bold text-white text-center md:max-w-[800px] md:text-5xl md:text-left">
          Where you need to be for quality content and top-notch marketing
        </h1>
        <p
          className={`${styles.paragraph} md:text-left text-center text-white max-w-[470px] mt-5`}
        >
          Blockchain Alpha delivers excellent technical content marketing to
          crypto companies, blockchains, startups, DAOs, and DeFi protocols.
        </p>

        <div className="flex justify-center md:justify-start">
          <button className="p-3 px-6 pt-2 text-white bg-brand-color-1 text-xl rounded-full baseline hover:darkBlue">
            <Link to={"/#start"}> Get Started</Link>
          </button>
        </div>
      </div>
      <div className="md:hidden">
        <img
          src={logo}
          alt="still logo-main"
          className="w-[70%] h-[70%] hero-logo2"
        ></img>
      </div>
      <div className="hidden md:block md:w-1/2  ">
        <img
          src={logo}
          alt="logo-main"
          className="w-[70%] h-[70%] z-[5] hero-logo"
        ></img>
      </div>
    </section>
  );
};

export default Hero;
