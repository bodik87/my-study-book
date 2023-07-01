import { Routes, Route, Outlet } from "react-router-dom";
import MultiSelect from "./pages/FramerMotion/MultiSelect";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ExportToEcel from "./pages/Excel/ExportToEcel";
import ImportExcel from "./pages/Excel/ImportExcel";
import MobileYouTube from "./pages/Design/MobileYouTube";
import MobileApp_1 from "./pages/Design/MobileApp_1/MobileApp_1";
import Memo from "./pages/React/Memo";
import AnimatedTabs from "./pages/FramerMotion/AnimatedTabs";
import Dock from "./pages/FramerMotion/Dock";
import AnimatedCard from "./pages/FramerMotion/AnimatedCard";

type Props = {};

export default function App({ }: Props) {
  return (
    <div className="p-4">
      <Navigation />
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route index element={<HomePage />} />
        <Route path="/framer/multiselect" element={<MultiSelect />} />
        <Route path="/framer/animTabs" element={<AnimatedTabs />} />
        <Route path="/framer/dock" element={<Dock />} />
        <Route path="/framer/animatedCard" element={<AnimatedCard />} />

        <Route path="/excel/export" element={<ExportToEcel />} />
        <Route path="/excel/import" element={<ImportExcel />} />

        <Route path="/design/YouTubeMobile" element={<MobileYouTube />} />
        <Route path="/design/MobileApp_1" element={<MobileApp_1 />} />

        <Route path="/react/memo" element={<Memo />} />
      </Routes>
    </div>
  );
}
