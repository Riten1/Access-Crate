import { useQuery } from "@tanstack/react-query";

import { IGetOrganizerEventsResponse } from "../../@types/organizers";
import http from "../../lib/http";

const GetOrganizerEventsApi = async ({
  id,
  eventType,
  page,
}: {
  id: string | undefined;
  eventType: string;
  page: number;
}): Promise<IGetOrganizerEventsResponse> => {
  const response = await http.get(`/organizer-events/${id}`, {
    params: {
      eventType,
      page, // Include page in the request parameters
    },
  });
  return response.data;
};

const useGetOrganizerEventsQuery = ({
  id,
  eventType,
  page,
}: {
  id: string | undefined;
  eventType: string;
  page: number;
}) => {
  return useQuery({
    queryKey: ["organizerEvents", id, eventType, page], // Include page in the query key
    queryFn: () => GetOrganizerEventsApi({ id, eventType, page }),
  });
};

export default useGetOrganizerEventsQuery;
