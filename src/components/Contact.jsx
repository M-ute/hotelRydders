
const Contact = () => {
  return (
    <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center"
        >Contact <span className="underline underline-offset-4 decoration-1 under 
        font-light">Us Now</span></h1>
        <p className="text-gray-500 max-w-80 text-center mb-12 mx-auto">
            Ready to Make a Move? Let's Build The Future Together</p>


        <form className="w-full max-w-5xl mx-auto pt-4">
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

        </form>

    </div>
  )
}

export default Contact