import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.scss";
import image1 from "../../../assets/gig-hadid-images/image1.jpg";
import image2 from "../../../assets/gig-hadid-images/image2.jpg";

//intersection observer
import "intersection-observer";
import ViewportObserver from "viewport-observer";
import HeroUi from "../../LandingUi/HeroUi";
import ViewSite from "../../Viewsite/ViewSite";

const GigiHadid = () => {
  //look at reveal 
  const [textReveal, setTextReveal] = useState({
    about : false,
    GotoSite : false
  });
  // useEffect(() => {
    
  // }, [textReveal])
  // theme 
  const [ lightMode, setLightMode ] = useState(false)
  //framer motion 

  //hero text
  const gigiText = ["# model", "gigi hadid's", "porfolio"];
  const HeroTextVariants = {
    show: (index) => ({
      y: 0,
      skewY: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: index * 0.2,
      },
    }),
    hide: {
      opacity: 0,
      y: 40,
      skewY: 2,
    },
  };
  //case animation 
  const caseTextVariants = {
    show : delay => ({
      y: 0,
      skewY: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay : delay * 0.2
      }
    }),
    hide : {
      opacity: 0,
      y: 40,
      skewY: 2,
    }
  }
  return (
    <div style={{ backgroundColor : lightMode ? 'white' : 'black'}} className="gigi-wrapper">
      <div className="gigi-hero-text">
        <h2>
          {gigiText.map((text, index) => (
            <motion.div
              variants={HeroTextVariants}
              animate="show"
              initial="hide"
              key={index}
              custom={index}
            >
              {text}
            </motion.div>
          ))}
        </h2>
      </div>
      <div className="gigi-hero-image">
        <img src={image1} alt="gigi hadid graphic art" />
      </div>
      <ViewportObserver onEnter={ ()=> setLightMode(true)} onLeave={()=> setLightMode(false)}>
      <div className="gigi-about">
        <div className="gigi-about-title">
          <h2>who is gigi hadid ?</h2>
        </div>
        <div className="gigi-about-content">
          <div className="gigi-about-content-text">
            <div className="gigi-about-text-container">
              <h3>
                JELENA NOURA HADID IS AN AMERICAN MODEL. IN NOVEMBER 2014, SHE
                MADE HER DEBUT IN THE TOP 50 MODELS RANKING AT{" "}
                <Link to="gigiModels">
                  <span>MODELS.COM</span>
                </Link>
                . IN 2016, SHE WAS NAMED INTERNATIONAL MODEL OF THE YEAR BY THE
                BRITISH FASHION COUNCIL.
              </h3>
            </div>
            <motion.div className="gigi-about-reveal">
              <motion.div
                animate={{ width: lightMode ? 0 : '100%' }}
                initial={{ width: 0 }}
                transition={{ duration: 1 }}
              ></motion.div>
              <motion.div
                animate={{ width: lightMode ? 0 : '100%' }}
                initial={{ width: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              ></motion.div>
              <motion.div
                animate={{ width: lightMode ? 0 : '100%' }}
                initial={{ width: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              ></motion.div>
              <motion.div
                animate={{ width: lightMode ? 0 : '100%' }}
                initial={{ width: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              ></motion.div>
            </motion.div>
          </div>
          <div className="gigi-about-content-image">
              <div className="gigi-about-content-image-inner">
                <img src={image2} alt="gigi model shot" />
              </div>
          </div>
        </div>
      </div>
      <div className="gigi-nick">
        <div className="gigi-nick-text">
          <h2>-Gigi, Squeegee ,Hazel Blue Green Girl-</h2>
        </div>
      </div>
      <div className="gigi-case">
        <div className="gigi-case-text">
        
        <motion.h2 variants={caseTextVariants} animate={ lightMode ? 'show' : 'hide' } initial='hide' custom={1}>UI / UX PATTERN</motion.h2>
          <motion.h2 variants={caseTextVariants} animate={ lightMode ? 'show' : 'hide' } initial='hide' custom={2}>LOOK AT</motion.h2>
          <ViewportObserver>
            <motion.h3 variants={caseTextVariants} animate={ lightMode ? 'show' : 'hide' } initial='hide' custom={3} > 
              User Interface is most importent part of every website also the User
              Experiance.
            </motion.h3>
          </ViewportObserver>
        </div>
        <HeroUi/>
        <HeroUi/>
        <ViewSite/>
      </div>
       </ViewportObserver>       
    </div>
  );
};

export default GigiHadid;
