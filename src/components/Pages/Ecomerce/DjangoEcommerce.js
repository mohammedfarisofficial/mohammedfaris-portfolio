import "./style.scss";
import DetailsCard from "../../DetailsCard/DetailsCard";

//image for website compoent
import image3 from "../../../assets/gigi-website/1.png";
import image4 from "../../../assets/gigi-website/2.png";
//components
import HeroUi from "../../LandingUi/HeroUi";
import ViewSite from "../../Viewsite/ViewSite";
//screenshot for review
import image from '../../../assets/home-images/3.jpg'
import Title from "../../Title/Title";

const DjangoEcommerce = () => {
  const features = [
    {
      id : 1,
      title : 'review 1',
      description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex doloribus repellendus veniam, earum at vitae illo! Consequuntur aliquam sunt earum.',
      img : image
    },
    {
      id : 2,
      title : 'review 2',
      description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex doloribus repellendus veniam, earum at vitae illo! Consequuntur aliquam sunt earum.',
      img : image
    },
    {
      id : 3,
      title : 'review 3',
      description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex doloribus repellendus veniam, earum at vitae illo! Consequuntur aliquam sunt earum.',
      img : image
    },
    {
      id : 4,
      title : 'review 4',
      description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex doloribus repellendus veniam, earum at vitae illo! Consequuntur aliquam sunt earum.',
      img : image
    },
  ]
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
          {
            features.map(feature=>(
              <DetailsCard key={feature.id} title={feature.title} description={feature.description} image={feature.img}/>
            ))
          }
          
        </div>
      </div>
      <div className="ecommerce-case">
        <Title/>
        <HeroUi image={image3} />
        <HeroUi image={image4} />
        <ViewSite location="Github" />
        <ViewSite location="Live project" />
      </div>
    </div>
  );
};

export default DjangoEcommerce;
