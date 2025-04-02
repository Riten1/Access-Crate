import { useQuery } from "@tanstack/react-query";

import { IGetOrganizersResponse } from "../../@types/organizers";
import http from "../../lib/http";

const GetOrganizersApi = async ({
  search,
  page,
}: {
  search?: string;
  page?: number;
}): Promise<IGetOrganizersResponse> => {
  const response = await http.get("/user-organizers", {
    params: {
      search,
      page,
    },
  });
  return response.data;
};

const useGetOrganizersQuery = (
  search: string | undefined,

  page: number
) => {
  return useQuery({
    queryKey: ["organizers", search, page],
    queryFn: () => GetOrganizersApi({ search, page }),
  });
};

export default useGetOrganizersQuery;
