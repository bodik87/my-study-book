import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CurrentCursor } from "../../context/CursorContext";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // @ts-ignore: Unreachable code error
  const { cursorVariant } = CurrentCursor();

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    link: {
      height: 75,
      width: 75,
      x: mousePosition.x - 36,
      y: mousePosition.y - 36,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    image: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#FFEE16",
    },
  };

  return (
    <motion.div
      // @ts-ignore: Unreachable code error
      variants={variants}
      animate={cursorVariant}
      className={`w-8 h-8 hidden bg-[#000] rounded-full fixed top-0 left-0 pointer-events-none sm:flex items-center justify-center z-50 font-semibold`}
    >
      {cursorVariant === "image" && "Перегляд"}
    </motion.div>
  );
}
