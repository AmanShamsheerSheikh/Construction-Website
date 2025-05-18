import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../Container";
import { MdHome, MdApartment, MdBusiness, MdConstruction, MdDesignServices, MdEco } from "react-icons/md";

function ServicesOverview() {
  const services = [
    {
      id: 1,
      title: "Residential Construction",
      description: "Custom homes, renovations, and additions tailored to your lifestyle and preferences.",
      icon: MdHome,
      image: "/src/Assets/villa.jpg"
    },
    {
      id: 2,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and industrial facilities built to the highest standards.",
      icon: MdBusiness,
      image: "/src/Assets/commercial-1.jpg"
    },
    {
      id: 3,
      title: "Renovations & Additions",
      description: "Transform your existing space with expert renovations and thoughtful additions.",
      icon: MdConstruction,
      image: "/src/Assets/villa1.jpg"
    },
    {
      id: 4,
      title: "Apartment Complexes",
      description: "Multi-unit residential buildings designed for comfort, convenience, and community.",
      icon: MdApartment,
      image: "/src/Assets/Apartment.jpg"
    },
    {
      id: 5,
      title: "Design-Build Services",
      description: "Streamlined process with a single point of contact for both design and construction.",
      icon: MdDesignServices,
      image: "/src/Assets/blueprint/blueprint_1.png"
    },
    {
      id: 6,
      title: "Sustainable Building",
      description: "Eco-friendly construction practices and energy-efficient building solutions.",
      icon: MdEco,
      image: "/src/Assets/villa2.jpg"
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
          <h2 className="text-primary text-lg font-medium mb-2">WHAT WE OFFER</h2>
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">Our Services</h3>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray max-w-2xl mx-auto">
            We provide a comprehensive range of construction services to meet all your building needs
          </p>
        </motion.div>
        
        {/* Featured Services with Alternating Layout */}
        <div className="mb-16">
          {services.slice(0, 4).map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
            >
              {/* Image Section */}
              <div className={`${index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                  />
                  <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-24 h-24 bg-primary rounded-lg z-[-1]`}></div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className={`${index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'} ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex items-center mb-6 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center ${index % 2 === 1 ? 'lg:ml-4' : 'mr-4'}`}>
                      <service.icon className="text-4xl text-primary" />
                    </div>
                    <h4 className="text-white text-2xl font-bold">{service.title}</h4>
                  </div>
                  
                  <div className={`w-20 h-1 bg-primary mb-6 ${index % 2 === 1 ? 'lg:ml-auto' : ''}`}></div>
                  
                  <p className="text-gray mb-6">{service.description}</p>
                  
                  <div className={`${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                    <Link 
                      to="/services" 
                      className={`text-primary font-medium hover:underline inline-flex items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                    >
                      {index % 2 === 1 ? (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          Learn More
                        </>
                      ) : (
                        <>
                          Learn More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Services in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.slice(4).map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-whitee p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group hover:border-l-4 hover:border-primary"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-4xl text-primary" />
                </div>
                
                <h4 className="text-white text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-gray mb-6">{service.description}</p>
                
                <Link 
                  to="/services" 
                  className="text-primary font-medium hover:underline inline-flex items-center"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services"
            className="inline-block bg-primary text-whitee px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default ServicesOverview;