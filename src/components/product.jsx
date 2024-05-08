import React, { useState } from 'react'

const Product = (props) => {
  if(props.detail) {
     
  }
  return (
    <>
    <div className='w-[14rem] h-[29rem] bg-white p-2 rounded-[10px]'>
    <img src={props.img} alt="" />
        <div className='my-2 text-[white] px-2 rounded-full w-max h-max bg-[#c33d53]'>{props.off}</div>
        <h1 className='my-2'>{props.name}</h1>
        {props.detail&&props.detail.length>22?<h1 className='text-[#474545]'>{props.detail.slice(0,22)+"..."}</h1>:<h1  className='text-[#474545]' >{props.detail}</h1>}
       <div className=' my-1 text-[0.8rem] flex gap-3'>
       <h1>{props.price}</h1>    <h1 className=' line-through text-[#7a7676]'>{props.discount}</h1> </div>  
    </div>

    </>
  )
}

export default Product