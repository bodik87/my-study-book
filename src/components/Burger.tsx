import { useEffect } from "react";

export default function BurgerMenu({ visibleMenu, setVisibleMenu }) {
  const closeModal = () => setVisibleMenu(!visibleMenu);

  useEffect(() => {
    if (visibleMenu) window.document.body.style.overflow = "hidden";
    else window.document.body.style.overflow = "auto";
  }, [visibleMenu]);
  return (
    <>
      <div
        className={`${
          visibleMenu ? "translate-x-0" : "translate-x-full"
        } flex flex-col py-6 px-8 items-center gap-4 h-full fixed bottom-0 right-0 z-50 bg-black text-white transition-all`}
      >
        <div className="flex gap-3 justify-between items-center border-b border-gray-500 pb-6">
          <div className="text-xl font-bold">LOGO</div>

          <button
            onClick={closeModal}
            className="btn bg-gray-800 shadow-md flex-col gap-1"
          >
            <span className="span" />
            <div className="bg-white w-5 h-[2px] childDiv rotate-45 translate-y-[3px]" />
            <div className="bg-white w-5 h-[2px] childDiv -rotate-45 -translate-y-[3px]" />
          </button>
        </div>

        <a className="mt-12 flex gap-4" href="tel:+380672785349">
          067 278 53 49
        </a>

        <a className="block mt-auto" href="#">
          Link
        </a>
      </div>

      <div
        onClick={closeModal}
        className={`fixed inset-0 z-40 bg-[#3e12e3] opacity-90 ${
          visibleMenu ? "block opacity-90" : "hidden opacity-0"
        } transition-opacity`}
      />
    </>
  );
}
