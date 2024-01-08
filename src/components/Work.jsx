import React, { useEffect } from "react";
import { data } from "../data/data.js";
import { TbExternalLink } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css'


const Work = () => {
  const project = data;

    useEffect(() => {
    Aos.init({duration: 1000})
  }, [])


  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-3">Check out some of my recent work</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
          data-aos="zoom-in"
        >
          {project.map((item, index) => (
            <div className="border-2 border-gray-800 rounded-md hover:border-gray-400">
              <div
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
              ></div>
              <div className="pt-3 text-center">
                <span className="text-white tracking-wider ">{item.name}</span>
                <div className="flex flex-col justify-start items-start">
                  <div className="text-left pb-2 pt-3">
                    <h4 className="text-left pl-1 text-white">Technology:</h4>
                    <p className="text-left text-[13px] pl-1 text-[#d4e0e5]">
                    {item.Technology}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-left pl-1 text-sky-50">Description:</h4>
                    <p className="text-left text-[11px] pl-1 text-[#d4e0e5]">
                      {item.Description}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center pt-4 relative">
                  <a href={item.github}>
                    <button className="flex justify-center items-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                      <TbExternalLink className="mr-1" />
                      Code source
                    </button>
                  </a>

                  <a href={item.live}>
                    <button className="flex justify-center items-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                      <TbExternalLink className="mr-1" />
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
