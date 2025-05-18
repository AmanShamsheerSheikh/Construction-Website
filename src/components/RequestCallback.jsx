import { MdLocalPhone, MdEmail, MdArrowForward } from "react-icons/md";
import Button from "./Button";
import Container from "./Container";
import { motion } from "framer-motion";

function RequestCallback() {
  return (
    <div className="py-[100px] bg-[#f8f9fa] text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-primary rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side with background image */}
            <div className="bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] 
              bg-cover bg-center p-12 relative hidden md:block">
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10">
                <h3 className="text-whitee text-3xl font-bold mb-6">Get in Touch</h3>
                <p className="text-whitee mb-8 max-w-xs">
                  We're here to answer any questions about our construction services
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <MdLocalPhone className="text-whitee text-xl" />
                    </div>
                    <span className="text-whitee">+20 1151747091</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <MdEmail className="text-whitee text-xl" />
                    </div>
                    <span className="text-whitee">info@nkconstruction.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side with form */}
            <div className="p-12">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl text-whitee font-bold mb-6">
                  Request a Callback
                </h2>
                <p className="text-whitee/90 mb-8">
                  Submit your contact information and we'll get back to you within 24 hours.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      className="bg-whitee/10 border border-whitee/20 rounded-lg p-4 text-whitee placeholder:text-whitee/60 focus:outline-none focus:ring-2 focus:ring-whitee/30"
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      className="bg-whitee/10 border border-whitee/20 rounded-lg p-4 text-whitee placeholder:text-whitee/60 focus:outline-none focus:ring-2 focus:ring-whitee/30"
                    />
                  </div>
                  
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="bg-whitee/10 border border-whitee/20 rounded-lg p-4 text-whitee placeholder:text-whitee/60 focus:outline-none focus:ring-2 focus:ring-whitee/30 w-full"
                  />
                  
                  <textarea 
                    placeholder="How can we help you?" 
                    rows="3"
                    className="bg-whitee/10 border border-whitee/20 rounded-lg p-4 text-whitee placeholder:text-whitee/60 focus:outline-none focus:ring-2 focus:ring-whitee/30 w-full"
                  ></textarea>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-whitee text-primary font-bold py-4 px-8 rounded-lg flex items-center gap-2 hover:bg-white/90 transition-colors"
                  >
                    Submit Request
                    <MdArrowForward />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default RequestCallback;
