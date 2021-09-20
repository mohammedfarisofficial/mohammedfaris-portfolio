import { useState, useEffect } from "react";
// import image from '../../assets/gigi-website/1.png'
// import image2 from '../../assets/gigi-website/2.png'
import figma from "../../assets/icons/figma.svg";
import react from '../../assets/icons/react.svg'
import gsap from '../../assets/icons/gsap.svg'
import "./style.scss";
const HeroUi = ({ design, desciption, image }) => {
  //compoent data
  //   const designList = [
  //      'HELLO',
  //      'HELLO',
  //      'HELLO'
  //    ]
  const techList = [
    {
      name: "React.js",
      icon: react,
    },
    {
      name: "gsap",
      icon: gsap,
    },
  ];
  return (
    <div className="hero-ui">
      <div className="ui-image">
        <img src={image} alt="screen shot of website" />
      </div>
      <div className="ui-image-text">
        <h4>UI DESIGN OF GIGI PORTFOLIO</h4>
      </div>
      <div className="ui-tech">
        {design ? (
          <h3>DESIGN &amp; PROTOTYPING TOOLS :</h3>
        ) : (
          <h3>USED TECHNOLOGIES :</h3>
        )}

        {techList.map((item, key) => (
          <div key={key}>
            <img src={item.icon} alt="" />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroUi;

// default
HeroUi.defaultProps = {
  design: false,
};
