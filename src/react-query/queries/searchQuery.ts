import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../lib/apiClient';
import { paths } from "../../utils/paths";

export const getGitHubSearchResults = (searchType: string, searchParam: string, searchPage: string) => {
  const queryKey = ['GET_GITHUB_DATA', searchType, searchPage, searchParam];
  const queryFn =  () => {
    return axiosInstance.get(paths.searchURL(searchType, searchParam, searchPage));
  }

  return {
    queryKey,
    queryFn
  }
}

export const useGetGithubSearchQuery = (searchType: string, searchParam: string, searchPage: string) => {
  const {queryKey, queryFn} = getGitHubSearchResults(searchType, searchParam, searchPage);

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