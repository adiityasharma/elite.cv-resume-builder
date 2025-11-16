import React from "react";
import { BookText, PaintBucket, FilePlusCorner, SquarePen } from "lucide-react";

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
    icon: SquarePen,
    name: "Edit",
  },
];

const Sidebar = () => {
  return (
    <div className="w-[90px] flex justify-center h-full py-5">
      <div className="flex flex-col gap-4">
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            className="font-semibold cursor-pointer flex flex-col items-center gap-1 bg-white border-2 border-neutral-200 hover:border-blue-400 p-2 rounded-md transition-all duration-300"
          >
            <div className="w-8 rounded-lg flex items-center justify-center text-white aspect-square bg-blue-500 ">
              <item.icon size={20} />
            </div>
            <h1 className="text-center text-neutral-800 text-[11px] leading-tight">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
