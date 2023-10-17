import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import iphoneImage from '../images/phone2.jpg';
import headphone from '../images/h2.jpg';
import powerbank from '../images/p2.jpg';

function Slider() {
    return (

        <div className=''>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                    
                }}
                className="mySwiper"
            >
                <SwiperSlide>

                    <div className="image relative">
                        <img src={iphoneImage} className="w-[100%] h-[75%]"></img>
                        <div className="title-content absolute top-[25%] left-[4rem]">
                            <h3 className="text-[50px] space-y-5 ">PHONE</h3>
                            <h3 className="text-[50px] font-[700]">Thunderous Bass</h3>
                            <p className="text-[14px] w-[70%] p-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium......</p>
                            <a href="" className="underline px-[2rem] text-[13px] p-2 text-red-500 text-lg font-bold">Buy Now</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image relative">
                        <img src={headphone} className="w-[100%] h-[75%]"></img>
                        <div className="title-content absolute top-[25%] left-[4rem]">
                            <h3 className="text-[50px] space-y-5 ">HEADPHONE</h3>
                            <h3 className="text-[50px] font-[700]">Thunderous Bass</h3>
                            <p className="text-[14px] w-[70%] p-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium......</p>
                            <a href="" className="underline px-[2rem] text-[13px] p-2 text-red-500 text-lg font-bold">Buy Now</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image relative">
                        <img src={powerbank} className="w-[100%] h-[75%]"></img>
                        <div className="title-content absolute top-[25%] left-[4rem]">
                            <h3 className="text-[50px] space-y-5 ">POWER BANK</h3>
                            <h3 className="text-[50px] font-[700]">Thunderous Bass</h3>
                            <p className="text-[14px] w-[70%] p-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium......</p>
                            <a href="" className="underline px-[2rem] text-[13px] p-2 text-red-500 text-lg font-bold">Buy Now</a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider