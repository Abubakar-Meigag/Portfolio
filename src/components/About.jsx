import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'


const About = () => {

    useEffect(() => {
      Aos.init({duration: 2000})
    }, [])
  

  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-100">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div
            className="sm:text-right text-3xl font-bold pb-5"
            data-aos="fade-right"
          >
            <p>
              Thanks to visit my Portfolio. Please check my work and contact
              with me via below contact Box or by my Email
            </p>
            <br />
            <p className="sm:text-right text-1xl font-bold">Thank you</p>
          </div>
          <div data-aos="fade-left" className="text-[#d5d7e1]">
            <p>
              As a person, to lead gives me personal fulfilment, I like to learn
              from others by being a good listener, I easily adapt and I have
              great confidence in my abilities. In my profession, I have gained
              more than{" "}
              <strong className="text-[#d4e0e5]">15 years of experience</strong>{" "}
              in customer service and administrative work, I have led teams to
              achieve the goals and vision of the management. I have developed
              great skills in team building, effective communication, task
              distribution, time management, critical thinking, conflict
              resolution and cooperation.
              <br />
              <br />
              My greatest dream and now passion is to learn and develop as a
              coder. My love for coding fuels my patience and determination to
              master it. I found an amazing opportunity at the coding program
              CodeYourFuture, where I learned coding and built up a strong
              foundation to be successful in my profession. The curriculum was
              well planned and I got excellent guidance from the teaching team.
              It made me a Full Stack developer, eager to learn from my team
              mates and leverage my skills in significant projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;