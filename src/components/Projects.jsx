import { useState } from "react";
import { projectsData } from "../data/data";
import Container from "./Container";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-lightGray text-white py-[40px]">
      <Container>
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[40px] mx-auto"
          >
            {projectsData.map((p, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  key={p.id}
                  className="bg-whitee rounded-lg overflow-hidden hover:bg-[#CBD5E1] transition-all duration-300 
                  shadow-lg hover:shadow-2xl cursor-pointer transform hover:scale-[1.02]"
                  onClick={() => setSelectedProject(p)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.description}
                      className="w-full h-[300px] object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-whitee">
                        <span className="bg-primary text-whitee px-4 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="uppercase text-2xl font-bold text-whitee mb-2">{p.title}</h4>
                    <div className="w-12 h-1 bg-primary mb-4"></div>
                    <p className="text-gray md:text-base text-sm mb-4">
                      {p.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-medium">View Details</span>
                      <span className="w-8 h-8 rounded-full bg-primary text-whitee flex items-center justify-center">
                        +
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setSelectedProject(null);
                  }
                }}
              >
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", damping: 20 }}
                  className="bg-whitee text-white p-8 rounded-xl shadow-2xl max-w-2xl w-full relative"
                >
                  <button
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary text-whitee flex items-center justify-center 
                    hover:bg-[#e09000] transition-colors focus:outline-none"
                    onClick={() => setSelectedProject(null)}
                  >
                    ✕
                  </button>
                  
                  <h3 className="text-3xl font-bold mb-4 text-primary">{selectedProject.title}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray">Project Overview</h4>
                      <p className="text-gray mb-4">{selectedProject.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-[#e5e8eb] text-gray px-3 py-1 rounded-full text-sm">Modern</span>
                        <span className="bg-[#e5e8eb] text-gray px-3 py-1 rounded-full text-sm">Sustainable</span>
                        <span className="bg-[#e5e8eb] text-gray px-3 py-1 rounded-full text-sm">Premium</span>
                      </div>
                    </div>
                    
                    <div>
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.description}
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray">Blueprint</h4>
                    <img
                      src={selectedProject.blueprint_image}
                      alt="Blueprint"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
}

export default Projects;