import { useState } from "react";
import { toast } from "react-toastify";
import {motion} from "motion/react"

const Contact = () => {

const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "4174edf4-74cd-4b6f-8b2f-3f0f08769df1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "" : toast.error("Something went wrong. Please try again later."));
    toast.success("Message sent successfully!");
    event.target.reset();
    
    
  };


  return (
    <motion.div
    initial={{opacity: 0, y: 200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, y:  0 }}
    viewport={{once: true}}
    className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">
        
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center"
        >Contact <span className="underline underline-offset-4 decoration-1 under 
        font-light">Us Now</span></h1>
        <p className="text-gray-500 max-w-80 text-center mb-12 mx-auto">
            Ready to Make a Move? Let's Build The Future Together</p>


        <form className="w-full max-w-5xl mx-auto pt-4" onSubmit={onSubmit}>
            <div className="flex flex-col md:flex-row gap-2">
                <div className="w-full md:w-1/2 mx-auto flex flex-col gap-4 text-left">
                    <input type="text" placeholder="Your Name" name="Name" className="w-full border border-gray-300
                    rounded-2xl py-3 px-4 mt-2" required />
                </div>
                <div className="w-full md:w-1/2 mx-auto flex flex-col gap-4 text-left">
                    <input type="email" placeholder="Your Email" name="Email" className="w-full border border-gray-300
                    rounded-2xl py-3 px-4 mt-2" required />
                </div>
            </div>

            <div className>
                <textarea placeholder="Enter Your Message" name="Message" className="w-full border border-gray-300
                rounded-2xl py-3 px-4 mt-4 h-32 resize-none" rows="5" required></textarea>
            </div>
            <motion.button 
            initial={{opacity: 0, y : -30}}
            transition={{duration: 0.5}}
            whileInView={{opacity: 1, y:  0 }}
            viewport={{once: false}}
            type="submit" className="bg-blue-700 hover:bg-black text-sm md:text-lg 
             hover:text-white text-white px-20 py-5 rounded-2xl mt-4">{result ? result : "Send Message"}
            </motion.button>
             <p className="text-gray-500 text-sm mt-2">Messages sent will be responded to within 24 hours</p>

        </form>

    </motion.div>
  )
}

export default Contact;