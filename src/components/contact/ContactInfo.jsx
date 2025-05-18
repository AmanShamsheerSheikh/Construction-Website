import { motion } from "framer-motion";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
import Container from "../Container";

function ContactInfo() {
  const contactItems = [
    {
      id: 1,
      icon: <MdLocationOn className="text-3xl" />,
      title: "Our Location",
      content: "123 Construction Ave, Building City, ST 12345",
      link: "https://maps.google.com",
      linkText: "Get Directions"
    },
    {
      id: 2,
      icon: <MdPhone className="text-3xl" />,
      title: "Phone Number",
      content: "(123) 456-7890",
      link: "tel:+11234567890",
      linkText: "Call Now"
    },
    {
      id: 3,
      icon: <MdEmail className="text-3xl" />,
      title: "Email Address",
      content: "info@nkconstruction.com",
      link: "mailto:info@nkconstruction.com",
      linkText: "Send Email"
    },
    {
      id: 4,
      icon: <MdAccessTime className="text-3xl" />,
      title: "Working Hours",
      content: "Mon - Fri: 8:00 AM - 6:00 PM",
      secondContent: "Sat: 9:00 AM - 2:00 PM",
      link: null,
      linkText: null
    }
  ];

  return (
    <section className="py-16 bg-lightGray">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-primary text-lg font-medium mb-2">GET IN TOUCH</h2>
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">Contact Information</h3>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray max-w-2xl mx-auto">
            We're here to answer any questions you may have about our services. Reach out to us using any of the methods below.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-whitee p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-primary">{item.icon}</span>
              </div>
              
              <h4 className="text-white text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray mb-2">{item.content}</p>
              {item.secondContent && <p className="text-gray mb-2">{item.secondContent}</p>}
              
              {item.link && (
                <a 
                  href={item.link} 
                  className="text-primary font-medium hover:underline inline-flex items-center justify-center mt-2"
                  target={item.link.startsWith('http') ? "_blank" : undefined}
                  rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                >
                  {item.linkText}
                </a>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1619528477729!5m2!1sen!2s" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="NK Construction Location"
          ></iframe>
        </div>
      </Container>
    </section>
  );
}

export default ContactInfo;
