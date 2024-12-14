import React, { useEffect } from "react";
import JavaScript from "../assets/skills-icons/javascript.png";
import CSS from "../assets/skills-icons/css.png";
import Html from "../assets/skills-icons/html.png";
import GitHup from "../assets/skills-icons/github.png";
import Node from "../assets/skills-icons/node.png";
import ReactJS from "../assets/skills-icons/react.png";
import Python from "../assets/skills-icons/python.jpeg";
import postgresSQL from "../assets/skills-icons/pngwing.com.png";
import Tailwind from "./../assets/skills-icons/tailwind.png";
import Git from "./../assets/skills-icons/git.png";
import Bootstrap from "./../assets/skills-icons/bootstrap.png";
import Material from "./../assets/skills-icons/material-UI.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div
      name="skills"
      className="w-full pt-8 md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-cyan-300">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8"
          data-aos="zoom-out-down"
        >
          <div className="shadow-md  shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto" src={Html} alt="Html icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-14 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto" src={Python} alt="Python icon" />
            <p className="my-4">Python</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={Bootstrap} alt="Tailwind icon" />
            <p className="my-3">Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-14  mx-auto"
              src={Material}
              alt="Material UI icon"
            />
            <p className="my-4">Material UI</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto" src={ReactJS} alt="ReactJS icon" />
            <p className="my-4">React JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto" src={Node} alt="NodeJS icon" />
            <p className="my-4">Node JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-16 mx-auto"
              src={postgresSQL}
              alt="PostgresSQL icon"
            />
            <p className="">Postgres SQL</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto" src={Git} alt="AWS icon" />
            <p className="my-4">Git</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto" src={GitHup} alt="GitHup icon" />
            <p className="my-4">GitHup</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
