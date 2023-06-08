import React from "react";
import { illustrations } from "../Assets";
import styles from "./style";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center px-12 mx-auto mt-0 py-8 space-y-0 md:space-y-0 bg-brand-color-1">
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1 className="max-w-sm text-4xl font-bold text-white text-center  md:text-5xl md:text-left">
          Where you need to be for quality content and top-notch marketing
        </h1>
        <p
          className={`${styles.paragraph} md:text-left text-center max-w-[470px] mt-5`}
        >
          Blockchain Alpha delivers excellent technical content marketing to
          crypto companies, blockchains, startups, DAOs, and DeFi protocols.
        </p>

        <div class="flex justify-center md:justify-start">
          <button class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
            <a href="#"> Get Started</a>
          </button>
        </div>
      </div>
      <div className="md:w-1/2 md:my-0 my-2">
        <img
          src={illustrations}
          alt="Illustrations-main"
          className="w-[90%] h-[100%] z-[5]"
        ></img>
      </div>
    </section>
  );
};

export default Hero;
