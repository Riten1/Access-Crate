import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Search01Icon,
} from "hugeicons-react";

import { OrganizerCard } from "../components/OrganizerCard";
import Header from "../components/ui/Header";
import useGetOrganizersQuery from "../services/organizers/get-organizers.query";

export const Organizers = () => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState(1);
  const { data: organizers } = useGetOrganizersQuery(search, page);
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col gap-8 bg-supporting-bg-dark px-4 py-28 sm:px-8 md:px-16 md:py-32">
      {" "}
      <Header
        title="Our Organizers"
        description="Discover trusted event organizers and venues for your next experience"
      />{" "}
      <div className="rounded-xl bg-supporting-bg px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center gap-2 rounded-lg border border-core-secondary/30 px-2 py-2">
          <Search01Icon className="text-core-primary" />
          <input
            placeholder="Search for organizers"
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="w-full bg-transparent text-white focus:outline-none"
          />
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {organizers && organizers?.data.length > 0 ? (
          organizers.data.map((organizer) => (
            <div
              className="rounded-lg border border-core-secondary/30"
              onClick={() => navigate(`/organizer/${organizer._id}`)}
            >
              <OrganizerCard key={organizer._id} organizer={organizer} />
            </div>
          ))
        ) : (
          <p className="col-span-full h-full text-center text-core-secondary">
            No organizers found
          </p>
        )}
      </div>
      {organizers && organizers?.data.length > 0 && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            className="rounded-full bg-supporting-bg p-2 text-core-primary disabled:opacity-50 sm:p-3"
          >
            <ArrowLeft01Icon className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <span className="text-sm text-white sm:text-base">
            Page {page} of {organizers?.totalPages || 1}
          </span>
          <button
            disabled={organizers?.totalPages === page}
            onClick={() => setPage((prev) => prev + 1)}
            className="rounded-full bg-supporting-bg p-2 text-core-primary disabled:opacity-50 sm:p-3"
          >
            <ArrowRight01Icon className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      )}
    </div>
  );
};
