import { useState } from "react";
import BurgerMenu from "../../components/Burger"
import Header from "../../components/Header"

type Props = {}

export default function HideVisibleNavbar({ }: Props) {
 const [visibleMenu, setVisibleMenu] = useState(false);
 return (
  <div className="-mx-4 min-h-[200vh] bg-gradient-to-br from-slate-300 to-emerald-600">
   <BurgerMenu visibleMenu={visibleMenu} setVisibleMenu={setVisibleMenu} />
   <Header setVisibleMenu={setVisibleMenu} />
  </div>
 )
}