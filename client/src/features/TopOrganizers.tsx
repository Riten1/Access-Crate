import { OrganizerCard } from "../components/OrganizerCard";
import Header from "../components/ui/Header";
import useGetTop2OrganizersQuery from "../services/organizers/get-top2-organizers.query";
import useGetTop3OrganizersQuery from "../services/organizers/get-top3-organizers.query";

export const TopOrganizers = () => {
  const { data: top2organizers } = useGetTop2OrganizersQuery();
  const { data: top3organizers } = useGetTop3OrganizersQuery();

  return (
    <div className="flex flex-col gap-12 bg-supporting-bg p-6 md:p-12 lg:px-40 lg:py-20">
      <div className="flex items-center justify-between">
        <Header
          title="Top Organizers"
          description="Discover events from trusted organizers"
          className="text-white"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {top2organizers &&
            top2organizers.data.map((organizer, index) => (
              <OrganizerCard key={index} organizer={organizer} />
            ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {top3organizers?.data.map((organizer, index) => (
            <OrganizerCard key={index} organizer={organizer} />
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <button className="primary-btn font-semibold">
          View all organizers
        </button>
      </div>
    </div>
  );
};
