import React from "react";
import logo3 from "../Assets/logo3.png";
import Collapsible from "./Animations/Collapsible";
import AnimateInView from "./Animations/AnimateInView";
import { fade } from "./Animations/AnimationVariants";
import AnimatedText from "./Animations/AnimatedText";

const FAQ = () => {
  const FAQArray = [
    {
      id: 1,
      question: "When can we get started?",
      answer:
        "The onboarding process lasts 4-6 weeks. In between this period; we'll sign the work contract and deliver the first article. After this, you'll receive weekly articles based on your content plan.",
    },
    {
      id: 2,
      question: "Can we receive more than one article per week?",
      answer:
        "You can customize your content plan to receive more than one article weekly.",
    },
    {
      id: 3,
      question: "Do you offer free trials?",
      answer:
        "We do not offer free trials, but we have several samples we can share as a testament to the quality of our work.",
    },
    {
      id: 4,
      question: "What if I am not satisfied with an article?",
      answer:
        "Your satisfaction is our priority. If you don't like an article, we will revise it to ensure your satisfaction. We also offer a complete rewrite process if we cannot fix an article.",
    },
    {
      id: 5,
      question: "How do you accept payments?",
      answer:
        "You can create a monthly payment plan or pay a single invoice at the start of each quarter. ",
    },
  ];

  const FAQHeader = [{ type: "heading1", text: "FAQ" }];

  return (
    <AnimateInView initial={{ opacity: 0, y: 5, zIndex: -1 }} variants={fade}>
      <div className=" text-natural mt-24" id="faqs">
        {/* <AnimateInView initial="hidden" variants={container}> */}
          <div className="text-center matcha-font text-4xl text-natural mb-8">
            {FAQHeader.map((item, index) => {
              return <AnimatedText {...item} key={index} />;
            })}
          </div>
        {/* </AnimateInView> */}

        <div className="grid duplicate-font md:grid-cols-12 md:px-16 sm:px-8 pt-4 pb-8 sm:grid-cols-1">
          {/* Div on the left  */}
          <div className="w-64 col-span-4 md:visible md:flex md:flex-col md:justify-center sm:invisible sm:hidden">
            <img src={logo3} alt="blockchain alpha logo" loading="lazy" />
          </div>

          {/* Div on the right  */}
          <div className="col-span-8">
            {/* Each FAQ  */}

            {FAQArray.map((FAQ) => {
              return (
                <Collapsible   key={FAQ.id} question={FAQ.question}>
                  <span className="">{FAQ.answer}</span>
                </Collapsible>
              );
            })}
          </div>
        </div>
      </div>
    </AnimateInView>
  );
};

export default FAQ;
