import "./style.scss";
import LinkIcon from "../../assets/icons/link.svg";
const ViewSite = () => {
  return (
    <div className="viewsite-wrapper">
      <div className="viewsite-container">
        <img src={LinkIcon} alt="check out the page" />
        <h4>go to website</h4>
      </div>
    </div>
  );
};

export default ViewSite;
