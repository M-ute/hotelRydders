import { useEffect, useState } from "react";
import {assets} from "../assets/assets"

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect (() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        }
    },[showMobileMenu]);


  return (
    <div className="absolute top-0 left-0 w-full z-0">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-10 lg:px-32
        bg-transparent rounded-lg">
            <img src={assets.logo} alt="" />
                <ul className="hidden md:flex gap-7 text-white" >
                    <a href="#Header" className="cursor-pointer hover:text-gray-500">Home</a>
                    <a href="#About" className="cursor-pointer hover:text-gray-500">About</a>
                    <a href="#Services" className="cursor-pointer hover:text-gray-500">Services</a>
                    <a href="#Contact" className="cursor-pointer hover:text-gray-500">Contact</a>
                    <a href="#Testimonials" className="cursor-pointer hover:text-gray-500">Testimonials</a>
                </ul>
            <button className="hidden text-white md:block bg-amber-500
             hover:bg-white hover:text-black px-8 py-2 rounded-full">Sign Up
            </button>
            <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} alt="" className="md:hidden w-7 cursor-pointer " />
        </div>
        {/*-----------MOBILE MENU---------*/}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'hidden'} top-0 right-0 bottom-0 overflow-hidden
          transition-all duration-300 ease-in-out`}>
            <div className="flex justify-between cursor-pointer px-4 py-5 bg-gray-500">
                <div className="flex items-start px-4 text-2xl text-gray-100">MENU</div>
                <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} alt="" className="w-8 p-1 border-2 border-gray-100 rounded-full " />
            </div>
            <ul className="flex flex-col gap-4 items-center  text-gray-800 text-center text-lg 
            font-medium px-5 py-1 bg-gray-100">
                <a onClick={() => setShowMobileMenu(false)} href="#Home" className=" px-4 py-2 rounded-full inline-block">Home</a>
                <a onClick={() => setShowMobileMenu(false)} href="#About" className=" px-4 py-2 rounded-full inline-block">About</a>
                <a onClick={() => setShowMobileMenu(false)} href="#Services" className=" px-4 py-2 rounded-full inline-block ">Services</a>
                <a onClick={() => setShowMobileMenu(false)} href="#Contact" className=" px-4 py-2 rounded-full inline-block">Contact</a>
                <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className=" px-4 py-2 rounded-full inline-block">Testimonials</a>

            </ul>
        </div>

    </div> 
  )
}

export default Navbar