
import Home from "../components/Home/Home";
import Search from "../components/Search/Search";


const RouteList = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Search',
    path: '/search',
    component: Search
  }
];

export default RouteList;