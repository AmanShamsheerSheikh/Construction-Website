import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "../components/Container";
import { Link } from "react-router-dom";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState("all");
  
  const blogPosts = [
    {
      id: 1,
      title: "5 Trends Shaping Modern Residential Construction",
      excerpt: "Discover the latest trends in residential construction that are transforming how we build and live in homes today.",
      category: "residential",
      date: "June 15, 2023",
      author: "Ahmed Hassan",
      image: "/src/Assets/villa1.jpg",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Sustainable Building Practices for a Greener Future",
      excerpt: "Learn how sustainable building practices are reducing environmental impact while creating healthier, more efficient spaces.",
      category: "sustainability",
      date: "July 22, 2023",
      author: "Laila Ibrahim",
      image: "/src/Assets/villa2.jpg",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Commercial Construction: Balancing Aesthetics and Functionality",
      excerpt: "Explore how modern commercial buildings are designed to be both visually appealing and highly functional for businesses.",
      category: "commercial",
      date: "August 10, 2023",
      author: "Mohamed Ali",
      image: "/src/Assets/commercial-1.jpg",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Benefits of Design-Build Construction",
      excerpt: "Understand why more clients are choosing the design-build approach for streamlined project delivery and better results.",
      category: "design",
      date: "September 5, 2023",
      author: "Sarah Ahmed",
      image: "/src/Assets/blueprint/blueprint_1.png",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "How to Choose the Right Construction Company",
      excerpt: "Essential factors to consider when selecting a construction company for your next building project.",
      category: "tips",
      date: "October 18, 2023",
      author: "Ahmed Hassan",
      image: "/src/Assets/office-1.jpg",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Building Safety: Construction Standards and Compliance",
      excerpt: "An overview of building safety standards and why compliance is crucial for every construction project.",
      category: "safety",
      date: "November 3, 2023",
      author: "Laila Ibrahim",
      image: "/src/Assets/villa3.jpeg",
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "Renovation vs. New Construction: Making the Right Choice",
      excerpt: "Factors to consider when deciding between renovating an existing structure or building new from the ground up.",
      category: "residential",
      date: "December 12, 2023",
      author: "Mohamed Ali",
      image: "/src/Assets/villa4.jpeg",
      readTime: "5 min read"
    },
    {
      id: 8,
      title: "Technology Innovations Transforming the Construction Industry",
      excerpt: "Explore how new technologies like BIM, drones, and AI are revolutionizing construction processes and outcomes.",
      category: "technology",
      date: "January 25, 2024",
      author: "Sarah Ahmed",
      image: "/src/Assets/blueprint/blueprint_2.png",
      readTime: "7 min read"
    }
  ];

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "sustainability", name: "Sustainability" },
    { id: "design", name: "Design" },
    { id: "technology", name: "Technology" },
    { id: "tips", name: "Tips & Advice" },
    { id: "safety", name: "Safety" }
  ];

  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

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
              Our <span className="text-primary">Blog</span>
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
              Insights, news, and expertise from the construction industry
            </motion.p>
          </div>
        </Container>
      </div>

      {/* Blog Content */}
      <section className="py-16">
        <Container>
          {/* Category Filter */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-4 min-w-max pb-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeCategory === category.id 
                      ? "bg-primary text-whitee" 
                      : "bg-whitee text-gray hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-whitee rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-whitee px-3 py-1 rounded-full text-xs font-medium">
                    {categories.find(cat => cat.id === post.category)?.name || post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray text-sm mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-white text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray mb-6 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {post.author.split(' ').map(name => name[0]).join('')}
                      </div>
                      <span className="ml-2 text-gray text-sm">{post.author}</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-primary font-medium hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full bg-primary text-whitee flex items-center justify-center">
                1
              </button>
              <button className="w-10 h-10 rounded-full bg-whitee text-gray hover:bg-gray-200 flex items-center justify-center">
                2
              </button>
              <button className="w-10 h-10 rounded-full bg-whitee text-gray hover:bg-gray-200 flex items-center justify-center">
                3
              </button>
              <button className="w-10 h-10 rounded-full bg-whitee text-gray hover:bg-gray-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-whitee text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-whitee/80 mb-8">
              Stay updated with the latest industry news, trends, and insights delivered straight to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-6 py-3 rounded-lg focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-whitee/60 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Blog;