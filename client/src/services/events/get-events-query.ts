import { useQuery } from "@tanstack/react-query";

import { IGetFeaturedEventsResponse } from "../../@types/events";
import http from "../../lib/http";

const GetFeaturedEventsApi = async (): Promise<IGetFeaturedEventsResponse> => {
  const response = await http.get("/event", {
    params: {
      eventType: "upcoming",
    },
  });
  return response.data;
};

const useFeaturedEventsQuery = () => {
  return useQuery({
    queryKey: ["featuredEvents"],
    queryFn: GetFeaturedEventsApi,
  });
};

export default useFeaturedEventsQuery;
