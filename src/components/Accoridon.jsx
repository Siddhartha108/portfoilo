import React, { useState } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";




function Accoridon({data,value,heading,img}){
  const [toggle, setToggle] = useState(value);
  

  
  
  return (
    <div className="mx-8 space-y-4">
      <div className="flex items-center justify-between text-xl font-semibold cursor-pointer" onClick={()=> setToggle(!toggle)}>
        <div>
        <h1>{heading}</h1>
        <img src={img} alt="" className=" h-[18px] w-[18px] ml-[-7px]"/>
        <p className="font-normal text-sm text-[#A19FAD]">More than 3 months</p>
        </div>
        <button className="text-[#6E57E0] bg-slate-300 rounded-full p-[2px]">{toggle?<FaAngleUp />:<FaAngleDown />}</button>
      </div>
      {toggle && data.map(({id,name, percentage})=>(
           <div key={id}>
        <div className="flex justify-between">
          <h3 className="text-base font-semibold">{name}</h3>
          <span>{percentage}%</span>
        </div>
        <div className="ml-2">
          <ProgressBar completed={percentage} height='6px' bgColor='#6E57E0' baseBgColor='#C1B6FC' labelAlignment='outside'/>
        </div>
      </div>
        ))
      }

     

    </div>
  )
}

export default Accoridon
