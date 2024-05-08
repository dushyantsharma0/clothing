import { lazy, useContext, useEffect, useState } from 'react'
import { Lazy } from 'react-lazy'
import '../App.css'
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import Header from '../components/header'
  import Home from'../components/Home'
import ProtactRouter from '../auth/fistAuth'
import Login from '../components/login'
import Register from '../components/register'
import Forgetpass from '../components/forgetpassword'

import { UserContext } from '../App'



function AppMain() {
    const {dataTrueOrFalse,islogin} = useContext(UserContext);
   
  const [user, setuser] = useState();
  
  useEffect(() => {
    if (localStorage.getItem('user')) {
        dataTrueOrFalse(true)
      setuser(true)
   
      
    } 
  
  }, [])
  console.log('fdrtftr',user)


  return (
    <>
    
     <Router>
      <Routes>
        
        <Route path="/"   element={<ProtactRouter user={user} ><Home /></ProtactRouter>} />
        <Route path="/register"   element={<Register/>} />
        <Route path="/login"   element={<Login/>} />
        <Route path="/forget"   element={<Forgetpass/>} />


        
      </Routes>
     </Router>
     
    </>
  )
}

export default AppMain
