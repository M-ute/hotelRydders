import { assets } from "../assets/assets"

const Footer = () => {
  return (
        <div className="w-full lg:py-20 md:py-10 pt-10  px-4 md:px-20 lg:px-32 bg-gray-900 overflow-hidden" id="Footer">
            <div className="container mx-auto w-auto flex flex-col md:flex-row justify-between items-start ">
                <div className="w-full md:w-1/3 mb-8 md:mb-0"> 
                    <img src={assets.logo_dark} alt="" />
                    <p className="text-gray-400 mt-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit et, eius reprehenderit, 
                        officiis ipsum ullam facilis aliquam assumenda nam inventore voluptas nesciunt enim odio
                        delectus recusandae. Libero, ab? Nemo?
                    </p>
                </div>
                <div className="w-full md:w-1/5 mb-8 md:mb-0">
                    <h3 className="text-white text-lg font-bold mb-4">Quick Access</h3>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <a href="#Header" className="hover:text-white">Home</a> 
                        <a href="#About" className="hover:text-white">About Us</a> 
                        <a href="#Services" className="hover:text-white">Services</a> 
                        <a href="#" className="hover:text-white">Privacy Policy</a> 
                        <a href="#Contact" className="hover:text-white">Contact Us </a> 
                    </ul>
                </div>
                <div className="container w-full md:w-1/3 mb-8 md:mb-0 bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-white text-lg font-bold mb-4">Subscribe to our Newsletter</h3>
                    <p className="text-gray-400 mb-4 max-w-80">Get the latest updates and offers, sent to your inbox weekly</p>

                    <div className="flex w-full overflow-hidden">
                        <input type="email" placeholder="Enter your email" className="flex-1 min-w-0 px-4 py-2 rounded-l-2xl
                        focus:outline-none bg-gray-800 text-gray-400 border border-gray-700 md:text-sm"/>
                        
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-2xl hover:bg-blue-800 
                        transition-colors duration-300 md:text-sm whitespace-nowrap shrink-0">Subscribe
                        </button>   
                    </div>
                </div>
            </div>
            <div className="text-gray-400 border-t border-gray-700 mt-8 pt-4 mb-5 text-center">
                © 2026 Hotel Rydders. All rights reserved.

            </div>
        </div>
  )
}

export default Footer;