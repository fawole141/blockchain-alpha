import React, { useEffect, useRef, useState } from "react";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";

const Collapsible = ({ question, children }) => {
  const [height, setHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.scrollHeight);
  }, [isOpen]);
  
  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      window.scrollTo(0, scrollPosition - ref.current?.scrollHeight);
      setHeight(0);
    }
  };

  return (
    <div
      className="mb-4 border border-natural rounded-2xl"
      onClick={handleFilterOpening}
    >
      {/* Question Div  */}
      <div
        className={`md:text-3xl sm:text-lg ${
          isOpen && "border-b"
        } px-6 py-4 flex justify-between items-center cursor-pointer`}
      >
        <span>{question}</span>{" "}
        <span className="align-middle ml-4">{isOpen ? <AiFillUpCircle /> : <AiFillDownCircle />}</span>
      </div>

      {/* Answer Div  */}
      {isOpen && (
        <div
          className={`text-lg overflow-hidden {h-[${height}px] ease-in-out delay-500 duration-[3000ms]} pt-4 px-4 pb-3`}
          ref={ref}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapsible;
