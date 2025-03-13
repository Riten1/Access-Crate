import { useQuery } from "@tanstack/react-query";

import { IGetUpcommingEventsHeroResponse } from "../../@types/events";
import http from "../../lib/http";

const GetHeroUpcommingEventsApi =
  async (): Promise<IGetUpcommingEventsHeroResponse> => {
    const response = await http.get("/upcomming-events");
    return response.data;
  };

const useGetHeroUpcommingEventsQuery = () => {
  return useQuery({
    queryKey: ["upcommingEvents"],
    queryFn: GetHeroUpcommingEventsApi,
  });
};

export default useGetHeroUpcommingEventsQuery;
