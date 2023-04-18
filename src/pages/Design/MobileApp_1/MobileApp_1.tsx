import React from "react";

type Props = {};

export default function MobileApp_1({}: Props) {
  return (
    <div className="max-w-[400px] h-[600px] rounded-[40px] mx-auto p-2 bg-white shadow-lg flex flex-col">
      <div className="bg-[#CEE5EA] h-[30%] rounded-[32px] p-6">
        <p className="font-semibold text-sm">Inner text 1</p>
        <p className="font-bold text-lg">Inner text 2</p>
      </div>

      <div className="bg-[#F1F4F9] rounded-xl p-2 w-fit mt-4">Content</div>

      <div className="flex gap-4 px-4 mt-auto mb-8">
        <button className="border border-[#135D38]/50 text-[#135D38] w-full py-2 rounded-xl font-semibold hover:bg-[#F1F4F9] transition-all ">
          Cancel
        </button>
        <button className="border border-[#135D38] bg-[#135D38] w-full py-2 rounded-xl font-semibold text-white transition-all hover:brightness-125">
          Done
        </button>
      </div>
    </div>
  );
}
