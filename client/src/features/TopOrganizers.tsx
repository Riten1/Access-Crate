// import React from "react";

// import { ArrowRight02Icon } from "hugeicons-react";

import org1 from "../assets/org1.jpg";
import org2 from "../assets/org2.png"
// import { OrganizerCard } from "../components/OrganizerCard";
import { Badge } from "../components/ui/Badge";
import Header from "../components/ui/Header";

export const TopOrganizers = () => {
  return (
    <div className="flex flex-col gap-12 bg-supporting-bg p-12 md:px-24 md:pb-8 md:pt-16 lg:px-40 lg:pb-8 lg:pt-20">
      <div className="flex items-center justify-between">
        <Header
          title="Top Organizers"
          description="Discover events from trusted organizers"
          className="text-white"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex w-full justify-between gap-4">
          <div className="flex h-[300px] w-full cursor-pointer flex-col items-center justify-center gap-6 rounded-lg bg-supporting-bg-dark">
            <div className="flex h-24 w-24 justify-center overflow-hidden rounded-full bg-gray-700">
              <img src={org1} className="object-cover" alt="" />
            </div>

            <div>
              <p className="text-xl font-semibold text-white">Riten Events</p>
              <p className="text-center text-sm text-core-secondary">
                100 events
              </p>
            </div>

            <div className="flex w-[250px] flex-wrap justify-center gap-2">
              <Badge name="Sports" className="py-1 text-xs"></Badge>
              <Badge name="Music" className="py-1 text-xs"></Badge>
              <Badge name="Education" className="py-1 text-xs"></Badge>
              <Badge name="Education" className="py-1 text-xs"></Badge>
            </div>
          </div>
          <div className="flex h-[300px] w-full cursor-pointer flex-col items-center justify-center gap-6 rounded-lg bg-supporting-bg-dark">
            <div className="flex h-24 w-24 justify-center overflow-hidden rounded-full bg-gray-700">
              <img src={org2} className="object-cover" alt="" />
            </div>

            <div>
              <p className="text-xl font-semibold text-white">Saugat Events</p>
              <p className="text-center text-sm text-core-secondary">
                100 events
              </p>
            </div>

            <div className="flex w-[250px] flex-wrap justify-center gap-2">
              <Badge name="Sports" className="py-1 text-xs"></Badge>
             
              <Badge name="Education" className="py-1 text-xs"></Badge>
            </div>
          </div>
        </div>

        <div className="flex gap-4 ">
        <div className="flex h-[300px] w-[450px] cursor-pointer flex-col items-center justify-center gap-6 rounded-lg bg-supporting-bg-dark">
            <div className="flex h-24 w-24 justify-center overflow-hidden rounded-full bg-gray-700">
              <img src={org1} className="object-cover" alt="" />
            </div>

            <div>
              <p className="text-xl font-semibold text-white">Riten Events</p>
              <p className="text-center text-sm text-core-secondary">
                100 events
              </p>
            </div>

            <div className="flex w-[250px] flex-wrap justify-center gap-2">
              <Badge name="Sports" className="py-1 text-xs"></Badge>
              <Badge name="Music" className="py-1 text-xs"></Badge>
              <Badge name="Education" className="py-1 text-xs"></Badge>
              <Badge name="Education" className="py-1 text-xs"></Badge>
            </div>
          </div>
        <div className="flex h-[300px] w-[600px] cursor-pointer flex-col items-center justify-center gap-6 rounded-lg bg-supporting-bg-dark">
            <div className="flex h-24 w-24 justify-center overflow-hidden rounded-full bg-gray-700">
              <img src={org1} className="object-cover" alt="" />
            </div>

            <div>
              <p className="text-xl font-semibold text-white">Riten Events</p>
              <p className="text-center text-sm text-core-secondary">
                100 events
              </p>
            </div>

            <div className="flex w-[250px] flex-wrap justify-center gap-2">
              <Badge name="Sports" className="py-1 text-xs"></Badge>
              <Badge name="Music" className="py-1 text-xs"></Badge>
              <Badge name="Education" className="py-1 text-xs"></Badge>
              <Badge name="Education" className="py-1 text-xs"></Badge>
            </div>
          </div>
        <div className="flex h-[300px] w-[500px] cursor-pointer flex-col items-center justify-center gap-6 rounded-lg bg-supporting-bg-dark">
            <div className="flex h-24 w-24 justify-center overflow-hidden rounded-full bg-gray-700">
              <img src={org1} className="object-cover" alt="" />
            </div>

            <div>
              <p className="text-xl font-semibold text-white">Riten Events</p>
              <p className="text-center text-sm text-core-secondary">
                100 events
              </p>
            </div>

            <div className="flex w-[250px] flex-wrap justify-center gap-2">
              <Badge name="Sports" className="py-1 text-xs"></Badge>
              <Badge name="Music" className="py-1 text-xs"></Badge>
              <Badge name="Education" className="py-1 text-xs"></Badge>
              <Badge name="Education" className="py-1 text-xs"></Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="primary-btn font-semibold">
          View all organizers
        </button>
      </div>
    </div>
  );
};
