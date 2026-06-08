import Navbar from "./Navbar"


const Header = () => {
  return (
    <div className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
    style={{backgroundImage: "url('header_img.png')"}} id="Header">

    <Navbar/>
        <div className="container text-center mx-auto px-6 py-6 text-white md:px-20 lg:px-32">
            <h2 className="text-5xl sm:text-6xl md:text-[80px] inline-block max-w-3xl font-semibold py-20">Explore Your Homes That Fits Your Dreams</h2>
            <div className="space-x-6 mt-16 text-lg">
                <a href="#Services" className="border-3 rounded-4xl border-white px-8 py-4 text-white hover:bg-amber-50 hover:text-black">Projects</a>
                <a href="#Contact" className="bg-white rounded-4xl px-8 py-4 text-black hover:bg-gray-700 hover:text-white">Contact Us</a>
            </div>
        </div>
        


    </div>
  )
}

export default Header