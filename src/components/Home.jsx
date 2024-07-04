import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { ReactTyped,} from "react-typed";
import me1 from "../assets/me1.jpg"
import { Link } from 'react-scroll';


function Home() {
  return (
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <div className="flex flex-col md:flex-row">


        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
          <span className="text-xl">Welcome In My Feed</span>

          <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1>Hello, I&apos;m a </h1>
            <ReactTyped
              className="text-red-700 font-bold"
              strings={["Web-Developer", "Programmer", "Freelancer"]}
              typeSpeed={50}
              backSpeed={50}
              loop={true}
            />
          </div>

          <br />
          <p className="text-sm md:text-base text-justify">I am a web developer with 3 Months of experience in building responsive and dynamic web applications.
          I love coding and constantly strive to improve my skills and learn new technologies.</p>
          <br />


          {/* **Available,Currently working** */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:justify-between">

            <div className="space-y-2">
              <h1 className="font-bold">Available on</h1>
              <ul className="flex space-x-5">
                <li><MdEmail className=" text-2xl cursor-pointer hover:text-[#6E57E0] hover:scale-110" /></li>
                <li><a href="https://github.com/Siddhartha108" target='_blank'><FaGithub className=" text-2xl cursor-pointer hover:text-[#6E57E0] hover:scale-110" /></a></li>
                <li><a href="http://www.linkedin.com/in/siddhartha-sharma-274896223" target='_blank'><FaLinkedin className=" text-2xl cursor-pointer hover:text-[#6E57E0] hover:scale-110" /></a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h1 className="font-bold">Currently working on</h1>
              <ul className="flex space-x-4">
                <li><IoLogoJavascript className=" text-xl md:text-2xl hover:scale-110 duration-200 hover:text-[#6E57E0] cursor-pointer" /></li>
                <li><FaReact className=" text-xl md:text-2xl hover:scale-110 duration-200 hover:text-[#6E57E0] cursor-pointer" /></li>
                <li><SiExpress className=" text-xl md:text-2xl hover:scale-110 duration-200 hover:text-[#6E57E0] cursor-pointer" /></li>
                <li><SiMongodb className=" text-xl md:text-2xl hover:scale-110 duration-200 hover:text-[#6E57E0] cursor-pointer" /></li>
              </ul>
            </div>

          </div>

          <div className="flex justify-center items-end">
            <div className="mt-10 mr-8">
              <button><Link className="bg-[#6E57E0] text-white rounded-md px-4 py-4 flex items-center justify-center hover:bg-[#5A43CB]" to="Contacts" smooth={true} duration={500} offset={-70} activeClass='active'>Contact me <span className="ml-2"><IoSend /></span></Link></button>
            </div>
          </div>




        </div>



        <div className="md:w-1/2 md:ml-48 md:mt-75px mt-8 order-1">
          <img src={me1} className="rounded-full md:w-[450px] md:h-[450px]" alt="" />
        </div>

      </div>
      <br />
      <hr />
    </div>
  )
}

export default Home
