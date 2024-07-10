import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const {currentUser}=useSelector(state=> state.user)
  return (
    <header className="text-black sticky z-[100]  inset-x-0 top-0 w-full border-b border-gray-200 bg-white/15 backdrop-blur-lg transition-all">
    <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center rounded-lg shadow-md">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 rounded-full" viewBox="0 0 24 24">
          <path d="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/explained-m/exlm-og.jpg"></path>
        </svg> */}
        <img src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/explained-m/exlm-og.jpg" className="w-20 h-15 text-white p-2 rounded-full" alt="" />
        <span className="ml-3 text-xl font-bold">Madan<span className='text-blue-800 font-bold'>Estates</span></span>
      </a>

      <div className="relative mt-4 md:mt-0 px-72 text-black border-collapse border-black">
          <input
            type="text"
            placeholder="Search for Property"
            className="placeholder-blue-900 w-full md:w-96 text-black border-black rounded-full text-center font-xl focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-blue-800 text-base outline-none  py-1 px-10 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
        <a className="font-semibold text-blue-800 mr-5 hover:text-gray-900" href="/profile">Profile</a>
        <a className="font-semibold text-blue-800 mr-5 hover:text-gray-900" href="/about">About Us</a>
        <a className="font-semibold text-blue-800 mr-5 hover:text-gray-900" href="/sign-in">Log In</a>
        {/* <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
      </nav>
    </div>
  </header>
  );
}

export default Header;
