import { useEffect,useState} from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "./style.scss";
const Footer = () => {
const [ dark,setDark] = useState(false)
  const date = new Date();
  const year = date.getFullYear();

  const location = useLocation()

  useEffect(()=>{
     if(location.pathname === '/'){
          setDark(true)
     }else{
          setDark(false)
     }
  },[dark,location])
  return (
    <div
      style={{ backgroundColor: dark ? "black" : "white" }}
      className="footer-wrapper"
    >
      <div className="footer-heading">
        <h2 style={{ color: dark ? "white" : "black" }}>Wanna say hey ? 👋</h2>
      </div>
      <div className="footer-mail">
        <h4 style={{ color: dark ? "white" : "black" }}>
          <div>
            Pop me an email at <span> mohammedfarisofficial@gmail.com</span> -
          </div>
          <div>I’d love to hear from you !</div>
        </h4>
      </div>
      <div className="footer-social">
        <h3 className="resume">
          <a
            style={{ color: dark ? "white" : "black" }}
            download
            href="https://drive.google.com/file/d/1KjJNBnagE77VJtUzcGmPY25By1LrtKpa/view?usp=sharing"
          >
            Resume
          </a>
        </h3>
        <h3 style={{ color: dark ? "white" : "black" }}>LinkedIn</h3>
        <h3 style={{ color: dark ? "white" : "black" }}>Twitter</h3>
      </div>
      <div className="footer-location">
        <h4 style={{ color: dark ? "white" : "black" }}>
          Currently based :{" "}
          <span mailto="mailto:no-reply@example.com">India , kerala</span>
        </h4>
      </div>
      <div className="footer-copyright">
        <h4 style={{ color: dark ? "white" : "black" }}>
          <span>&copy; {year}</span> All Rights Reserved
        </h4>
      </div>
    </div>
  );
};
export default Footer;
