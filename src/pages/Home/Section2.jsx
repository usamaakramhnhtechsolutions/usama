import React from "react";
import section2img from "../../assest/section2.jpg";
import profile from "../../assest/profile.jpg";

const Section2 = () => {
  return (
    <section className="my-10">
    <div className="h-90vmin  lg:h-80vh">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-10">
          <div className="flex justify-center">
            <img
              src={section2img}
              alt="backgroundImage"
              className="w-full lg:w-auto"
            />
          </div>
          <div className="flex flex-col justify-center mx-3">
            <div className="font-sans font-light text-2xl lg:text-4xl leading-tight">
              Increase your productivity with Small Apps
            </div>
            <div className="font-sans font-normal text-base lg:text-lg my-5 leading-relaxed text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </div>
            <i className="font-lora text-base lg:text-lg my-5 leading-relaxed text-gray-800 blockquote">
              "InVision is a window into everything that's being designed at
              Twitter. It gets all of our best work in one place."
            </i>
            <div className="my-5 flex items-center gap-2">
              <img className="rounded-full w-8 h-8" src={profile} alt="imagprofile" />
              <div className="text-gray-700">Jonathon Andrew, Themefisher.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Section2;
