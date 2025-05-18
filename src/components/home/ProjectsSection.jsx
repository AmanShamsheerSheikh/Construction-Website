import Projects from "../Projects";
import MainHead from "../mainHead/MainHead";
import { motion } from "framer-motion";

function ProjectsSection() {
  return (
    <div className="bg-lightGray text-white py-[80px]" id="projects-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <MainHead>Our Featured Projects</MainHead>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray max-w-2xl mx-auto mb-12 px-4"
        >
          Explore our portfolio of exceptional construction projects, showcasing our commitment to quality, 
          innovation, and architectural excellence.
        </motion.p>
        <Projects />
      </motion.div>
    </div>
  );
}

export default ProjectsSection;
