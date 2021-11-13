import { AnimatePresence } from "framer-motion";
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
            <div>
              <main>{children}</main>
            </div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
};

export default LayoutInner;
