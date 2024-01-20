// import { ChevronRight } from 'lucide-react'
import React from "react";
import footerImage from "../../assest/footer.png";
import { TfiFacebook } from "react-icons/tfi";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const Navigate = useNavigate();
  return (
    <>
      <footer className="w-full py-20" style={{ background: "#1A1B1F" }}>
        <div className="mx-auto flex max-w-5xl flex-col items-left space-x-8 md:flex-row">
          <div >
            <div style={{width:'23vw'}}>
              <img src={footerImage} alt="footimage" />
            </div>
            <div className="flex gap-5 my-3 mx-3">
              <div
                class="rounded-full bg-slate-800  text-white p-3"
                style={{ background: "#3f3f43" }}
              >
                <TfiFacebook  className="Socialicon"/>
              </div>
              <div
                class="rounded-full bg-slate-800  text-white p-3"
                style={{ background: "#3f3f43" }}
              >
                <SlSocialTwitter  className="Socialicon"/>
              </div>
              <div
                class="rounded-full bg-slate-800  text-white p-3"
                style={{ background: "#3f3f43" }}
              >
                <FaInstagram  className="Socialicon"/>
              </div>
            </div>
          </div>
          <div
            className="mt-8 grid grid-cols-2 gap-20 Footerleftside md:mt-0 lg:w-3/4 lg:grid-cols-4"
            
          >
            <div className="mb-8 lg:mb-0">
              <p className="mb-5 font-bold text-white FooterTitle">PRODUCT</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li className="cursor-pointer hover:text-white FooterLi">Teams</li>
                <li className="cursor-pointer hover:text-white FooterLi">Blogs</li>
                <li className="cursor-pointer hover:text-white FooterLi">FAQs</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-5 FooterTitle font-bold text-white">RESOURCES</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li className="cursor-pointer hover:text-white FooterLi" onClick={()=>Navigate('/signup')}>Singup</li>
                <li className="cursor-pointer hover:text-white FooterLi" onClick={()=>Navigate('/login')}>Login</li>
                <li className="cursor-pointer hover:text-white FooterLi">Blog</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-5 FooterTitle font-bold text-white">COMPANY</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li className="cursor-pointer hover:text-white FooterLi">Career</li>
                <li className="cursor-pointer hover:text-white FooterLi">Contact</li>
                <li className="cursor-pointer hover:text-white FooterLi">Investor</li>
                <li className="cursor-pointer hover:text-white FooterLi">Terms</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-5 FooterTitle font-bold text-white">COMPANY</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li className="cursor-pointer hover:text-white FooterLi">About</li>
                <li className="cursor-pointer hover:text-white FooterLi">Contact</li>
                <li className="cursor-pointer hover:text-white FooterLi">Team</li>
                <li className="cursor-pointer hover:text-white FooterLi">
                  Privacy Policy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="mx-auto py-3" style={{ background: "#343a40" }}>
        <div className="text-center pt-5">
          <div
            className=" mb-4"
            style={{
              fontSize: "13px",
              fontWeight: "400",
              lineHeight: "19px",
              color: "#6c757d",
            }}
          >
            Copyright © 2024. Designed & Developed by Themefisher
          </div>
          <div
            className="text-white"
            style={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "25px",
              color: "#808080",
            }}
          >
            Distributed By Themewagon
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer
