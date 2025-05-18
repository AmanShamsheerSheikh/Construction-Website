import { aboutUsData } from "../data/data";
import { motion } from "framer-motion";
import Container from "./Container";

function AboutUs() {
  return (
    <div className="py-20 bg-whitee">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Us</h2>
          <p className="text-gray max-w-2xl mx-auto">
            NK Construction delivers excellence through our core values and commitment to quality
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutUsData.map((el, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                key={el.id}
                className="bg-[#F8F9FA] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 
                transform hover:translate-y-[-10px] group"
              >
                <div className="h-24 bg-primary flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-whitee flex items-center justify-center 
                  transform group-hover:rotate-12 transition-transform duration-500">
                    <img
                      src={el.image}
                      alt={el.description}
                      style={{
                        filter: "invert(77%) sepia(12%) saturate(900%) hue-rotate(105deg) brightness(25%) contrast(60%)",
                      }}
                      className="w-10 h-10"
                    />
                  </div>
                </div>
                
                <div className="p-8">
                  <h2 className="text-2xl font-bold uppercase mb-4 text-primary">
                    {el.title}
                  </h2>
                  <div className="w-12 h-1 bg-primary mb-6 mx-auto"></div>
                  <p className="text-gray">
                    {el.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default AboutUs;
