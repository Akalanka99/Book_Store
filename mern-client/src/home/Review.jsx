import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

//react icon
import { FaStar } from 'react-icons/fa6';
import { Avatar } from "flowbite-react";
import profic from "../assets/profile.jpg"

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb  '>Our Customers</h2>
      <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border '>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
               <FaStar/> 
               <FaStar/>
               <FaStar/>
               <FaStar/>
            </div>
            {/* text */}
            <div className='mt-7'>
              <p className='mb-5'>Fantastic eBook selection with unbeatable prices! 
                The download process was quick and easy, and the customer service is top-notch. 
                Highly recommend for all your reading needs!</p>
                  <Avatar 
                    alt="avatar of Jese"
                    img={profic}
                    rounded
                    className="w-10 mb-4 rounded-full"
                />
                <h5 className="text-lg font-medium">Samanali</h5>
                <p className="text-base">Actor</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border '>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
               <FaStar/> 
               <FaStar/>
               <FaStar/>
               <FaStar/>
            </div>
            {/* text */}
            <div className='mt-7'>
              <p className='mb-5'>Fantastic eBook selection with unbeatable prices! 
                The download process was quick and easy, and the customer service is top-notch. 
                Highly recommend for all your reading needs!</p>
                  <Avatar 
                    alt="avatar of Jese"
                    img={profic}
                    rounded
                    className="w-10 mb-4 rounded-full"
                />
                <h5 className="text-lg font-medium">Samanali</h5>
                <p className="text-base">Actor</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border '>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
               <FaStar/> 
               <FaStar/>
               <FaStar/>
               <FaStar/>
            </div>
            {/* text */}
            <div className='mt-7'>
              <p className='mb-5'>Fantastic eBook selection with unbeatable prices! 
                The download process was quick and easy, and the customer service is top-notch. 
                Highly recommend for all your reading needs!</p>
                  <Avatar 
                    alt="avatar of Jese"
                    img={profic}
                    rounded
                    className="w-10 mb-4 rounded-full"
                />
                <h5 className="text-lg font-medium">Samanali</h5>
                <p className="text-base">Actor</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border '>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
               <FaStar/> 
               <FaStar/>
               <FaStar/>
               <FaStar/>
            </div>
            {/* text */}
            <div className='mt-7'>
              <p className='mb-5'>Fantastic eBook selection with unbeatable prices! 
                The download process was quick and easy, and the customer service is top-notch. 
                Highly recommend for all your reading needs!</p>
                  <Avatar 
                    alt="avatar of Jese"
                    img={profic}
                    rounded
                    className="w-10 mb-4 rounded-full"
                />
                <h5 className="text-lg font-medium">Samanali</h5>
                <p className="text-base">Actor</p>

            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    
      </div>
    </div>
  )
}

export default Review
