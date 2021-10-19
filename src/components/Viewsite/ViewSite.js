import { useState } from 'react'
import "./style.scss";
import LinkIcon from "../../assets/icons/link.svg";
import { motion } from "framer-motion";
import ViewportObserver from "viewport-observer";

const ViewSite = ({ location }) => {
  const [ txtReveal,setTxtReveal] = useState(false)
  return (
    <div className="viewsite-wrapper">
      <ViewportObserver onEnter={()=>setTxtReveal(true)}>
      <motion.div
        animate={{ y: txtReveal ? 0 : 40 }}
        initial={{ y : 40 }}
        transition={{ duration:1}}
        className="viewsite-container"
      >
        <img src={LinkIcon} alt="check out the page" />
        <h4>{location}</h4>
      </motion.div>
      </ViewportObserver>
    </div>
  );
};

export default ViewSite;
