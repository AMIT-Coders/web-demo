// ScrollOffsetAnimationWrapper.js

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollOffsetAnimationWrapper = ({ children, offset = 100 }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldAnimate = scrollY + window.innerHeight > offset;

      if (shouldAnimate) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    // Initial check
    handleScroll();

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, offset]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollOffsetAnimationWrapper;
