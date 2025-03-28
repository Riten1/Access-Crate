import { useNavigate } from "react-router-dom";

import { OrganizerData } from "../@types/organizers";
import { getProfilePictureAlternative } from "../utils/pictureAlternative";
import { Badge } from "./ui/Badge";

export const OrganizerCard = ({ organizer }: { organizer: OrganizerData }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/organizer/${organizer._id}`)}
      className="flex w-full cursor-pointer flex-col items-center justify-center gap-6 rounded-lg bg-supporting-bg-dark p-6"
    >
      <div className="flex h-24 w-24 justify-center overflow-hidden rounded-full bg-gray-700">
        {organizer.profile_pic ? (
          <img
            src={organizer.profile_pic}
            className="object-cover"
            alt={organizer.organizer_name}
          />
        ) : (
          <div className="flex items-center justify-center">
            <div className="text-2xl font-semibold text-core-primary">
              {getProfilePictureAlternative(organizer.organizer_name)}
            </div>
          </div>
        )}
      </div>

      <div className="text-center">
        <p className="text-xl font-semibold text-white">
          {organizer.organizer_name}
        </p>
        <p className="text-sm text-core-secondary">
          {organizer.total_events} events
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {organizer.categories.map((tag, i) => (
          <Badge key={i} name={tag} className="py-1 text-xs" />
        ))}
      </div>
    </div>
  );
};
