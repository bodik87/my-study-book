import { createContext, useContext, useState } from "react";

// @ts-ignore: Unreachable code error
const CursorContext = createContext();

// eslint-disable-next-line react/prop-types
// @ts-ignore: Unreachable code error
export const CursorContextProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState("default");

  const linkEnter = () => setCursorVariant("link");
  const linkLeave = () => setCursorVariant("default");
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const imageEnter = () => setCursorVariant("image");
  const imageLeave = () => setCursorVariant("default");

  return (
    <CursorContext.Provider
      value={{
        cursorVariant,
        linkEnter,
        linkLeave,
        textEnter,
        textLeave,
        imageEnter,
        imageLeave,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const CurrentCursor = () => {
  return useContext(CursorContext);
};
