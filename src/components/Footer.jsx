import React from 'react'
import { FaInstagram,FaWhatsapp,FaGithub,FaLinkedin } from "react-icons/fa6"

function Footer() {
  return (
    <>
    <hr />
    <footer className="py-12 bg-[#c5c5c9]">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">


        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/siddharth.pandit_/" target="_blank"><FaInstagram size={24} className="hover:scale-105 duration-200 hover:text-[#6E57E0] cursor-pointer"/></a> 

            <a href="https://wa.me/6396967302" target="_blank"><FaWhatsapp size={24} className="hover:scale-105 duration-200 hover:text-[#6E57E0] cursor-pointer"/></a>
            
            <a href="https://github.com/Siddhartha108" target='_blank'><FaGithub size={24} className="hover:scale-105 duration-200 hover:text-[#6E57E0] cursor-pointer"/></a>

            <a href="http://www.linkedin.com/in/siddhartha-sharma-274896223" target='_blank'><FaLinkedin size={24} className="hover:scale-105 duration-200 hover:text-[#6E57E0] cursor-pointer"/></a> 
          </div>

          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
            <p>&copy; <span className="text-lg text-[#6E57E0]">SIDD SHARMA</span>. All rights reserved.</p>
            
          </div>

        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
