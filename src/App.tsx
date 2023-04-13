import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import MultiSelect from "./pages/FramerMotion/MultiSelect";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";

type Props = {};

export default function App({}: Props) {
  return (
    <div className="p-4">
      <Navigation />
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route index element={<HomePage />} />
        <Route path="/multiselect" element={<MultiSelect />} />
      </Routes>
    </div>
  );
}
