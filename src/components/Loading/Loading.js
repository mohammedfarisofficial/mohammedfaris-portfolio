import "./style.scss";
import { motion, AnimatePresence } from "framer-motion";
const Loading = () => {
  return (
    <AnimatePresence>
      <motion.div className="loading-wrapper">
        <h2>loading</h2>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;
