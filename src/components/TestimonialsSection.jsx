import { motion } from "framer-motion";
import Container from "./Container";
import MainHead from "./mainHead/MainHead";
import { testimonialReviews } from "../data/data";

function TestimonialsSection() {
  return (
    <div className="bg-lightGray py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <MainHead>Client Testimonials</MainHead>
          <p className="text-center text-gray max-w-2xl mx-auto mb-16">
            Don't just take our word for it. Here's what our clients have to say about their experience working with NK Construction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialReviews.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-whitee rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:translate-y-[-10px]"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-primary"
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                      <p className="text-gray">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl">
                        {i < testimonial.rating ? (
                          <span className="text-primary">★</span>
                        ) : (
                          <span className="text-gray-300">★</span>
                        )}
                      </span>
                    ))}
                  </div>
                  
                  <blockquote className="text-gray italic relative">
                    <span className="text-primary text-5xl absolute top-0 left-0 opacity-20">"</span>
                    <p className="relative z-10 pl-6">{testimonial.text}</p>
                    <span className="text-primary text-5xl absolute bottom-0 right-0 opacity-20">"</span>
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default TestimonialsSection;