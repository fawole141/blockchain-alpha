import React from "react";
import styles from "./style";
import Lottie from "lottie-react";
import animationData from "../Assets/about.json";

const About = () => {
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
          <p>
            Anyone can write content, but not everyone can write with sound
            technical expertise and still maintain simplicity. At Blockchain
            Alpha, we execute technical content marketing strategies that
            ultimately generate a fanatic audience who regularly swipe their
            cards for your services.
          </p>
        </div>

        <div className={`${styles.card}`}>
          <header className="text-3xl font-semibold">
            Top Technical Expertise
          </header>
          <p>
            We have a team of experienced writers, editors, and industry experts
            who work tirelessly to create accurate, engaging, informative, and
            relevant content for your target audience. We take pride in our
            attention to detail and ability to deliver outstanding content. With
            us, you can rest assured that your content needs are in capable
            hands.
          </p>
        </div>

        <div className={`${styles.card}`}>
          <header className="text-3xl font-semibold">
            How We Stand Out As a Technical Content Marketing Agency
          </header>
          <p>
            Blockchain Alpha is purely a technical content marketing agency.
          </p>
          <ul>
            <li>All our staff are developers </li>
            <li> We participate in hackathons </li>
            <li> We hold internal technical workshops </li>
          </ul>
          <p>
            We write technical content from a place of experience and solid
            research, and that is why our clients keep coming back for more. Fun
            fact: We built this website ourself!
          </p>
        </div>

        <div className={`${styles.card}`}>
          <header className="text-3xl font-semibold">
            But You Only Write, Right?
          </header>
          <p>
            Anyone who understands marketing will agree that writing anything
            does not necessarily mean you will sell. Let’s face it, you are in
            business to make money right?
          </p>
          <p>
            At Blockchain Alpha, we don’t “just write.” We create technical
            content strategies that will make people know your product and pay
            for it. In short, we are your partner in increasing revenues!
          </p>
        </div>

        <div className={`${styles.card}`}>
          <header className="text-3xl font-semibold">
            Experience The Difference That High-Quality Content Can Make For
            Your Brand
          </header>
          <p>
            At Blockchain Alpha, we are committed to delivering high-quality
            technical content that surpasses your expectations. We understand
            the importance of unique content in today's digital landscape, and
            we never compromise on quality.
          </p>
          <p>
            If you are unsatisfied with our content, we offer a revision process
            to ensure your utmost satisfaction. We value your feedback and will
            work closely with you to make any necessary adjustments until you
            are delighted with the final result.
          </p>
        </div>

        <div className={`${styles.card}`}>
          <header className="text-3xl font-semibold">
            What Do You Do? What Do You Deliver?
          </header>
          <p>We prepare these deliverables:</p>
          <ul>
            <li>Technical documentation</li>
            <li>Whitepaper and litepapers</li>
            <li>Technical tutorials and guides</li>
            <li>Press Releases</li>
            <li>Content Marketing Plan</li>
          </ul>
          <p>
            We write technical content from a place of experience and solid
            research, and that is why our clients keep coming back for more. Fun
            fact: We built this website ourself!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
