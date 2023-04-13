import React from "react";

export default function Skeleton() {
  return (
    <div className="py-4 w-full bg-transparent rounded-full h-3 mb-4overflow-x-hidden">
      <div
        className="bg-[#17A0AE] h-1 rounded-full animate-loading"
        style={{ width: `50%` }}
      />
    </div>
  );
}
