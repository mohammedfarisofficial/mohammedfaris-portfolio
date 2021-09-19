import { useState , useEffect } from "react";
import "./style.scss";
// import image from "../../assets/home-images/1.jpg";
import { useRef } from "react";
// import useTransform  from "../../hooks/useTransform";
//hook
import useWindowSize from "../../hooks/useWindowSize";

const Slider = () => {
  const [ isAnimate,setAnimate ] = useState(false)
  const [ click,setClick ] = useState(1)
  const [ boxSize,setBoxSize ] = useState(900)

  const sliderRef = useRef(null);
  const boxRef = useRef(null);

  const size = useWindowSize()

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

  useEffect(() => {
    const boxWidth = boxRef.current.clientWidth
    setBoxSize(boxWidth)
    console.log(boxSize);
  }, [])
  const nextSlideHandler = (e) => {
    setAnimate(true)
    setTimeout(()=>{
      setAnimate(false)
    },2000)
    const { x } = getTranslateValues(sliderRef.current);
    if(parseInt(x) !== -(boxSize*5)){
      if(!isAnimate){
        setClick(click+1)
        const transfromForw = click * boxSize;
        console.log(boxSize);
        sliderRef.current.style.transform = `translateX(${-transfromForw}px)`;
      }
    }
  };

  const prevSlideHandler = () => {
    setAnimate(true)
    setTimeout(()=>{
      setAnimate(false)
    },2000)
    const { x } = getTranslateValues(sliderRef.current);
    if (parseInt(x) !== 0) {
      if(!isAnimate){
        setClick(click-1)
        let transformBack = parseInt(x) + boxSize;
        sliderRef.current.style.transform = `translateX(${transformBack}px)`;
      }   
    }
  };
  return (
    <div className="slider-wrapper">
      <div className="slider-container" ref={boxRef}>
        <button disabled={ isAnimate ? true : false} onClick={prevSlideHandler}>prev slide</button>
        <button disabled={ isAnimate ? true : false} onClick={nextSlideHandler}>next slide</button>
        <div className="slider-inner" ref={sliderRef}>
          <div className="box">
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
