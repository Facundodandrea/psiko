import stress from '../assets/img/feelings/rayo.png';
import tdah from '../assets/img/feelings/psychology.png';
import procastination from '../assets/img/feelings/reloj.png';
import asd from '../assets/img/feelings/autismo.png';
import burnout from '../assets/img/feelings/agotamiento.png';
import selfesteem from '../assets/img/feelings/corazon.png';
import fatigue from '../assets/img/feelings/bateria-baja.png';
import socialanxiety from '../assets/img/feelings/paranoia.png';
import ptsd from '../assets/img/feelings/nublado.png';

const links = [
  { 
    id: 1,
    feeling: 'Estrés',
    imgSrc: stress,
    linkTo: '/estres',
  },
  { 
    id: 2,
    feeling: 'TDAH',
    imgSrc: tdah,
    linkTo: '/tdah',
  },
  { 
    id: 3,
    feeling: 'Procastinación',
    imgSrc: procastination,
    linkTo: '/procastinacion',
  },
  { 
    id: 4,
    feeling: 'Agotamiento',
    imgSrc: burnout,
    linkTo: '/agotamiento',
  },
  { 
    id: 5,
    feeling: 'Autoestima',
    imgSrc: selfesteem,
    linkTo: '/autoestima',
  },
  { 
    id: 6,
    feeling: 'Fatiga/Agotamiento',
    imgSrc: fatigue,
    linkTo: '/fatiga-agotamiento',
  },
  { 
    id: 7,
    feeling: 'Ansiedad social',
    imgSrc: socialanxiety,
    linkTo: '/ansiedad-social',
  },
  { 
    id: 8,
    feeling: 'Trastorno de estrés postraumático',
    imgSrc: ptsd,
    linkTo: '/trastorno',
  },
  { 
    id: 9,
    feeling: 'TEA',
    imgSrc: asd,
    linkTo: '/tea',
  },

];

export default links;
