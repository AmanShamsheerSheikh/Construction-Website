import { motion } from "framer-motion";
import Container from "../Container";
import { Link } from "react-router-dom";
import ImageSrc from "../../Assets/blueprint/office-1.jpg";

function CompanyIntro() {
  return (
    <section className="py-16 bg-lightGray">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary text-lg font-medium mb-2">WELCOME TO NK CONSTRUCTION</h2>
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">Building Excellence Since 2017</h3>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            
            <p className="text-gray mb-6">
              NK Construction is a premier construction company specializing in residential and commercial projects. 
              With over 6 years of experience, we've built a reputation for quality craftsmanship, innovative design, 
              and exceptional client service.
            </p>
            
            <p className="text-gray mb-8">
              Our team of experienced professionals brings expertise in architecture, engineering, and project management 
              to deliver exceptional results on every project. We believe in transparent communication, attention to detail, 
              and building lasting relationships with our clients.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col">
                <span className="text-primary text-4xl font-bold">350+</span>
                <span className="text-gray">Projects Completed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary text-4xl font-bold">8000+</span>
                <span className="text-gray">Satisfied Clients</span>
              </div>
            </div>
            
            <Link 
              to="/about"
              className="inline-block bg-primary text-whitee px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Learn More About Us
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={ImageSrc} 
                alt="NK Construction Team" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg z-[-1]"></div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default CompanyIntro;