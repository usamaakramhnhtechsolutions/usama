import React from "react";
import { IoTriangleOutline } from "react-icons/io5";

const Section5 = () => {
  return (
    <section class="video-promo bg-1">
      <div class="content-block py-40">
        <h2 className="text-white" style={{fontSize:'30px', lineHeight:'50px', fontWeight:'300'}}>Watch Our Promo Video</h2>
        <p className="text-white" style={{fontSize:'16px', lineHeight:'25px', fontWeight:'400', color:'#808080'}}>
          Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu
          erat, accumsan <br />id imperdiet et, porttitor at sem. Vivamus{" "}
        </p>
        <a data-fancybox="" href="https://www.youtube.com/watch?v=jrkvirglgaQ" className="flex justify-center my-8">
          <div className="rotated-icon rounded-full  bg-slate-600 " style={{background:'#2e7eed',height:'100px', width:'100px'}}>
          <IoTriangleOutline style={{fontSize:'30px', fontWeight:'bold', color:'white'}}/>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Section5;