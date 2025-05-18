import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../data/data";
import Container from "./Container";
import { MdArrowForward, MdArrowBack } from "react-icons/md";

function ProjectSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => 
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction === "right" ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction === "right" ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div className="bg-whitee py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-primary text-lg font-medium mb-2">OUR WORK</h2>
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">Featured Projects</h3>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray max-w-2xl mx-auto">
            Explore our portfolio of exceptional construction projects showcasing our expertise and commitment to quality
          </p>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-xl shadow-xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="relative h-full">
                <img 
                  src={projectsData[currentIndex].image} 
                  alt={projectsData[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <span className="bg-primary text-whitee px-4 py-1 rounded-full text-sm font-medium w-fit mb-4">
                    Featured Project
                  </span>
                  <h3 className="text-whitee text-3xl font-bold mb-2">
                    {projectsData[currentIndex].title}
                  </h3>
                  <p className="text-whitee/80 mb-4 max-w-2xl">
                    {projectsData[currentIndex].description}
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-whitee/20 text-whitee px-3 py-1 rounded-full text-sm">Modern</span>
                    <span className="bg-whitee/20 text-whitee px-3 py-1 rounded-full text-sm">Sustainable</span>
                    <span className="bg-whitee/20 text-whitee px-3 py-1 rounded-full text-sm">Premium</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-whitee flex items-center justify-center hover:bg-primary transition-colors z-10"
            aria-label="Previous project"
          >
            <MdArrowBack size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-whitee flex items-center justify-center hover:bg-primary transition-colors z-10"
            aria-label="Next project"
          >
            <MdArrowForward size={24} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? "right" : "left");
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-6" : "bg-whitee/50"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProjectSlideshow;