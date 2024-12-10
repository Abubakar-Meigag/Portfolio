import React, { useEffect } from "react";
import autoScaling from "../assets/cloud-icons/auto-scaling.jpeg";
import cloudWatch from "../assets/cloud-icons/cloudwatch.jpeg";
import dynamoDB from "../assets/cloud-icons/dynamoDB.jpeg";
import ec2 from "../assets/cloud-icons/EC2.jpeg";
import ELB from "../assets/cloud-icons/Elastic load balance .png";
import IAM from "../assets/cloud-icons/IAM.jpeg";
import Lambda from "../assets/cloud-icons/lambda.jpeg";
import Linux from "../assets/cloud-icons/Linux.jpeg";
import RDS from "./../assets/cloud-icons/RDS.jpeg";
import S3 from "./../assets/cloud-icons/S3.jpeg";
import security from "./../assets/cloud-icons/security.png";
import VPC from "./../assets/cloud-icons/VPC.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

const CloudSkills = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <div
      className="w-full h-screen pt-16 bg-[#0a192f] text-gray-100"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Cloud Skills
          </p>
          <p className="py-4">These are AWS Cloud technologies I've worked with</p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"
          data-aos="fade-up"
        >
          <div className="shadow-md  shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto" src={VPC} alt="VPC icon" />
            <p className="my-4">VPC</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto" src={ec2} alt="EC2 icon" />
            <p className="my-4">EC2</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto" src={S3} alt="S3 icon" />
            <p className="my-4">S3</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto" src={Lambda} alt="Lambda icon" />
            <p className="my-4">Lambda</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto" src={IAM} alt="IAM icon" />
            <p className="my-3">IAM</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14  mx-auto" src={RDS} alt="RDS UI icon" />
            <p className="my-4">RDS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto" src={dynamoDB} alt="dynamoDB icon" />
            <p className="my-4">DynamoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-14 mx-auto"
              src={cloudWatch}
              alt="cloudWatch icon"
            />
            <p className="my-4">CloudWatch</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto" src={ELB} alt="ELB" />
            <p className="my-4">Elastic Load Balancer</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-14 mx-auto"
              src={autoScaling}
              alt="auto-Scaling icon"
            />
            <p className="my-4">Auto-Scaling</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-[110px] mx-auto" src={security} alt="security icon" />
            <p className="my-4">Security</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto" src={Linux} alt="Linux icon" />
            <p className="my-4">Linux</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudSkills;
