import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Team.css';

function Team() {

    

    const StarRating = ({ rating }) => {
      const maxStars = 5; // You can change this to set the maximum number of stars
    
      const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= maxStars; i++) {
          const starStyle = {
            fontSize: '24px',
            color: i <= rating ? 'yellow' : 'gray',
            cursor: 'pointer',
            transition: 'color 0.3s',
          };
          stars.push(
            <span key={i} style={starStyle}>
              {i <= rating ? '★' : '☆'}
            </span>
          );
        }
        return stars;
      };
    
      return <div className="star-rating">{renderStars()}</div>;
    };
    
    



    const dataDigitalBestSeller = [
        {
            id: 1,
            date: 'MAY 29 , 2022',
            star:5,
            des: 'loram fhag jdib jbdjih kdfjbsa nbudsb mbhadg nbvyadsf bbiufhoaui uygfa bhjbjbdshb huias gguiash jshauih asui asjiuas ihgiuasg hiahsi ',
            name: 'Robert downey',
            linkImg: 'https://www.jing.fm/clipimg/full/398-3981675_avatar-for-login-form.png',
        },
        {
            id: 2,
            date: 'MAY 29 , 2022',
            star:3,
            des: 'loram fhag jdib jbdjih kdfjbsa nbudsb mbhadg nbvyadsf bbiufhoaui uygfa bhjbjbdshb huias gguiash jshauih asui asjiuas ihgiuasg hiahsi ',
            name: 'Robert downey',
            linkImg: 'https://www.jing.fm/clipimg/full/398-3981675_avatar-for-login-form.png',
        },
        {
            id: 3,
            date: 'MAY 29 , 2022',
            star:3,
            des: 'loram fhag jdib jbdjih kdfjbsa nbudsb mbhadg nbvyadsf bbiufhoaui uygfa bhjbjbdshb huias gguiash jshauih asui asjiuas ihgiuasg hiahsi ',
            name: 'Robert downey',
            linkImg: 'https://www.jing.fm/clipimg/full/398-3981675_avatar-for-login-form.png',
        },
        {
            id: 4,
            date: 'MAY 29 , 2022',
            star:4,
            des: 'loram fhag jdib jbdjih kdfjbsa nbudsb mbhadg nbvyadsf bbiufhoaui uygfa bhjbjbdshb huias gguiash jshauih asui asjiuas ihgiuasg hiahsi ',
            name: 'Robert downey',
            linkImg: 'https://www.jing.fm/clipimg/full/398-3981675_avatar-for-login-form.png',
        },
        {
            id: 5,
            date: 'MAY 29 , 2022',
            star:2,
            des: 'loram fhag jdib jbdjih kdfjbsa nbudsb mbhadg nbvyadsf bbiufhoaui uygfa bhjbjbdshb huias gguiash jshauih asui asjiuas ihgiuasg hiahsi ',
            name: 'Robert downey',
            linkImg: 'https://www.jing.fm/clipimg/full/398-3981675_avatar-for-login-form.png',
        },
        {
            id: 6,
            date: 'MAY 29 , 2022',
            star:4,
            des: 'loram fhag jdib jbdjih kdfjbsa nbudsb mbhadg nbvyadsf bbiufhoaui uygfa bhjbjbdshb huias gguiash jshauih asui asjiuas ihgiuasg hiahsi ',
            name: 'Robert downey',
            linkImg: 'https://www.jing.fm/clipimg/full/398-3981675_avatar-for-login-form.png',
        },
       
    ];
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="main">
            <div class="flex items-center gap-2 justify-center p-3">
                <div class="w-2 h-1 rounded-full bg-white"></div>
                <div class="w-2 h-1 rounded-full bg-white"></div>
                <div class="w-4 h-1 rounded-full bg-white"></div>
                <div class="h-1 w-12 rounded-full bg-white"></div>
                <div class="text-2xl font-bold text-white">Our Services</div>
                <div class="h-1 w-12 rounded-full bg-white"></div>
                <div class="w-4 h-1 rounded-full bg-white"></div>
                <div class="w-2 h-1 rounded-full bg-white"></div>
                <div class="w-2 h-1 rounded-full bg-white"></div>
            </div>
            <div className="countainer p-5">
                <Slider {...settings} >
                    {dataDigitalBestSeller.map((item) => (
                        <div key={item.id} className="card bg-white">
                            <div className='text-center'>
                            <StarRating rating={item.star}  className=""/>
                            </div>
                            <div className="card-top ">

                                <h1 className='text-center text-red-500 font-bold'>{item.date}</h1>
                                <h1 className='text-center text-black m-2 '>{item.des}</h1>
                            </div>
                
                           <div className="card-bottom ">
                                <img src={item.linkImg} alt={item.title} className='w-[50%] m-auto p-4 '/>
                                <div className=''>
                                     <h1 className='text-center text-black  text-2xl'>{item.name}</h1>
                                </div>
                            </div>
                          
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Team;
