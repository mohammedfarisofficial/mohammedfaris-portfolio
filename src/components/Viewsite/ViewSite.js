import "./style.scss";
import LinkIcon from "../../assets/icons/link.svg";
const ViewSite = ({ location }) => {
  return (
    <div className="viewsite-wrapper">
      <div className="viewsite-container">
        <img src={LinkIcon} alt="check out the page" />
        <h4>{location}</h4>
      </div>
    </div>
  );
};

export default ViewSite;
