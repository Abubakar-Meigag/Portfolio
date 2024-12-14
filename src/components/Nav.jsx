import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import logo from "../assets/skills-icons/beko-logo.png";
import {Link} from 'react-scroll'

const Nav = () => {
    const [navbar, setNavbar] = useState(false);
    const handleClick = () => setNavbar(!navbar);
  return (
    <div className="fixed w-full h-[80px] z-50 flex justify-between items-center px-4 bg-[#0a192f] text-gray-200">
      <div>
        <img src={logo} alt="web-logo" style={{ width: "99px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-cyan-300 font-bold">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-cyan-300 font-bold">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-cyan-300 font-bold">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:text-cyan-300 font-bold">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-cyan-300 font-bold">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!navbar ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !navbar
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6  hover:text-cyan-300 font-bold text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 hover:text-cyan-300 font-bold text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 hover:text-cyan-300 font-bold text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 hover:text-cyan-300 font-bold text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 hover:text-cyan-300 font-bold text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="py-6 hover:text-cyan-300 font-bold text-3xl">
        <a
              className="flex justify-between item-center w-full text-white hover:text-cyan-300"
              href="https://www.linkedin.com/in/abubakar-meigag-0a625a17a/"
              target="_blank" rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} className="pl-1"/>
            </a>
        </li>
        <li className="py-6 hover:text-cyan-300 font-bold text-3xl">
        <a
              className="flex justify-between item-center w-full text-white hover:text-cyan-300"
              href="https://github.com/Abubakar-Meigag"
              target="_blank" rel="noreferrer"
            >
              GitHub <FaGithub size={30} className="pl-1" />
            </a>
        </li>
        <li className="py-6 hover:text-cyan-300 font-bold text-3xl">
        <a
              className="flex justify-between item-center w-full text-white hover:text-cyan-300"
              href="https://www.credly.com/badges/19b4ead3-5461-40cb-b920-e630b71cf86f/linked_in?t=snvtis"
              target="_blank" rel="noreferrer"
            >
              AWS Certified <LiaCertificateSolid size={30}  />
            </a>
        </li>
      </ul>

      {/* social icons*/}
      <div className="hidden  lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 font-bold">
            <a
              className="flex justify-between item-center w-full text-white"
              href="https://www.linkedin.com/in/abubakar-meigag-0a625a17a/"
              target="_blank" rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] font-bold">
            <a
              className="flex justify-between item-center w-full text-white"
              href="https://github.com/Abubakar-Meigag"
              target="_blank" rel="noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500 font-bold">
            <a
              className="flex justify-between item-center w-full text-white"
              href="https://www.credly.com/badges/19b4ead3-5461-40cb-b920-e630b71cf86f/linked_in?t=snvtis"
              target="_blank" rel="noreferrer"
            >
              AWS Certified <LiaCertificateSolid size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
