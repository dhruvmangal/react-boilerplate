import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TOKEN_KEY } from '../../utils/constants';
import { setItem } from '../../services/localstorage';

function Login() {

  const navigate = useNavigate();

  const login = ()=>{
    setItem(TOKEN_KEY, "token");
    navigate("/", { replace: true });
  }
  
  return (
    <main style={{textAlign: "center"}}>
      <h2>Login</h2>
      <Button variant='contained' onClick={login} >Login</Button>
    </main>
  )
}

export default Login