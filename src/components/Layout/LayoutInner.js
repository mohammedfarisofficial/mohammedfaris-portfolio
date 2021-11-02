import { motion, AnimatePresence } from "framer-motion";
import Loading from "../Loading/Loading";
// import { CustomCursor } from "../../CustomCursor/index.js";
const LayoutInner = ({ children, finishLoading, time }) => {
  return (
    <>
      {finishLoading ? (
        <AnimatePresence exitBeforeEnter>
          <Loading time={time} />
        </AnimatePresence>
      ) : (
        <AnimatePresence exitBeforeEnter initial={false}>
          <div
            
          >
            {/* <CustomCursor/> */}
            <div>
              <main>{children}</main>
            </div>
            {/* <Footer /> */}
          </div>
        </AnimatePresence>
      )}
    </>
  );
};

export default LayoutInner;
