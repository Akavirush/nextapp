import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { MainSwiper } from '@/components/Swiper/MainSwiper';
import { MainArticles } from '@/components/Articles/MainArticles';


export default function Home() {
  return (
    <main>
      <div className='container'>
        <section className='home-cover'>
          <h2>Анонсы</h2>
          <MainSwiper />
        </section>

        <section className='home-news'>
          <h2>Новости</h2>
          <ul>
              <li>
                <p className='home-news__data'>2 октября</p>
                <p className='home-news__link'><Link href='/'><img src='/image/news-pic-1.png' alt='/'></img>Иконы рока. Как всё начиналось: Крис Корнел</Link></p>
              </li>
              <li>
                <p className='home-news__data'>2 октября</p>
                <p className='home-news__link'><Link href='/'><img src='/image/news-pic-2.png' alt='/'></img>«Русская Медиагруппа» выступила инфопартнёром мачта Лиги легенд «Зенит» - ЦСКА</Link></p>
              </li>
              <li>
                <p className='home-news__data'>2 октября</p>
                <p className='home-news__link'><Link href='/'><img src='/image/news-pic-3.png' alt='/'></img>Рок и автомобили: культовые машины рок-звезд</Link></p>
              </li>
              <li>
                <p className='home-news__data'>2 октября</p>
                <p className='home-news__link'><Link href='/'><img src='/image/news-pic-4.png' alt='/'></img>21 сентября на «Moscow Raceway» состоится финал кольцевых автогонок суперкаров</Link></p>
              </li>
              <li>
                <p className='home-news__data'>2 октября</p>
                <p className='home-news__link'><Link href='/'><img src='/image/news-pic-5.png' alt='/'></img>История одного хита: Highway to Hell (AC/DC)</Link></p>
              </li>
              <li>
                <p className='home-news__data'>2 октября</p>
                <p className='home-news__link'><Link href='/'><img src='/image/news-pic-6.png' alt='/'></img>Рокеры, чья дружба проверена временем</Link></p>
              </li>
          </ul>
        </section>

        <section className='home-about'>
          <h2>О компании</h2>
          <div className='home-about__columns'>
            <p className='home-about__txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ex impedit cum accusantium ipsum dignissimos velit! Doloribus esse at, expedita consectetur odit corrupti dolorum. Repellendus amet quos ducimus expedita deserunt?</p>
            <ul>
              <li>
                <p className='home__playlist-name'><Link href="/"><img src="/image/playlist-1.png" className='home__playlist-img'></img>MORRO ROCK</Link></p>
                <img src='/icons/icon-arrow.svg' className='img-button'></img>
                <p className='home__playlist-time'>4h 36m</p>
              </li>
              <li>
                <p className='home__playlist-name'><Link href="/"><img src="/image/playlist-2.png" className='home__playlist-img'></img>PACIFIC DREAMS</Link></p>
                <img src='/icons/icon-arrow.svg' className='img-button'></img>
                <p className='home__playlist-time'>4h 36m</p>
              </li>
              <li>
                <p className='home__playlist-name'><Link href="/"><img src="/image/playlist-3.png" className='home__playlist-img'></img>NIGHT FM</Link></p>
                <img src='/icons/icon-arrow.svg' className='img-button'></img>
                <p className='home__playlist-time'>4h 36m</p>
              </li>
            </ul>
          </div>
        </section>

        <section className='home-posts'>
          <h2>Посты</h2>
          <MainArticles />
        </section>

      </div>
    </main>
  )
}
