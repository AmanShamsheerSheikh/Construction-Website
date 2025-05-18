import { useEffect } from "react";
import { motion } from "framer-motion";
import Container from "../components/Container";
import { MdHome, MdApartment, MdBusiness, MdConstruction, MdDesignServices, MdEco, 
  MdArchitecture, MdEngineering, MdOutlineHandyman } from "react-icons/md";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      title: "Residential Construction",
      description: "We build custom homes that reflect your unique style and meet your specific needs. Our residential construction services include new home builds, renovations, additions, and custom features. We work closely with you throughout the process to ensure your vision becomes reality.",
      icon: MdHome,
      benefits: [
        "Personalized design to match your lifestyle",
        "Quality craftsmanship and materials",
        "Energy-efficient building options",
        "Transparent pricing and timelines"
      ],
      image: "/src/Assets/villa.jpg"
    },
    {
      id: 2,
      title: "Commercial Construction",
      description: "Our commercial construction services cater to businesses of all sizes. We build office spaces, retail locations, restaurants, and industrial facilities. Our team understands the unique requirements of commercial projects, including timelines, budgets, and functionality needs.",
      icon: MdBusiness,
      benefits: [
        "Efficient project management",
        "Minimal disruption to business operations",
        "Code-compliant construction",
        "Flexible scheduling options"
      ],
      image: "/src/Assets/commercial-1.jpg"
    },
    {
      id: 3,
      title: "Renovations & Additions",
      description: "Transform your existing space with our renovation and addition services. Whether you're looking to update a kitchen, add a new room, or completely remodel your space, our team has the expertise to bring your vision to life while respecting the integrity of the existing structure.",
      icon: MdConstruction,
      benefits: [
        "Seamless integration with existing structures",
        "Updated functionality and aesthetics",
        "Increased property value",
        "Minimal disruption to daily life"
      ],
      image: "/src/Assets/villa1.jpg"
    },
    {
      id: 4,
      title: "Apartment Complexes",
      description: "We specialize in building multi-unit residential buildings designed for comfort, convenience, and community. Our apartment complex projects include amenities that enhance residents' quality of life while maximizing the return on investment for property owners.",
      icon: MdApartment,
      benefits: [
        "Efficient space utilization",
        "Modern amenities and features",
        "Community-focused design",
        "Sustainable building practices"
      ],
      image: "/src/Assets/Apartment.jpg"
    },
    {
      id: 5,
      title: "Design-Build Services",
      description: "Our design-build approach streamlines the construction process by bringing design and construction under one roof. This integrated approach reduces costs, accelerates timelines, and ensures a cohesive vision from concept to completion.",
      icon: MdDesignServices,
      benefits: [
        "Single point of responsibility",
        "Reduced project timeline",
        "Cost savings through efficiency",
        "Collaborative approach to problem-solving"
      ],
      image: "/src/Assets/blueprint/blueprint_1.png"
    },
    {
      id: 6,
      title: "Sustainable Building",
      description: "We're committed to environmentally responsible construction practices. Our sustainable building services incorporate energy-efficient designs, eco-friendly materials, and renewable energy solutions to reduce environmental impact and operating costs.",
      icon: MdEco,
      benefits: [
        "Reduced energy consumption and costs",
        "Healthier indoor environment",
        "Smaller environmental footprint",
        "Potential tax incentives and rebates"
      ],
      image: "/src/Assets/villa2.jpg"
    },
    {
      id: 7,
      title: "Architectural Services",
      description: "Our architectural team creates innovative, functional, and aesthetically pleasing designs that align with your vision and requirements. We handle everything from initial concept sketches to detailed construction documents.",
      icon: MdArchitecture,
      benefits: [
        "Creative and functional designs",
        "3D visualization of projects",
        "Regulatory compliance expertise",
        "Integration with construction process"
      ],
      image: "/src/Assets/blueprint/blueprint_2.png"
    },
    {
      id: 8,
      title: "Project Management",
      description: "Our experienced project managers oversee every aspect of your construction project, ensuring it stays on schedule, within budget, and meets quality standards. We handle coordination, communication, and problem-solving throughout the project lifecycle.",
      icon: MdEngineering,
      benefits: [
        "Detailed planning and scheduling",
        "Budget monitoring and control",
        "Quality assurance processes",
        "Regular progress updates"
      ],
      image: "/src/Assets/blueprint/project_3.png"
    },
    {
      id: 9,
      title: "Maintenance & Repairs",
      description: "We provide ongoing maintenance and repair services to keep your property in optimal condition. From minor repairs to major system overhauls, our team responds promptly and delivers quality workmanship.",
      icon: MdOutlineHandyman,
      benefits: [
        "Preventative maintenance programs",
        "Emergency repair services",
        "Experienced technicians",
        "Comprehensive service options"
      ],
      image: "/src/Assets/villa3.jpeg"
    }
  ];

  return (
    <div className="bg-lightGray">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(/src/Assets/heroSection.jpg)`,
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        
        <Container>
          <div className="relative h-full flex flex-col items-center justify-center text-center z-10">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-whitee text-5xl md:text-6xl font-bold mb-6"
            >
              Our <span className="text-primary">Services</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-1 bg-primary mb-6"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-whitee text-lg max-w-2xl"
            >
              Comprehensive construction services tailored to your needs
            </motion.p>
          </div>
        </Container>
      </div>

      {/* Services Section */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                    />
                    <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-32 h-32 bg-primary rounded-lg z-[-1]`}></div>
                  </div>
                </div>
                
                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                      <service.icon className="text-4xl text-primary" />
                    </div>
                    <h2 className="text-white text-3xl font-bold">{service.title}</h2>
                  </div>
                  
                  <div className="w-20 h-1 bg-primary mb-6"></div>
                  
                  <p className="text-gray mb-8">
                    {service.description}
                  </p>
                  
                  <h3 className="text-white text-xl font-bold mb-4">Benefits</h3>
                  <ul className="space-y-2 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-gray">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="bg-primary text-whitee px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                    Request Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-whitee">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-primary text-lg font-medium mb-2">HOW WE WORK</h2>
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">Our Process</h3>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray max-w-2xl mx-auto">
              We follow a structured approach to ensure your project is completed efficiently and to your satisfaction
            </p>
          </motion.div>
          
          <div className="relative">
  {/* Vertical line */}
  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/30 transform -translate-x-1/2"></div>

  <div className="space-y-24">
    {[
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "We meet to discuss your vision, requirements, and budget. This helps us understand your needs and expectations.",
      },
      {
        step: 2,
        title: "Design & Planning",
        description:
          "Our team creates detailed designs and plans based on your input. We work collaboratively to refine the concept until you're completely satisfied.",
      },
      {
        step: 3,
        title: "Proposal & Contract",
        description:
          "We provide a comprehensive proposal including timeline, costs, and specifications. Once approved, we formalize the agreement with a contract.",
      },
      {
        step: 4,
        title: "Construction",
        description:
          "Our skilled team executes the project according to the approved plans, maintaining regular communication throughout the process.",
      },
      {
        step: 5,
        title: "Quality Assurance",
        description:
          "We conduct thorough inspections to ensure all work meets our high standards and your expectations.",
      },
      {
        step: 6,
        title: "Project Completion",
        description:
          "We finalize all details, conduct a walkthrough with you, and ensure your complete satisfaction before handover.",
      },
    ].map((item, index) => {
      const isEven = index % 2 === 0;
      return (
        <motion.div
          key={item.step}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex flex-col md:flex-row items-center"
        >
          {/* Left content */}
          <div
            className={`md:w-1/2 px-4 md:px-8 ${
              isEven ? "md:text-right" : "md:text-left"
            }`}
          >
            {isEven && (
              <>
                <h4 className="text-white text-2xl font-bold mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400">{item.description}</p>
              </>
            )}
          </div>

          {/* Circle in center */}
          <div className="absolute md:static left-1/2 transform -translate-x-1/2 md:translate-x-0 md:mx-4 bg-primary w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg z-10 shadow-lg">
            {item.step}
          </div>

          {/* Right content */}
          <div
            className={`md:w-1/2 px-4 md:px-8 ${
              !isEven ? "md:text-left" : "md:text-right"
            }`}
          >
            {!isEven && (
              <>
                <h4 className="text-white text-2xl font-bold mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400">{item.description}</p>
              </>
            )}
          </div>
        </motion.div>
      );
    })}
  </div>
