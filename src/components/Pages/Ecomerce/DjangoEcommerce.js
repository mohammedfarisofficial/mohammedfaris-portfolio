import "./style.scss";
import DetailsCard from "../../DetailsCard/DetailsCard";

//image for website compoent
import image3 from "../../../assets/gigi-website/1.png";
import image4 from "../../../assets/gigi-website/2.png";
//components
import HeroUi from "../../LandingUi/HeroUi";
import ViewSite from "../../Viewsite/ViewSite";

const DjangoEcommerce = () => {
  return (
    <div className="ecommerce-wrapper">
      <div className="ecommerce-landing">
        <div className="landing-heading">
          <h2>
            <div>ECOMMERCE</div>
            <div>WEB APP</div>
          </h2>
        </div>
        <div className="landing-subheading">
          <h3>DJANGO with REACT.JS</h3>
        </div>
      </div>
      <div className="ecommerce-features">
        <div className="features-title">
          <h2>Special Features</h2>
          <DetailsCard />
          <DetailsCard />
          <DetailsCard />
          <DetailsCard />
        </div>
      </div>
      <div className="ecommerce-case">
        <HeroUi image={image3} />
        <HeroUi image={image4} />
        <ViewSite location="Github" />
        <ViewSite location="Live project" />
      </div>
    </div>
  );
};

export default DjangoEcommerce;
