import { useNavigate } from "react-router-dom";

import { ArrowRight02Icon } from "hugeicons-react";

import { EventCard } from "../../components/EventCard";
import SkeletonCards from "../../components/skeleton/CardSkeleton";
import Header from "../../components/ui/Header";
import useFeaturedEventsQuery from "../../services/events/get-events-query";

export const FeaturedEvents = () => {
  const { data: featuredEvents, isLoading } = useFeaturedEventsQuery();
  const navigate = useNavigate();

  return (
    <div className="bg-supporting-bg-dark p-6 sm:p-12 md:px-24 md:py-16 lg:px-40 lg:py-20">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
        <Header
          title="Featured Events"
          description="Don't miss these popular events"
          className="text-center text-white sm:text-left"
        />
        <div
          onClick={() => navigate("/events")}
          className="flex cursor-pointer items-center gap-2 text-sm text-core-primary hover:underline sm:text-base"
        >
          <p>View all featured events</p>
          <ArrowRight02Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading && <SkeletonCards />}
        {featuredEvents?.data.map((event) => (
          <div
            key={event._id}
            onClick={() => navigate(`/event/${event._id}`)}
            className="cursor-pointer"
          >
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};
