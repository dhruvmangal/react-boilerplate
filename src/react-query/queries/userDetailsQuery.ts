import axiosInstance from "../../lib/apiClient";
import { useQuery } from "@tanstack/react-query";
import { paths } from "../../utils/paths";

export const getUserDetails = (userName: string) => {
  const queryKey = [`GET_USER_DETAILS_${userName}`];

  const queryFn = async () => {
    const response = await axiosInstance.get(
      paths.userDetailsURL(userName)
    )
    return response;
  }

  return {
    queryKey,
    queryFn
  }
}

export const useGetUserDetails = (userName: string) => {
  const { queryKey, queryFn } = getUserDetails(userName);

  const query = useQuery(
    {
      queryKey,
      queryFn,
      cacheTime: 15000,
      staleTime: 15000
    }
  );

  return query;
}

