import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
// import { Link } from "react-router-dom";

const Contact = () => {
  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const public_id = import.meta.env.VITE_PUBLIC_ID;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const sendMessage = (e) => {
    e.preventDefault();

    if (name === "") {
      return (document.getElementById("name_error").innerHTML =
        "*Please fill this field");
    } else {
      document.getElementById("name_error").innerHTML = "";
    }

    if (email === "") {
      return (document.getElementById("email_error").innerHTML =
        "*Please fill this field");
    } else if (!email.includes("@")) {
      return (document.getElementById(
        "email_error"
      ).innerHTML = `*Please include an '@' in the email address. '${email}' is missing an '@'.`);
    } else {
      document.getElementById("email_error").innerHTML = "";
    }

    if (messages === "") {
      return (document.getElementById("msg_error").innerHTML =
        "*Please fill this field");
    } else {
      document.getElementById("msg_error").innerHTML = "";
    }

    setIsLoading(true);
    emailjs
      .sendForm(
        service_id,
        template_id,

        e.target,
        public_id
      )
      .then((res) => {
        console.log("message send:", res.text);
        setIsLoading(false);
        setEmail(""), setName(""), setMessages("");
        toast.success("Message send successfully!");
      })
      .catch((err) => {
        console.log("email", err);
        toast.error("Failed to send message");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <section id="contact" className="py-20 bg-gray-100 dark:bg-bc">
        <div className="px-4 max-w-7xl mx-auto">
          <div className="mb-16" data-aos="fade-up">
            <h1 className="text-4xl font-bold mb-3 text-center dark:text-white text-black">
              Contact
            </h1>
            <div
              data-aos="zoom-in"
              className="w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto delay-700"
            ></div>
            <p className="mt-4 text-gray-500 dark:text-[#EEEEEE] text-center ">
              Let's connect and discuss opportunities
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 max-sm:grid-cols-1">
            <div data-aos="zoom-in-right" className="flex flex-col">
              <h1 className="text-2xl font-semibold mb-6 dark:text-white text-black">
                Get in Touch
              </h1>
              <div className="space-y-4 flex flex-col">
                <div className="inline-flex items-center group gap-2">
                  <a href="https://afnankk9995@gmail.com" className="hover:text-orange-600 hover:ml-5 translate-all duration-700 text-lg cursor-pointer">
                    <i class="fa-regular fa-envelope text-orange-600"></i>{" "}
                    <span className="dark:text-white text-black hover:text-orange-600 transition-all duration-600 ease-in-out">
                      {" "}
                      afnankk9995@gmail.com{" "}
                    </span>
                  </a>
                </div>
                <div className="inline-flex items-center group ">
                  <a  href="https://www.linkedin.com/in/mohammed-afnan-kk" className="hover:text-orange-600 hover:ml-5 translate-all duration-700 text-lg cursor-pointer">
                    <i class="fa-brands fa-linkedin-in text-orange-600"></i>{" "}
                    <span className="dark:text-white text-black hover:text-orange-600 transition-all duration-600 ease-in-out">
                      {" "}
                      linkedin.com/in/mohammed-afnan-kk{" "}
                    </span>
                  </a>
                </div>
                <div className="inline-flex items-center group gap-2 ">
                  {" "}
                  <a href="https://github.com/mohammedafnankk" className="hover:text-orange-600 hover:ml-5 translate-all duration-700 text-lg cursor-pointer">
                    <i class="fa-brands fa-github text-orange-600"></i>{" "}
                    <span className="dark:text-white text-black hover:text-orange-600 transition-all duration-600 ease-in-out">
                      github.com/mohammedafnankk
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div
                data-aos="zoom-in-left"
                className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-xl"
              >
                <div className="space-y-1.5 p-6">
                  <h1 className="text-2xl font-semibold ">Send a Message</h1>
                </div>
                <form
                  onSubmit={sendMessage}
                  action=""
                  className="flex flex-col p-6 pt-0 space-y-4"
                >
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold pb-1"
                    >
                      Name
                    </label>
                    <input
                      disabled={isLoading}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      id="name"
                      className={`py-2 px-3 text-sm rounded-md border focus-visible:outline-orange-600 focus:border-3 border-orange-300 ${
                        isLoading
                          ? "text-gray-500 cursor-not-allowed"
                          : "text-black"
                      }`}
                    />
                    <span
                      id="name_error"
                      className="text-red-600 text-xs pl-[5px]"
                    ></span>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold pb-1"
                    >
                      Email
                    </label>
                    <input
                      disabled={isLoading}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="email"
                      className={`py-2 px-3 text-sm rounded-md border focus-visible:outline-orange-600 focus:border-3 border-orange-300 ${
                        isLoading
                          ? "text-gray-500 cursor-not-allowed"
                          : "text-black"
                      }`}
                    />
                    <span
                      id="email_error"
                      className="text-red-600 text-xs pl-[5px]"
                    ></span>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold pb-1"
                    >
                      Message
                    </label>
                    <textarea
                      disabled={isLoading}
                      value={messages}
                      onChange={(e) => setMessages(e.target.value)}
                      name="message"
                      id="message"
                      className={`min-h-[88px] px-3 py-2 text-sm ${
                        isLoading
                          ? "text-gray-500 cursor-not-allowed"
                          : "text-black"
                      } rounded-md border focus-visible:outline-orange-600 focus:border-3 border-orange-300`}
                    ></textarea>
                    <span
                      id="msg_error"
                      className="text-red-600 text-xs pl-[5px]"
                    ></span>
                  </div>
                  <button
                    disabled={isLoading}
                    type="submit"
                    className={` py-2 ${
                      isLoading
                        ? "bg-orange-300 cursor-not-allowed"
                        : "bg-orange-600 hover:bg-orange-400 cursor-pointer"
                    }  px-3 rounded-md text-white  transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 text-sm`}
                  >
                    {isLoading ? (
                      <>
                        <i class="fa-solid fa-spinner fa-spin"></i> Sending
                      </>
                    ) : (
                      <>
                        <i class="fa-regular fa-paper-plane"></i>Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