</div>;

        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-primary text-lg font-medium mb-2">QUESTIONS & ANSWERS</h2>
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h3>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray max-w-2xl mx-auto">
              Find answers to common questions about our services and process
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does a typical construction project take?",
                answer: "Project timelines vary based on size and complexity. A small renovation might take 2-4 weeks, while a custom home could take 6-12 months. During our initial consultation, we'll provide a detailed timeline specific to your project."
              },
              {
                question: "Do you handle permits and inspections?",
                answer: "Yes, we manage all necessary permits and coordinate required inspections as part of our comprehensive service. This ensures your project complies with all local building codes and regulations."
              },
              {
                question: "How do you handle changes during construction?",
                answer: "We use a formal change order process to document any modifications to the original plan. This includes detailing the change, associated costs, and any impact on the timeline. All changes must be approved before implementation."
              },
              {
                question: "What types of payment schedules do you offer?",
                answer: "We typically use a milestone-based payment schedule, with payments due at specific project stages. This might include an initial deposit, followed by payments at foundation completion, framing, etc., with a final payment upon project completion."
              },
              {
                question: "Do you offer warranties on your work?",
                answer: "Yes, we provide a 1-year workmanship warranty on all our projects. Additionally, many materials and products used come with manufacturer warranties, which we pass on to you."
              },
              {
                question: "How do you ensure quality control?",
                answer: "We maintain quality through regular inspections by our project managers, adherence to industry best practices, and using skilled tradespeople. We also conduct formal quality checks at key project milestones."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-whitee p-6 rounded-lg shadow-md"
              >
                <h4 className="text-white text-xl font-bold mb-4">{item.question}</h4>
                <p className="text-gray">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <Container>
          <div className="text-center">
            <h2 className="text-whitee text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-whitee/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and quote. Our team is ready to bring your vision to life.
            </p>
            <button className="bg-whitee text-primary px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-colors">
              Contact Us Now
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Services;