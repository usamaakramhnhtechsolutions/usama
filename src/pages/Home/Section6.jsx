import React from "react";
import { AiOutlineApple } from "react-icons/ai";
import { BsAndroid2 } from "react-icons/bs";
import { FaWindows } from "react-icons/fa6";



const Section6 = () => {
  const data =[
    {
      icon:AiOutlineApple,
      title:"IPHONE"
    },
    {
      icon:BsAndroid2,
      title:"ANDROID"
    },
    {
      icon:FaWindows,
      title:"WINDOWS"
    }
  ]
  return (
    <section className="mainSection6css">
      <div className="py-28" style={{ background: "#2e7eed" }}>
        <div className="container mx-auto">
          <div className="text-center">
            <div
              className=" mb-4 text-white"
              style={{
                fontSize: "40px",
                fontWeight: "300px",
                lineHeight: "50px",
              }}
            >
              It's time to change your mind
            </div>
            <div
              className="text-white"
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "25px",
              }}
            >
              Download over 2 million humans .Get Small Apps free forever! We
              say you won’t look back.
            </div>
            <div className="flex justify-center align-middle flex-wrap mt-14">
            {data.map((item, index) => (
                <div className="p-3 w-48 flex justify-center align-middle border-2 m-3 cursor-pointer hover:bg-blue-600 border-white rounded-full  text-white" key={index}>
                <item.icon style={{ fontSize: "20px", margin:'0 6px' }} />
                <div>{item?.title}</div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    
      
      
  );
};

export default Section6;