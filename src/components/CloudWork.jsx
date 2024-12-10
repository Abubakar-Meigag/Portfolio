import React, { useEffect } from "react";
import { cloudData } from "../data/cloudData";
//// import { TbExternalLink } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'


const CloudWork = () => {
  const project = cloudData;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      name="work"
      className="w-full pt-8 md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Cloud Work
          </p>
          <p className="py-3">Check out some of my recent cloud work</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
          data-aos="zoom-in"
        >
          {project.map((item) => (
            <div className="border-2 border-gray-800 rounded-md hover:border-gray-400">
              <div
                key={item.id}
                style={{ backgroundImage: `url(${item.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div "
              ></div>

              <div className="pt-3 text-center">
                <span className="text-white tracking-wider ">{item.name}</span>

                <div className="flex justify-center pt-4 relative">
                  <a
                    href={item.github}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button className="flex justify-center items-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-md hover:bg-pink-600 hover:text-white">
                      <FaGithub className="mr-1" />
                      Code Source
                    </button>
                  </a>

                  {/* <a href={item.live} rel="noopener noreferrer" target="_blank">
                    <button className="flex justify-center items-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-md hover:bg-pink-600 hover:text-white">
                      <TbExternalLink className="mr-1" />
                      Live Demo
                    </button>
                  </a> */}
                </div>

                <div className="flex flex-col justify-start items-start">
                  <div className="text-left pb-2 pt-3">
                    <h4 className="text-left pl-1 text-white">Technology:</h4>
                    <p className="text-left text-[13px] pl-1 text-[#d4e0e5]">
                      {item.Technology}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CloudWork;
