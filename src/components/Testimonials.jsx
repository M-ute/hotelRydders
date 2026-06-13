import { assets, testimonialsData } from "../assets/assets"
import {motion} from "motion/react"

const Testimonials = () => {
  return (
    <motion.div
    initial={{opacity: 0, y : 30}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, y:  0 }}
    viewport={{once: false}}
    className="flex flex-col items-center justify-center container mx-auto p-14 
    md:px-20 lg:px-32 overflow-hidden w-full" id="Testimonials">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center"
        >Customer <span className="underline underline-offset-4 decoration-1 under 
        font-light">Testimonials</span></h1>
        <p className="text-gray-500 max-w-80 text-center mb-12 mx-auto">
            Real Stories From Those Who Found Home With Us</p>

        <div className="flex flex-wrap  items-center justify-center gap-8 w-full">
            {testimonialsData.map((testimonial, index)=>(
                <div key={index} className="max-w-85 border-none shadow-lg rounded px-9 py-10 text-center">
                    <img className="w-20 h-20 rounded-full mx-auto mb-4" 
                    src={testimonial.image} alt={testimonial.alt} />
                    <h2 className="text-gray-800 font-medium text-lg">{testimonial.name}</h2>
                    <p className="text-gray-500 text-sm mb-4">{testimonial.title}</p>
                    <div className="flex justify-center gap-1 text-red-500 mt-4 mb-4">
                        {Array.from({ length: testimonial.rating }, (item, index)=> (
                            <img key={index} src={assets.star_icon} alt=""/>
                        ))}
                    </div>
                    <p className="text-gray-500">{testimonial.text}</p>
                </div>
            ))}
        </div>
    </motion.div>

    
  )
}

export default Testimonials