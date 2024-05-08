import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


import { GlobelData } from '../App';
import { Circles } from 'react-loader-spinner'


const Forgetpass = () => {
    const navigate = useNavigate();
    const {isforgeton,ForgetOn} = useContext(GlobelData)
useEffect(() => {
 if(!isforgeton){
    navigate('/')
 }
}, [])
    
const [loader, setloader] = useState(false);
    const [cpass, setcpass] = useState("");
    const [password, setpassword] = useState("");
    const [otp, setotp] = useState();
    const [otpmatch, setotpmatch] = useState(false);
    const ref = useRef(null);
    const [open , setOpen] = useState(false);
    function showFunction(){
        ref.current.type === "password"? ref.current.type = "text" : ref.current.type = "password";
        setOpen(!open)
    }
    function passwordsave(){
        if(password!=""&&password==cpass){
            fetch("https://backendclothing.onrender.com/updatepassword",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email:localStorage.getItem('email'),
                    password:password,

                })
            }).then((resp)=>resp.json()).then((data)=>{
                console.log(data)
                if(data.errors){
                    alert(data.errors[0].msg)
                    setloader(false)
                }
                if(data.data){
                    alert('password updated')
                    navigate("/")
                    setloader(false)
                    ForgetOn(0)
                }
            })
            setloader(true)
            
        }else{
            alert('conform password is not Match')
        }
        
    }
    
    function back(){
         navigate("/");
    }

    function checkotp(){
        fetch("https://backendclothing.onrender.com/otpcheck",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:localStorage.getItem('email'),
                otp:otp
            })
        }).then((resp)=>resp.json()).then((result)=>{
            if(result.message){
                alert(result.message)
                setloader(false)
            }
            if(result.data){
                setotpmatch(true)
                setloader(false)
            }
        })
      setloader(true)
    }
  return (
    <>
   <div className='w-full h-[100vh] flex justify-center items-center bg-[#e67878]'>
    {
        otpmatch?<>
         <div className=' rounded-[10px] border w-[20rem] h-max flex flex-col justify-center items-center p-10 gap-3 '>
        <h1 className='text-2xl ff1 font-[600]'>CHANGE&nbsp;PASSWORD</h1>
        <input value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='  Enter Your New Password' className=' rounded-[5px] pl-2 h-10 w-60 border outline-none' type="text" />
       
       <div className=' relative    flex'>
       <input value={cpass} onChange={(e)=>setcpass(e.target.value)} ref={ref}  placeholder='Conform  Your  Password' className= ' rounded-[5px] pl-2 h-10 w-60   border outline-none' type="text" />
       
       </div>
        <button onClick={passwordsave} className=' rounded-[10px] w-52 h-10 bg-[green]'>Submit</button>
        <p className=' font-[800] text-[#123c12] text-[15px]'>
          <span onClick={back} className=' cursor-pointer text-[blue]'>back</span> </p>

     </div>
        </>:<>
        <div className=' rounded-[10px] border w-[20rem] h-max flex flex-col justify-center items-center p-10 gap-3 '>
        <h1 className='text-2xl ff1 font-[600]'>ENTER OTP</h1>
        <input value={otp} onChange={(e)=>setotp(e.target.value)} placeholder='  Enter Your OTP' className=' rounded-[5px] pl-2 h-10 w-60 border outline-none' type="text" />
       
       
        <button onClick={checkotp} className=' rounded-[10px] w-52 h-10 bg-[green]'>Submit</button>
        <p className=' font-[800] text-[#123c12] text-[15px]'>
          <span onClick={back} className=' cursor-pointer text-[blue]'>back</span> </p>

     </div>
        </>
    }
  
     
   </div>

   {
    loader?<> 
     <div className=' absolute top-0 left-0  justify-center  items-center flex w-full h-[100vh] bg-[#e67878]'>
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
    </>:null
   }
    </>
  )
}

export default Forgetpass