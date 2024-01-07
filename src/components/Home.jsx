import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";



const Home = () => {

return (
  <div name="home" className="w-full h-screen bg-[#0a192f]">
    <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
      <p className="text-pink-600 font-bold text-2xl">Hi my name is </p>
      <h1 className="text-3xl sm:text-6xl font-bold text-[#d4e0e5]">
        Abubakar Meigag
      </h1>
      <h2 className="inline text-3xl sm:text-3xl font-bold text-[#d4e0e5]">
        I'm a{" "}
        <TypeAnimation
          sequence={[
            "Software Engineer.",
            2000,
            "Frontend Developer.",
            2000,
            "Backend Developer.",
            2000,
          ]}
          className="text-pink-500"
          cursorStyle={true}
          repeat={Infinity}
          style={{ fontSize: "1em", paddingLeft: "5px" }}
        />
      </h2>
      <p className="text-[#afb1bb] py-4 max-w-[700px]">
        I achieved my dream of becoming a Software Engineer after completing the
        CodeYourFuture program. Proficient in{" "}
        <strong className="text-[#d4e0e5]">
          {" "}
          HTML, CSS, JavaScript, React.js, Node.js, PostgreSQL, MongoDB, AWS
          technologies{" "}
        </strong>
        , and <strong className="text-[#d4e0e5]">Agile</strong> work practice
        experience. Successfully led a team in a final project incorporating
        various technologies, including (supabase) for databases. Possess over
        <strong className="text-[#d4e0e5]"> 15 years</strong> of leadership
        experience in customer service and administration in the retail
        industry. A versatile professional with strong technical skills and a
        proven track record in soft skills like communication, team building,
        and conflict resolution.
      </p>
      <div>
        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
          <Link to="work" smooth={true} duration={500}>
            View MY Work
          </Link>
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