import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import AnimateInView from "./Animations/AnimateInView";
import { fade } from "./Animations/AnimationVariants";
import AnimatedText from "./Animations/AnimatedText";
import { PopupButton } from "react-calendly";

const Start = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!name) {
      Swal.fire({
        title: "Error!",
        text: "Please Provide Your Name",
        icon: "error",
        confirmButtonText: "Cool",
        timer: 2000,
        background: "#1E1E1E",
        color: "white",
      });
      setIsLoading(false);
    } else if (!email) {
      Swal.fire({
        title: "Error!",
        text: "Please Provide Your Email",
        icon: "error",
        confirmButtonText: "Cool",
        timer: 2000,
        background: "#1E1E1E",
        color: "white",
      });
      setIsLoading(false);
    } else if (!message) {
      Swal.fire({
        title: "Error!",
        text: "Please Provide Your Email Body",
        icon: "error",
        confirmButtonText: "Cool",
        timer: 2000,
        background: "#1E1E1E",
        color: "white",
      });
      setIsLoading(false);
    } else {
      const template = {
        from_name: name,
        from_email: email,
        message: message,
      };

      emailjs
        .send(
          "service_hltbynl",
          "template_a4t5q7g",
          template,
          "XSvyuDFOjADNqUNfg"
        )
        .then(
          (result) => {
            // console.log(result.text);
            Swal.fire({
              title: "Success!",
              text: "Mail Was sent successfully",
              icon: "success",
              confirmButtonText: result.text,
              timer: 2000,
              background: "#1E1E1E",
              color: "white",
            });
            setIsLoading(false);
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              title: "Error!",
              text: "Do you want to continue",
              icon: "error",
              confirmButtonText: error.text,
              timer: 2000,
              background: "#1E1E1E",
              color: "white",
            });
            setIsLoading(false);
          }
        );
      setEmail("");
      setMessage("");
      setName("");
    }
  };

  const STARTHeader = [{ type: "heading2", text: "Get In Touch" }];
  const ScheduleHeader = [{type: "heading2", text: "Alternatively, Schedule A Call"}]

  return (
    <AnimateInView initial={{ opacity: 0, y: 10, zIndex: -1 }} variants={fade}>
      <div className="md:w-[60%] sm:w-full mx-auto my-0" id={"start"}>
        <div className="text-center matcha-font text-5xl text-brand-color-1 py-8">
          {STARTHeader.map((item, index) => {
            return <AnimatedText {...item} key={index} />;
          })}
        </div>
        <form
          className="flex flex-col justify-center duplicate-font sm:mx-8"
          onSubmit={(e) => sendMail(e)}
        >
          <div className="md:flex md:flex-row md:justify-between sm:flex-col">
            <input
              type={"text"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="md:mr-8 text-white w-full text-lg border-2 border-brand-color-1 rounded-lg py-[20px] px-[25px] bg-transparent mb-4 active:shadow-inputShadow "
              placeholder="Provide Your Name"
              name="from_name"
            />
            <input
              type={"text"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="text-white text-lg w-full border-2 border-brand-color-1 rounded-lg py-[20px] px-[25px] bg-transparent  mb-4 active:shadow-inputShadow"
              placeholder="Provide Your Email"
              name="from_email"
            />
          </div>
          <textarea
            className="text-white text-lg  md:mx-0 h-40 border-2 border-brand-color-1 rounded-lg py-[10px] px-[25px] bg-transparent mb-4 active:shadow-inputShadow placeholder:text-[larger]"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Leave A Message"
            name="message"
          />
          <button
            className="specialButton md:w-[10rem] sm:w-full sm:mx-auto"
            type="submit"
          >
            {isLoading ? "Sending...." : "Send"}
          </button>
        </form>

        <div className="mt-8 my-0">
          <div className="text-center matcha-font text-4xl text-brand-color-1 py-8">
          {ScheduleHeader.map((item, index) => {
            return <AnimatedText {...item} key={index} />;
          })}
          </div>
          <div className="flex justify-center">
            <PopupButton
              url="https://calendly.com/johnfawole18"
              rootElement={document.getElementById("root")}
              text="Schedule"
              styles={{
                color: "white",
                margin: "0.5rem auto 1.5rem",
                width: "10rem",
                padding: "0.8em 1.7em",
                backgroundColor: "transparent",
                borderRadius: "0.3em",
                cursor: "pointer",
                fontWeight: 400,
                fontSize: "17px",
                border: "1px solid #a983f2",
                textTransform: "uppercase",
              }}
            />
          </div>
        </div>
      </div>
    </AnimateInView>
  );
};

export default Start;
