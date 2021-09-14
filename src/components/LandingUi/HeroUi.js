import image from '../../assets/gig-hadid-images/image2.jpg'
import figma from '../../assets/icons/figma.svg'
import './style.scss';
const HeroUi = () => {
     return (
          <div className="hero-ui">
               <div className="ui-image">
                    <img src={image} alt="screen shot of website" />
               </div>
               <div className="ui-image-text">
                    <h4>UI DESIGN OF GIGI PORTFOLIO</h4>
               </div>
               <div className="ui-tech">
                    <h3>DESIGN &amp; PROTOTYPING  TOOLS :</h3>
                    <div><img src={figma} alt="icons" /><h4>Figma</h4></div>
                    <div><img src={figma} alt="icons" /><h4>Photoshop</h4></div>
               </div>
          </div>
     )
}

export default HeroUi
