import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../Container";
import { projectDetailsData } from "../../data/projectDetailsData";

function FeaturedProjects() {
  // Get only the first 3 projects for featured section
  const featuredProjects = projectDetailsData.slice(0, 3);
  
  return (
    <section className="py-16 bg-whitee">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-primary text-lg font-medium mb-2">OUR PORTFOLIO</h2>
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">Featured Projects</h3>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray max-w-2xl mx-auto">
            Explore our showcase of exceptional construction projects highlighting our expertise and commitment to quality
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-lightGray rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
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
              </div>
              
              <div className="p-6">
                <p className="text-gray text-sm mb-6 line-clamp-2">{project.description}</p>
                
                <Link 
                  to={`/project/${project.slug}`}
                  className="inline-block bg-primary text-whitee px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/project-showcase"
            className="inline-block border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-whitee transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProjects;