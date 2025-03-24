import React from "react";

import org1 from "../assets/org1.jpg";
import { Badge } from "./ui/Badge";

export const OrganizerCard = () => {
  return (
    <div className="cursor-pointer flex h-[300px] w-[450px] flex-col items-center justify-center gap-6 rounded-lg bg-supporting-bg-dark">
      <div className="flex h-24 w-24 justify-center overflow-hidden rounded-full bg-gray-700">
        <img src={org1} className="object-cover" alt="" />
      </div>

      <div>
        <p className="text-xl font-semibold text-white">Riten Events</p>
        <p className="text-center text-sm text-core-secondary">100 events</p>
      </div>

      <div className="flex gap-2 justify-center w-[250px] flex-wrap">
        <Badge name="Sports" className="py-1 text-xs"></Badge>
        <Badge name="Music" className="py-1 text-xs"></Badge>
        <Badge name="Education" className="py-1 text-xs"></Badge>
        <Badge name="Education" className="py-1 text-xs"></Badge>
      </div>
    </div>
  );
};
