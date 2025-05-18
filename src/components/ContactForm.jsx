import { useState } from "react";
import { formData } from "../data/data";
import Container from "./Container";
import Button from "./Button";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdPerson } from "react-icons/md";

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
  error: "",
  submit: "",
};

function ContactForm() {
  const [values, setValues] = useState(initialState);
  const { firstName, lastName, phone, email, error, submit } = values;
  const [focused, setFocused] = useState(null);

  // Function to handle input changes and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone || !email) {
      setValues({ ...values, error: "Please fill all required fields." });
      return;
    } else {
      setValues({
        ...initialState,
        submit: "Your request has been successfully sent. We'll contact you shortly.",
      });
      setTimeout(() => {
        setValues({ ...initialState });
      }, 5000);
    }
  };

  return (
    <div className="relative top-[-100px]">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-lightGray sm:p-[40px] p-[20px] rounded-lg shadow-xl"
        >
          <div className="mb-8">
            <h1 className="sm:text-4xl text-2xl uppercase font-bold text-white">
              Request A <span className="text-primary">Callback</span>
            </h1>
            <div className="w-20 h-1 bg-primary mt-4 mb-4"></div>
            <p className="text-gray mt-[10px] sm:text-base text-sm">
              Submit your contact information and any questions you have in mind
              and we will happily assist you.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray transition-all duration-300 ${focused === 'firstName' || firstName ? 'text-primary' : ''}`}>
                  <MdPerson />
                </div>
                <input
                  className="w-full bg-whitee border-l-4 border-transparent focus:border-primary outline-none p-3 pl-10 rounded transition-all duration-300 placeholder:text-gray/70"
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={values.firstName}
                  onChange={handleInputChange}
                  onFocus={() => setFocused('firstName')}
                  onBlur={() => setFocused(null)}
                  required
                />
              </div>
              
              <div className="relative">
                <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray transition-all duration-300 ${focused === 'lastName' || lastName ? 'text-primary' : ''}`}>
                  <MdPerson />
                </div>
                <input
                  className="w-full bg-whitee border-l-4 border-transparent focus:border-primary outline-none p-3 pl-10 rounded transition-all duration-300 placeholder:text-gray/70"
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={values.lastName}
                  onChange={handleInputChange}
                  onFocus={() => setFocused('lastName')}
                  onBlur={() => setFocused(null)}
                  required
                />
              </div>
              
              <div className="relative">
                <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray transition-all duration-300 ${focused === 'phone' || phone ? 'text-primary' : ''}`}>
                  <MdPhone />
                </div>
                <input
                  className="w-full bg-whitee border-l-4 border-transparent focus:border-primary outline-none p-3 pl-10 rounded transition-all duration-300 placeholder:text-gray/70"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={values.phone}
                  onChange={handleInputChange}
                  onFocus={() => setFocused('phone')}
                  onBlur={() => setFocused(null)}
                  required
                />
              </div>
              
              <div className="relative">
                <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray transition-all duration-300 ${focused === 'email' || email ? 'text-primary' : ''}`}>
                  <MdEmail />
                </div>
                <input
                  className="w-full bg-whitee border-l-4 border-transparent focus:border-primary outline-none p-3 pl-10 rounded transition-all duration-300 placeholder:text-gray/70"
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={values.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  required
                />
              </div>
            </div>

            <div className="relative">
              <textarea
                className="w-full bg-whitee border-l-4 border-transparent focus:border-primary outline-none p-4 rounded transition-all duration-300 placeholder:text-gray/70 resize-none h-[150px]"
                placeholder="Your Message"
                name="message"
                value={values.message}
                onChange={handleInputChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button type="submit">Submit Request</Button>
              </motion.div>
              
              <div>
                {error && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 font-medium"
                  >
                    {error}
                  </motion.p>
                )}
                {submit && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-primary font-medium"
                  >
                    {submit}
                  </motion.p>
                )}
              </div>
            </div>
          </form>
        </motion.div>
      </Container>
    </div>
  );
}

export default ContactForm;
