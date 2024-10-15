'use client';

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='container'>
        <section className='home-cover'>
          <h2>Анонсы</h2>
          <div className="card-wrapper">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              spaceBetween={10}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints= {{
                340: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
            >
              <SwiperSlide><a href='/'><img src='/image/announce-pic-1.jpg' className='card-image'></img></a></SwiperSlide>
              <SwiperSlide><a href='/'><img src='/image/announce-pic-2.jpg' className='card-image'></img></a></SwiperSlide>
              <SwiperSlide><a href='/'><img src='/image/announce-pic-3.jpg' className='card-image'></img></a></SwiperSlide>
              <SwiperSlide><a href='/'><img src='/image/announce-pic-4.jpg' className='card-image'></img></a></SwiperSlide>
              <SwiperSlide><a href='/'><img src='/image/announce-pic-5.jpg' className='card-image'></img></a></SwiperSlide>
              <SwiperSlide><a href='/'><img src='/image/announce-pic-6.jpg' className='card-image'></img></a></SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className='home-news'>
          <h2>Новости</h2>
          <ul>
            <li>
              <p className='home-news__data'>2 октября</p>
              <p className='home-news__link'><a href='/'><img src='/image/news-pic-1.png' alt='/'></img>Иконы рока. Как всё начиналось: Крис Корнел</a></p>
            </li>
            <li>
              <p className='home-news__data'>2 октября</p>
              <p className='home-news__link'><a href='/'><img src='/image/news-pic-2.png' alt='/'></img>«Русская Медиагруппа» выступила инфопартнёром мачта Лиги легенд «Зенит» - ЦСКА</a></p>
            </li>
            <li>
              <p className='home-news__data'>2 октября</p>
              <p className='home-news__link'><a href='/'><img src='/image/news-pic-3.png' alt='/'></img>Рок и автомобили: культовые машины рок-звезд</a></p>
            </li>
            <li>
              <p className='home-news__data'>2 октября</p>
              <p className='home-news__link'><a href='/'><img src='/image/news-pic-4.png' alt='/'></img>21 сентября на «Moscow Raceway» состоится финал кольцевых автогонок суперкаров</a></p>
            </li>
            <li>
              <p className='home-news__data'>2 октября</p>
              <p className='home-news__link'><a href='/'><img src='/image/news-pic-5.png' alt='/'></img>История одного хита: Highway to Hell (AC/DC)</a></p>
            </li>
            <li>
              <p className='home-news__data'>2 октября</p>
              <p className='home-news__link'><a href='/'><img src='/image/news-pic-6.png' alt='/'></img>Рокеры, чья дружба проверена временем</a></p>
            </li>
          </ul>
        </section>

        <section className='home-about'>
          <h2>О компании</h2>
          <div className='home-about__columns'>
            <p className='home-about__txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ex impedit cum accusantium ipsum dignissimos velit! Doloribus esse at, expedita consectetur odit corrupti dolorum. Repellendus amet quos ducimus expedita deserunt?</p>
            <ul>
              <li>
                <p className='home__playlist-name'><a><img src="/image/playlist-1.png" className='home__playlist-img'></img>MORRO ROCK</a></p>
                <img src='/icons/icon-arrow.svg' className='img-button'></img>
                <p className='home__playlist-time'>4h 36m</p>
              </li>
              <li>
                <p className='home__playlist-name'><a><img src="/image/playlist-2.png" className='home__playlist-img'></img>PACIFIC DREAMS</a></p>
                <img src='/icons/icon-arrow.svg' className='img-button'></img>
                <p className='home__playlist-time'>4h 36m</p>
              </li>
              <li>
                <p className='home__playlist-name'><a><img src="/image/playlist-3.png" className='home__playlist-img'></img>NIGHT FM</a></p>
                <img src='/icons/icon-arrow.svg' className='img-button'></img>
                <p className='home__playlist-time'>4h 36m</p>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </main>
  )
}
