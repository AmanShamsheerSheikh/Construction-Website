import { motion } from "framer-motion";
import Container from "../Container";
import { FaTrophy, FaMedal, FaAward, FaCertificate } from "react-icons/fa";

function AwardsSection() {
  const awards = [
    {
      id: 1,
      title: "Best Construction Company",
      organization: "Egypt Building Excellence Awards",
      year: "2023",
      icon: FaTrophy
    },
    {
      id: 2,
      title: "Sustainable Building Award",
      organization: "Green Building Council",
      year: "2022",
      icon: FaMedal
    },
    {
      id: 3,
      title: "Customer Satisfaction Excellence",
      organization: "Construction Industry Association",
      year: "2023",
      icon: FaAward
    },
    {
      id: 4,
      title: "Safety Excellence Certificate",
      organization: "National Safety Council",
      year: "2022",
      icon: FaCertificate
    }
  ];

  return (
    <section className="py-16 bg-white text-whitee" style={{ background: 'linear-gradient(rgba(46, 58, 71, 0.95), rgba(46, 58, 71, 0.95)), url(/src/Assets/heroSection.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-primary text-lg font-medium mb-2">RECOGNITION</h2>
          <h3 className="text-whitee text-3xl md:text-4xl font-bold mb-6">Awards & Achievements</h3>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-whitee/80 max-w-2xl mx-auto">
            Our commitment to excellence has been recognized with numerous industry awards and certifications
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            
            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-3xl text-primary" />
                </div>
                
                <h4 className="text-whitee text-xl font-bold mb-2">{award.title}</h4>
                <p className="text-whitee/70 text-sm mb-2">{award.organization}</p>
                <p className="text-primary font-medium">{award.year}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default AwardsSection;