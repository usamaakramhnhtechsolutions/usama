import React from 'react'
import { TfiPaintBucket } from "react-icons/tfi";
import { IoSunnyOutline } from "react-icons/io5";
import { RiRainyLine } from "react-icons/ri";


const Homecard = () => {
  const data =[
    {
    icon:TfiPaintBucket,
    title:"Themes Made Easy",
    peragraph:"Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui",
   },
    {
    icon:IoSunnyOutline,
    title:"Powerful Design",
    peragraph:"Sensor Bridge is a sophisticated technology that serves as a crucial link between sensors",
   },
    {
    icon:RiRainyLine,
    title:"Creative Content",
    peragraph:"A strategist is an individual who formulates and implements strategic plans, utilizing insights, analysis, ",
   },
  ]
  return (
    <section className="">
        <div className="flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-11 lg:mx-28  rounded-md p-5 lg:p-5 bg-white shadow-lg">
          {data.map((item, index) => (
        <div className="flex homebox flex-col items-center justify-center text-center h-60" key={index}>
        <div>
            <item.icon style={{
              fontSize: "40px",
              color: "#2e7eed",
              display: "inline-block",
              marginBottom: "10px"
             }}/>
        </div>
        <h4 style={{
             fontFamily: "Open Sans, sans-serif",
             color: "#000000",
             fontWeight: "300"
           }}>{item.title}</h4>
          <div className="text-sm font-serif leading-6" style={{ color: "#808080", fontFamily: "Open Sans, sans-serif" }}>{item.peragraph}</div>
         </div>
         ))}
    </div>
  </div>
</section>

  )
}

export default Homecard