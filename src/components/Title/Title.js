import { useState } from "react";
import "./style.scss";

import ViewportObserver from "viewport-observer";
import { motion } from 'framer-motion'
const Title = () => {
  const [lookAt, setLookAt] = useState(false);

  //framer motion
  const caseTextVariants = {
    show: (delay) => ({
      y: 0,
      skewY: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: delay * 0.2,
      },
    }),
    hide: {
      opacity: 0,
      y: 40,
      skewY: 2,
    },
  };
  return (
    <div className="gigi-case-text">
      <motion.h2
        variants={caseTextVariants}
        animate={lookAt ? "show" : "hide"}
        initial="hide"
        custom={1}
      >
        UI / UX PATTERN
      </motion.h2>
      <motion.h2
        variants={caseTextVariants}
        animate={lookAt ? "show" : "hide"}
        initial="hide"
        custom={2}
      >
        LOOK AT
      </motion.h2>
      <ViewportObserver onEnter={() => setLookAt(true)}>
        <motion.h3
          variants={caseTextVariants}
          animate={lookAt ? "show" : "hide"}
          initial="hide"
          custom={3}
        >
          User Interface is most importent part of every website also the User
          Experiance.
        </motion.h3>
      </ViewportObserver>
    </div>
  );
};

export default Title;
