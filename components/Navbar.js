
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="bg-gradient-to-r from-gray-700 to-gray-500 text-white fixed z-10 w-screen">
        <nav role="navigation" className=" max-w-7xl mx-auto flex justify-between h-20 relative items-center transition duration-700 ease-in-out">
          <a href="#" className="pl-6 text-4xl font-semibold text-blue-50">iabhishek</a>
          <div className="px-4 cursor-pointer md:hidden" onClick={showSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          {/* className="hidden md:block" */}
          <div className={sidebar ? "flex flex-col text-center bg-gray-600 w-full absolute top-20 " : "hidden md:block"} onClick={showSidebar}>
            <a href="#" className="p-4">Home</a>
            <a href="#" className="p-4">About</a>
            <a href="#" className="p-4">Content</a>
            <a href="#" className="p-4">Services</a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
