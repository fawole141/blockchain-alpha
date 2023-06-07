import React, { useEffect, useRef, useState } from "react";

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
        className={`text-3xl ${
          isOpen && "border-b"
        } px-6 py-4 flex justify-between cursor-pointer`}
      >
        <span>{question}</span> <span>V</span>
      </div>

      {/* Answer Div  */}
      {isOpen && (
        <div
          className={`h-[${height}px] overflow-hidden transition duration-1000 ease-in-out pt-4 px-4 py-2`}
          ref={ref}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapsible;
