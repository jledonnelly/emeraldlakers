import React from 'react';
import styles from './ImageSlider.module.css';
import Card from './Card';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


const ImageSlider = () => {
  return (
    
    <div className={styles.ImageSlider} id='ImageSlider'>
      <div className={styles.heading}>
        <h1>Meet the Lakers Players</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Click on a player for in-depth interviews</span>
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            340: {
              width: 200,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 4,
            },
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          
          <SwiperSlide>
          <a href="https://www.youtube.com/watch?v=dXS7LWFT8z0" target="_blank" rel="noopener noreferrer">
            <Card
              image={require('/Users/jaimedonnelly/Desktop/react-emerald-lakers-2/src/images/player1.png')}
              player='Kane'
            /></a>
          </SwiperSlide>
          
          <SwiperSlide>
          <a href="https://www.youtube.com/watch?v=dXS7LWFT8z0" target="_blank" rel="noopener noreferrer">
            <Card
              image={require('/Users/jaimedonnelly/Desktop/react-emerald-lakers-2/src/images/player1.png')}
              player='Andre'
            /> </a>
          </SwiperSlide>
          <SwiperSlide>
          <a href="https://www.youtube.com/watch?v=dXS7LWFT8z0" target="_blank" rel="noopener noreferrer">
            <Card
              image={require('/Users/jaimedonnelly/Desktop/react-emerald-lakers-2/src/images/player1.png')}
              player='Jordan'
            /></a>
          </SwiperSlide>
          <SwiperSlide>
          <a href="https://www.youtube.com/watch?v=dXS7LWFT8z0" target="_blank" rel="noopener noreferrer">
            <Card
              image={require('/Users/jaimedonnelly/Desktop/react-emerald-lakers-2/src/images/player1.png')}
              player='Thomas'
            /> </a>
          </SwiperSlide>
          <SwiperSlide>
          <a href="https://www.youtube.com/watch?v=dXS7LWFT8z0" target="_blank" rel="noopener noreferrer">
            <Card
              image={require('/Users/jaimedonnelly/Desktop/react-emerald-lakers-2/src/images/player1.png')}
              player='William'
            /></a>
          </SwiperSlide>

          <SwiperSlide>
          <a href="https://www.youtube.com/watch?v=dXS7LWFT8z0" target="_blank" rel="noopener noreferrer">
            <Card
              image={require('/Users/jaimedonnelly/Desktop/react-emerald-lakers-2/src/images/player1.png')}
              player='Matthew'
            /> </a>
          </SwiperSlide>
          <SwiperSlide>
          <a href="https://www.youtube.com/watch?v=dXS7LWFT8z0" target="_blank" rel="noopener noreferrer">
            <Card
              image={require('/Users/jaimedonnelly/Desktop/react-emerald-lakers-2/src/images/player1.png')}
              player='Winston'
            /></a>
          </SwiperSlide>
          <SwiperSlide>
          <a href="https://www.youtube.com/watch?v=dXS7LWFT8z0" target="_blank" rel="noopener noreferrer">
            <Card
              image={require('/Users/jaimedonnelly/Desktop/react-emerald-lakers-2/src/images/player1.png')}
              player='Daniel'
            /></a>
          </SwiperSlide>
          <SwiperSlide>
          <a href="https://www.youtube.com/watch?v=dXS7LWFT8z0" target="_blank" rel="noopener noreferrer">
            <Card
              image={require('/Users/jaimedonnelly/Desktop/react-emerald-lakers-2/src/images/player1.png')}
              player='Warren'
            /></a>
          </SwiperSlide>
          <SwiperSlide>
          <a href="https://www.youtube.com/watch?v=dXS7LWFT8z0" target="_blank" rel="noopener noreferrer">
            <Card
              image={require('/Users/jaimedonnelly/Desktop/react-emerald-lakers-2/src/images/player1.png')}
              player='Filip'
            /> </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;