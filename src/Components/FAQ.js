import React from "react";
import logo3 from "../Assets/logo3.png";
import Collapsible from "./Utilities/Collapsible";

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

  return (
    <div className=" text-natural" id="faqs">
      <header className=" mb-8 text-4xl text-center text-natural">FAQS</header>

      <div className="grid grid-flow-col space-x-24 px-16 py-8">
        {/* Div on the left  */}
        <div className="w-72 h72 flex flex-col justify-center">
          <img src={logo3} alt="blockchain alpha logo" loading="lazy" />
        </div>

        {/* Div on the right  */}
        <div>
          {/* Each FAQ  */}

          {FAQArray.map((FAQ) => {
            return (
              <Collapsible key={FAQ.id} question={FAQ.question}>
                <span className="">{FAQ.answer}</span>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
