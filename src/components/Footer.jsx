import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div>
        <div className="w-full mx-auto py-50 px-4 md:px-20 lg:px-32 bg-gray-900 overflow-hidden" id="Footer">
            <div className="container mx-auto flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start">
                <img src={assets.logo_dark} alt="" />
                <p className="text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit et, eius reprehenderit, 
                    officiis ipsum ullam facilis aliquam assumenda nam inventore voluptas nesciunt enim odio
                    delectus recusandae. Libero, ab? Nemo?
                </p>
            </div>
            <div></div>
            <div></div>
        </div>
        <div></div>
    </div>
  )
}

export default Footer