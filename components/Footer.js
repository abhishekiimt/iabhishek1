import React from "react";
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-200 pt-8 pb-6 mt-10 ">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <Link
                  href='https://twitter.com/IimtAbhishek'
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="Link"
                >
                  <i className="fab fa-twitter pl-4 text-4xl text-blue-500"></i>
                </Link>
                <Link
                href='https://www.instagram.com/abhhishek_17/'
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="Link"
                >
                  <i className="fab fa-instagram pl-4 text-4xl text-blue-500"></i>
                </Link>
                <Link
                href='#'
                  className=" text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="Link"
                >
                  <i className="fab fa-dribbble pl-4 text-4xl text-blue-500"></i>
                </Link>
                <Link
                href='https://github.com/abhishekiimt'
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="Link"
                >
                  <i className="fab fa-github pl-4 text-4xl text-blue-500"></i>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block  text-blue-500 text-2xl font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        href="#"
                        
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        href="#"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/abhishekiimt"
                        target="_blank"
                      >
                        Github
                      </a>
                    </li>
                    
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} iabhishek {" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
