import { assets } from "../assets/assets"

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto p-14 
    md:px-20 lg:px-32 overflow-hidden w-full" id="About">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">About <span className="underline 
        underline-offset-4 decoration-1 under font-light"> Our Brand</span></h1>
        <p className="text-gray-500 max-w-80 text-center mb-8">Passionate About Properties, 
            Dedicated To Your Vision</p>
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
            <img src={assets.brand_img} alt="" className="w-full sm:w-1/2 max-w-lg "/>
            <div className="flex flex-col items-center md:items-start mt-10 text-gray-600 ">
                <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 ">
                    <div>
                        <p className="text-4xl font-medium text-gray-800" >10+</p>
                        <p >Years Of Excellence</p>
                    </div>
                    <div>
                        <p className="text-4xl font-medium text-gray-800">12+</p>
                        <p >Projects Completed</p>
                    </div>
                    <div>
                        <p className="text-4xl font-medium text-gray-800">20+</p>
                        <p >Mn. Sq. Ft. Delivered </p>
                    </div>
                    <div>
                        <p className="text-4xl font-medium text-gray-800">50+</p>
                        <p >Ongoing Projects</p>
                    </div>
                </div>
                <p className="my-10 max-w-lg">At Rydders, we are more than just a real estate 
                    company; we are a team of passionate individuals dedicated to turning your 
                    dreams into reality. With over a decade of experience in the industry, we 
                    have built a reputation for excellence and innovation. Our commitment to 
                    quality, integrity, and customer satisfaction sets us apart as a trusted 
                    partner in your real estate journey. Whether you're looking for your dream 
                    home or seeking to invest in prime properties, Rydders is here to guide you 
                    every step of the way.   
                </p>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-3xl hover:bg-gray-800">Learn More</button>
            </div>
        </div>

    </div>
  )
}

export default About