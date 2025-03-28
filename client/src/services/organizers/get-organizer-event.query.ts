import { useQuery } from "@tanstack/react-query";

import { IGetOrganizerEventsResponse } from "../../@types/organizers";
import http from "../../lib/http";

const GetOrganizerEventsApi = async ({
  id,
  eventType,
}: {
  id: string | undefined;
  eventType: string;
}): Promise<IGetOrganizerEventsResponse> => {
  const response = await http.get(`/organizer-events/${id}`, {
    params: {
      eventType,
    },
  });
  return response.data;
};

const useGetOrganizerEventsQuery = ({
  id,
  eventType,
}: {
  id: string | undefined;
  eventType: string;
}) => {
  return useQuery({
    queryKey: ["organizerEvents", id, eventType],
    queryFn: () => GetOrganizerEventsApi({ id, eventType }),
  });
};

export default useGetOrganizerEventsQuery;
