import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import MainHead from "../components/mainHead/MainHead";
import { projectDetailsData } from "../data/projectDetailsData";

function ProjectShowcase() {
  const [filter, setFilter] = useState("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = filter === "all" 
    ? projectDetailsData 
    : projectDetailsData.filter(project => project.category.toLowerCase() === filter);

  return (
    <div className="bg-lightGray py-20">
      <Container>
        <MainHead>Our Projects</MainHead>
        <p className="text-center text-gray max-w-2xl mx-auto mb-12">
          Explore our portfolio of exceptional construction projects showcasing our expertise in residential and commercial developments.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === "all" 
                ? "bg-primary text-whitee" 
                : "bg-whitee text-gray hover:bg-gray-200"
            }`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter("residential")}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === "residential" 
                ? "bg-primary text-whitee" 
                : "bg-whitee text-gray hover:bg-gray-200"
            }`}
          >
            Residential
          </button>
          <button 
            onClick={() => setFilter("commercial")}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === "commercial" 
                ? "bg-primary text-whitee" 
                : "bg-whitee text-gray hover:bg-gray-200"
            }`}
          >
            Commercial
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-whitee rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.mainImage} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="bg-primary text-whitee px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-whitee text-xl font-bold mt-2">{project.title}</h3>
                    <p className="text-whitee/80 text-sm mt-1">{project.location}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-whitee/20 backdrop-blur-sm text-whitee px-3 py-1 rounded-full text-xs">
                  {project.status}
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray text-sm mb-6 line-clamp-2">{project.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray">Completion</span>
                    <span className="text-white font-medium">{project.completionDate}</span>
                  </div>
                  
                  <Link 
                    to={`/project/${project.slug}`}
                    className="bg-primary text-whitee px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
                  >
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default ProjectShowcase;