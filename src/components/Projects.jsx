import { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets"

const Projects = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardToShow, setCardToShow] = useState(1);

  useEffect(() => {
    const updateCardToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardToShow(projectsData.length);
      } else {
        setCardToShow(1)
      }
    }
    
      updateCardToShow();

      window.addEventListener('resize', updateCardToShow);

      return () => window.removeEventListener('resize', updateCardToShow);
  
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  }
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
  }

  return (
    <div className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" 
    id="Services">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Projects <span 
          className="underline underline-offset-4 decoration-1 under font-light">Completed</span></h1>
          <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
            Crafting Spaces, Building Legacies - Explore Our Portfolio </p>

            {/*-------SLIDER BUTTONS-------*/}
            <div className="flex items-center justify-end mb-8">
              <button onClick={handlePrevious}
              className="p-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 
              px-4 rounded-2xl mr-2" ariel-label="Previous Project">
                <img src={assets.left_arrow} alt="Previous" />
              </button>
              <button onClick={handleNext}
              className="p-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 
              px-4 rounded-2xl mr-2" ariel-label="Next Project">
                <img src={assets.right_arrow} alt="Next" />
              </button>
            </div>

            {/*-------PROJECTS SLIDER CONTAINER-------*/}
            <div className="w-full overflow-x-scroll sm:overflow-hidden">
              <div className="flex gap-8 transition-transform duration-500 ease-in-out"
              
              style={{ transform: `translateX(-${currentIndex * (100 / cardToShow)}%)` }}

              >
                {projectsData.map((project, index)=>(
                  <div key={index} className="relative shrink-0 w-full sm:w-1/4">
                    <img src={project.image} alt={project.title} className="w-full h-auto mb-14"/>
                    

                    <div className="absolute left-0 right-0 bottom-5 items-center flex justify-center gap-4 
                    opacity-80 hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white shadow-lg 
                      cursor-pointer" ariel-label="View Details inline-block w-3/4 px-4 py-2 text-center">
                        <h2 className="flex items-center justify-center text-xl font-semibold text-gray-800 ">
                          {project.title}
                        </h2>
                        <p className="text-gray-500 text-sm mt-1 px-4">
                          {project.location} <span>|</span> {project.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


    </div>
  )
}

export default Projects