import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Search01Icon,
} from "hugeicons-react";

import { EventCard } from "../components/EventCard";
import SkeletonCards from "../components/skeleton/CardSkeleton";
import Header from "../components/ui/Header";
import cn from "../lib/classname";
import useGetEventsQuery from "../services/events/get-all-events-query";
import useGetEventCategoriesQuery from "../services/events/get-event-categories-query";

export const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>();
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { data: categories } = useGetEventCategoriesQuery();
  const { data: events, isLoading } = useGetEventsQuery(
    search,
    selectedCategory,
    page
  );

  return (
    <div className="flex w-full flex-col gap-8 bg-supporting-bg-dark px-4 py-28 sm:px-8 md:px-16 md:py-32">
      <Header
        title="All Events"
        description="Discover events based on your interest and category"
      />
      <div className="flex flex-col gap-4">
        <div className="rounded-xl bg-supporting-bg px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center gap-2 rounded-lg border border-core-secondary/30 px-2 py-2">
            <Search01Icon className="text-core-primary" />
            <input
              placeholder="Search for events"
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="w-full bg-transparent text-white focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-4">
          {categories?.data.map((category) => (
            <div
              key={category._id}
              onClick={() =>
                setSelectedCategory((prev) =>
                  prev === category._id ? null : category._id
                )
              }
              className={cn(
                "cursor-pointer rounded-lg border border-core-secondary/30 px-3 py-2 text-sm text-white transition duration-100 hover:bg-core-primary hover:text-supporting-bg sm:px-4 sm:py-2 sm:text-base",
                {
                  "bg-core-primary text-supporting-bg":
                    category._id === selectedCategory,
                }
              )}
            >
              {category.name}
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {isLoading && <SkeletonCards />}
          {events?.data.events && events?.data.events.length > 0 ? (
            events.data.events.map((event) => (
              <div onClick={() => navigate(`/event/${event._id}`)}>
                <EventCard key={event._id} event={event} />
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-core-secondary">
              No events found
            </p>
          )}
        </div>

        {events?.data.events && events?.data.events.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              className="rounded-full bg-supporting-bg p-2 text-core-primary disabled:opacity-50 sm:p-3"
            >
              <ArrowLeft01Icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <span className="text-sm text-white sm:text-base">
              Page {page} of {events?.data.totalPages || 1}
            </span>
            <button
              disabled={events?.data.totalPages === page}
              onClick={() => setPage((prev) => prev + 1)}
              className="rounded-full bg-supporting-bg p-2 text-core-primary disabled:opacity-50 sm:p-3"
            >
              <ArrowRight01Icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
