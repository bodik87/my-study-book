import React, { memo, useMemo, useState } from "react";

const array = [1, 2, 3]; // можно просто вынести объект за область вложенного компонета, чтоб не использовать memo

export default function Memo() {
  // const array = [1, 2, 3]; // - вызвет перерендер из-за того, что пересоздается ссылка на массив (он же объект и, соответственно, не примитив)

  // const array = 777; // - не вызвет, потому что в даннгом случае array - примитив

  // const array: number[] = useMemo(() => [1, 2, 3], []); // не вызвет

  const [home, setHome] = useState("initial state + ");
  console.log("Render from App");
  return (
    <div>
      <h1 className="text-2xl mb-2 font-semibold">Parent</h1>
      <p>{home}</p>
      <button
        className="mt-3 bg-blue-500 text-white px-3 py-1 rounded-md"
        onClick={() => setHome(home + 1)}
      >
        Click from home
      </button>
      <hr className="w-24 h-[2px] my-4 bg-black" />
      <Component array={array} />
    </div>
  );
}

const Component = memo(({ array }: any) => {
  const [first, setFirst] = useState("initial state + ");
  console.log("Render from Component", array);
  return (
    <div style={{ marginTop: "12px" }}>
      <h2 className="text-xl mb-2 font-semibold">Child - Inner Component</h2>
      <p>{first}</p>
      <button
        className="mt-3 bg-blue-500 text-white px-3 py-1 rounded-md"
        onClick={() => setFirst(first + 1)}
      >
        Click
      </button>
    </div>
  );
});
