import React, {
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import "./style.scss";
import { useLocation } from "react-router";
// import { CustomCursor } from "../../CustomCursor/index.js"; 
import useWindowSize from "../../hooks/useWindowSize";

import Navbar from '../Navbar/Navbar'
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  const location = useLocation()
  //loading
  //Hook to grab window size
  const size = useWindowSize();
  //reference
  const scrollContainer = useRef(null);

  // Configs
  const data = useMemo(
    () => ({
      ease: 0.1,
      current: 0,
      previous: 0,
      rounded: 0,
    }),
    []
  );
  const skewScrolling = useCallback(() => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container
    if(scrollContainer){
      scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
      // scrollContainer.current.style.webkitFilter = `grayscale(${skew * 20}%)`;
    }

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  }, [size.width, data]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, [skewScrolling]);
  useEffect(() => {
    setBodyHeight();
  }, [size.height,location.pathname]);

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };
    return (
      <div className="layout-wrapper">
        {/* <CustomCursor /> */}
        <div className="layout-inner" ref={scrollContainer}>
          <Navbar />
          {children}
          <Footer/>
        </div>
      </div>
    );
};

export default Layout;
