import { useState, useEffect } from "react";
import "./style.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import image from "./3.jpg";

import "intersection-observer";
import ViewportObserver from "viewport-observer";

import useWindowSize from "../../hooks/useWindowSize";

import { motion } from "framer-motion";
import { slides } from "./data.js";

const Splider = () => {
  const [isMobile, setIsMobile] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size.width]);

  return (
    <div className="splider-wrapper">
      <Splide
        className="container"
        options={{
          type: "loop",
          autoplay: true,
          perPage: isMobile ? 2 : 3,
        }}
      >
        {slides.map((item, key) => (
          <SplideSlide>
            <img alt="splider 1" src={item.img} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Splider;
