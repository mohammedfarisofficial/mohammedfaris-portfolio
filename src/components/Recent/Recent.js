import { useState } from "react";
import "./style.scss";
import { ReactComponent as RightIcon } from "../../assets/icons/right.svg";
import "intersection-observer";
import ViewportObserver from "viewport-observer";
import { motion } from "framer-motion";
import recentData from "./data";
const Recent = () => {
  const [play, setPlay] = useState(false);
  const colImg = {
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.3,
      },
    },
    hide: {
      scale: 0.9,
      opacity: 0,
    },
  };

  return (
    <ViewportObserver onEnter={() => setPlay(true)}>
      <div className="recent-works-wrapper">
        <div className="recent-works-inner">
          {recentData.map((item, key) => (
            <motion.div
              variants={colImg}
              animate={play ? "show" : "hide"}
              initial="hide"
              className="col"
            >
              <div className="overlay"></div>
              <div className="recent-image-container">
                <img src={item.img} alt="" />
              </div>
              <div className="recent-text-container">
                <div className="text-container">
                  <motion.p
                    animate={{ x: play ? 0 : 50, opacity: play ? 1 : 0 }}

                  >
                    {item.subtitle}
                  </motion.p>
                  <motion.h3
                    animate={{
                      x: play ? 0 : 50,
                      opacity: play ? 1 : 0,
                    }}
                  >
                    {item.title}
                  </motion.h3>
                </div>
                <div className="botton-container">
                  <div className="botton-inner">
                    <RightIcon id="right-icon" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ViewportObserver>
  );
};

export default Recent;
