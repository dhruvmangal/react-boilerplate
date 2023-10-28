
// import { Login } from "@mui/icons-material";
import Home from "../components/Home/Home";
import Search from "../components/Search/Search";
import Login from "../pages/Login";


const RouteList = [
  {
    name: 'Login',
    path: '/login',
    component: Login,
  },
  // {
  //   name: 'Search',
  //   path: '/search',
  //   component: Search,
  // }
];

export const ProtectedRouteList = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Search',
    path: '/search',
    component: Search,
  }
];

export default RouteList;