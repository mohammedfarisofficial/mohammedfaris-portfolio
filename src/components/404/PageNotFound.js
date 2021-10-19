import { Link } from "react-router-dom";
import "./style.scss";
import TrashImg from "../../assets/404/img/1.png";
const PageNotFound = () => {
  return (
    <div className="page-wrapper">
      <div className="page-image-wrapper">
        <div className="page-image-container">
          <img src={TrashImg} alt="404" />
        </div>
      </div>
      <div className="page-text-wrapper">
        <div className="page-text-container">
          <div className="page-heading">
               <h2>Oops!</h2>
          </div>
          <div className="page-subheading">
               <h3>We couldn’t find that page.</h3>
          </div>
          <div className="page-paragraph">
               <p>Maybe you can find what you need here?</p>
          </div>
          <div className="page-routes">
               <Link className='page-route' to='/'><h3>Home</h3></Link>
               <Link className='page-route' to='/gigi-hadid'><h3>Gigi Hadid</h3></Link>
               <Link className='page-route' to='/ecommerce'><h3>Ecommerce</h3></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
