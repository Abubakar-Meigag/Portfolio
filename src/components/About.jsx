import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      name="about"
      className="w-full pt-8 md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-5 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-300">
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
            <p className="text-justify">
              Thank you for taking the time to review my portfolio. Please take
              a moment to browse through my work, and please contact me using
              the form below, via email, or through my LinkedIn.
            </p>
            <br />
            <p className="sm:text-right text-1xl font-bold">Thank you</p>
          </div>
          <div data-aos="fade-left" className="text-[#caccd7]">
            <p className="text-[15px] text-justify">
              I bring passion and enthusiasm for technology as a versatile
              professional with many years of experience managing people and
              solving problems. My career has equipped me with the ability to
              adapt swiftly, think critically, and approach challenges with
              confidence. Building on a successful background in management and
              customer service, I transitioned into software engineering through
              the CodeYourFuture programme. There, I gained hands-on experience
              in full-stack development, working with technologies such as
              JavaScript, React, Node.js, PostgreSQL, and TypeScript. I also
              developed strong foundational skills in RESTful APIs, cloud-based
              solutions, and Agile workflows.
              <br />
              <br />
              My technical journey deepened with AWS re/Start, where I focused
              on cloud engineering and DevOps. I developed and deployed
              infrastructure solutions using AWS services such as EC2, Lambda,
              RDS, and CloudFormation. My hands-on expertise also extends to
              Python scripting, Linux systems, networking, and building secure
              CI/CD pipelines with automation tools like Terraform.
              <br />
              <br />
              <strong className="text-[#d4e0e5]">My goal</strong> is to bring
              our shared vision to fruition by creating something that provides{" "}
              <strong className="text-[#d4e0e5]">
                an exceptional user experience.
              </strong>{" "}
              Whether you share my enthusiasm, are interested in collaborating,
              or are simply curious about the dynamic world of software and
              cloud engineering, I am thrilled to have you here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
