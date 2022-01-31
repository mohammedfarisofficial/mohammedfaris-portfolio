import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Recent from "../../Recent/Recent";
import { motion } from "framer-motion";
// observers
import "intersection-observer";
import ViewportObserver from "viewport-observer";
//data
import image from "../../../assets/home-images/4.jpg";
import { ReactComponent as RightIcon } from "../../../assets/icons/find.svg";
const Home = () => {
  //reveal state
  const [experi, setExperi] = useState(false);
  const [find, setFind] = useState(false);
  const [line1, setLine1] = useState(false);
  const [line2, setLine2] = useState(false);
  const [line3, setLine3] = useState(false);

  useEffect(() => {
    console.log(find);
  }, [find]);

  // framer motion
  const HeroText = {
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
  const hideToShow = {
    show: {
      y: 0,
      skewY: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hide: {
      opacity: 0,
      y: 50,
      skewY: 2,
    },
  };
  return (
    <div className="home-wrapper">
      <div className="home-hero">
        <div className="hero-text-container">
          <div>
            <ViewportObserver onEnter={() => setLine1(true)}>
              <motion.h3
                animate={line1 ? "show" : "hide"}
                variants={hideToShow}
                initial="hide"
              >
                Hey there.My name is <br />
                <span>Mohammd Faris</span>.I am a <span>IN</span>
                <br /> based developer.I seek to create
                <br /> projects that break the limits <br />
                between technology and{" "}
                <span>
                  visual
                  <br /> design
                </span>{" "}
                by creating{" "}
                <span>
                  aesthetic,
                  <br /> memorable
                </span>{" "}
                and <span>unique digital</span>
                <br /> experiences.
              </motion.h3>
            </ViewportObserver>
          </div>
          <div>
            <ViewportObserver onEnter={() => setLine2(true)}>
              <motion.h3
                animate={line2 ? "show" : "hide"}
                variants={hideToShow}
                initial="hide"
              >
                To nourish my passion and <br />
                create projects that engage and
                <br /> <span>resonate</span> with the <span>audience</span>, I{" "}
                <br />
                pair <span>together</span> with{" "}
                <span>
                  remarkable
                  <br /> designers
                </span>
                .
              </motion.h3>
            </ViewportObserver>
          </div>
          <div>
            <ViewportObserver onEnter={() => setLine3(true)}>
              <motion.h3
                animate={line3 ? "show" : "hide"}
                variants={hideToShow}
                initial="hide"
              >
                My desire to <span>expose</span> the <span>artistic</span>
                <br /> and <span>creative</span> side of the{" "}
                <span>industry</span>
                <br /> pushes my enormous passion for
                <br /> <span>experimenting</span> with <br />
                <span>mathematics, coding</span>, &#38; <span>ui</span> .
              </motion.h3>
            </ViewportObserver>
          </div>
        </div>
        <div className="hero-image-container">
          <div>
            <div className="find-me">
              <ViewportObserver onEnter={() => setFind(true)}>
                <motion.h3
                  initial="hide"
                  variants={hideToShow}
                  animate={find ? "show" : "hide"}
                >
                  Find me on <span>Github </span>{" "}
                  <RightIcon className="find-me-icon" />
                </motion.h3>
              </ViewportObserver>
            </div>
            <img src={image} />
          </div>
        </div>
      </div>
      <div className="home-featured">
        <ViewportObserver onEnter={() => setExperi(true)}>
          <div className="featured-title">
            <motion.h2
              variants={HeroText}
              animate={experi ? "show" : "hide"}
              initial="hide"
              custom="3"
            >
              Discover More
            </motion.h2>
            <motion.h3
              variants={HeroText}
              animate={experi ? "show" : "hide"}
              initial="hide"
              custom="3.5"
            >
              recent Experiments
            </motion.h3>
          </div>
        </ViewportObserver>
        <Recent dark={true} />
      </div>
    </div>
  );
};

export default Home;
