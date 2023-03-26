import { motion } from "framer-motion";

export const Toast = () => {
  return (
    <motion.div
      key="send-email-toast"
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 30, opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      className="toast-container"
    >
      <h5>your message has been sent</h5>
      <p>Let&apos;s build something great together !</p>
    </motion.div>
  );
};
