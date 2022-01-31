import { useState ,useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./style.scss";
// import image from '../../assets/gigi-website/1.png'
// import image2 from '../../assets/gigi-website/2.png'
import { motion } from "framer-motion";
//intersection obr
import ViewportObserver from "viewport-observer";

import reactIcon from "../../assets/icons/react.svg";
import gsapIcon from "../../assets/icons/gsap.svg";

import {designListGigi,techList2Gigi,designListEcommerce ,techListEcommerce} from './data.js'

const HeroUi = ({ design, desciption, image }) => {
  const [ dataList,setDataList] = useState([])
  const [ currentPage,setCurrentPage ] = useState('')
  const location = useLocation()

  useEffect(()=>{
    if(location.pathname === '/gigi-hadid'){
      setCurrentPage('gigi portfilio')
      if(design){
        setDataList(designListGigi)
      }else{
        setDataList(techList2Gigi)
      }
    }else if(location.pathname ==='/ecommerce'){
      setCurrentPage('django ecommerce')
      if(design){
        setDataList(designListEcommerce)
      }else{
        setDataList(techListEcommerce)
      }
    }else{

    }
  },[location.pathname])
  //reveal
  const [ imgReveal,setImgReveal] = useState(false)
  const [ txtReveal,setTxtReveal] = useState(false)
 

  // framer motion
  const textReveal = {
    show: (delay) => ({
      y: 0,
      skewY: 0,
      opacity :1,
      transition: {
        duration: 1,
        delay: delay * 0.2,
      },
    }),
    hide: {
      y: 40,
      skewY: 3,
      opacity : 0
    },
  };
  return (
    <div className="hero-ui">
        <ViewportObserver onEnter={()=>setImgReveal(true)}>
      <div className="ui-image">
          <motion.img
            initial={{  y : 40 }}
            animate={{ y : imgReveal ? 0 : 40 }}
            transition={{ duration: 2 }}
            src={image}
            alt="screen shot of website"
          />
      </div>
        </ViewportObserver>
      <div className="ui-image-text">
        <motion.h4  variants={textReveal} animate={txtReveal ? 'show' : 'hide'}  initial='hide' custom={2} >UI DESIGN OF {currentPage}</motion.h4>
      </div>
      <ViewportObserver onEnter={()=> setTxtReveal(true)}>
      <div className="ui-tech">
        {design ? (
          <motion.h3 variants={textReveal} animate={txtReveal ? 'show' : 'hide'} initial='hide' custom={'1'} >DESIGN &amp; PROTOTYPING TOOLS :</motion.h3>
        ) : (
          <motion.h3 variants={textReveal} animate={txtReveal ? 'show' : 'hide'} initial='hide' custom={'2'} >USED TECHNOLOGIES :</motion.h3>
        )}

        {dataList.map((item, key) => (
          <motion.div variants={textReveal} animate={txtReveal ? 'show' : 'hide'} initial='hide' custom={2 * (key+1)} key={key}>
            <img src={item.icon} alt="" />
            <h4>{item.name}</h4>
          </motion.div>
        ))}
      </div>
      </ViewportObserver>
    </div>
  );
};

export default HeroUi;

// default
HeroUi.defaultProps = {
  design: false,
};
