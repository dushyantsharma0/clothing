import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Product from './product';
const img=[
{img:"https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/mar2024/week-4/instagram-feed/202403-IG-02-ashokasen_-D.jpg.transform/i323x338/image.jpeg",name:"ashoka.sen_shivya"},
{img:"https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/mar2024/week-4/instagram-feed/202403-IG-03-shivya_jhaa-D.jpg.transform/i323x338/image.jpeg",name:'rajan.new'},
{img:"https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/mar2024/week-4/instagram-feed/202403-IG-04-piku__1925-D.jpg.transform/i323x338/image.jpeg",name:"pinku_121"},    
{img:'https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/mar2024/week-4/instagram-feed/202403-IG-05-misscalcutta_-D.jpg.transform/i323x338/image.jpeg',name:'misscalcutta_._'},
{img:"https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/mar2024/week-4/instagram-feed/202403-IG-01-happy_chopstickss-D.jpg.transform/i323x338/image.jpeg",name:"happy_chopsticks"},
{img:"https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/mar2024/week-4/instagram-feed/202403-IG-02-ashokasen_-D.jpg.transform/i323x338/image.jpeg",name:"ashoka.ran"},
{img:"https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/mar2024/week-4/instagram-feed/202403-IG-03-shivya_jhaa-D.jpg.transform/i323x338/image.jpeg",name:"shivani"},
{img:"https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/mar2024/week-4/instagram-feed/202403-IG-04-piku__1925-D.jpg.transform/i323x338/image.jpeg",name:"rabbit new"},
]
const Inspirations  = () => {
  return (
    <>
   <h1 id='brands' className=' text-2xl mb-7 font-[600] ml-[200px]'>New Wones...</h1>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      breakpoints={{
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
        1280:{
          slidesPerView: 4
        }
      }}
      navigation
      
      loop
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {
            img.map((resp)=>{
                return(
                    <SwiperSlide>
                        <img className='rounded-[10px] ' src={resp.img} alt={resp.name} />
                        <h1 className='text-xl font-[600] '>{resp.name}</h1>
                    </SwiperSlide>
                )
            })
        }
      
  
      
    </Swiper>
    
   </>
  )
}

export default Inspirations 