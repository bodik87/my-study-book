import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { CurrentCursor } from "../../../context/CursorContext";
import Cursor from '../Cursor'

type Props = {}

export default function Route_2({ }: Props) {
 // @ts-ignore: Unreachable code error
 const { linkEnter, linkLeave, textEnter, textLeave } = CurrentCursor();
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
     to={"/framer/route1"}
     className="w-fit text-xl font-semibold transition-all relative group py-1"
    >
     Route 1
     <div className="absolute h-[2px] w-full bg-transparent group-hover:bg-black transition-all" />
    </Link>
   </div>
  </>
 )
}