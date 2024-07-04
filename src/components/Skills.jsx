import React from 'react'
import Accoridon from './Accoridon'
import img1 from "../assets/brackets-curly.png"
import img2 from "../assets/server-network.png"
import img3 from "../assets/swatchbook.png"

function Skills() {
  const frontend=[
    {
      id:1,
      name:"HTML",
      percentage:"90"
    },
    {
      id:2,
      name:"CSS",
      percentage:"90"
    },
    {
      id:3,
      name:"Tailwind CSS",
      percentage:"80"
    },
    {
      id:4,
      name:"JavaScript",
      percentage:"70"
    },
    {
      id:5,
      name:"React Js",
      percentage:"60"
    },

  ]

  const backend=[
    {
      id:1,
      name:"Node js",
      percentage:"60"
    },
    {
      id:2,
      name:"Express js",
      percentage:"60"
    },
    {
      id:3,
      name:"git/github",
      percentage:"50"
    }
  ]

  const designer=[
    {
      id:1,
      name:"Figma",
      percentage:"70"
    },
    {
      id:2,
      name:"Photoshop",
      percentage:"70"
    }
  ]
  return (
    <div name="Skills" className="max-w-screen-2xl container mx-auto md:px-20 my-14">
      <h1 className="text-3xl font-bold mb-5">Skills</h1>
      <div className="space-y-10">
      <Accoridon data={frontend} value={true} heading="Frontend Skills" img={img1}/>
      <Accoridon data={backend} value={false} heading="Backend Skills" img={img2}/>
      <Accoridon data={designer} value={false} heading="Designer" img={img3}/>
      </div>
      <br />
      <br />
      <hr />
    </div>
  )
}

export default Skills
