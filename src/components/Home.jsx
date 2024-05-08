import React from 'react'
import Header from './header'
import SliderBar from './Slider'
import Component from './components'
import Images from './images'
import ShopLook from './shopLook'
import Inspirations from './Inspirations '
import LastComponents from './lastComponents'
import Footer from './Footer'


const Home = () => {
  return (
    <>
    <Header/>
    <div id='home' className=' h-max pb-5 w-[100%]  overflow-hidden'>
    <SliderBar/>
    <img src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2024-2025/april-2024/26apr/202404-VacayBaliTrip-D%20(1).jpg.transform/i1366x532/image.jpeg" alt="" />
    </div>
    
   <div  className='mybg1 py-7  ' >
   <Component/>
  
   </div>
   <br id='man' /><br /><br /><br /><br />
   <Images/>
   <ShopLook/>
   <Inspirations/>
   <br /><br />
<div className='flex justify-center'>
<img className='rounded-[10px]' src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1618577231276/turmswear-offers.jpg" alt="" />

</div>
<br /><br />
<div id='beauty' className='mybg2 py-7'>
<LastComponents/>

</div>
<br /><br />
<Footer/>
    </>
  )
}

export default Home