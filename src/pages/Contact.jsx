import { useEffect } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import Container from "../components/Container";

function Contact() {
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
            <h2 className="text-primary text-lg font-medium mb-2">GET IN TOUCH</h2>
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">Contact Us</h3>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray max-w-2xl mx-auto">
              Get in touch with our team for inquiries, quotes, or to discuss your project
            </p>
          </motion.div>
          
          
        </Container>
      </div>

      <div className="text-white relative">
        <div id="contact-form">
          <ContactForm />
        </div>
        
        <div id="contact-info">
          <ContactInfo />
        </div>
        
        {/* Call to Action */}
        <section className="py-16 bg-primary">
          <Container>
            <div className="text-center">
              <h2 className="text-whitee text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-whitee/80 max-w-2xl mx-auto mb-8">
                Our team is ready to bring your vision to life. Contact us today for a free consultation and quote.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-whitee text-primary px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-colors"
              >
                Schedule a Consultation
              </motion.button>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}

export default Contact;
