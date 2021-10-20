import { useRef, useState , useMemo} from "react";
import { Link , NavLink} from "react-router-dom";
// import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import "./navbar.scss";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import video1 from "../../assets/nav-videos/video1.mp4";
import video2 from "../../assets/nav-videos/video2.mp4";
import video3 from "../../assets/nav-videos/video3.mp4";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [ light, setLight ] = useState(false)

  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/gigi-hadid'){
      setLight(false)
    }else{
      setLight(true)
    }
    console.log(location.pathname);
  }, [location.pathname,light])

  const navSliderRef = useRef(null);
  const handleOpenNav = () => {
    setOpen(true);
  };
  const handleCloseNav = () => {
    setOpen(false);
  };
  // enable and disenabel srolling 
  const body = document.body
  const scrollY = body.style.top;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });
  }, [])
  //Framer motion
  // intersection observer with framer
  const { inView, ref } = useInView();
  const revealControl = useAnimation();

  const navigationVarients = {
    show: (index) => ({
      y: 0,
      opacity: inView ? [0, 0, 1] : 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
        delay: index * 0.1,
      },
    }),
    hide: {
      y: "30px",
      opacity: 0,
    },
    hover: {
      scale: 1.3,
    },
  };
  const navigationButtonVarients = {
    show: {
      y: 0,
      opacity: inView ? [0, 0, 1] : 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
    hide: {
      y: '2rem' ,
      opacity: 0,
    },
  };
  const animationMenuVariants = {
    show: {
      opacity: 1,
      y: 0,
      transition : {
        duration: 0.8
      }
    },
    hide: {
      opacity: 0,
      y: '2rem',
    },
    hover : {
      x : 5
    }
  };
  //hide scroll bar
  if ( inView ){
    body.style.position = 'fixed';
  }else{
    const body = document.body;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
  //switch video

  const videos = useMemo(() => ([
    { id: 0, video: video1 },
    { id: 1, video: video2 },
    { id: 2, video: video3 },
  ]),[]);

  const [current, setCurrent] = useState({
    id: 0,
    video: video1,
  });

  useEffect(() => {
    const currentVideo = videos.filter((video) => video.id === current.id);
    setCurrent({ id: currentVideo[0].id, video: currentVideo[0].video });
  }, [current.id,videos]);

  const projectsRoutes = [
    {
      id: "01",
      title: "Gigi hadid Portfolio",
      path: "gigi-hadid",
      video: "gigi-hadid.mp4",
    },
    {
      id: "02",
      title: "An Ecommerce",
      path: "ecommerce",
      video: "gigi-hadid.mp4",
    },
    {
      id: "03",
      title: "Building 👨‍💻",
      path: "",
      video: "gigi-hadid.mp4",
    },
  ];
  // scroll to top when change the route

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.key]);

  return (
    <div className="pro-navbar">
      <Link to="/ecommerce" style={{ textDecoration: "none", color: "black" }}>
        <motion.div variants={animationMenuVariants} initial='hide' animate='show' whileHover='hover' className="pro-back">
           <h3 style={{ color : light ? 'black' : 'white'}} >.FM</h3>
        </motion.div>
      </Link>
      <motion.div variants={animationMenuVariants} initial='hide' animate='show' className="pro-hanburger" onClick={handleOpenNav}>
        <span style={{ backgroundColor : light ? 'black' : 'white'}} ></span>
        <span style={{ backgroundColor : light ? 'black' : 'white'}} ></span>
      </motion.div>
      <motion.div
        animate={{ x: open ? 0 : "100%" , skewX : open ? [ 0,5, 10,5, 0] : [ 0, -5, -10,-5,  0] }}
        initial={false}
        transition={{ duration: 0.8 }}
        ref={navSliderRef}
        className="navbar-slider"
      >
        <div className="nav-routes">
          <ul>
            {projectsRoutes.map((route, index) => (
              <NavLink
                onClick={handleCloseNav}
                key={index}
                to={`/${route.path}`}
                activeClassName='nav-active'
                style={{ textDecoration: "none", color: "black" }}
              >
                <li className="nav-route">
                  <motion.h3
                    onHoverEnd={() => {
                      revealControl.start({
                        width: "60%",
                        transition: { duration: 0.3, ease: "easeInOut" },
                      });
                    }}
                    onHoverStart={() => {
                      revealControl.start({
                        width: 0,
                        transition: { duration: 0.2, ease: "easeInOut" },
                      });
                      setCurrent({ id: index });
                    }}
                  >
                    <motion.div
                      variants={navigationVarients}
                      animate="show"
                      initial="hide"
                      custom={index}
                    >
                      {route.id}
                    </motion.div>
                    <motion.div
                      variants={navigationVarients}
                      animate="show"
                      initial="hide"
                      custom={index}
                    >
                      {route.title}
                    </motion.div>
                  </motion.h3>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="nav-upper">
          <Link onClick={handleCloseNav} to="/" style={{ textDecoration: "none", color: "black" }}>
            <motion.div
              variants={navigationButtonVarients}
              animate="show"
              initial="hide"
              className="pro-back slide"
            >
              <HomeOutlinedIcon className="back-icon" /> <h3>home</h3>
            </motion.div>
          </Link>
          <motion.div
            variants={navigationButtonVarients}
            animate="show"
            initial="hide"
            className="pro-close"
            onClick={handleCloseNav}
          >
            <CloseOutlinedIcon ref={ref} className="close-icon" />
            <h3>close</h3>
          </motion.div>
        </div>
        <motion.div
          className="pro-video-reveal"
          animate={revealControl}
        ></motion.div>
        <div className="pro-video">
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.video
              key={current.id}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              autoPlay
              muted
              loop
              src={current.video}
              type="video/mp4"
            ></motion.video>
          </AnimatePresence>
          <AnimatePresence>
            <div className="powerbutton"></div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
