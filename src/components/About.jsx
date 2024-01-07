import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'


const About = () => {

    useEffect(() => {
      Aos.init({duration: 2000})
    }, [])
  

  return (
    <div
      name="about"
      className="w-full h-screen pt-10 bg-[#0a192f] text-gray-100"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-5 pl-4">
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
              Thank you for taking the time to review my portfolio. Please take
              a moment to browse through my work and don't hesitate to contact
              me using the form below, via email, or through my LinkedIn.
            </p>
            <br />
            <p className="sm:text-right text-1xl font-bold">Thank you</p>
          </div>
          <div data-aos="fade-left" className="text-[#caccd7]">
            <p className="text-[15px]">
              As a person, to lead gives me personal fulfilment, I like to learn
              from others by being a good listener, I easily adapt and I have
              great confidence in my abilities. In my profession, I have gained
              more than{" "}
              <strong className="text-[#d4e0e5]">15 years of experience</strong>{" "}
              in customer service and administrative work, I have experience
              leading teams and developing skills in team building,
              communication, task distribution, time management, critical
              thinking, conflict resolution, and cooperation.
              <br />
              <br />
              My greatest dream and now passion is to learn and develop as a
              coder.{" "}
              <strong className="text-[#d4e0e5]">
                My love for coding
              </strong>{" "}
              fuels my patience and determination to master it. I found an
              amazing opportunity at the coding program CodeYourFuture, where I
              learned coding and built up a strong foundation to be successful
              in my profession.
              <br />
              <br />
              <strong className="text-[#d4e0e5]">My goal</strong> is to bring
              our shared vision to fruition by creating something that provides{" "}
              <strong className="text-[#d4e0e5]">
                an exceptional user experience.
              </strong>{" "}
              Whether you share my enthusiasm, are interested in collaborating,
              or are simply curious about the world of web development, I am
              thrilled to have you here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;