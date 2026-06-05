import { assets } from "../assets/assets"

const Projects = () => {
  return (
    <div className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" 
    id="Services">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Projects <span 
          className="underline underline-offset-4 decoration-1 under font-light">Completed</span></h1>
          <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
            Crafting Spaces, Building Legacies - Explore Our Portfolio </p>

            {/*-------SLIDER BUTTONS-------*/}
            <div className="flex items-center justify-end mb-8">
              <button className="p-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 
              px-4 rounded-full mr-2" ariel-label="Previous Project">
                <img src={assets.left_arrow} alt="Previous" />
              </button>
              <button className="p-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 
              px-4 rounded-full mr-2" ariel-label="Next Project">
                <img src={assets.right_arrow} alt="Next" />
              </button>
            </div>

            {/*-------PROJECTS SLIDER CONTAINER-------*/}
            


    </div>
  )
}

export default Projects