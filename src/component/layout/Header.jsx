/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import logo from "../../assest/logo.png";
import "./Style.css";

function Header() {
  const { user } = useContext(UserContext);
  console.log(user);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleButtonClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };



  return (
    <>
     

<nav className="headermaindiv bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between lg:mx-28 md:mx-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} className="" alt="Flowbite Logo" />
    </a>
    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" 
          // aria-expanded={"false"}
          onClick={handleButtonClick}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className={`md:block w-full md:w-auto h-14 ${isDropdownVisible ? "block" : "hidden"}`} id="navbar-multi-level" >
      <ul className="flex flex-col font-medium p-0 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li className="text-xs lg:text-sm font-semibold leading-10 font-sans">
                <div className="group inline-block Header-dropdowBox">
                  <button className="outline-none Header-dropdowbutton focus:outline-none pt-1 flex items-center border-t-2 border-blue-500 ... py-2 px-3 text-white bg-blue-700   md:bg-transparent md:p-0 md:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent
                    " aria-current="page" style={{fontSize:"13px",lineHeight:"45px",fontWeight:"600"}}>
                    HOME
                    <svg
                      className="w-3 h-3 text-gray-800 dark:text-white ml-1 transform transition-transform duration-300 ease-in-out"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 8"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                      />
                    </svg>
                  </button>
                  <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute z-30 transition duration-300 ease-in-out origin-top min-w-44">
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Team
                    </li>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Career
                    </li>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Blog
                    </li>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Blog Single
                    </li>
                  </ul>
                </div>
              </li>
        <li className="text-xs lg:text-sm font-semibold leading-10 font-sans">
                <div className="group inline-block Header-dropdowbutton">
                  <button className="outline-none Header-dropdowbutton focus:outline-none pt-1 bg-white rounded-sm flex items-center mr-1  py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ms-5 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{fontSize:"13px",lineHeight:"45px",fontWeight:"600"}}>
                  PAGES
                    <svg
                      className="w-3 h-3 text-gray-800 dark:text-white ml-1 transform transition-transform duration-300 ease-in-out"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 8"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                      />
                    </svg>
                  </button>
                  <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute z-30 transition duration-300 ease-in-out origin-top min-w-44">
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Team
                    </li>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Career
                    </li>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Blog
                    </li>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Blog Single
                    </li>
                  </ul>
                </div>
              </li>
        <li href="#" className="block py-2 px-3 text-gray-900 pt-1 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  ms-5 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent headerPRICING" style={{fontSize:"13px",lineHeight:"45px",fontWeight:"600"}}>
        PRICING
        </li>
        <li>
          <a href="#" className="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 pt-1 ms-5 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent headerCONTACT" style={{fontSize:"13px",lineHeight:"45px",fontWeight:"600"}}>CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}

export default Header;


