import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import './CardTres.css';
const CopyButton = ({ text, onCopy }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    onCopy();
  };

  return (
    <button className="copy-button" onClick={copyToClipboard}>
      Copiar Texto
    </button>
  );
};

CopyButton.propTypes = {
  text: PropTypes.string.isRequired,
  onCopy: PropTypes.func.isRequired,
};
const CardsCarrousel =() => {
  const [current, setCurrent] = useState(0);
  const Biblioteca = [
    {
      id: 1,
      name: 'Don Quijote',
      author: 'Miguel de Cervantes',
      genre: 'Clásico',
      price: 260,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczOUTHZxPod3SDe1hXlu4ugeaD2-9Wstj0AQa5jpJ2F_QGY_XIdT2wCEFMfYZHqZf3_dTurQI9LyMv1NGf1lZAdWGr3yOqIDrDJknqSfsG_-TASq1okSrqN8MwPCMcYKDzz5sR0jof3Mn6FQ8XXSkaWe6A=w398-h618-s-no?authuser=0',
      synopsis: 'Las aventuras del ingenioso hidalgo Don Quijote y su fiel escudero Sancho Panza.'
    },
    {
      id: 2,
      name: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      genre: 'Ciencia Ficción',
      price: 200,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczP-srpfo63aIc6c3lSpw2d9BV05Xw_3gnfws_cY0uKcg8lQA9Wbm34XlJvOTytLlompEk7BzyhRDRJeDh9aXueHJTa27pBPcpeMaIOB4_fCLY-6JUtFW5DdTatL04W3YEMPxFQCGB2HUl3scKOFPdUwQw=w182-h277-s-no?authuser=0',
      synopsis: 'Un futuro distópico donde los libros son prohibidos.'
    },
    {
      id: 3,
      name: 'El Señor de los Anillos',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasía',
      price: 300,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczM4A1QMcUwDJ2WQNVgcM4oHCFVS1L3F-1LI8SZ6rskzYLXzRd5EEPDLR7q5THdJy00mm16f8HKIRtF8Krw29Z2BGnunQ1Cf-3w9-6PgKyUAw8FXQTc8xPpjfLn-tH993ePb9NTyX0dn7mhGgnWTdceVTg=w250-h405-s-no?authuser=0',
      synopsis: 'Una épica aventura en un mundo de fantasía.'
    },
    {
      id: 4,
      name: 'Carrie',
      author: 'Stephen King',
      genre: 'Terror',
      price: 220,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczOdsKXQ0WwKQ-gi8auLoPaIIikf1uMsDPAnhvEpTPQpilLkPuqLJh-SRmYCTtbyQLtSPwlnj-68A2kbKwCKUf6mXwcOa7X-_PL3g7Tm_czTmu3eRvc1GlKDYloTdJw1n6gHqOwnL-vgmP8oSRBec7ubKA=w178-h282-s-no?authuser=0',
      synopsis: 'Una joven con poderes telequinéticos se desata en venganza.'
    },
    {
      id: 5,
      name: 'Crónicas Marcianas',
      author: 'Ray Bradbury',
      genre: 'Ciencia Ficción',
      price: 180,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczNtHqwdpOhupXkn3sLN8mt_ft27WtDbTv2Oz5QSzasz5S6jX-xb9F3vX1jYxeeMhyF2m7tKWvKJtyoNMZTuts_YpxR0NJxaC1LSEYZbzeubKEt7CkWkyLct0DwraMPnM21W9NAqUJwAt2x3I60PrTCdCQ=w220-h340-s-no?authuser=0',
      synopsis: 'Historias sobre la colonización de Marte.'
    },
    {
      id: 6,
      name: 'El Hobbit',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasía',
      price: 280,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczOFpPftwC9QduLALZWAiModub1KrZ3GMHMsnXvPJRCYrbHILNP0SMvVBDo84rbzo5K5m_2-mbsLjohVIZ3MAZSonQ5ti72-kZcBw-REzcoHpG_2hqz5svc8SwSXpuqyeY9fY4rUKVTWZJ62FKzliaNKdQ=w406-h618-s-no?authuser=0',
      synopsis: 'El inicio de la búsqueda del anillo único.'
    },
    {
      id: 7,
      name: 'El Resplandor',
      author: 'Stephen King',
      genre: 'Terror',
      price: 240,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczMlQhlSrAvHHOqEkIoqRwLthxshlrRubPNAEzVuPdIiDZIvGSPY-yEei5zpVNC7ngYah85QxvDoE11gH4r862v6BjrNQW4knzTbqJsbLcF3Fk4AyYLfRY-x0Xwuzarvn8Ol1OSHjyq1u-0t3D2eM7v11w=w406-h618-s-no?authuser=0',
      synopsis: 'Un hombre acepta un trabajo como cuidador de un hotel aislado.'
    },
    {
      id: 8,
      name: 'Crónicas de Narnia',
      author: 'C.S. Lewis',
      genre: 'Fantasía',
      price: 260,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczNfux_v25Jc48RwhwRL33mw8wAlJ3vG9ldLTDIwEWYyv2FuNIwXtzNfgypUVimW55eaqx9CutRF9plMWWfuBInfO1gM-lV81Oc4pQ1-PcPGNmV5-a1gewxXimTqXU6GvgKC3LkTOcDOBH6nNmO0DD-uHw=w192-h256-s-no?authuser=0',
      synopsis: 'Aventuras en un mundo mágico lleno de criaturas asombrosas.'
    },
    {
      id: 9,
      name: 'Cementerio de Animales',
      author: 'Stephen King',
      genre: 'Terror',
      price: 210,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczPoLCcRKrkCs0F3O3UvdkxLy6QKuuf-ljR2owL3nt6_o5nbYZ4eYlvpI4uuUJ5vVn4sbRJUQtz1Ld5y1fGg6ee_9xDtx10rFtLSPtukJy1_U5G-J4L6B_EyZ511f_2_q-LQySsEdJ9y8PUMnTT5rBxIlQ=w257-h400-s-no?authuser=0',
      synopsis: 'Una tenebrosa historia sobre el poder de la resurrección.'
    },
    {
      id: 10,
      name: 'Cantos de la Tierra Lejana',
      author: 'Arthur C. Clarke',
      genre: 'Ciencia Ficción',
      price: 190,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczMv-ZUh6mxEk7bpKmRnSD_NmcSwOwNt94RhD-hgeClIBVgY92_2H2Hxt1LDtufduWH2mukWQ1KuZoigzpFU6Yp8SH-h6F5rOnSDCH5wTwF_re7tsffYJmBYINMmCyg-vkk7dEfMMdfjSWoSrbnboC-4Mw=w183-h275-s-no?authuser=0',
      synopsis: 'Exploración de mundos lejanos y misterios del espacio.'
    },
    {
      id: 11,
      name: 'El Silmarillion',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasía',
      price: 320,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczNp6ci4NsceW5mm2DmDEfMxnQI6ibDYHMq2f1sXHi38LriVAlUF8-TLlR2lK8ubJgl9lUEsC4r0_AGI-m-Ev4E8JAyKFnvQxjSiMdXH3zjwJyOr2dX-gKdbTKeElA-UHW6eezBu21Rf-cxFHcMT4DINLA=w410-h618-s-no?authuser=0',
      synopsis: 'La historia y mitología del mundo de Tolkien.'
    },
    {
      id: 12,
      name: 'El Principito',
      author: 'Antoine de Saint-Exupéry',
      genre: 'Fantasía',
      price: 180,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczOiJuP6p1b54QXwmivtVTkxjoaDX6pj6l4wYQRWYLe2llCUAlcrfkGek2YlJYR8n4cmRik0xwqetp_HWaiCox4488OovVjevWYVm8JD69UjnW6zgIbvvYIPvWUk5oxwo9Mi1ru6DxEDX6GjMteoTi-KTA=w178-h283-s-no?authuser=0',
      synopsis: 'Un niño viaja por planetas y aprende lecciones de vida.'
    },
    {
      id: 13,
      name: 'Martian',
      author: 'Andy Weir',
      genre: 'Ciencia Ficción',
      price: 210,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczM6ICpar0SacrLo9doEr5IIoOE_Ij2FkU8zI9o0cAE2U8Q15oVWzWj0a5zu4VW0PMkARke3VKZGiOycKF8QeC0O5nCvHjE7fnv8iEe69hZTMkhK2VgGmM5gUvwxxWVitGWy9DtLbKJkBICRKXUcTTdsXg=w407-h600-s-no?authuser=0',
      synopsis: 'Un astronauta lucha por sobrevivir en Marte.'
    },
    {
      id: 14,
      name: 'Drácula',
      author: 'Bram Stoker',
      genre: 'Terror',
      price: 270,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczNtPLCJjh1mZlmYS3mCTAHBqks3rHPsHFZWfp_Ep6no5chmFKv1m__OhQmwbd937Vj3Tx1ncNTXeFzrNk9OsIvxu4z4_HTjgXh4BPag_-WnlSz_9DyauJNMJKdxCMrrxdzgzQJTG5YppEybzKm-bz7Ssw=w430-h618-s-no?authuser=0',
      synopsis: 'El conde Drácula aterroriza Londres con su sed de sangre.'
    },
    {
      id: 15,
      name: 'El Bosque',
      author: 'Harlan Coben',
      genre: 'Misterio',
      price: 230,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczNebZo_iQFzWzqkGDPyXToIaTRNXlAhaGeugfLI5wYgy3dUyEGRlk4kcG9j5GHvP2EytxgwPBVu9FTQ0rE7W_RexW2856pV6hOzeRl7346bzx6aXhuEo5YqXUBESpWJulb7U1JUmSPbsHtsfFC3cbYrtw=w143-h222-s-no?authuser=0',
      synopsis: 'Un hombre investiga la desaparición de su hija en un bosque misterioso.'
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(current => (current + 3) % Biblioteca.length);
    }, 30000);
    return () => clearInterval(timer);
  }, [Biblioteca.length]);

  const nextCard = () => {
    setCurrent((current + 3) % Biblioteca.length);
  };
  const prevCard = () => {
    setCurrent(current => {
      let newCurrent = current - 3;
      if (newCurrent < 0) {
        newCurrent = Biblioteca.length - 3;
      }
      return newCurrent;
    });
  };
  return (
    <section>
      <div className="carousel-cardTres">
        <h1 className='card-title-tres'>Carrousel con Cards</h1>
        <div className='contenedor-cardsAndButtons'>
          <button className='botones-cardTres' onClick={prevCard}>🡰</button>
          <div className="card-display-cardTres">
            {Biblioteca.slice(current, current + 3).map(card => (
              <div key={card.id} className="card-cardTres">
                <img className='image-cardTres' src={card.image} alt={card.name} />
                <div className='libro-content'>
                  <h1 className='libro-titulo'>{card.name}</h1>
                  <div className='libro-item'>
                    <h1>Autor</h1>
                    <p>{card.author}</p>
                    <h1>Genero literario</h1>
                    <p>{card.genre}</p>
                    <h1>Precio</h1>
                    <p>{card.price} Kiwypesos</p>
                  </div>
                  <p className='libro-synopsis'>{card.synopsis}</p>
                </div>
              </div>
            ))}
          </div>
          <button className='botones-cardTres' onClick={nextCard}>🡲</button>
        </div>
      </div>
    </section>
  );
};


