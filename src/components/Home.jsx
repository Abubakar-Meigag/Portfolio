import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div   name="home" className="w-full md:h-screen bg-[#0a192f] xs:pt-navbarMobile md:pt-[80px]">
      <div className="max-w-[1000px] mx-auto px-2 flex flex-col justify-center h-full">
        <p className="text-cyan-300 font-bold text-2xl">Hi, my name is </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#d4e0e5]">
          Abubakar Meigag
        </h1>
        <h2 className="inline text-[20px] sm:text-3xl font-bold text-[#d4e0e5]">
            I bring expertise and passion <br /> as a
          <TypeAnimation
            sequence={[
              "DevOps Engineer.",
              2500,
              "Platform Engineer.",
              2500,
              "Full-Stack Developer.",
              2500,
            ]}
            cursorStyle={true}
            repeat={Infinity}
            style={{ fontSize: "1em", paddingLeft: "5px" }}
          />
        </h2>

        <div className="text-[#c7cad6] list-disc list-inside py-4 max-w-auto">
          <h2 className="text-[20px]">I will bring:</h2>
          <ul className="text-[#c7cad6] list-disc list-inside max-w-auto">
                <li>A thorough understanding of the software development lifecycle <strong className="text-[#d4e0e5]">SDLC</strong>, from whiteboard planning to production deployment.</li>
                <li>Proficiency in building modern, <strong className="text-[#d4e0e5]">responsive user interfaces</strong> using cutting-edge technologies.</li>
                <li>The ability to design and develop <strong className="text-[#d4e0e5]">databases</strong>, as well as integrate them with secure <strong className="text-[#d4e0e5]">RESTful APIs</strong>.</li>
                <li>Strong knowledge of <strong className="text-[#d4e0e5]">Linux</strong>  distributions and  <strong className="text-[#d4e0e5]">networking</strong> concepts, including <strong className="text-[#d4e0e5]">IP address, CIDR, TCP, DNS, and the OSI model</strong>.</li>
                <li>Skills in building, <strong className="text-[#d4e0e5]">automating</strong>, managing, and monitoring secure  <strong className="text-[#d4e0e5]">CI/CD pipelines</strong>, with an understanding of  <strong className="text-[#d4e0e5]">testing</strong> concepts.</li>
                <li>An AWS  <strong className="text-[#d4e0e5]">Certified</strong> Cloud Practitioner, with a strong grasp of the AWS  <strong className="text-[#d4e0e5]">Well-Architected</strong> Framework.</li>
                <li>Proven skills in  <strong className="text-[#d4e0e5]">debugging</strong> and <strong className="text-[#d4e0e5]">troubleshooting</strong> across front-end, back-end, DevOps, and cloud platforms.</li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 ">
          <Link
            to="work"
            smooth={true}
            duration={500}
            className= "cursor-pointer hidden sm:block"
          >
            <button className="text-white font-semibold group border-2 px-6 py-3 my-2 flex items-center rounded-md hover:bg-cyan-500 hover:border-cyan-300">
              View my work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hidden sm:block"
          >
            <button className="text-white font-semibold group border-2 px-6 py-3 my-2 flex items-center rounded-md hover:bg-cyan-500 hover:border-cyan-300 ">
              About me 
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
            <a 
              href="/Abubakar-Meigag-resume.pdf" 
              download="Abubakar-Meigag-resume.pdf" 
              className="text-white font-semibold group border-2 px-6 py-3 my-2 flex items-center rounded-md hover:bg-cyan-500 hover:border-cyan-300"
            >
              PDF Resume  
              <FaCloudDownloadAlt className="ml-3 text-2xl" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
