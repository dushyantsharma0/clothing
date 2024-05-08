import React from 'react';
import Slider from "react-slick";

const SliderBar = () => {
    var settings = {
       
        infinite: true,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,  // This line adds side buttons
        
        
        width: "100wh"  // Adjusting the width to 100%
    };

    return (
        <Slider {...settings}>
            <div>
                <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/2024-VacayEdit-D?wid=1300&hei=500&fit=wrap" alt="" />
            </div>
            <div>
                <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/202405-Sun%20sational%20Style-D%20(1)?wid=1300&hei=500&fit=wrap" alt="" />
            </div>
            <div>
                <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/202405-Mothers%20Day%20Special-D%20(1)?wid=1300&hei=500&fit=wrap" alt="" />
            </div>
            <div>
                <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/202404-LeeCooper-D%20(1)?wid=1300&hei=500&fit=wrap" alt="" />
            </div>
            <div>
                <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/202404-Kids%20summer%20offer-D?wid=1300&hei=500&fit=wrap" alt="" />
            </div>
            <div>
                <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/202405-New%20In-D?wid=1300&hei=500&fit=wrap" alt="" />
            </div>
            <div>
                <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/202404-Trendit-D%20(1)?wid=1300&hei=500&fit=wrap" alt="" />
            </div>
          

        </Slider>
    );
}

export default SliderBar;
