import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

// @ts-ignore: Unreachable code error
export default function Header({ setVisibleMenu }) {
  const [scrollUp, setScrollUp] = useState(true);
  const [transparent, setTransparent] = useState(true);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previousScrollY = scrollY.getPrevious();
    // @ts-ignore: Unreachable code error
    if (latest > previousScrollY && scrollY.current > 15) {
      setScrollUp(false);
    } else {
      setScrollUp(true);
    }
    // @ts-ignore: Unreachable code error
    if (scrollY.current < 20) {
      setTransparent(true);
    } else {
      setTransparent(false);
    }
  });

  return (
    <header
      className={`${!scrollUp && "-translate-y-full"} ${transparent ? "bg-transparent" : "bg-white shadow-md"
        } fixed top-20 left-0 w-full transition-all duration-300 px-4 md:px-12 md:py-1 py-3 flex items-center justify-between whitespace-nowrap z-20`}
    >
      <div className="text-xl font-bold">LOGO</div>

      {/* Contacts */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <p className="font-semibold">067 278 5349</p>
            <p className="text-[12px]">Безкоштовно по Україні</p>
          </div>
          <button className="btn bg-[#181819] text-white text-[12px]">
            Зв'язатися
            <span className="span" />
          </button>
        </div>

        {/* Burger button */}
        <button
          onClick={() => setVisibleMenu(true)}
          className="md:hidden btn bg-white shadow-md flex-col gap-1"
        >
          <div className="bg-[#181819] w-5 h-[2px] childDiv" />
          <div className="bg-[#181819] w-5 h-[2px] childDiv" />
          <span className="span" />
        </button>
      </div>
    </header>
  );
}
