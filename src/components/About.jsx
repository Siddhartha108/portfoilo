import { FaDownload } from "react-icons/fa";

function About() {
  const education = [
    { title: "Ducat (The IT Training)", period: "Current" },
    { title: "Completed Master of Computer Applications (MCA)", period: "2020-2022" },
    { title: "Completed Bachelor of Computer Applications (BCA)", period: "2016-2019" }
  ];

  const skills = {
    Languages: ["HTML5", "CSS3", "JavaScript", "ReactJs", "NodeJs"],
    Frameworks: ["Tailwind CSS", "Bootstrap"],
    Tools: ["Visual Studio Code", "Postman"]
  };

  const experience = [
    "3 Months Training in React Js at Semantic Global Services Pvt. Ltd."
  ];

  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-14"
    >
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="my-5">
        Hello, I&apos;m Siddharth, a passionate Web Developer with a keen eye for MERN
        Stack. With a background in IT, I strive to create impactful and
        visually stunning software solutions that leave a lasting impression.
      </p>
      
      <h1 className="text-xl font-semibold text-[#6E57E0] mb-2">
        Education & Training
      </h1>
      <p className="leading-relaxed my-5">
        {education.map((item, index) => (
          <span key={index} className=" mb-2">
            [{item.title}{" "}
            <span className="text-red-700 bg-[#cac2f1ef] rounded-sm">{item.period}</span>
            ]{" "}
          </span>
        ))}
      </p>

      <h1 className="text-xl font-semibold text-[#6E57E0] mb-2">
        Skills & Expertise
      </h1>
      <div className="leading-relaxed my-5">
        {Object.entries(skills).map(([category, items], index) => (
          <p key={index} className="mb-2 inline">
            {category}[
            {items.map((skill, skillIndex) => (
              <span key={skillIndex} className="cursor-pointer hover:text-red-600 hover:scale-105 inline-block mr-1">
                {skill},
              </span>
            ))}
            ]
          </p>
        ))}
      </div>
      
      <h1 className="text-xl font-semibold text-[#6E57E0] mb-2">
        Professional Experience
      </h1>
      <div className="leading-relaxed my-5">
        {experience.map((item, index) => (
          <div key={index} className="mb-2">{item}</div>
        ))}
      </div>
      
      <h1 className="text-xl font-semibold text-[#6E57E0] mb-2">
        Mission Statement
      </h1>
      <p className="leading-relaxed my-5">
        My mission is to leverage my skills and creativity to deliver
        innovative solutions that exceed client expectations and
        contribute positively to the digital landscape. I am committed to
        continuous learning and growth, always seeking new challenges and
        opportunities to expand my horizons.
      </p>

      {/* **CV Download** */}

      <div className="flex justify-center items-end mt-10">
        <div className="mr-8">
          <a href="./src/assets/Siddhartha Resume.pdf" download>
            <button
              className="bg-[#6E57E0] text-white rounded-md px-4 py-4 flex items-center justify-center hover:bg-[#5A43CB]"
              to="Contacts"
            >
              Download CV
              <span className="ml-2">
                <FaDownload />
              </span>
            </button>
          </a>

        </div>


      </div>


      <br />
      <br />
      <hr />
    </div>
  );
}

export default About;
