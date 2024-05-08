import { createContext, lazy, useEffect, useState } from 'react'
import { Lazy } from 'react-lazy'
import './App.css'
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import Header from './components/header'
  import Home from'./components/Home'
import ProtactRouter from './auth/fistAuth'
import Login from './components/login'
import Register from './components/register'
import Forgetpass from './components/forgetpassword'


 export const GlobelData=createContext()


function AppMain() {
    
   
const [isforgeton, setisforgeton] = useState(0);

  const ForgetOn=(item)=>{
            console.log(item)
            setisforgeton(item)
  }

  


  return (
    <>
      
 <GlobelData.Provider value={{ForgetOn:ForgetOn,isforgeton:isforgeton}}>
 
 
     <Router>
      <Routes>
        
        <Route path="/"   element={<ProtactRouter user={localStorage.getItem('user')} ><Home /></ProtactRouter>} />
        <Route path="/register"   element={<Register/>} />
        <Route path="/login"   element={<Login/>} />
        <Route path="/forget"   element={<Forgetpass/>} />


        
      </Routes>
     </Router>
     </GlobelData.Provider>

    </>
  )
}

export default AppMain
