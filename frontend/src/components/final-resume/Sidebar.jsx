import React from "react";
import { BookText, PaintBucket, FilePlusCorner } from "lucide-react";

const sidebarItems = [
  {
    id: 1,
    icon: BookText,
    name: "Templates",
  },
  {
    id: 2,
    icon: PaintBucket,
    name: "Design & Formating",
  },
  {
    id: 3,
    icon: FilePlusCorner,
    name: "Add Section",
  },
];

const Sidebar = () => {
  return (
    <div className="w-[90px] flex justify-center h-full py-5">
      <div className="flex flex-col gap-4">
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-1 hover:bg-neutral-50/50 py-3 rounded-xl transition-all duration-300"
          >
            <div className="w-10 rounded-lg flex items-center justify-center text-white aspect-square bg-blue-500 ">
              <item.icon />
            </div>
            <h1 className="text-center text-neutral-800 text-xs">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
