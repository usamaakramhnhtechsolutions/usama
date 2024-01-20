import React from "react";
import bgmobile from "../../assest/mobile.png";


const Section1 = () => {
  return (
    <>
    <section>
    <div className="sectin-Bg">
    <div className="shapes-container">
  <div
    className="shape aos-init aos-animate"
    data-aos="fade-down-left"
    data-aos-duration={1500}
    data-aos-delay={100}
  />
  <div
    className="shape aos-init aos-animate"
    data-aos="fade-down"
    data-aos-duration={1000}
    data-aos-delay={100}
  />
  <div
    className="shape aos-init"
    data-aos="fade-up-right"
    data-aos-duration={1000}
    data-aos-delay={200}
  />
  <div
    className="shape aos-init"
    data-aos="fade-up"
    data-aos-duration={1000}
    data-aos-delay={200}
  />
  <div
    className="shape aos-init aos-animate"
    data-aos="fade-down-left"
    data-aos-duration={1000}
    data-aos-delay={100}
  />
  <div
    className="shape aos-init aos-animate"
    data-aos="fade-down-left"
    data-aos-duration={1000}
    data-aos-delay={100}
  />
  <div
    className="shape aos-init"
    data-aos="zoom-in"
    data-aos-duration={1000}
    data-aos-delay={300}
  />
  <div
    className="shape aos-init aos-animate"
    data-aos="fade-down-right"
    data-aos-duration={500}
    data-aos-delay={200}
  />
  <div
    className="shape aos-init aos-animate"
    data-aos="fade-down-right"
    data-aos-duration={500}
    data-aos-delay={100}
  />
  <div
    className="shape aos-init aos-animate"
    data-aos="zoom-out"
    data-aos-duration={2000}
    data-aos-delay={500}
  />
  <div
    className="shape aos-init"
    data-aos="fade-up-right"
    data-aos-duration={500}
    data-aos-delay={200}
  />
  <div
    className="shape aos-init aos-animate"
    data-aos="fade-down-left"
    data-aos-duration={500}
    data-aos-delay={100}
  />
  <div
    className="shape aos-init"
    data-aos="fade-up"
    data-aos-duration={500}
    data-aos-delay={0}
  />
  <div
    className="shape aos-init aos-animate"
    data-aos="fade-down"
    data-aos-duration={500}
    data-aos-delay={0}
  />
  <div
    className="shape aos-init aos-animate"
    data-aos="fade-up-right"
    data-aos-duration={500}
    data-aos-delay={100}
  />
  <div
    className="shape aos-init aos-animate"
    data-aos="fade-down-left"
    data-aos-duration={500}
    data-aos-delay={0}
  />
</div>

      <div className="container-fluid mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-24">
          <div className="flex flex-col justify-center">
            <h5 className="font-bold text-white" style={{fontSize:45,lineHeight:"61px",fontFamily:"Open Sans, sans-serif"}}>
              Showcase your app <br/>with Small Apps
            </h5>
            <p className="font-normal text-white text-base lg:text-lg my-5 leading-relaxed" style={{fontSize:15,lineHeight:"25px",fontFamily:"Open Sans, sans-serif"}}>
              Besides its beautiful design, Laapp is an incredibly rich core
              framework <br /> for you to showcase your App.
            </p>
            <div className="my-5">
              <button className="text-white py-4 px-14 rounded-sm bg-blue-500 hover:bg-blue-600" >
                Download Now
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={bgmobile} alt="backgroundImage" className="w-full lg:w-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
   </>
  );
};

export default Section1;
