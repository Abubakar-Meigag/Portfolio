import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen pl-[80px]  bg-[#0a192f] text-gray-100">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold pb-5">
            <p>
              Hi, I'm Abubakar, Thanks to visit my Portfolio. Please check my
              work and contact with me via box in below or by my Email
            </p>
          </div>
          
          <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur non eius consequatur doloremque velit fugiat iure obcaecati sequi maxime! Error non aliquid in laborum commodi alias? Delectus est consectetur perspiciatis non, error expedita at aliquid consequatur ut. Quisquam, vel quidem!
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
