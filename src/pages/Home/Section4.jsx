import React from "react";
import iphonepad from "../../assest/iphone-ipad.jpg";
import { GrBookmark } from "react-icons/gr";
import { RiPulseFill } from "react-icons/ri";
import { HiOutlineChartBar } from "react-icons/hi2";
import { TbChartCandleFilled } from "react-icons/tb";

const Section4 = () => {
   const data =[
    {
    icon:GrBookmark,
    title:"Easy Prototyping",
    peragraph:"Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur",
   },
    {
    icon:RiPulseFill,
    title:"Sensor Bridge",
    peragraph:"Sensor Bridge is a sophisticated technology that serves as a crucial link ",
   },
    {
    icon:HiOutlineChartBar,
    title:"strategist",
    peragraph:"A strategist is an individual who formulates and implements strategic plans,",
   },
    {
    icon:TbChartCandleFilled,
    title:"Art Direction",
    peragraph:"Art direction involves the creative leadership and visual guidance provided by an ",
   }
  ]
  return (
    <section className="my-10 py-10 lg:py-20">
  <div className="bg-gray-100 py-10">
    <div className="container-fluid">
      <div className="text-center">
        <div className="text-2xl lg:text-4xl font-bold mb-4">An Interface For Lifestyle</div>
        <div className="text-gray-700">
          Small Apps makes it easy to stay on top of your Life Style. No late tasks. No gimmicks.
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-10">
        <div className="flex justify-center">
          <img src={iphonepad} alt="backgroundImage" className="w-full lg:w-auto" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-5 lg:mx-10 p-5 lg:p-10 bg-white">
          {data.map((item, index) => (
        <div className="flex flex-col items-center justify-center text-center" key={index}>
        <div>
            <item.icon className="Sectin4Icon"/>
        </div>
        <h4 style={{
             fontFamily: "Open Sans, sans-serif",
             color: "#434549",
             fontWeight: "300"
           }}>{item.title}</h4>
          <div className="font-serif " style={{lineHeight:"25px", color: "#808080", fontFamily: "Open Sans, sans-serif" }}>{item.peragraph}</div>
         </div>
         ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Section4;
