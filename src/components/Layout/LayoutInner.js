import { memo } from 'react'
import { AnimatePresence } from "framer-motion";
import Loading from "../Loading/Loading";
// import { CustomCursor } from "../../CustomCursor/index.js";
import Footer from '../Footer/Footer'
const LayoutInner = ({ children, finishLoading, time }) => {
  finishLoading = false
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
            <Footer />
          </div>
        </AnimatePresence>
      )}
    </>
  );
};

export default memo(LayoutInner);
