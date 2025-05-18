import { useEffect } from "react";
import { motion } from "framer-motion";
import ProjectsComponent from "../components/Projects";
import ClientTestimonials from "../components/ClientTestimonials";
import Container from "../components/Container";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-lightGray">
      {/* Hero Section */}
      <div className="bg-secondary py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-primary text-lg font-medium mb-2">OUR WORK</h2>
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">Projects</h3>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray max-w-2xl mx-auto">
              Explore our portfolio of completed and ongoing construction projects
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <nav className="inline-flex bg-whitee/10 backdrop-blur-sm rounded-lg p-1">
              <a href="#all-projects" className="px-4 py-2 rounded-md bg-primary text-whitee">All Projects</a>
              <a href="#residential" className="px-4 py-2 rounded-md text-white hover:bg-whitee/10 transition-colors">Residential</a>
              <a href="#commercial" className="px-4 py-2 rounded-md text-white hover:bg-whitee/10 transition-colors">Commercial</a>
            </nav>
          </motion.div>
        </Container>
      </div>
      
      <div id="all-projects">
        <ProjectsComponent />
      </div>
      <ClientTestimonials />
    </div>
  );
}

export default Projects;
