import React from "react";
import { illustrations, logo } from "../Assets";
import styles from "./style";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row md:items-center heroo items-center px-6 md:px-16 mx-auto mt-0  md:py-16 relative">
      <div className="flex flex-col mb-20 md:mb-32 md:align-middle space-y-12 md:w-1/2">
        <h1 className="max-w-sm text-4xl matcha-font font-semibold text-white text-center md:max-w-[800px] md:text-5xl md:text-left">
          Where you need to be for quality content and top-notch marketing
        </h1>
        <p
          className={`${styles.paragraph} md:text-left duplicate-font text-center text-white max-w-[470px] mt-5`}
        >
          Blockchain Alpha delivers excellent technical content marketing to
          crypto companies, blockchains, startups, DAOs, and DeFi protocols.
        </p>

        <div className="flex justify-center md:justify-start">
          <button className="p-3 px-6 pt-2 mt-1 duplicate-font text-white bg-brand-color-1 text-xl rounded-full baseline hover:darkBlue">
            <Link to={"/#start"}> Get Started</Link>
          </button>
        </div>
      </div>
      <div className="md:hidden object-contain h-auto max-w-[250px]">
        <img
          src={logo}
          alt="still logo-main"
          className="hero-logo2"
        ></img>
      </div>
      <div className="hidden md:block md:align-middle md:w-1/2  ">
        <img
          src={logo}
          alt="logo-main"
          className="w-[70%] h-[70%] z-[5] hero-logo"
        ></img>
      </div>
    <div className='md:hidden position-ill2'>
    <img src={illustrations} alt="illustrations"/>
    </div>
    <div className='md:hidden position-ill'>
    <img src={illustrations}  alt="illustrations"/>
    </div>
    </section>
  );
};

export default Hero;
