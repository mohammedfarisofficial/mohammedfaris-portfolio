import { useState } from "react";
import "./style.scss";
import image from "../../../assets/home-images/1.jpg";
import image2 from "../../../assets/home-images/2.jpg";
import image3 from "../../../assets/home-images/3.jpg";

// import Slider from "../../Slider/Slider";
import { motion } from "framer-motion";
// observers
import "intersection-observer";
import ViewportObserver from "viewport-observer";

import Splider from "../../Splide/Splider";

const Home = () => {
  //reveal state
  const [ gallery , setGallery ] = useState(false)
  const [ experi , setExperi] = useState(false)

  // framer motion
  const HeroText = {
    show: (delay) => ({
      y: 0,
      skewY: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay * 0.2,
      },
    }),
    hide: {
      opacity: 0,
      y: 40,
      skewY: 2,
    },
  };
  const imageMotion = {
    show: (delay) => ({
      opacity: 1,
      blur: 0,
      transition: {
        duration: 0.2,
        delay: delay * 0.2,
      },
    }),
    hide: {
      opacity: 0,
      blur: "20px",
    },
  };
  return (
    <div className="home-wrapper">
      <div className="home-hero">
        <div className="hero-heading">
          <motion.h2>
            <motion.div
              variants={HeroText}
              animate="show"
              initial="hide"
              custom="1"
            >
              I’m Mohammed Faris ,a creative
            </motion.div>
            <motion.div
              variants={HeroText}
              animate="show"
              initial="hide"
              custom="1.4"
            >
              developer based in india.Specialized on
            </motion.div>
            <motion.div
              variants={HeroText}
              animate="show"
              initial="hide"
              custom="1.8"
            >
              creating awesome experiences on
            </motion.div>
            <motion.div
              variants={HeroText}
              animate="show"
              initial="hide"
              custom="2.2"
            >
              web and mobile devices.
            </motion.div>
          </motion.h2>
        </div>
        <div className="hero-subheading">
          <p>
            <motion.div
              variants={HeroText}
              animate="show"
              initial="hide"
              custom="2.6"
            >
              I am specialized in designing meaningfull and intuitives
              interfaces for web and mobile devices,
            </motion.div>
            <motion.div
              variants={HeroText}
              animate="show"
              initial="hide"
              custom="3"
            >
              I previously worked in several freelancing works and i am now
              looking for my next adventure.
            </motion.div>
          </p>
        </div>
        <motion.div
          variants={HeroText}
          animate="show"
          initial="hide"
          custom="1"
          className="hero-available"
        >
          <div className="beat-container">
            <img src={image} alt="mine" />
          </div>
          <h3>Currently available for freelance or part-time work</h3>
        </motion.div>
      </div>
      <div className="home-gallery">
        <div className="item item1">
          <motion.img
            variants={imageMotion}
            animate={gallery ? "show" : "hide"}
            initial="hide"
            custom="2"
            src={image2}
            alt="myself"
          />
        </div>
        <div className="item item2">
          <motion.img
            variants={imageMotion}
            animate={gallery ? "show" : "hide"}
            initial="hide"
            custom="3"
            src={image3}
            alt="for caption cover"
          />
        </div>
        <div className="item item3">
          <ViewportObserver onEnter={() => setGallery(true)}>
            <motion.p>
              <motion.div
                variants={HeroText}
                animate={gallery ? "show" : "hide"}
                initial="hide"
                custom="1"
              >
                hey there. my name is arlind.i am a munich-based developer.i
                seek to create{" "}
              </motion.div>
              <motion.div
                variants={HeroText}
                animate={gallery ? "show" : "hide"}
                initial="hide"
                custom="1.4"
              >
                projects that break the limits between technology and visual
                design by creating{" "}
              </motion.div>
              <motion.div
                variants={HeroText}
                animate={gallery ? "show" : "hide"}
                initial="hide"
                custom="1.8"
              >
                aesthetic, memorable and unique digital experiences.to nourish
                my passion and
              </motion.div>
              <motion.div
                variants={HeroText}
                animate={gallery ? "show" : "hide"}
                initial="hide"
                custom="2.2"
              >
                create projects that engage and resonate with the audience, i
                pair together with
              </motion.div>
              <motion.div
                variants={HeroText}
                animate={gallery ? "show" : "hide"}
                initial="hide"
                custom="2.6"
              >
                remarkable designers. my desire to expose the artistic and
                creative side of the{" "}
              </motion.div>
              <motion.div
                variants={HeroText}
                animate={gallery ? "show" : "hide"}
                initial="hide"
                custom="3"
              >
                industry pushes my enormous passion for experimenting with
                mathematics,{" "}
              </motion.div>
              <motion.div
                variants={HeroText}
                animate={gallery ? "show" : "hide"}
                initial="hide"
                custom="3.4"
              >
                coding, and ui.
              </motion.div>
            </motion.p>
          </ViewportObserver>
        </div>
      </div>
      <div className="home-featured">
        <ViewportObserver
          onEnter={() => setExperi(true)}
        >
          <div className="featured-title">
            <motion.h2
              variants={HeroText}
              animate={experi ? "show" : "hide"}
              initial="hide"
              custom="1"
            >
              RECENT EXPERIMENTS
            </motion.h2>
            <motion.p
              variants={HeroText}
              animate={experi ? "show" : "hide"}
              initial="hide"
              custom="1.4"
            >
              I 've been experimenting with my creative web for over a year now,
              Still continues.
            </motion.p>
          </div>
        </ViewportObserver>
        {/* <Slider /> */}
      <Splider/>
      </div>
    </div>
  );
};

export default Home;
