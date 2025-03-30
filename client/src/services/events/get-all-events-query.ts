import { useQuery } from "@tanstack/react-query";

import { IGetEventsResponse } from "../../@types/events";
import http from "../../lib/http";

const GetEventsApi = async ({
  search,
  category,
  page,
}: {
  search?: string;
  category?: string;
  page?: number;
}): Promise<IGetEventsResponse> => {
  const response = await http.get("/events", {
    params: {
      search,
      category,
      page,
    },
  });
  return response.data;
};

const useGetEventsQuery = (
  search: string | undefined,
  category: string | undefined,
  page: number
) => {
  return useQuery({
    queryKey: ["events", search, category, page],
    queryFn: () => GetEventsApi({ search, category, page }),
  });
};

export default useGetEventsQuery;
