import { useNavigate } from "react-router-dom";

import { ArrowRight02Icon } from "hugeicons-react";

import SkeletonCards from "../../components/CardSkeleton";
import { EventCard } from "../../components/EventCard";
import Header from "../../components/ui/Header";
import useFeaturedEventsQuery from "../../services/events/get-events-query";

export const FeaturedEvents = () => {
  const { data: featuredEvents, isLoading } = useFeaturedEventsQuery();
  const navigate = useNavigate();

  return (
    <div className="bg-supporting-bg-dark p-12 md:px-24 md:pb-8 md:pt-16 lg:px-40 lg:pb-8 lg:pt-20">
      <div className="flex items-center justify-between">
        <Header
          title="Featured Events"
          description="Don't miss these popular events"
          className="text-white"
        />
        <div className="flex cursor-pointer gap-2 text-core-primary">
          <p>View all featured events</p>
          <ArrowRight02Icon />
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        {isLoading && <SkeletonCards />}
        {featuredEvents?.data.map((event) => (
          <div
            onClick={() => {
              navigate(`/event/${event._id}`);
            }}
            key={event._id}
          >
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};
