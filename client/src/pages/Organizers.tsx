import React from "react";

import Header from "../components/ui/Header";

export const Organizers = () => {
  return (
    <div className="flex w-full flex-col gap-8 bg-supporting-bg-dark px-4 py-20 sm:px-8 md:px-16 md:py-32">
      <Header
        title="Our Organizers"
        description="Discover trusted event organizers and venues for your next experience"
      />{" "}
    </div>
  );
};
