import React, { useState } from "react";
import { useParams } from "react-router-dom";

import {
  Contact01Icon,
  Copy01Icon,
  Copy02Icon,
  Mail01Icon,
} from "hugeicons-react";
import toast from "react-hot-toast";

import { Badge } from "../components/ui/Badge";
import HorizontalTab from "../components/ui/HorizontalTab";
import { OrganizerAbout } from "../features/organizer-details/OrganizerAbout";
import cn from "../lib/classname";
import useGetOrganizerDetailsQuery from "../services/organizers/get-organizer-details.query";
import useGetOrganizerEventsQuery from "../services/organizers/get-organizer-event.query";
import { getProfilePictureAlternative } from "../utils/pictureAlternative";

export const OrganizerDetails = () => {
  const { id } = useParams();
  const { data: organizer } = useGetOrganizerDetailsQuery({
    id,
  });

  const [activeTab, setActiveTab] = useState("About");

  const { data: events } = useGetOrganizerEventsQuery({
    id,
    eventType: "upcoming",
  });

  const handleCopyUrl = async () => {
    await navigator.clipboard.writeText(window.location.href);
    toast.success("URL copied to clipboard!");
  };

  return (
    <div className="flex w-full flex-col gap-16 bg-supporting-bg-dark px-16 py-40">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex h-36 w-36 justify-center overflow-hidden rounded-full bg-gray-700">
            {organizer?.data.profile_pic ? (
              <img
                src={organizer?.data.profile_pic}
                className="object-cover"
                alt={organizer?.data.organizer_name}
              />
            ) : (
              <div className="flex items-center justify-center">
                <div className="text-2xl font-semibold text-core-primary">
                  {getProfilePictureAlternative(organizer?.data.organizer_name)}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Badge
                className="bg-core-primary text-supporting-bg-dark"
                name={organizer?.data.owner_name}
              />
            </div>

            <p className="text-3xl font-semibold text-core-primary">
              {organizer?.data.organizer_name}
            </p>
            <p className="text-lg text-core-secondary">
              {organizer?.data.total_events} events
            </p>

            <div className="flex gap-2">
              {organizer?.data.categories.map((category, index) => (
                <Badge key={index} name={category} />
              ))}
            </div>
          </div>
        </div>

        <div
          onClick={handleCopyUrl}
          className="flex cursor-pointer items-center rounded-xl bg-supporting-bg p-4"
        >
          <Copy01Icon className="text-core-primary" />
        </div>
      </div>

      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 rounded-xl bg-supporting-bg p-2">
            {["About", "Past Events", "Upcoming Events"].map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "cursor-pointer gap-2 rounded-xl px-4 py-2 text-core-primary",
                  {
                    "bg-core-primary text-supporting-bg": tab === activeTab,
                  }
                )}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* {activeTab === "About" && (
            <OrganizerAbout
              organizer={organizer?.data}
              upcommingEvents={events?.data.length}
            />
          )} */}
        </div>

        <div className="w-[30%] rounded-2xl bg-supporting-bg px-8 py-8">
          <div className="bg-background sticky top-6 rounded-lg">
            <h3 className="mb-4 text-xl font-semibold text-core-primary">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                {/* <MapPin className="text-muted-foreground mr-3 mt-0.5 h-5 w-5" /> */}
                {/* <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground text-sm">
                    {organizer.address}
                  </p>
                </div> */}
              </div>

              <div className="flex items-center">
                <Mail01Icon className="mr-3 h-5 w-5 text-core-primary" />
                <div className="text-white">
                  <p className="font-medium">Email</p>
                  <a
                    href={`mailto:${organizer?.data.email}`}
                    className="text-primary text-sm hover:underline"
                  >
                    {organizer?.data.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Contact01Icon className="mr-3 h-5 w-5 text-core-primary" />
                <div className="text-white">
                  <p className="font-medium">Phone</p>
                  <a
                    href={`tel:${organizer?.data.contact_info}`}
                    className="text-primary text-sm hover:underline"
                  >
                    {organizer?.data.contact_info}
                  </a>
                </div>
              </div>

              {/* <div className="flex items-center">
                <Globe className="text-muted-foreground mr-3 h-5 w-5" />
                <div>
                  <p className="font-medium">Website</p>
                  <a
                    href={organizer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary flex items-center text-sm hover:underline"
                  >
                    {organizer.website.replace(/^https?:\/\//, "")}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
