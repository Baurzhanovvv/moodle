import React from 'react'
import './main.css'
import vector from './vector.svg'
import cap from './cap.svg'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Main() {
    return (
        <div className='main'>
            <div className="main-bg">
                <div className="container">
                    <div className="main-main">
                        <div className="main-text">
                            LEARN FROM ANYWHERE
                        </div>
                        <div className="main-desc-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        </div>
                        <div className="btn">
                            <a href="#" className='btn-a'>
                                <div className="btn-text">CLICK HERE</div>
                            </a>
                        </div>
                        <div className="vector">
                            <a href="#">
                                <img src={vector} alt="" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="main-achieves">
                <div className="achieves-bg">
                    <div className="container">
                        <div className="achieves-menu">
                            <div className="achieves-text">
                                <div className="achieves-main-text">OUR ACHIEVES</div>
                                <div className="achieves-desc-text">
                                diwamdawidmaimdiwadiwamdawidmaimdiwadiwamdawidmaimdiwa
                                diwamdawidmaimdiwadiwamdawidmaimdiwadiwamdawidmaimdiwa
                                </div>
                            </div>
                            <div className="achieves-cards">
                                <div className="achieves-card">
                                    <img src={cap} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="swiper-container">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide>
                            <img src="https://via.placeholder.com/500" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://via.placeholder.com/500" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://via.placeholder.com/500" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://via.placeholder.com/500" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
