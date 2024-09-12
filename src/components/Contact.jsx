import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'


const Contact = () => {

    useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-16"
    >
      <form
        method="POST"
        action="https://getform.io/f/6773beda-3ad4-44f5-81fa-b73fa6e9d523"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-sky-100 text-[25px] py-4">
            Please fill up this form to contact you
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="7"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 font-bold px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};




export default Contact;
