import React from "react";
import { useNavigate } from "react-router-dom";

import { Calendar02Icon, Location01Icon } from "hugeicons-react";

import { FeaturedEventsData } from "../../@types/events";
import { formatDate } from "../../utils/format-date";

export const PastEvents = ({
  event,
}: {
  event: FeaturedEventsData | undefined;
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-[100%] flex-col gap-8 rounded-lg bg-supporting-bg">
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex">
            <div className="h-full w-[30%]">
              <img src={event?.event_pic} className="object-cover" alt="" />
            </div>

            <div className="flex w-full flex-col gap-4 p-4 text-white">
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">{event?.name}</p>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Calendar02Icon className="text-core-primary" />
                    <p className="text-neutral-300">
                      {formatDate(event?.date)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Location01Icon className="text-core-primary" />
                    <p className="text-neutral-300">{event?.venue}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <p>
                  {" "}
                  {event?.isEntryFree ? (
                    <p className="text-base font-semibold text-white">
                      Free Entry
                    </p>
                  ) : (
                    <p className="text-base font-semibold text-white">
                      NPR. {event?.ticketRange?.lowest} - NPR.{" "}
                      {event?.ticketRange?.highest}
                    </p>
                  )}
                </p>
                <button
                  className="primary-btn"
                  onClick={() => navigate(`/event/${event?._id}`)}
                >
                  Buy Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
