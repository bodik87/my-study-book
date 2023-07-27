import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { CurrentCursor } from "../../../context/CursorContext";
import Cursor from "../Cursor";

type Props = {}

export default function Route_1({ }: Props) {
 // @ts-ignore: Unreachable code error
 const { linkEnter, linkLeave, textEnter, textLeave, imageEnter, imageLeave } = CurrentCursor();
 return (
  <>
   <Cursor />

   <motion.div
    initial={{ y: "-100%" }}
    animate={{ y: "100%" }}
    transition={{ duration: 1 }}
    className="bg-yellow-400 fixed inset-0 z-40" />

   <div className="flex flex-col gap-5">
    <Link
     onMouseEnter={linkEnter}
     onMouseLeave={linkLeave}
     to={"/"}
     className="w-fit text-xl font-semibold transition-all relative group py-1"
    >
     Назад
     <div className="absolute h-[2px] w-full bg-transparent group-hover:bg-black transition-all" />
    </Link>
    <Link
     onMouseEnter={linkEnter}
     onMouseLeave={linkLeave}
     to={"/framer/route2"}
     className="w-fit text-xl font-semibold transition-all relative group py-1"
    >
     Route 2
     <div className="absolute h-[2px] w-full bg-transparent group-hover:bg-black transition-all" />
    </Link>

    <p onMouseEnter={textEnter}
     onMouseLeave={textLeave}>
     Text example
    </p>

    <img
     onMouseEnter={imageEnter}
     onMouseLeave={imageLeave}
     src={"https://cdn.dribbble.com/userupload/8839241/file/original-006b7e8d734e1f50bfb0ab2a0040f412.png?resize=752x470"}
     alt="img"
     className="block w-full h-[250px] object-cover rounded-xl mt-10"
    />
   </div>
  </>
 )
}