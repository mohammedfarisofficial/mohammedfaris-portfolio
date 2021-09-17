import { useState , useEffect } from "react";
import "./style.scss";
import image from "../../assets/home-images/1.jpg";
import { useRef } from "react";
// import useTransform  from "../../hooks/useTransform";
const Slider = () => {
  const [ isAnimating, setAnimate ] = useState(false)

  useEffect(() => {
    console.log(isAnimating);
  }, [isAnimating])

  const sliderRef = useRef(null);
  const boxRef = useRef(null);

  function getTranslateValues(element) {
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
  }
  let click = 0;
  let maxTransfrom = 7165.44;


  const nextSlideHandler = () => {
    const { x } = getTranslateValues(sliderRef.current);
    if(parseInt(x) !== -(900*5)){
      click++;
      const transfromForw = click * 900;
      sliderRef.current.style.transform = `translateX(${-transfromForw}px)`;
    }
  };

  const prevSlideHandler = () => {
    const { x } = getTranslateValues(sliderRef.current);
    if (parseInt(x) !== 0) {
      click--;
      let transformBack = parseInt(x) + 900;
      sliderRef.current.style.transform = `translateX(${transformBack}px)`;
    }
  };
  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        <button onClick={prevSlideHandler}>prev slide</button>
        <button onClick={nextSlideHandler}>next slide</button>
        <div className="slider-inner" ref={sliderRef}>
          {/* <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img>
                    <img src={image} className="box"></img> */}
          <div ref={boxRef} className="box">
            box1
          </div>
          <div className="box">box2</div>
          <div className="box">BOX3</div>
          <div className="box">BOX4</div>
          <div className="box">BOX5</div>
          <div className="box">BOX6</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
