import { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import CompanyIntro from "../components/home/CompanyIntro";
import FeaturedProjects from "../components/home/FeaturedProjects";
import ServicesOverview from "../components/home/ServicesOverview";
import AwardsSection from "../components/home/AwardsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import RequestCallback from "../components/RequestCallback";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with eye-catching visuals and clear tagline */}
      <HeroSection />
      
      {/* Divider */}
      <div className="relative h-24 bg-whitee">
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            className="relative block w-full h-12"
            style={{ fill: '#F8F9FA' }}
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Company Introduction Section */}
      <CompanyIntro />
      
      {/* Featured Projects Section */}
      <FeaturedProjects />
      
      {/* Services Overview Section */}
      <ServicesOverview />
      
      {/* Awards and Recognition Section */}
      <AwardsSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Call to Action Section */}
      <RequestCallback />
    </div>
  );
}

export default Home;

