import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import './home.css'

import hero from '../../assets/img/hero.jpg';
import parque from '../../assets/img/parque.png'
import leer from '../../assets/img/leer.png'
import empoderamiento from '../../assets/img/empoderando.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from '../../components/card/Card';

//Importamos datos
import objetives from '../../data/objetive';
import Feelings from '../../components/feelings/Feelings';


const Home = () => {
  return (
    <>
    <Navbar />

    <div className='heroSection'>
        <div className='heroContainer'>
          <div className='heroText'>
              <h1>
                  <span className='textGrey'>Tu</span> salud mental <span className='textGrey'>es</span> importante – <span className='textGrey'>Te damos las</span> herramientas para ayudarte a mejorarla
              </h1>
          </div>
          <div className='heroImg'>
              <img src={hero} alt="hero-img" />
          </div>
        </div>
    </div>

    <Feelings />

    <div className="aboutSection">
      <h2>¿Quiénes somos? ¿Qué hacemos?</h2>

      <div className='aboutCard'>
        <div className='aboutContent'>
          <img className='aboutImg' src={parque} alt="" />
          <h3 className='aboutTitle'>Experiencia a su conveniencia</h3>
        </div>
        <p className='aboutText'>
          Nuestra plataforma combina a la perfección experiencia en salud mental de primer nivel con accesibilidad digital, lo que garantiza que tenga soporte premium en cualquier momento y lugar, sin las limitaciones de los entornos tradicionales.
        </p>
      </div>

      <div className='aboutCard'>
        <div className='aboutContent'>
          <img className='aboutImg' src={leer} alt="" />
          <h3 className='aboutTitle'>Enfoque holístico del bienestar</h3>
        </div>
        <p className='aboutText'>
          Reconocemos que la salud mental no se trata sólo de la mente, sino que abarca varias facetas de la vida. Nuestras estrategias y recursos están diseñados para abordar no solo los síntomas, sino todo el espectro del bienestar, garantizando un enfoque de salud integral.
        </p>
      </div>

      <div className='aboutCard'>
        <div className='aboutContent'>
          <img className='aboutImg' src={empoderamiento} alt="" />
          <h3 className='aboutTitle'>Empoderamiento a través del conocimiento</h3>
        </div>
        <p className='aboutText'>
          Cada interacción tiene como objetivo no sólo apoyar sino también educar. Nuestro objetivo es brindarle el conocimiento y las herramientas para recorrer con confianza su viaje hacia la salud mental.
        </p>
      </div>

    </div>

    <div className="sliderSection">
        <div className="slideSection">
          <h2>La salud mental es crucial por numerosas razones:</h2>
        </div>
        <div className="slideContainer">
          <Swiper
            cssMode={true}
            slidesPerView={3}
            slidesPerGroup={3}
            spaceBetween={10}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            loop={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
          >
            {objetives.map((item) => (
              <SwiperSlide key={item.id}>
                <Card title={item.title} text={item.text} image={item.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </div>

    <Feelings />

    <Footer />
    </>
  )
}

export default Home