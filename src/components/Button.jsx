import { MdOutlineArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";

function Button({ children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="main-btn text-white sm:py-[12px] sm:px-[35px] py-[10px] px-[25px] 
      border-[2px] border-whitee hover:bg-primary hover:border-primary hover:text-whitee
      text-sm font-medium flex items-center gap-[10px] rounded-md shadow-lg"
    >
      {children}

      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="arrow"
      >
        <MdOutlineArrowRightAlt className="text-xl" />
      </motion.div>
    </motion.button>
  );
}

export default Button;
