import "./style.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, memo, useEffect, useState } from "react";
const Loading = ({ time }) => {
  const progressRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [bar, setBar] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 1);
        setBar(bar + window.innerHeight / 100);
      }
    }, time / 100);
  }, [progress]);

  useEffect(() => {
    console.log("progress", progress);
    console.log(window.innerHeight / 2);
  }, [progress]);
  return (
    <motion.div
      className="loading-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="loading-container">
        <div className="loading-text">
          <p>{progress}</p>
        </div>
        <motion.div
          ref={progressRef}
          animate={{ width: `${bar}px` }}
          className="loading-progress"
        ></motion.div>
      </div>
      <div className="loading-text-container"></div>
      <div className="loading-version-container"></div>
    </motion.div>
  );
};

export default memo(Loading);
