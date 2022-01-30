import { useState } from "react";
import "./style.scss";
import Recent from "../../Recent/Recent";
import { motion } from "framer-motion";
// observers
import "intersection-observer";
import ViewportObserver from "viewport-observer";
//data
import image from '../../../assets/home-images/4.jpg'
const Home = () => {
  //reveal state
  const [experi, setExperi] = useState(false);

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
  return (
    <div className="home-wrapper">
      <div className="home-hero">
        <div className="hero-text-container">
          <h3>Hey there.My name is <br/><span>Mohammd Faris</span>.I am a <span>IN</span><br/> based developer.I seek to create<br/> projects that break the limits <br/>between technology and <span>visual<br/> design</span> by creating <span>aesthetic,<br/> memorable</span> and <span>unique digital</span><br/> experiences.</h3>
          <h3>To nourish my passion and <br/>create projects that engage and<br/> <span>resonate</span> with the <span>audience</span>, I <br/>pair <span>together</span> with <span>remarkable<br/> designers</span>.</h3>
          <h3>My desire to <span>expose</span> the <span>artistic</span><br/> and <span>creative</span> side of the <span>industry</span><br/> pushes my enormous passion for<br/> <span>experimenting</span> with <br/><span>mathematics, coding</span>, &#38; <span>ui</span>.</h3>
        </div>
        <div className="hero-image-container">
          <img src={image}  />
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
        <Recent />
      </div>
    </div>
  );
};

export default Home;