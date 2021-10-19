import { useState, useEffect, useCallback } from "react";
import "./style.scss";
import image from "../../assets/home-images/3.jpg";
import { useRef } from "react";
// import useTransform  from "../../hooks/useTransform";
//hook
import useWindowSize from "../../hooks/useWindowSize";

const Slider = () => {
  const [isAnimate, setAnimate] = useState(false);
  const [click, setClick] = useState(1);
  const [boxSize, setBoxSize] = useState(300);

  const sliderRef = useRef(null);
  const boxRef = useRef(null);

  const size = useWindowSize();

  const getTranslateValues = (element) => {
    const style = window.getComputedStyle(element);

    const matrix =
      style["transform"] || style.webkitTransform || style.mozTransform;

    // No transform property. Simply return 0 values.
    if (matrix === "none" || typeof matrix === "undefined") {
      return {
        x: 0,
        y: 0,
        z: 0,
      };
    }
    // Can either be 2d or 3d transform
    const matrixType = matrix.includes("3d") ? "3d" : "2d";
    const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(", ");

    // 2d matrices have 6 values
    // Last 2 values are X and Y.
    // 2d matrices does not have Z value.
    if (matrixType === "2d") {
      return {
        x: matrixValues[4],
        y: matrixValues[5],
        z: 0,
      };
    }

    // 3d matrices have 16 values
    // The 13th, 14th, and 15th values are X, Y, and Z
    if (matrixType === "3d") {
      return {
        x: matrixValues[12],
        y: matrixValues[13],
        z: matrixValues[14],
      };
    }
  };

  const nextSlideHandler = useCallback(
    (e) => {
      // let rect = sliderRef.current.getBoundingClientRect();

      // let position = {
      //   top: rect.top + window.pageYOffset,
      //   left: rect.left + window.pageXOffset,
      // };
      // console.log(position);
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 2000);
      const { x } = getTranslateValues(sliderRef.current);
      if (parseInt(x) !== -(boxSize * 5)) {
        if (!isAnimate) {
          setClick(click + 1);
          const transfromForw = click * boxSize;
          sliderRef.current.style.transform = `translateX(${-transfromForw}px)`;
        }
      }
    },
    [click, boxSize, isAnimate]
  );
  useEffect(() => {
    nextSlideHandler();
    setBoxSize(boxRef.current.clientWidth);
  }, [size, boxSize]);

  const prevSlideHandler = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
    const { x } = getTranslateValues(sliderRef.current);
    if (parseInt(x) !== 0) {
      if (!isAnimate) {
        setClick(click - 1);
        let transformBack = parseInt(x) + boxSize;
        sliderRef.current.style.transform = `translateX(${transformBack}px)`;
      }
    }
  };
  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        <div className="button-container">
          <button
            disabled={isAnimate ? true : false}
            onClick={prevSlideHandler}
          >
            prev slide
          </button>
          <button
            disabled={isAnimate ? true : false}
            onClick={nextSlideHandler}
          >
            next slide
          </button>
        </div>
        <div className="slider-inner" ref={sliderRef}>
          <div className="image-container">
            <img alt="" src={image} ref={boxRef} />
          </div>
          <div className="image-container">
            <img alt="" src={image} ref={boxRef} />
          </div>
          <div className="image-container">
            <img alt="" src={image} ref={boxRef} />
          </div>
          <div className="image-container">
            <img alt="" src={image} ref={boxRef} />
          </div>
          <div className="image-container">
            <img alt="" src={image} ref={boxRef} />
          </div>
          <div className="image-container">
            <img alt="" src={image} ref={boxRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
