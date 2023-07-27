import { useState } from "react";
import { motion } from "framer-motion";

// @ts-ignore: Unreachable code error
export default function MenuItem({ title, children }) {
  const [isMouse, toggleMouse] = useState(false);
  const toggleMouseMenu = () => toggleMouse(!isMouse);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      y: -10,
      transition: { duration: 0.2 },
      display: "block",
    },
    exit: {
      opacity: 0,
      y: 0,
      transition: { duration: 0.2 },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <motion.div
      onMouseEnter={toggleMouseMenu}
      onMouseLeave={toggleMouseMenu}
      className="px-4 py-3"
    >
      <div className="relative font-semibold w-fit flex items-center gap-2 py-3 cursor-pointer">
        {title}
        <svg width={10} aria-hidden="true" viewBox="0 0 6.7 4.1">
          <path d="M3.4 4.1 0 .7.7 0l2.7 2.6L6 0l.7.7z" />
        </svg>

        <motion.div
          className="max-w-[600px] w-full fixed top-20 left-3 right-3 mx-auto p-3 bg-blue-700 text-white rounded-xl shadow-lg z-50 cursor-auto"
          initial="exit"
          animate={isMouse ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}
