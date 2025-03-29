import { useQuery } from "@tanstack/react-query";

import { IGetOrganizerDetailsResponse } from "../../@types/organizers";
import http from "../../lib/http";

const GetOrganizerDetailsApi = async (
  id: string | undefined
): Promise<IGetOrganizerDetailsResponse> => {
  const response = await http.get(`/organizer/${id}`);
  return response.data;
};

const useGetOrganizerDetailsQuery = ({ id }: { id: string | undefined }) => {
  return useQuery({
    // queryKey: ["organizerDetails"],
    queryFn: () => GetOrganizerDetailsApi(id),
  });
};

export default useGetOrganizerDetailsQuery;
