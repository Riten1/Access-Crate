import org1 from "../assets/org1.jpg";
import org2 from "../assets/org2.png";
import { Badge } from "../components/ui/Badge";
import Header from "../components/ui/Header";

export const TopOrganizers = () => {
  const organizers = [
    {
      name: "Riten Events",
      image: org1,
      events: 100,
      tags: ["Sports", "Music", "Education"],
    },
    {
      name: "Saugat Events",
      image: org2,
      events: 100,
      tags: ["Sports", "Education"],
    },
    {
      name: "Riten Events",
      image: org1,
      events: 100,
      tags: ["Sports", "Music", "Education"],
    },
    {
      name: "Riten Events",
      image: org1,
      events: 100,
      tags: ["Sports", "Music", "Education"],
    },
    {
      name: "Riten Events",
      image: org1,
      events: 100,
      tags: ["Sports", "Music", "Education"],
    },
  ];

  return (
    <div className="flex flex-col gap-12 bg-supporting-bg p-6 md:p-12 lg:px-40 lg:py-20">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Header
          title="Top Organizers"
          description="Discover events from trusted organizers"
          className="text-white"
        />
      </div>

      <div className="flex flex-col gap-4">
        {/* First Row - 2 Columns on Large Screens */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {organizers.slice(0, 2).map((organizer, index) => (
            <OrganizerCard key={index} organizer={organizer} />
          ))}
        </div>

        {/* Second Row - 3 Columns on Large Screens */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {organizers.slice(2, 5).map((organizer, index) => (
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

// Organizer Card Component for Reusability
const OrganizerCard = ({ organizer }) => {
  return (
    <div className="flex w-full cursor-pointer flex-col items-center justify-center gap-6 rounded-lg bg-supporting-bg-dark p-6">
      {/* Organizer Image */}
      <div className="flex h-24 w-24 justify-center overflow-hidden rounded-full bg-gray-700">
        <img
          src={organizer.image}
          className="object-cover"
          alt={organizer.name}
        />
      </div>

      {/* Organizer Name & Events Count */}
      <div className="text-center">
        <p className="text-xl font-semibold text-white">{organizer.name}</p>
        <p className="text-sm text-core-secondary">{organizer.events} events</p>
      </div>

      {/* Organizer Tags */}
      <div className="flex flex-wrap justify-center gap-2">
        {organizer.tags.map((tag, i) => (
          <Badge key={i} name={tag} className="py-1 text-xs" />
        ))}
      </div>
    </div>
  );
};
