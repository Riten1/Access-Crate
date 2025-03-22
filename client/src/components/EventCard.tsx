import { Calendar02Icon, Location01Icon } from "hugeicons-react";

import { FeaturedEventsData } from "../@types/events";
import { formatDate } from "../utils/format-date";

export const EventCard = ({ event }: { event: FeaturedEventsData }) => {
  return (
    <div className="cursor-pointer rounded-lg bg-supporting-bg p-6">
      <div className="flex h-[400px] w-[240px] flex-col justify-between">
        <div className="flex flex-col">
          <img
            className="soverflow-hidden h-1/2 object-cover"
            src={event.event_pic}
          />
          <div className="mt-4 flex flex-col gap-4">
            <p className="text-lg font-semibold text-white">{event.name}</p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 text-neutral-300">
                <Calendar02Icon className="text-core-primary" />
                {formatDate(event.date)}
              </div>
              <div className="flex gap-2 text-neutral-300">
                <Location01Icon className="text-core-primary" />
                {event.venue}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <p className="text-base font-semibold text-white">
            NPR. {event.ticketRange.lowest} - NPR. {event.ticketRange.highest}
          </p>
        </div>
      </div>
    </div>
  );
};
