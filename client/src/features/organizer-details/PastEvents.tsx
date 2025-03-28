import React from "react";
import { useNavigate } from "react-router-dom";

import { Calendar01Icon, Location01Icon } from "hugeicons-react";

import { FeaturedEventsData } from "../../@types/events";
import { Events } from "../../@types/organizers";
import { formatDate } from "../../utils/format-date";

export const PastEvents = ({
  title,
  event,
}: {
  title: string;
  event: FeaturedEventsData | undefined;
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-8">
      <p className="text-2xl font-semibold text-white">{title}</p>

      <div className="flex flex-col gap-4">
        <div>
          <div className="flex gap-4">
            <div className="w-[20%]">
              <img src={event?.event_pic} className="object-cover" alt="" />
            </div>

            <div className="flex w-full flex-col gap-4">
              <div>
                <p>{event?.name}</p>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Calendar01Icon />
                    <p>{formatDate(event?.date)}</p>
                  </div>
                  <div className="flex gap-2">
                    <Location01Icon />
                    <p>{event?.venue}</p>
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
