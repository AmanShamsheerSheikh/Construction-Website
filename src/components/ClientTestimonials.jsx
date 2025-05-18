import { clientTestimonialsData } from "../data/data";
import Container from "./Container";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function ClientTestimonials() {
  const [animatedNumbers, setAnimatedNumbers] = useState({});

  useEffect(() => {
    const animateValue = (id, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentNumber = Math.floor(progress * (end - start) + start);
        
        setAnimatedNumbers(prev => ({
          ...prev,
          [id]: currentNumber
        }));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    // Start animations when component mounts
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        clientTestimonialsData.forEach(item => {
          animateValue(item.id, 0, parseInt(item.number), 2000);
        });
        observer.disconnect();
      }
    });

    observer.observe(document.querySelector('.stats-container'));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-secondary text-white py-[100px]">
      <Container>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold mb-16 uppercase"
        >
          Our <span className="text-primary">Achievements</span>
        </motion.h2>
        
        <div className="stats-container flex lg:flex-row flex-col lg:gap-[30px] gap-[40px] justify-center">
          {clientTestimonialsData.map((el) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: el.id * 0.2 }}
                viewport={{ once: true }}
                key={el.id}
                className="w-full flex flex-col items-center text-center bg-[#f8f9fa] rounded-lg p-8 shadow-lg transform hover:translate-y-[-5px] transition-all duration-300"
              >
                <div className="mb-4">
                  <span className="text-6xl font-bold text-primary">
                    {animatedNumbers[el.id] || 0}
                  </span>
                  <span className="text-6xl font-bold text-primary">+</span>
                </div>
                <h3 className="uppercase text-primary text-xl font-bold mb-4">
                  {el.title}
                </h3>
                <div className="w-16 h-1 bg-primary mb-4 rounded-full"></div>
                <p className="text-gray text-base">
                  {el.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default ClientTestimonials;
