import {assets} from "../assets/assets"

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-0">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32
        bg-transparent rounded-lg">
            <img src={assets.logo} alt="" />
                <ul className="hidden md:flex gap-7 text-white" >
                    <a href="#Header" className="cursor-pointer hover:text-gray-500">Home</a>
                    <a href="#Header" className="cursor-pointer hover:text-gray-500">About</a>
                    <a href="#Header" className="cursor-pointer hover:text-gray-500">Services</a>
                    <a href="#Header" className="cursor-pointer hover:text-gray-500">Contact</a>
                    <a href="#Header" className="cursor-pointer hover:text-gray-500">Testimonials</a>
                </ul>
            <button className="hidden text-white md:block bg-amber-500 px-8 py-2 rounded-full">Sign Up</button>

        </div>

    </div>
  )
}

export default Navbar