import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function AnimateInView({children, ...props}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    console.log(inView)
    if (inView) {
      controls.start("visible");
    }
    else {
      controls.set("hidden")
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      {...props}
    >
        {children}
    </motion.div>
  );
}

export default AnimateInView