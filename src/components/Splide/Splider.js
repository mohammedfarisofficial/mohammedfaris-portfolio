import { useState , useEffect } from "react";
import "./style.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import image from "./3.jpg";

import "intersection-observer";
import ViewportObserver from "viewport-observer";

import useWindowSize from "../../hooks/useWindowSize";

import { motion } from "framer-motion";

const Splider = () => {
  const [imgReveal, setImgReveal] = useState(false);
  const [isMobile, setIsMobile] = useState(false)
  const size = useWindowSize()

  useEffect(() => {
    if(size.width < 768){
      setIsMobile(true)
    }else{
      setIsMobile(false)
    }
  }, [size.width])
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

  return (
    <div className="splider-wrapper">
      <ViewportObserver onEnter={ ()=> setImgReveal(true)}>
        <Splide
          className="container"
          options={{
            type: "loop",
            autoplay: true,
            perPage: isMobile ? 2 : 3,
          }}
        >
          <SplideSlide>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: imgReveal ? 1 : 0 }}
              src={image}
              alt="splider 1"
            />
            <h3>three.js scroll slider</h3>
            <motion.p
              variants={HeroText}
              animate={imgReveal ? "show" : "hide"}
              initial="hide"
              custom="1.4"
            >
              this experiment is using three.js 
            </motion.p>
          </SplideSlide>
          <SplideSlide>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: imgReveal ? 1 : 0 }}
              src={image}
              alt="splider 2"
            />
            <h3>three.js scroll slider</h3>
            <p>three.js practice</p>
          </SplideSlide>
          <SplideSlide>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: imgReveal ? 1 : 0 }}
              src={image}
              alt="splider 2"
            />
            <h3>three.js scroll slider</h3>
            <p>three.js practice</p>
          </SplideSlide>
          <SplideSlide>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: imgReveal ? 1 : 0 }}
              src={image}
              alt="splider 2"
            />
            <h3>three.js scroll slider</h3>
            <p>three.js practice</p>
          </SplideSlide>
          <SplideSlide>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: imgReveal ? 1 : 0 }}
              src={image}
              alt="splider 2"
            />
            <h3>three.js scroll slider</h3>
            <p>three.js practice</p>
          </SplideSlide>
          <SplideSlide>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: imgReveal ? 1 : 0 }}
              src={image}
              alt="splider 2"
            />
            <h3>three.js scroll slider</h3>
            <p>three.js practice</p>
          </SplideSlide>
        </Splide>
      </ViewportObserver>
    </div>
  );
};

export default Splider;
