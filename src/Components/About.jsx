import React, { useState } from "react";
import styles from "./style";
import Lottie from "lottie-react";
import animationData from "../Assets/about.json";
import {
  text1,
  text2,
  text3,
  text3b,
  htmlContent,
  htmlContent2,
  htmlContent3,
} from "./constants";

const About = () => {
  const [readMore, setReadMore] = useState(false);
  const [readMore2, setReadMore2] = useState(false);
  const [readMore3, setReadMore3] = useState(false);

  const [showFullText, setShowFullText] = useState(false);
  const [showFullText2, setShowFullText2] = useState(false);
  const [showFullText3, setShowFullText3] = useState(false);

  const handleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div
      className={`${styles.paddingX} ${styles.paddingY} bg-paleWhite text-testDark font-Matcha`}
      id="about"
    >
      <div className="flex justify-center items-center">
        <header className="font-bold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center my-4">
          ABOUT US
        </header>
        <div className="hidden md:block w-[7.5%] h-[7.5%]">
          <Lottie animationData={animationData} />
        </div>
      </div>

      <p className={`${styles.paragraph} mb-12`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Necessitatibus, eum quaerat beatae voluptates rem doloremque explicabo
        veritatis eaque voluptatum placeat. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Necessitatibus, eum quaerat beatae
        voluptates rem doloremque explicabo veritatis eaque voluptatum placeat.
      </p>

      <div
        className={`flex flex-col gap-y-4 md:grid md:grid-cols-3 md:gap-6 md:space-x-6 w-full px-5 mx-auto text-center text-[#F0F0F0]`}
      >
        <div className="flex flex-col text-center w-full md:ml-[24px] p-6 space-y-6 rounded-lg bg-brand-color-1 ">
          <header className="text-3xl font-semibold">
            Why Blockchain Alpha?
          </header>
          <p className="text-xl">
            {readMore ? text1 : `${text1.substring(0, 200)}...`}
            <button
              onClick={() => setReadMore(!readMore)}
              className="font-bold underline"
            >
              {readMore ? "Show Less" : "Read More"}
            </button>
          </p>
        </div>

        <div className={`${styles.card}`}>
          <header className="text-3xl font-semibold">
            Top Technical Expertise
          </header>
          <p>
            {readMore2 ? text2 : `${text2.substring(0, 200)}...`}
            <button
              onClick={() => setReadMore2(!readMore2)}
              className="font-bold underline"
            >
              {readMore2 ? "Show Less" : "Read More"}
            </button>
          </p>
        </div>

        <div className={`${styles.card}`}>
          <header className="text-3xl font-semibold">
            How We Stand Out As a Technical Content Marketing Agency
          </header>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: showFullText
                  ? htmlContent
                  : htmlContent.slice(0, 200) + "...",
              }}
            ></div>
            {htmlContent.length > 200 && (
              <button onClick={handleReadMore} className="font-bold underline">
                {showFullText ? "See Less" : "Read More"}
              </button>
            )}
          </div>
        </div>

        <div className={`${styles.card}`}>
          <header className="text-3xl font-semibold">
            But You Only Write, Right?
          </header>
          <div className="flex flex-col space-y-2">
            {readMore3 ? text3 + text3b : `${text3.substring(0, 200)}...`}
            <button
              onClick={() => setReadMore3(!readMore3)}
              className="font-bold underline"
            >
              {readMore3 ? " Show Less" : "Read More"}
            </button>
          </div>
        </div>

        <div className={`${styles.card}`}>
          <header className="text-3xl font-semibold">
            Experience The Difference That High-Quality Content Can Make For
            Your Brand
          </header>

          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: showFullText2
                  ? htmlContent2
                  : htmlContent2.slice(0, 200) + "...",
              }}
            ></div>
            {htmlContent2.length > 200 && (
              <button
                onClick={() => setShowFullText2(!showFullText2)}
                className="font-bold underline"
              >
                {showFullText2 ? "See Less" : "Read More"}
              </button>
            )}
          </div>
        </div>

        <div className={`${styles.card}`}>
          <header className="text-3xl font-semibold">
            What Do You Do? What Do You Deliver?
          </header>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: showFullText3
                  ? htmlContent3
                  : htmlContent3.slice(0, 200) + "...",
              }}
            ></div>
            {htmlContent3.length > 200 && (
              <button
                onClick={() => setShowFullText3(!showFullText3)}
                className="font-bold underline"
              >
                {showFullText3 ? "See Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
