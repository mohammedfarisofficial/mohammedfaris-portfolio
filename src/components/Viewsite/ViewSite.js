import { useState } from "react";
import "./style.scss";
import LinkIcon from "../../assets/icons/link.svg";
import { motion } from "framer-motion";
import ViewportObserver from "viewport-observer";
import { ExternalLink } from "react-external-link";

const ViewSite = ({ location,exLink }) => {
  const [txtReveal, setTxtReveal] = useState(false);
  return (
    <div className="viewsite-wrapper">
      <ViewportObserver onEnter={() => setTxtReveal(true)}>
        <motion.div
          animate={{ y: txtReveal ? 0 : 40 }}
          initial={{ y: 40 }}
          transition={{ duration: 1 }}
          className="viewsite-container"
        >
          <img src={LinkIcon} alt="check out the page" />
          <ExternalLink
            style={{ textDecoration: "none" }}
            href={exLink}
          >
            <h4 style={{ color : "black" }} >{location}</h4>
          </ExternalLink>
        </motion.div>
      </ViewportObserver>
    </div>
  );
};

export default ViewSite;
