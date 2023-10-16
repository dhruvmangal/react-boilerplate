import { BASE_URL } from "./constants";
import { useNavigate } from "react-router-dom";

export const paths = {
  searchURL: (searchType: string, searchParam: string, page: string = '1') => `${BASE_URL}/search/users?q=${searchParam}+type:${searchType}&per_page=10&page=${page}`,
  userDetailsURL: (userName: string) => `/users/${userName}`,
}

export const Routing = () => {
  const navigate = useNavigate();

  return {
    homeRoute: () => navigate('/'),
    searchRoute: (searchType: string, searchParam: string, page: number = 1) => navigate(`/search?q=${searchParam}+type:${searchType}&per_page=10&page=${page}`)
  }
}