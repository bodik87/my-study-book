import React, { useState } from "react";

export default function MobileYouTube() {
  const [opened, setOpened] = useState(false);
  return (
    <main className="flex max-h-[80vh] h-full max-w-maximum mx-auto bg-white flex-col items-center select-none relative overflow-hidden">
      <header className="w-full">Header</header>

      <div className="-mb-4 p-3 w-full overflow-auto bg-red-400">
        <div className="h-[3000px] gradient">Content</div>
      </div>

      <button
        onClick={() => setOpened(true)}
        className="flex p-3 bg-violet-500 rounded-t-2xl w-full"
      >
        Botthom sheet handler
      </button>

      <div
        className={`${
          opened ? "bottom-0" : "-bottom-full"
        } absolute w-full max-h-[75%] max-w-maximum h-full bg-myBlue rounded-t-2xl transition-all duration-300 z-10`}
      >
        <div className="h-full flex flex-col">
          <h3 className="flex justify-between bg-blue-100">
            <span>Title</span>
            <button
              onClick={() => setOpened(false)}
              className="px-5 bg-emerald-400"
            >
              X
            </button>
          </h3>

          <div className="bg-blue-300">Filters</div>

          <div className="h-full overflow-y-auto">
            <div className="h-[1000px] bg-emerald-500">
              <div>Inner Content</div>
            </div>
          </div>

          <div className="mt-auto bg-blue-200">Footer</div>
        </div>
      </div>
    </main>
  );
}
