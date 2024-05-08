import React, {  useEffect, useRef, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

import { Circles } from 'react-loader-spinner'



const Login = () => {
  const [loader, setloader] = useState(true);
 useEffect(() => {
  if(localStorage.getItem('user')){
    navigate("/")
  }
 }, [])
  
  
  const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const ref = useRef(null);
    const [open , setOpen] = useState(false);
    function showFunction(){
        ref.current.type === "password"? ref.current.type = "text" : ref.current.type = "password";
        setOpen(!open)
    }
    function sendData(){
       
          fetch("https://backend-clothing.vercel.app/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
          }).then((resp)=>resp.json()).then((data)=>{
            if(data.errors){
              alert(data.errors[0].msg)
              setloader(true)
            }if(data.message){
              alert(data.message)
              setloader(true)
            }if(data.data){
             
            
              localStorage.setItem('email',data.data.email)
              localStorage.setItem('name',data.data.name)
              localStorage.setItem('accessToken',data.accessToken)
              localStorage.setItem('user',true)
              location.reload()
              
              
            }
          })
          setloader(false)
        }
        
    
    
    function gotoregister(){
         navigate("/register");
    }
  return (
    <>
   <div className='w-full h-[100vh] flex justify-center items-center bg-[#e67878]'>
   {
    loader?<>
    <div className=' rounded-[10px] border w-[20rem] h-max flex flex-col justify-center items-center p-10 gap-3 '>
        <h1 className='text-3xl ff1 font-[600]'>LOGIN FORM</h1>
        <input value={email} onChange={(e)=>setemail(e.target.value)} placeholder='  Enter Your Email' className=' rounded-[5px] pl-2 h-10 w-60 border outline-none' type="text" />
       
       <div className=' relative    flex'>
       <input value={password} onChange={(e)=>setpassword(e.target.value)} ref={ref}  placeholder='Enter Your Password' className= ' rounded-[5px] pl-2 h-10 w-60   border outline-none' type="password" />
        {
         open?<FaEye  onClick={showFunction}  className=' cursor-pointer absolute text-2xl right-2 top-2'/>:
         <IoEyeOffSharp onClick={showFunction}  className=' cursor-pointer absolute text-2xl right-2 top-2'/>
        }
       </div>
        <button onClick={sendData} className=' rounded-[10px] w-52 h-10 bg-[green]'>Submit</button>
        <p className=' font-[800] text-[#123c12] text-[15px]'>
          <span onClick={gotoregister} className=' cursor-pointer text-[blue]'>click here</span>  for  registation</p>

     </div>
    </>:<>
   <div>
   <Circles
  height="100"
  width="180"
  color="red"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
  <h1 className=' text-5xl font-[900] text-[red]'>loding...</h1>
   </div>
    </>
   }
     
   </div>
    </>
  )
}

export default Login