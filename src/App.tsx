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
import Cards from "./pages/Design/Cards";
import Carousel from "./pages/FramerMotion/carousel";
import Route_1 from "./pages/FramerMotion/AnimatedRoutes/Route_1";
import Route_2 from "./pages/FramerMotion/AnimatedRoutes/Route_2";
import { AnimatePresence } from "framer-motion";
import { CursorContextProvider } from "./context/CursorContext";
import HideVisibleNavbar from "./pages/FramerMotion/HideVisibleNavbar";

type Props = {};

const animatedRoutes = [
  { path: "/framer/route1", name: "Route1", Component: Route_1 },
  { path: "/framer/route2", name: "Route2", Component: Route_2 },
];

const routeComponents = animatedRoutes.map(({ path, Component }) => (
  <Route key={path} path={path} element={<Component />} />
));

export default function App({ }: Props) {
  return (
    <div className="p-4">
      <Navigation />

      <AnimatePresence>
        <CursorContextProvider>
          <Routes location={location} key={location.pathname}>
            {routeComponents}
          </Routes>
        </CursorContextProvider>
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route index element={<HomePage />} />
        <Route path="/framer/multiselect" element={<MultiSelect />} />
        <Route path="/framer/animTabs" element={<AnimatedTabs />} />
        <Route path="/framer/dock" element={<Dock />} />
        <Route path="/framer/animatedCard" element={<AnimatedCard />} />
        <Route path="/framer/carousel" element={<Carousel />} />
        <Route path="/framer/hidenav" element={<HideVisibleNavbar />} />


        <Route path="/excel/export" element={<ExportToEcel />} />
        <Route path="/excel/import" element={<ImportExcel />} />

        <Route path="/design/YouTubeMobile" element={<MobileYouTube />} />
        <Route path="/design/MobileApp_1" element={<MobileApp_1 />} />
        <Route path="/design/cards" element={<Cards />} />

        <Route path="/react/memo" element={<Memo />} />
      </Routes>
    </div>
  );
}
