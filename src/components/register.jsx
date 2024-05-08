import React, { useEffect, useRef, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Circles } from 'react-loader-spinner'
const Register = () => {

    useEffect(() => {
        if(localStorage.getItem('user')){
          navigate("/")
        }
       }, [])

    const navigate = useNavigate();
    const [loder, setloder] = useState(false);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState();
    const ref = useRef(null);
    const [open , setOpen] = useState(false);
    function showFunction(){
        ref.current.type === "password"? ref.current.type = "text" : ref.current.type = "password";
        setOpen(!open)
    }
    function sendData(){
        if(name ==""||password==""||email==""){
          alert('Please enter all fields')

            
        }else{
            fetch('https://backendclothing.onrender.com/register',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:name,
                    email:email,
                    password:password
                })
            }).then((resp)=>resp.json()).then((data)=>{
                if (data.message){
                    alert(data.message)
                    setloder(false)
                    setemail("")
                }
                if(data.errors){
                    console.error(data.errors[0])
                    alert(data.errors[0].msg)
                    setloder(false)
                }if(data.data){
                    alert("you have successfully registered")
                    setloder(false)
                    navigate("/login")
                    setname("")
             setemail("")
             setpassword("")
                }
            })

         setloder(true)


             
             
             
        }
       
    }
  
    function gotologin(){
         navigate("/login")
    }
  return (
    <>
   <div className='w-full h-[100vh] flex justify-center items-center bg-[#e67878]'>
   <h1 className='mytext top-2  font-[900] text-[#26256b]  text-[2rem] absolute'> SantaBrothers CLOTHING CLUB....</h1>

   <div className=' rounded-[10px] border w-[20rem] h-max flex flex-col justify-center items-center p-10 gap-3 '>
        <h1 className='text-3xl ff1 font-[600]'>REGISTER&nbsp;FORM</h1>
        <input value={name} onChange={(e)=>setname(e.target.value)} type="name" className=' rounded-[5px] pl-2 h-10 w-60 border outline-none' placeholder='Enter Your Name' />
        <input value={email} onChange={(e)=>setemail(e.target.value)} placeholder='  Enter Your Email' className=' rounded-[5px] pl-2 h-10 w-60 border outline-none' type="text" />
       
       <div className=' relative    flex'>
       <input value={password} onChange={(e)=>setpassword(e.target.value)} ref={ref}  placeholder='Enter Your Password' className= ' rounded-[5px] pl-2 h-10 w-60   border outline-none' type="password" />
        {
         open?<FaEye  onClick={showFunction}  className=' cursor-pointer absolute text-2xl right-2 top-2'/>:
         <IoEyeOffSharp onClick={showFunction}  className=' cursor-pointer absolute text-2xl right-2 top-2'/>
        }
       </div>
        <button onClick={sendData} className=' rounded-[10px] w-52 h-10 bg-[green]'>Submit</button>
        <p className=' font-[800] text-[#123c12] text-[15px]'><span onClick={gotologin} className=' cursor-pointer text-[blue]'>click here</span>  if already register</p>
     </div>
   </div>



   {
    loder?<> 
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

export default Register