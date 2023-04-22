import React from "react";
import Icon from "/react.svg";
import Skeleton from "../components/Skeleton";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div className="overflow-x-hidden">
      <h1 className="logo text-[72px] py-4">{"This \n is my \n Study book"}</h1>
      <img src={Icon} alt="My SVG" width={150} className="my-4 animate-pulse" />
      <Skeleton />
    </div>
  );
}
