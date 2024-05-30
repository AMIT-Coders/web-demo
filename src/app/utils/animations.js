// animations.js

import { motion } from "framer-motion";
import ScrollOffsetAnimationWrapper from "./ScrollOffsetAnimationWrapper";

export function FadeInWhenVisible({ children }) {
  return (
    <ScrollOffsetAnimationWrapper>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        {children}
      </motion.div>
    </ScrollOffsetAnimationWrapper>
  );
}

export function SlideInFromLeft({ children }) {
  return (
    <ScrollOffsetAnimationWrapper>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50 },
        }}
      >
        {children}
      </motion.div>
    </ScrollOffsetAnimationWrapper>
  );
}
export function SlideInFromRight({ children }) {
  return (
    <ScrollOffsetAnimationWrapper>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 50 },
        }}
      >
        {children}
      </motion.div>
    </ScrollOffsetAnimationWrapper>
  );
}
export function SlideInFromBottom({ children }) {
  return (
    <ScrollOffsetAnimationWrapper>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </ScrollOffsetAnimationWrapper>
  );
}

export function ZoomInOnScroll({ children }) {
  return (
    <ScrollOffsetAnimationWrapper>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 2, scale: { start: 0.5, end: 1 } }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.5 },
        }}
      >
        {children}
      </motion.div>
    </ScrollOffsetAnimationWrapper>
  );
}

export function RotateOnScroll({ children }) {
  return (
    <ScrollOffsetAnimationWrapper>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, rotate: { start: 0, end: 360 } }}
        variants={{
          visible: { opacity: 1, rotate: 0 },
          hidden: { opacity: 0, rotate: -180 },
        }}
      >
        {children}
      </motion.div>
    </ScrollOffsetAnimationWrapper>
  );
}

export function BounceOnScroll({ children }) {
  return (
    <ScrollOffsetAnimationWrapper>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, y: { start: 50, end: 0 } }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
      >
        {children}
      </motion.div>
    </ScrollOffsetAnimationWrapper>
  );
}
