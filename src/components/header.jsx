import React, { useContext, useState } from 'react'

import { FaSearch } from "react-icons/fa";

import { FaRegUser } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { Circles } from 'react-loader-spinner'
import { GlobelData } from '../App';
import { useNavigate } from 'react-router-dom';
 


const Header = () => {
  const navigate = useNavigate()
  const {ForgetOn} = useContext(GlobelData)

  const [loader, setloader] = useState(true);
  function logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('name')

    localStorage.removeItem('user')
    localStorage.removeItem('email')


    window.location.reload()

  }
  function sendOtp(){
    fetch('https://backendclothing.onrender.com/forgetPass',{ 
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:localStorage.getItem('email')
      })

    }).then((resp)=>resp.json()).then((data)=>{
      console.log(data)
      if(data.message){
        alert(data.message)
        setloader(true)
      }
      if(data.data){
        localStorage.setItem('forget',true)
        ForgetOn(1)
        
     navigate('/forget')
      }
    })
    setloader(false)
    

  }
   
  return (
    <>
    {
      loader?<> <div className=' z-30  w-full fixed'>
      <div className=' pr-12 justify-between bg-[#00B0B5] w-full h-[4rem] flex items-center'>
        <h1 className='mytext text-xl ml-[10px] md:mytext'>SantaBrothers</h1>
      <div className= ' hidden  uppercase md:hidden   lg:flex lg:gap-5 xl:gap-12 text-white font-[700] ml-10'>
      <h1 className='hover1'><a href="#women">Women</a></h1>
        <h1 className='hover1'> <a href="#man"> Mans</a></h1>
        <h1 className='hover1'> <a href="#kids">Kids</a></h1>
        <h1 className='hover1'><a href="#home">Home</a></h1>
        <h1 className='hover1'><a href="#beauty">Beauty</a></h1>
        <h1 className='hover1'><a href="#brands">Brands</a></h1>
      </div>
      <div className=' hidden  md:flex relative'>
          <input   className='  px-4   rounded-[10px] outline-none border-2 bg-[#d5eaeb] h-[2.4rem] text-[0.7rem] w-[14rem]' type="text" name="" id="" placeholder='Search for products and more...' />
      <FaSearch className=' text-[#969090] absolute right-2 top-3'/>
      </div>
    <div className='flex  text-[1.5rem] text-[white] gap-6'>
    <FaRegUser className='hover2main'  />
    <div className='hover2 text-xl px-10 py-5 rounded-[10px] right-10 top-10 z-40  fixed w-60 h-40 bg-[#ddd]'>
  <div className='flex justify-center gap-2'>
  <h1 className='  text-[black] text-2xl text-center  mb-2  '><FaRegUser  /> </h1>
    <h1 className='text-[blue] text-center'>{localStorage.getItem('name')}</h1>
  </div>
    <button onClick={logout} className=' mb-4 rounded-[5px] font-[700] text-[white] w-full h-8   bg-[#9e2c2c]'>LogOut</button>
    <button onClick={sendOtp} className=' rounded-[5px] font-[700] text-[white] w-full h-8   bg-[#9e2c2c]'>Forget Password</button>

  </div>
    <FiHeart  />
    <IoBagOutline />
    </div>
      </div>
      
  </div>
  
  <div className='w-full h-[63px]'></div>

      </>:<>
      <div className=' justify-center  items-center flex w-full h-[100vh] bg-[#e67878]'>
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
   
   
   
    </>
  )
}

export default Header