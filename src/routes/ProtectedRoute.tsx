import * as React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { TOKEN_KEY } from '../utils/constants'
import { Button } from '@mui/material'
import { getItem, setItem } from '../services/localstorage'
// import Header from '../components/header/Header'
// import { isLoggedIn } from '../services/auth'



function ProtectedRoute(){  
  if (!! getItem(TOKEN_KEY)) {
    return (
      <>
        <Header/>
        <Outlet />
      </>
    ) 
      
  }
  return <Navigate to="/login" replace={true} />
}

export default ProtectedRoute;
      
function Header() {

  const navigate = useNavigate();

  const logout = ()=>{
    setItem(TOKEN_KEY, "");
    navigate("/login", { replace: true });
  }

  return <header>
    Header
    <Button onClick={logout}> Logout </Button>
  </header>;
}