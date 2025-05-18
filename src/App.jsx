import { Route, Routes } from "react-router-dom";
import { 
  About, 
  Contact, 
  Home, 
  NotFound, 
  Projects, 
  Single, 
  Testimonials,
  ProjectShowcase,
  ProjectDetail,
  Services,
  Blog
} from "./pages";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-showcase" element={<ProjectShowcase />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path={"projects/:id"} element={<Single />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
