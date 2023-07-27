import React, { useState } from "react";

// @ts-ignore: Unreachable code error
function addDays(dateTime, count_days = 0) {
  return new Date(new Date(dateTime).setDate(dateTime.getDate() + count_days));
}

export default function InfinityCarousel() {
  const today = new Date();

  const [globalValue, setGlobalValue] = useState(0);
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (globalValue < 2) {
      setGlobalValue((globalValue) => globalValue + 1);
      setCounter((counter) => counter + 1);
    } else {
      setCounter((counter) => counter + 1);
      setGlobalValue(0);
    }
  };
  const decrement = () => {
    if (globalValue === 0) {
      setGlobalValue(2);
      setCounter((counter) => counter - 1);
    } else {
      setGlobalValue((globalValue) => globalValue - 1);
      setCounter((counter) => counter - 1);
    }
  };

  const h = "100px";
  return (
    <>
      <div
        style={{ height: h }}
        className="w-full mt-4 flex items-center justify-center relative overflow-hidden border"
      >
        <Card_1
          value={globalValue}
          height={h}
          content={addDays(today, counter)}
        />
        <Card_2
          value={globalValue}
          height={h}
          content={addDays(today, counter)}
        />
        <Card_3
          value={globalValue}
          height={h}
          content={addDays(today, counter)}
        />
      </div>

      <div className="mt-4 flex justify-center gap-2 mx-auto">
        <button
          onClick={decrement}
          className="flex bg-slate-600 text-white px-3"
        >
          Prex
        </button>
        <button
          onClick={increment}
          className="flex bg-slate-600 text-white px-3"
        >
          Next
        </button>
      </div>
    </>
  );
}

// @ts-ignore: Unreachable code error
function Card_1({ value, height, content }) {
  const innerValue = value + 1;
  const cardStyle =
    "absolute bg-white w-full flex justify-center items-center py-1 px-4 transition-all duration-300";

  const date = content.toLocaleDateString();

  return (
    <div
      style={{ height: height }}
      className={`${cardStyle} ${innerValue === 1 && "right-[100%] top-0 z-20"
        } ${innerValue === 2 && "-right-[100%] top-0 z-10"} ${innerValue === 3 && "right-[0] top-0 z-30"
        }`}
    >
      {date}
    </div>
  );
}

// CENTER
// @ts-ignore: Unreachable code error
function Card_2({ value, height, content }) {
  const innerValue = value + 1;
  const cardStyle =
    "absolute bg-white w-full flex justify-center items-center py-1 px-4 transition-all duration-300";

  const date = content.toLocaleDateString();
  return (
    <div
      style={{ height: height }}
      className={`${cardStyle} ${innerValue === 1 && "right-[0] top-0 z-30"} ${innerValue === 2 && "right-[100%] top-0 z-20"
        } ${innerValue === 3 && "-right-[100%] top-0 z-10"}`}
    >
      {date}
    </div>
  );
}

// blue
// @ts-ignore: Unreachable code error
function Card_3({ value, height, content }) {
  const innerValue = value + 1;
  const cardStyle =
    "absolute bg-white w-full flex justify-center items-center py-1 px-4 transition-all duration-300";

  const date = content.toLocaleDateString();
  // console.log(innerValue);
  return (
    <div
      style={{ height: height }}
      className={`${cardStyle} ${innerValue === 1 && "-right-[100%] top-0 z-10"
        } ${innerValue === 2 && "right-[0] top-0 z-30"} ${innerValue === 3 && "right-[100%] top-0 z-20"
        }`}
    >
      {date}
    </div>
  );
}
