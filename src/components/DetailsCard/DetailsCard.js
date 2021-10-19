import { useState } from "react";
import "./style.scss";
// import image from '../../assets/home-images/3.jpg'
import { motion } from "framer-motion";
import ViewportObserver from "viewport-observer";
const DetailsCard = ({ title, description, image }) => {
  const [ reveal , setReveal ] = useState(false)
  return (
    <div className="details-wrapper">
      <div className="details-text">
        <div className="details-heading">
          <ViewportObserver onEnter={()=>setReveal(true)}>
            <motion.h3 animate={{ y : reveal ? 0 : 40 }} initial={{ y : 40 }} transition={{ duration : .5 }} >{title}</motion.h3>
          </ViewportObserver>
        </div>
        <div className="details-paragraph">
          <motion.p animate={{ y : reveal ? 0 : 40 }} initial={{ y : 40 }} transition={{ duration : .5 }} >{description}</motion.p>
        </div>
      </div>
      <div className="details-screenshot">
        <motion.img animate={{ y : reveal ? 0 : 40 }} initial={{ y : 40 }} transition={{ duration : .5 }} src={image} alt="" />
      </div>
    </div>
  );
};

export default DetailsCard;