const CardTres = () => {
  const [isReactCodeOpen, setIsReactCodeOpen] = useState(false);
  const [isCssCodeOpen, setIsCssCodeOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleToggleReactCode = () => {
    setIsReactCodeOpen(!isReactCodeOpen);
    setIsCssCodeOpen(false);
    setIsInfoOpen(false);
  };

  const handleToggleCssCode = () => {
    setIsReactCodeOpen(false);
    setIsCssCodeOpen(!isCssCodeOpen);
    setIsInfoOpen(false);
  };

  const handleToggleInfo = () => {
    setIsInfoOpen(!isInfoOpen);
    setIsReactCodeOpen(false);
    setIsCssCodeOpen(false);
  };

  const handleCopy = (contentToCopy) => {
    navigator.clipboard.writeText(contentToCopy);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };

  const infoContent = `Explicación paso a paso de cómo armar el código: Importa las bibliotecas necesarias al principio del archivo: 'useState', 'useEffect', y 'PropTypes' de React.
  Importa la hoja de estilos 'CardTres.css'.
  Define un componente funcional llamado 'CardsCarrousel'.
  Dentro del componente, utiliza 'useState' para crear un estado 'current' e inicialízalo en 0.
  Crea un arreglo llamado 'Biblioteca' con objetos que representan libros con detalles como nombre, autor, género, precio e imagen.
  Utiliza 'useEffect' para establecer un temporizador que cambia el estado 'current' cada 30 segundos, haciendo que los libros del carrusel se desplacen.
  Define funciones 'nextCard' y 'prevCard' para avanzar y retroceder en el carrusel de libros.
  En el retorno del componente, crea una sección y un contenedor principal con un título 'Carrousel con Cards'.
  Agrega botones para avanzar y retroceder en el carrusel.
  Mapea los libros en el arreglo 'Biblioteca', mostrando sus detalles en tarjetas, y asegúrate de que el carrusel se actualice según el estado 'current'.`;
  const buttonCode = `
  import { useState, useEffect } from 'react'
  import PropTypes from 'prop-types';
  import './CardTres.css';
  const CardsCarrousel =() => {
    const [current, setCurrent] = useState(0);
    const Biblioteca = [
      {
        id: 1,
        name: 'Don Quijote',
        author: 'Miguel de Cervantes',
        genre: 'Clásico',
        price: 260,
        image: 'https://i.ibb.co/5RXjz2r/Don-Quijote.jpg',
        synopsis: 'Las aventuras del ingenioso hidalgo Don Quijote y su fiel escudero Sancho Panza.'
      },
      {
        id: 2,
        name: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        genre: 'Ciencia Ficción',
        price: 200,
        image: 'https://i.ibb.co/MkwDHdd/Fahrenheit-451.jpg',
        synopsis: 'Un futuro distópico donde los libros son prohibidos.'
      },
      {
        id: 3,
        name: 'El Señor de los Anillos',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasía',
        price: 300,
        image: 'https://i.ibb.co/HgyDSQV/El-Se-or-de-los-Anillos.jpg',
        synopsis: 'Una épica aventura en un mundo de fantasía.'
      },
      {
        id: 4,
        name: 'Carrie',
        author: 'Stephen King',
        genre: 'Terror',
        price: 220,
        image: 'https://i.ibb.co/Nrx91Ss/Carrie.jpg',
        synopsis: 'Una joven con poderes telequinéticos se desata en venganza.'
      },
      {
        id: 5,
        name: 'Crónicas Marcianas',
        author: 'Ray Bradbury',
        genre: 'Ciencia Ficción',
        price: 180,
        image: 'https://i.ibb.co/YNt5Z2Z/Cr-nicas-Marcianas.jpg',
        synopsis: 'Historias sobre la colonización de Marte.'
      },
      {
        id: 6,
        name: 'El Hobbit',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasía',
        price: 280,
        image: 'https://i.ibb.co/MfcT8Kh/El-Hobbit.jpg',
        synopsis: 'El inicio de la búsqueda del anillo único.'
      },
      {
        id: 7,
        name: 'El Resplandor',
        author: 'Stephen King',
        genre: 'Terror',
        price: 240,
        image: 'https://i.ibb.co/C6Pzfdj/El-Resplandor.jpg',
        synopsis: 'Un hombre acepta un trabajo como cuidador de un hotel aislado.'
      },
      {
        id: 8,
        name: 'Crónicas de Narnia',
        author: 'C.S. Lewis',
        genre: 'Fantasía',
        price: 260,
        image: 'https://i.ibb.co/LgM0WqM/Cr-nicas-de-Narnia.jpg',
        synopsis: 'Aventuras en un mundo mágico lleno de criaturas asombrosas.'
      },
      {
        id: 9,
        name: 'Cementerio de Animales',
        author: 'Stephen King',
        genre: 'Terror',
        price: 210,
        image: 'https://i.ibb.co/Fn3sG41/Cementerio-de-Animales.jpg',
        synopsis: 'Una tenebrosa historia sobre el poder de la resurrección.'
      },
      {
        id: 10,
        name: 'Cantos de la Tierra Lejana',
        author: 'Arthur C. Clarke',
        genre: 'Ciencia Ficción',
        price: 190,
        image: 'https://i.ibb.co/Gvd72N9/Cantos-de-la-Tierra-Lejana.jpg',
        synopsis: 'Exploración de mundos lejanos y misterios del espacio.'
      },
      {
        id: 11,
        name: 'El Silmarillion',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasía',
        price: 320,
        image: 'https://i.ibb.co/jwSSz8J/El-Silmarillion.jpg',
        synopsis: 'La historia y mitología del mundo de Tolkien.'
      },
      {
        id: 12,
        name: 'El Principito',
        author: 'Antoine de Saint-Exupéry',
        genre: 'Fantasía',
        price: 180,
        image: 'https://i.ibb.co/pjFbj0J/El-Principito.jpg',
        synopsis: 'Un niño viaja por planetas y aprende lecciones de vida.'
      },
      {
        id: 13,
        name: 'Martian',
        author: 'Andy Weir',
        genre: 'Ciencia Ficción',
        price: 210,
        image: 'https://i.ibb.co/25xKKb9/Martian.jpg',
        synopsis: 'Un astronauta lucha por sobrevivir en Marte.'
      },
      {
        id: 14,
        name: 'Drácula',
        author: 'Bram Stoker',
        genre: 'Terror',
        price: 270,
        image: 'https://i.ibb.co/Yy0Krxv/Dr-cula.jpg',
        synopsis: 'El conde Drácula aterroriza Londres con su sed de sangre.'
      },
      {
        id: 15,
        name: 'El Bosque',
        author: 'Harlan Coben',
        genre: 'Misterio',
        price: 230,
        image: 'https://i.ibb.co/J20HVsn/el-bosque.jpg',
        synopsis: 'Un hombre investiga la desaparición de su hija en un bosque misterioso.'
      },
    ];
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrent(current => (current + 3) % Biblioteca.length);
      }, 30000);
      return () => clearInterval(timer);
    }, [Biblioteca.length]);
    const nextCard = () => {
      setCurrent((current + 3) % Biblioteca.length);
    };
    const prevCard = () => {
      setCurrent(current => {
        let newCurrent = current - 3;
        if (newCurrent < 0) {
          newCurrent = Biblioteca.length - 3;
        }
        return newCurrent;
      });
    };
    return (
      <section>
        <div className="carousel-cardTres">
          <h1 className='card-title-tres'>Carrousel con Cards</h1>
          <div className='contenedor-cardsAndButtons'>
            <button className='botones-cardTres' onClick={prevCard}>🡰</button>
            <div className="card-display-cardTres">
              {Biblioteca.slice(current, current + 3).map(card => (
                <div key={card.id} className="card-cardTres">
                  <img className='image-cardTres' src={card.image} alt={card.name} />
                  <div className='libro-content'>
                    <h1 className='libro-titulo'>{card.name}</h1>
                    <div className='libro-item'>
                      <h1>Autor</h1>
                      <p>{card.author}</p>
                      <h1>Genero literario</h1>
                      <p>{card.genre}</p>
                      <h1>Precio</h1>
                      <p>{card.price} Kiwypesos</p>
                    </div>
                    <p className='libro-synopsis'>{card.synopsis}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className='botones-cardTres' onClick={nextCard}>🡲</button>
          </div>
        </div>
      </section>
    );
  };
  export default CardsCarrousel
  `;
  const buttonCss = `
  .carousel-cardTres {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contenedor-cardsAndButtons{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: auto;
  }
  .botones-cardTres{
      margin: 5px;
      border: 2px solid aquamarine;
      border-radius: 50%;
      font-size: 30px;
      padding: 10px;
  }
  .card-display-cardTres {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      flex-grow: 1; /* Para que ocupe el espacio restante en el medio */
      justify-content: space-between
  }
  .card-cardTres {
      min-width: 30%;
      width: 150px;
      height: 90vh;
      border: 2px solid #fff;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
  }
  .image-cardTres{
      margin: auto;
      margin-top: 5px;
      width: 80%;
      height: 44vh;
  }
  .libro-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      height: 40vh;
  }
  .libro-titulo {
      font-size: 20px;
      color: aquamarine;
      text-align: center;
      margin-top: 5px;
      height: 10vh;
      display: flex;
      justify-content:center ;
      align-items: center;
  }
  .libro-item {
      text-align: center;
      font-size: 14px;
      display: block;
      margin-top: 3px;
      height: 25vh;
  }
  .libro-item h1{
      margin-top: 5px;
      font-size: 20px;
  }

  .libro-item p {
      font-size: 15px;
      margin-top: 2px;
  }
  .libro-synopsis {
      height: 10vh;
      margin: 5px;
      font-size: 17px;
      text-align: start;
  }`;
  return (
    <section>
      <div className="card">
        <div className="card-content">
          <CardsCarrousel/>
          <div className="buttons-sections">
            <div className="section-button" onClick={handleToggleInfo}>
              Información
            </div>
            <div className="section-button" onClick={handleToggleReactCode}>
              Código React
            </div>
            <div className="section-button" onClick={handleToggleCssCode}>
              Código CSS
            </div>
          </div>
          {isReactCodeOpen && (
            <div className="code-section">
              <pre>{`${buttonCode}`}</pre>
              <CopyButton text={buttonCode} onCopy={() => handleCopy(buttonCode)} />
            </div>
          )}
          {isCssCodeOpen && (
            <div className="code-section">
              <pre>{buttonCss}</pre>
              <CopyButton text={buttonCss} onCopy={() => handleCopy(buttonCss)} />
            </div>
          )}
          {isInfoOpen && (
            <div className="info-section">
              <p>{infoContent}</p>
            </div>
          )}
          {copySuccess && <p className="copy-notice">Texto copiado al portapapeles</p>}
        </div>
      </div>
    </section>
  );
};

export default CardTres
