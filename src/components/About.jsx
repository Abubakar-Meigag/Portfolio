import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen pl-[80px]  bg-[#0a192f] text-gray-100"
    >
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
              work and contact with me via below contact Box or by my Email
            </p>
          </div>

          <div>
            <p>
              Leader, good listener. With more than{" "}
              <strong className="text-[#d4e0e5]">15 years of experience</strong>{" "}
              in customer service and administrative work, I have led teams to
              achieve the goals and vision of management. Skilled in team
              building, effective communication, task distribution, time
              management, critical thinking, adaptability, conflict resolution,
              cooperation, and self-confidence. My greatest dream and passion
              has always been to learn programming. My love for coding fuels my
              patience and determination to master it. I found an amazing
              opportunity with CodeYourFuture, where I can learn programming
              with a strong foundation, enjoyable curriculum, and excellent
              guidance from the teaching team. Today, I stand as a beginner Full
              Stack developer, eager to leverage my skills in significant
              projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
