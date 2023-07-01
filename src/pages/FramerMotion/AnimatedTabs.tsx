import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
  { id: "element_1", label: "Tab_1" },
  { id: "element_2", label: "Tab_second_2" },
  { id: "element_3", label: "Tab_3" },
  { id: "element_4", label: "Tab_other_tab_4" },
  { id: "element_5", label: "Tab_5" },
  { id: "element_6", label: "Tab_6" },
  { id: "element_7", label: "Tab_7" },
];

export default function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-fit mx-auto flex space-x-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${activeTab === tab.id ? "" : "hover:text-black/60"
            } relative rounded-full px-3 py-3 text-sm font-medium text-black transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
