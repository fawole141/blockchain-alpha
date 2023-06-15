import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import AnimateInView from "./Animations/AnimateInView";
import { fade } from "./Animations/AnimationVariants";
// import "@sweetalert2/theme-dark/dark.css";

const Start = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async (e) => {
    e.preventDefault();
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
          }
        );
      setEmail("");
      setMessage("");
      setName("");
    }
  };

  return (
    <AnimateInView initial={{ opacity: 0, y: 10, zIndex: -1 }} variants={fade}>
      <div className="md:w-[60%] sm:w-full mx-auto my-0" id={"start"}>
        <h2 className="text-center text-5xl text-brand-color-1 py-8">
          Get In Touch
        </h2>
        <form
          className="flex flex-col justify-center sm:mx-8"
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
            Send
          </button>
        </form>
      </div>
    </AnimateInView>
  );
};

export default Start;
