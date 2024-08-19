import { useState } from 'react'
import PropTypes from 'prop-types';
import './CardUno.css';
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
const TinderCasero = () => {
    const data = [
        {
          id: 1,
          imgUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMJ61D1Hp2dkOfNNSU54Rh8g4kzrOQDWZCBYZuQeFJWPg1YPMHqxQpEik7QV6OUxtv8G_kSguH3OjT0XR5VL-_wrrPQL0-4jvkM6U7za9BM5tArT90wiuyKd5-Xp6DPziyE4BIgiyMMu9cGBhvUqlzTXA=w618-h618-s-no?authuser=0',
          name: 'Persona 1',
          edad: 25,
          altura: '175 cm',
          gustosMusicales: 'Rock, Pop',
          pasatiempos: 'Leer, Nadar',
          signo: 'Aries',
          caracter: 'Amigable'
        },
        {
          id: 2,
          imgUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNvM0OBjbUMJt6JxZlr5VMR1wQjxZP-hM1fMo78FLjhEW91QzIRBAy5mIXCtJ-8pUAKxdkCMPZJYQDu_VB0iFLghKBmqi8y_Vaqrn2EzLqiN7Y-KALmTmelBxUhb4OPwVCzbe9MH__MjHe6br1BYJu2aQ=w618-h618-s-no?authuser=0',
          name: 'Persona 2',
          edad: 30,
          altura: '180 cm',
          gustosMusicales: 'Electrónica, Jazz',
          pasatiempos: 'Pintar, Cocinar',
          signo: 'Leo',
          caracter: 'Introvertido'
        },
        {
          id: 3,
          imgUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPjyXMJX8sGoGljcE9W36Y3Z2eZLYaNGLEMZlSXdcfQvm59kn-nsoZgH7n7FBKkiZFP8DmD98jW0rVraXxt_D7ZqwNpLIw1sVcdx4njhTpA81aHsZA-OijsMecM8FZg61sVehTBhaXpOC29vekrfRk0_A=w618-h618-s-no?authuser=0',
          name: 'Persona 3',
          edad: 22,
          altura: '165 cm',
          gustosMusicales: 'Rap, Hip-hop',
          pasatiempos: 'Correr, Jugar videojuegos',
          signo: 'Libra',
          caracter: 'Extrovertido'
        },
        {
          id: 4,
          imgUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMZfXYu0ieqvwTE_kDVaIBIJJENt9b9PRVOXcUtjyQR3rC2N7s4dNrkpAddRTOEji2GU6n6MwwEnA3B8j2YyRKRuAn8MIX7Zx_X76vYoYw7ii_05vRp6eToHEFCtx-0t5q4ElLZV9tNHyaORxx4vnlbqg=w618-h618-s-no?authuser=0',
          name: 'Persona 4',
          edad: 28,
          altura: '170 cm',
          gustosMusicales: 'Indie, Folk',
          pasatiempos: 'Bailar, Viajar',
          signo: 'Tauro',
          caracter: 'Amigable'
        },
        {
          id: 5,
          imgUrl: 'https://lh3.googleusercontent.com/pw/AP1GczORkP3C1O7JFgTPLst560fxdVHHETAE2qRcFbfYOh-jl9DALDd3t4oNfL0O76LaHKudNnDAUa9zaUwMLbgN5R04V7F_Avt8p2yoIM0S434y5aV1viC9krXtlGS_g-2e63Sf_8x1wBJxPEJ2At0EuciHvA=w412-h618-s-no?authuser=0',
          name: 'Persona 5',
          edad: 27,
          altura: '178 cm',
          gustosMusicales: 'Pop, R&B',
          pasatiempos: 'Escribir, Fotografía',
          signo: 'Virgo',
          caracter: 'Extrovertido'
        }
      ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const [availableData, setAvailableData] = useState(data);
    // eslint-disable-next-line no-unused-vars
    const [noElements, setNoElements] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [approvedElements, setApprovedElements] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [currentElementIndex, setCurrentElementIndex] = useState(0);
    const [swipeDirection, setSwipeDirection] = useState(null);



    const handleSwipe = (direction) => {
      if (availableData.length > 0) {
        if (direction === 'left') {
          setSwipeDirection('swipe-left');
          setTimeout(() => {
            setAvailableData((prevData) => prevData.slice(0, -1));
            setCurrentIndex((prevIndex) => (prevIndex + 1 + data.length) % data.length);
            setApprovedElements((prevElements) => [...prevElements, currentData]);
            setCurrentElementIndex((prevIndex) => prevIndex + 1);
            setSwipeDirection(null);
          }, 500);
        } else if (direction === 'right') {
          setSwipeDirection('swipe-right');
          setTimeout(() => {
            setAvailableData((prevData) => prevData.slice(1));
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
            setNoElements((prevElements) => [...prevElements, currentData]);
            setCurrentElementIndex((prevIndex) => prevIndex + 1);
            setSwipeDirection(null);
          }, 500);
        }
      } else {
        setAvailableData(data);
        setNoElements([]);
        setApprovedElements([]);
        setCurrentElementIndex(0);
      }
    };
    const currentData = data[currentIndex];
    const handleReset = () => {
      setAvailableData(data);
      setNoElements([]);
      setApprovedElements([]);
      setCurrentElementIndex(0);
    };
    return (
      <section>
        <h1 className='card-title-uno'>Tarjetas sucesivas con información expandible</h1>
        {availableData.length > 0 ? (
          <>
            <div className="card-container-elementoUno">
              <div className={`card-elementoUno ${swipeDirection}`}>
                <img src={currentData.imgUrl} alt={currentData.name} />
                <p className='nombreCard'>{currentData.name}</p>
                <button onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
                  {isAccordionOpen ? 'Cerrar Información' : 'Ver Información'}
                </button>
                {isAccordionOpen && (
                  <div className="accordion-content">
                    <p>Nombre {currentData.name}</p>
                    <p>Edad: {currentData.edad}</p>
                    <p>Altura: {currentData.altura}</p>
                    <p>Gustos Musicales: {currentData.gustosMusicales}</p>
                    <p>Pasatiempos: {currentData.pasatiempos}</p>
                    <p>Signo: {currentData.signo}</p>
                    <p>Caracter: {currentData.caracter}</p>
                  </div>
                )}
              </div>
              <div className="swipe-buttons">
                <button onClick={() => handleSwipe('left')}>❌</button>
                <button onClick={() => handleSwipe('right')}>💙</button>
              </div>
            </div>
          </>
        ) : (
          <div className='no-more-cards'>
            <p className='no-more-cards-p'>No se encontraron más personas</p>
            <button className='button-card-reset' onClick={handleReset}>Reiniciar</button>
          </div>
        )}
      <p className='card-textoAcom'>Esta tarjeta se le puede agregar un Carrousel de imágenes, varias los temas, agregar elementos para un Ecomerce, y más, incluso poner que se repitan los elementos de manera indeterminada  y cambiar los iconos para que pase de izquierda a derecha (el botón de reiniciar es para resaltar la emulación y tener un límite definido al límite de cards).</p>
      </section>
    );
  };

const CardUno = () => {
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

  const infoContent = `
  1. Abre el archivo en el que tienes tu código actual.
  2. Localiza la línea que contiene <div className={'card-elementoUno' ${'swipeDirection'}}>. Esto necesita ser corregido.
  3. Debes reemplazar esa línea cambiando las comillas simples por "comillas invertidas" (también conocidas como "comillas francesas" o "backticks") y coloca la variable swipeDirection dentro de las comillas invertidas.. Nota que usamos comillas invertidas (\`) para crear una cadena de texto con la variable swipeDirection interpolada.
  4. Asegúrate de que esta corrección se haya realizado en la cadena de texto dentro de buttonCode también.
  5. Revisa las importaciones al comienzo del código. Debes tener import { useState } from 'react'; para que el código funcione correctamente.
  6. Observa que tenemos un arreglo llamado data que contiene información sobre diferentes personas. Puedes modificar este arreglo para incluir tus propios datos o imágenes.
  7. Las funciones handleSwipe y handleReset se encargan de la lógica de deslizamiento y reinicio. Puedes mantenerlas tal como están o personalizarlas según tus necesidades.
  8. El código incluye un componente React llamado cardUno. Puedes cambiar su nombre según tus preferencias.
  9. El código también muestra información de una tarjeta, como nombre, edad, altura, gustos musicales, pasatiempos, signo y carácter. Puedes personalizar estos campos o agregar más información si lo deseas.
  10. Finalmente, asegúrate de exportar el componente con export default cardUno; al final del archivo para poder usarlo en otros lugares de tu aplicación.
  Recuerda que esta guía está diseñada para ayudarte a modificar el código proporcionado según tus necesidades. Asegúrate de comprender cómo funciona cada parte del código antes de realizar cambios significativos.`;
  const buttonCode = `
  import { useState } from 'react';

  const cardUno = () => {
      const data = [
          {
            id: 1,
            imgUrl: 'https://i.ibb.co/r4GyX4P/11.jpg',
            name: 'Persona 1',
            edad: 25,
            altura: '175 cm',
            gustosMusicales: 'Rock, Pop',
            pasatiempos: 'Leer, Nadar',
            signo: 'Aries',
            caracter: 'Amigable'
          },
          {
            id: 2,
            imgUrl: 'https://i.ibb.co/YjYFj3X/12.jpg',
            name: 'Persona 2',
            edad: 30,
            altura: '180 cm',
            gustosMusicales: 'Electrónica, Jazz',
            pasatiempos: 'Pintar, Cocinar',
            signo: 'Leo',
            caracter: 'Introvertido'
          },
          {
            id: 3,
            imgUrl: 'https://i.ibb.co/d0vLx6Z/13.jpg',
            name: 'Persona 3',
            edad: 22,
            altura: '165 cm',
            gustosMusicales: 'Rap, Hip-hop',
            pasatiempos: 'Correr, Jugar videojuegos',
            signo: 'Libra',
            caracter: 'Extrovertido'
          },
          {
            id: 4,
            imgUrl: 'https://i.ibb.co/NrWTBNy/14.jpg',
            name: 'Persona 4',
            edad: 28,
            altura: '170 cm',
            gustosMusicales: 'Indie, Folk',
            pasatiempos: 'Bailar, Viajar',
            signo: 'Tauro',
            caracter: 'Amigable'
          },
          {
            id: 5,
            imgUrl: 'https://i.ibb.co/xLxrpRm/15.jpg',
            name: 'Persona 5',
            edad: 27,
            altura: '178 cm',
            gustosMusicales: 'Pop, R&B',
            pasatiempos: 'Escribir, Fotografía',
            signo: 'Virgo',
            caracter: 'Extrovertido'
          }
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
      const [isAccordionOpen, setIsAccordionOpen] = useState(false);
      const [availableData, setAvailableData] = useState(data);
      const [noElements, setNoElements] = useState([]);
      const [approvedElements, setApprovedElements] = useState([]);
      const [currentElementIndex, setCurrentElementIndex] = useState(0);
      const [swipeDirection, setSwipeDirection] = useState(null);
      const handleSwipe = (direction) => {
          if (availableData.length > 0) {
              if (direction === 'left') {
                  setSwipeDirection('swipe-left');
                  setTimeout(() => {
                      setAvailableData((prevData) => prevData.slice(0, -1));
                      setCurrentIndex((prevIndex) => (prevIndex + 1 + data.length) % data.length);
                      setApprovedElements((prevElements) => [...prevElements, currentData]);
                      setCurrentElementIndex((prevIndex) => prevIndex + 1);
                      setSwipeDirection(null);
                  }, 500);
              } else if (direction === 'right') {
                  setSwipeDirection('swipe-right');
                  setTimeout(() => {
                      setAvailableData((prevData) => prevData.slice(1));
                      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
                      setNoElements((prevElements) => [...prevElements, currentData]);
                      setCurrentElementIndex((prevIndex) => prevIndex + 1);
                      setSwipeDirection(null);
                  }, 500);
              }
          } else {
              setAvailableData(data);
              setNoElements([]);
              setApprovedElements([]);
              setCurrentElementIndex(0);
          }
      };
      const currentData = data[currentIndex];
      const handleReset = () => {
          setAvailableData(data);
          setNoElements([]);
          setApprovedElements([]);
          setCurrentElementIndex(0);
      };
      return (
          <section>
              <h1 className='card-title-uno'>Tarjetas sucesivas con información expandible</h1>
              <div className={'card-elementoUno' ${'swipeDirection'}}>
                  <img src={currentData.imgUrl} alt={currentData.name} />
                  <p className='nombreCard'>{currentData.name}</p>
                  <button onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
                      {isAccordionOpen ? 'Cerrar Información' : 'Ver Información'}
                  </button>
                  {isAccordionOpen && (
                      <div className="accordion-content">
                          <p>Nombre {currentData.name}</p>
                          <p>Edad: {currentData.edad}</p>
                          <p>Altura: {currentData.altura}</p>
                          <p>Gustos Musicales: {currentData.gustosMusicales}</p>
                          <p>Pasatiempos: {currentData.pasatiempos}</p>
                          <p>Signo: {currentData.signo}</p>
                          <p>Caracter: {currentData.caracter}</p>
                      </div>
                  )}
              </div>
              <div className="swipe-buttons">
                  <button onClick={() => handleSwipe('left')}>❌</button>
                  <button onClick={() => handleSwipe('right')}>💙</button>
              </div>
          </section>
      );
  };
  export default cardUno;`;
  const buttonCss = `
  .card-title-uno {
    font-size: 30px;
    font-weight: bold;
    color: aquamarine;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px
  }
  .card-textoAcom{
    margin-top: 15px;
    font-size: 20px;
  }
  .accordion-content {
    display: block;
    color: black;
    margin-top: 10px;
    padding: 10px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .card-container-elementoUno {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
  }
  .card-elementoUno {
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 16px;
    text-align: center;
    background-color: white;
    max-width: 300px;
    margin: 0 auto;
  }
  .card-elementoUno.swipe-right {
    background-color: #8bc34a;
    transition: background-color 0.5s ease;
  }
  .card-elementoUno.swipe-left {
    background-color: #ffccbc;
    transition: background-color 0.5s ease;
  }
  .card-elementoUno img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  .swipe-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }
  .swipe-buttons button {
    background-color: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    border: #fff solid 1px;
    border-radius: 50%;
    margin: 3px;
  }
  .swipe-buttons button:hover {
    border: green solid 1px;
  }
  .nombreCard{
    color: black;
  }
  .no-more-cards {
    height: 50vh;
    margin-top: 20px;
    border: 2px solid #fff;
    border-radius: 8px;
    padding: 20px;
  }
  .no-more-cards-p{
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    text-align: center;
  }
  .button-card-reset {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  .button-card-reset:hover {
    background-color: #1ee8e4;
  }`;

  return (
    <section>
      <div className="card">
        <div className="card-content">
          <TinderCasero/>
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

export default CardUno
