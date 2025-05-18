import { motion } from "framer-motion";
import { useEffect } from "react";
import AboutUs from "../components/AboutUs";
import ClientTestimonials from "../components/ClientTestimonials";
import Container from "../components/Container";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import teamImage from "../Assets/office-1.jpg";
import visionImage from "../Assets/vision.jpg";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
    
    // Scroll to top when component mounts
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
            className="text-center"
          >
            <h2 className="text-primary text-lg font-medium mb-2">OUR COMPANY</h2>
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">About Us</h3>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray max-w-2xl mx-auto">
              Building excellence through innovation, quality, and dedication
            </p>
          </motion.div>
          
          
        </Container>
      </div>

      {/* Company Overview Section */}
      <section className="py-20" id="who-we-are">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-primary text-lg font-medium mb-2">OUR STORY</h2>
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">Who We Are</h3>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              
              <p className="text-gray mb-6">
                NK Construction is a premier real estate consultancy company proudly serving thousands of satisfied clients 
                and partnering with the top real estate developers in Egypt. With a focus on excellence and client satisfaction, 
                we've established ourselves as a trusted name in the construction industry.
              </p>
              
              <p className="text-gray mb-8">
                Our team of experienced professionals brings expertise in architecture, engineering, and project management 
                to deliver exceptional results on every project. We believe in transparent communication, attention to detail, 
                and building lasting relationships with our clients.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <span className="text-primary text-4xl font-bold">350+</span>
                  <span className="text-gray">Projects Completed</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary text-4xl font-bold">6+</span>
                  <span className="text-gray">Years of Experience</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <img 
                  src={teamImage} 
                  alt="Our Team" 
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg z-[-1]"></div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-whitee" id="vision-mission">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-primary text-lg font-medium mb-2">OUR DIRECTION</h2>
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">Vision & Mission</h3>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray max-w-2xl mx-auto">
              Our guiding principles that drive us forward and shape our future
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src={visionImage} 
                  alt="Our Vision" 
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-lg z-[-1]"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <h2 className="text-primary text-lg font-medium mb-2">OUR VISION</h2>
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">Looking Forward</h3>
                <div className="w-20 h-1 bg-primary mb-6"></div>
                
                <p className="text-gray">
                  We aim to achieve the highest possible standards in the real estate field while establishing 
                  our company as the preferred real estate consultancy in Egypt. Our vision is to be recognized 
                  for our commitment to excellence, innovation, and sustainable building practices.
                </p>
              </div>
              
              <div>
                <h2 className="text-primary text-lg font-medium mb-2">OUR MISSION</h2>
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">What Drives Us</h3>
                <div className="w-20 h-1 bg-primary mb-6"></div>
                
                <p className="text-gray">
                  Our mission is to deliver exceptional construction services that exceed client expectations, 
                  foster innovation, and contribute positively to the communities we serve. We are committed to 
                  ethical business practices, environmental responsibility, and creating spaces that enhance people's lives.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20" id="values">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-primary text-lg font-medium mb-2">OUR PRINCIPLES</h2>
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">Core Values</h3>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray max-w-2xl mx-auto">
              Our core values guide everything we do and define who we are as a company
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Excellence", description: "We strive for excellence in every project, no matter the size" },
              { title: "Integrity", description: "We operate with honesty, transparency, and ethical business practices" },
              { title: "Innovation", description: "We embrace new technologies and methods to improve our services" },
              { title: "Collaboration", description: "We work closely with clients to bring their vision to life" }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-whitee p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary"
              >
                <h4 className="text-white text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-gray">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <ClientTestimonials />
      <AboutUs />
    </div>
  );
}

export default About;