import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { IoBagAdd } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 md:shadow fixed top-0 left-0 right-0 bg-[#c5c5c9]">
      <div className="flex h-14 items-center">
        <div className="w-1/4">
          <h1 className="font-semibold text-xl cursor-pointer">
            Siddhartha{" "}
            <span className=" text-sm font-semibold text-[#6E57E0]">
              Devloper
            </span>
          </h1>
        </div>

        <div className="w-full">
          <ul className="hidden md:flex justify-evenly cursor-pointer">
            <li className="m-1 hover:scale-105 duration-200 hover:text-[#6E57E0]">
              <Link
                className="flex"
                to="Home"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                <IoMdHome size={20} />
                Home
              </Link>
            </li>

            <li className="flex  m-1 hover:scale-105 duration-200 hover:text-[#6E57E0]">
              <Link
                className="flex"
                to="About"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                <FaUser size={20} />
                About
              </Link>
            </li>

            <li className="flex  m-1 hover:scale-105 duration-200 hover:text-[#6E57E0]">
              <Link
                className="flex"
                to="Skills"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                <IoIosDocument size={20} />
                Skills
              </Link>
            </li>

            <li className="flex  m-1 hover:scale-105 duration-200 hover:text-[#6E57E0]">
              <Link
                className="flex"
                to="Expreiance"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                <IoBagAdd size={20} />
                Expreiance
              </Link>
            </li>

            <li className="flex  m-1 hover:scale-105 duration-200 hover:text-[#6E57E0]">
              <Link
                className="flex"
                to="Contacts"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                <IoMdContact size={20} />
                Contacts
              </Link>
            </li>
          </ul>
          <div
            className="md:hidden flex justify-end"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <IoClose size={25} /> : <FiMenu size={25} />}
          </div>
        </div>
      </div>

      {/* moblie nevbar */}
      {menu && (
        <div>
          <ul className="md:hidden flex h-screen flex-col items-center justify-center font-semibold space-y-4 bg-white cursor-pointer">
            <li className="flex m-1 hover:scale-105 duration-200 hover:text-[#6E57E0]">
              <Link
                onClick={() => setMenu(!menu)}
                className="flex"
                to="Home"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                <IoMdHome size={20} />
                Home
              </Link>
            </li>

            <li className="flex m-1 hover:scale-105 duration-200 hover:text-[#6E57E0]">
              <Link
                onClick={() => setMenu(!menu)}
                className="flex"
                to="About"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                <FaUser size={20} />
                About
              </Link>
            </li>

            <li className="flex m-1 hover:scale-105 duration-200 hover:text-[#6E57E0]">
              <Link
                onClick={() => setMenu(!menu)}
                className="flex"
                to="Skills"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                <IoIosDocument size={20} />
                Skills
              </Link>
            </li>

            <li className="flex m-1 hover:scale-105 duration-200 hover:text-[#6E57E0]">
              <Link
                onClick={() => setMenu(!menu)}
                className="flex"
                to="Expreiance"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                <IoBagAdd size={20} />
                Expreiance
              </Link>
            </li>

            <li className="flex m-1 hover:scale-105 duration-200 hover:text-[#6E57E0]">
              <Link
                onClick={() => setMenu(!menu)}
                className="flex"
                to="Contacts"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                <IoMdContact size={20} />
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
