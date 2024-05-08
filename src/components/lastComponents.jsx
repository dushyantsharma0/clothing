// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Product from './product';

export default () => {
  const data=[
    { discount:"₹4300",img:'https://imagescdn.pantaloons.com/img/app/product/9/977947-12874763.jpg?q=75&auto=format&w=250&h=400',name:"YU",detail:"Multi-Colored Printed Satin Regular Collar Women Flared Fit Dresses",price:"₹ 1268",off:"53%off"},
    { discount:"₹3200",img:'https://imagescdn.pantaloons.com/img/app/product/9/986242-13055749.jpg?q=75&auto=format&w=250&h=400',name:"ANNABELLE",detail:"Dark Purple Solid Poly Viscose Shirt Collar Women Regular Fit Shirts",price:"₹899",off:"49%off"},
    { discount:"7100",img:'https://imagescdn.pantaloons.com/img/app/product/8/810609-9655410.jpg?q=75&auto=format&w=250&h=400',name:"ANNABELLE",detail:"Medium Grey Patterned Round Neck Formal Knee Length Cap Sleeves Women Slim Fit Dress",price:"₹ 1138",off:"33%off"},
    { discount:"₹5200",img:'https://imagescdn.pantaloons.com/img/app/product/8/816841-9763994.jpg?q=75&auto=format&w=250&h=400',name:"MARIGOLD LANE",detail:"Yellow Printed Round Neck Casual Knee Length 3/4th Sleeves Women Regular Fit Dress",price:"₹ 1099",off:"50%off"},

    {discount:"₹1200",img:'https://imagescdn.pantaloons.com/img/app/product/9/983290-12980687.jpg?q=75&auto=format&w=250&h=400',name:"AKKRITI",detail:"Off White Printed Round Neck Casual Sleeveless Women Regular Fit Ethnic Dresses",price:"₹ 1299",off:"39%off"},
    { discount:"₹1000",img:'https://imagescdn.pantaloons.com/img/app/product/9/985633-13035371.jpg?q=75&auto=format&w=250&h=400',name:"AKKRITI",detail:"Cream Printed Cotton Flex Shirt Collar Women Regular Fit Dresses",price:"₹ 1299",off:"39%off"},
    { discount:"₹5400",img:'https://imagescdn.pantaloons.com/img/app/product/6/684232-10836649.jpg?q=75&auto=format&w=250&h=400',name:"ANTRFRTLLE",detail:"Medium Blue Printeded Round Neck Casual Thigh-Length Half Sleeves Women Regular Fit Dress",price:"₹ 548",off:"39%off"},
    { discount:"₹3400",img:'https://imagescdn.pantaloons.com/img/app/product/8/863754-11015520.jpg?q=75&auto=format&w=250&h=400',name:"PEOPLE",detail:"Light Blue Solid Ankle Length Mid Rise Casual Women Skinny Fit Jeans",price:"₹ 991",off:"38%off"},


  ]
  return (
   <>
   <h1 className=' underline text-[#5f4747] ff1 text-3xl mb-7 font-[600] ml-[200px]'>Brands You Love</h1>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      
      loop
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        data.map((item,index)=>{
          return(
            <SwiperSlide key={index}  ><Product discount={item.discount} img={item.img} name={item.name} detail={item.detail} price={item.price} off={item.off}/></SwiperSlide>
          )
        })
      }
      
      
      
    </Swiper>
   </>
  );
};