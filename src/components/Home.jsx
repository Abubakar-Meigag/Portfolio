import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"

const Home = () => {
return (
  <div name="home" className="w-full h-screen bg-[#0a192f]">
    <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
      <p className="text-pink-600 font-bold text-2xl">Hi my name is </p>
      <h1 className="text-3xl sm:text-6xl font-bold text-[#d4e0e5]">
        Abubakar Meigag
      </h1>
      <h2 className="text-3xl sm:text-5xl font-bold text-[#d4e0e5]">
        I'm Full Stack Developer
      </h2>
      <p className="text-[#a2a4b1] py-4 max-w-[700px]">
        As a full-stack web developer, I have recently completed my training
        program with CodeYourFuture BootCamp, with a strong foundation in these
        technologies{" "}
        <strong className="text-[#d4e0e5]">
          HTML, CSS, JavaScript, ReactJS, Node, SQL
        </strong>{" "}
        and <strong className="text-[#d4e0e5]">Agile</strong> work practice
        experience. With awareness and training in additional new techniques
        such as{" "}
        <strong className="text-[#d4e0e5]">MongoDB and Tailwind CSS.</strong>{" "}
        With a wonderful professional development team to improve my Soft
        Skills. In addition to: I am eager to apply my skills in addition to
        contributing to substantial projects as a web developer.
      </p>
      <div>
        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
          View MY Work
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </button>
      </div>
    </div>
  </div>
);
}

export default Home