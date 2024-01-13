import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { Footer } from '../../components/footer/Footer';
import './details.css'
import { FaChevronDown } from "react-icons/fa6";

const DetailsPage = () => {

  const [activeIndex, setActiveIndex] = useState(null);
  const refHeight = useRef(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      // Si la sección ya está abierta, la cerramos
      setActiveIndex(null);
    } else {
      // Si la sección está cerrada, la abrimos
      setActiveIndex(index);
    }
  }

  const { feeling } = useParams();
  const [feelingData, setFeelingData] = useState(null);

  useEffect(() => {
    // Dinámicamente importa el archivo correspondiente al sentimiento
    const importFeelingData = async () => {
      try {
        const module = await import(`../../data/details/${feeling}.js`);
        setFeelingData(module.default[0]); // Considerando que el archivo exporta un array
      } catch (error) {
        console.error('Error al importar el archivo de detalles:', error);
        setFeelingData(null);
      }
    };

    importFeelingData();
  }, [feeling]);

  if (!feelingData) {
    // Manejar el caso donde el sentimiento no se encuentra o hay un error al cargar los datos
    return (
      <>
        <Navbar />
        <p>Sentimiento no encontrado</p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="detailContainer">
        <div className="detailContent">
            <div className="detailImg">
                <img src={feelingData.img} alt={feelingData.title} />
            </div>
            
            <div className="detailText">
            <h1>{feelingData.title}</h1>
                <p>{feelingData.p1}</p>
                <p>{feelingData.p2}</p>
                <p>{feelingData.p3}</p>
            </div>
        </div>

        <div className='detailsTips'>
            <div className="detailSubtitle">
                <h2>{feelingData.subtitle1}</h2>
            </div>
                <p className='detailParagraph'>{feelingData.p4}</p>
                <p className='detailParagraph'>{feelingData.p5}</p>


            <div className="detailSubtitle">
                <h2>{feelingData.subtitle2}</h2>
            </div>

              <p className='detailParagraph'>{feelingData.p6}</p>

            {feelingData.tips.map((tip, index) => (
        <div key={index} className={`accordion ${activeIndex === index ? 'active' : ''}`}>

          <button className="accordion-visible" onClick={() => toggleAccordion(index)}>
            <span>{tip.tipTitle}</span>
            <FaChevronDown />
          </button>

          <div className={`accordion-toggle ${activeIndex === index ? 'open' : ''}`} ref={refHeight}>
            <p>
              {tip.tip}
            </p>
          </div>

        </div>
      ))}
        </div>

      </div>
      <Footer />
    </>
  );
};

export default DetailsPage;
