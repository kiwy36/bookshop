import { useState } from 'react'
import PropTypes from 'prop-types';
import './CarrouselUno.css'

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

    const recipes = [
        {
          title: 'Ensalada de Verano',
          image: 'https://lh3.googleusercontent.com/pw/AP1GczNdHowsZTKXsU-9OiWRiaMDS2do6RS7rDX-UimRYFeIsJjWbGurjX17Xc_9nO3nMU0RrrsLK2xAeq9jNmX32G5Qy_VhRQGSCscZLFQZXVce-aDSt9X_v4kTVT-WjipdoDIL0YCMGktuYgu9w8ccG26sSw=w512-h512-s-no?authuser=0',
          description: 'Una deliciosa ensalada fresca para el verano.',
        },
        {
          title: 'Tacos de Pescado',
          image: 'https://lh3.googleusercontent.com/pw/AP1GczPpHRICGz8IQYWKJ_wrMo_6IPm03_OVfOVjMm87VHSH8coAwjmlu8YHJ6FyUXKS8K2np8ePWxTbZb_P6o1k2wgqBlEPLU32gB3NVOwbdFf66lE5x60s2HgKdviwddBtd6x3QMCg55BeZ312Gc9A68vNzg=w618-h618-s-no?authuser=0',
          description: 'Tacos de pescado crujiente con salsa de aguacate.',
        },
        {
          title: 'Pasta Primavera',
          image: 'https://lh3.googleusercontent.com/pw/AP1GczP1Ju2httwMoIoftRdcRkoI_E08RNxGVkgoW5bvlphkD-qRXqmBo5Q_tW9ptSvCshriygUJTqZYl2MYDjZBGpsyOiKg1ViNxE0A_MkauAeh-IJjFmAe8rL9f5jxv7mERG47FnrJSdpAWz_kt9lh98x5uA=w618-h618-s-no?authuser=0',
          description: 'Pasta con vegetales frescos y pesto casero.',
        },
        {
          title: 'Sopa de Tomate',
          image: 'https://lh3.googleusercontent.com/pw/AP1GczP0liKmtgH1x47sDiC7FyQf9RstpkQsAphFT13xBJS-KLZTHoMzqumeXqM7SAX5jPnD99A5-KqyI08uVvGdWkbFsZvq751EYW_lUIP25URG0Zg8bUS7l4XKqycSCabq7toFR5s_O42ex4wOfOr9bKUxHg=w512-h512-s-no?authuser=0',
          description: 'Sopa de tomate cremosa con albahaca.',
        },
        {
          title: 'Pizza Margherita',
          image: 'https://lh3.googleusercontent.com/pw/AP1GczNsS-Js1S6G6UAaEaAEMiIr2sgvLqlaLMIaLR0aJYYKKhN0PHXYJFTHpW1-dMSk1JuNxXyRAiynSHCC6AljDPrfxdsSRf0BUiOXZLZ0uplqZCBYzz97wxcvYA1EcP0NGV6GF7ttaNiOTSw6VaMNwTMfdg=w512-h512-s-no?authuser=0',
          description: 'Pizza clásica italiana con mozzarella y albahaca.',
        },
      ];
    function CarrouselElemento() {
      const [currentRecipe, setCurrentRecipe] = useState(0);
      const [showRecipeDetails, setShowRecipeDetails] = useState(false);
      const openRecipeDetails = (index) => {
        setCurrentRecipe(index);
        setShowRecipeDetails(!showRecipeDetails); // Cambiar el estado de mostrar detalles
      };
      const nextRecipe = () => {
        setCurrentRecipe((currentRecipe + 1) % recipes.length);
      };
      const prevRecipe = () => {
          setCurrentRecipe((currentRecipe - 1 + recipes.length) % recipes.length);
      };
      return (
        <section>
          <h1 className='carrousel-title'>Carrusel de testimonios con un Boton</h1>
          <div className="recipe-carousel">
            <div className='recipe-date-total'>
            <div className="nav-buttons">
              <button onClick={prevRecipe}>{"<"} </button>
            </div>
              <div className="recipe">
                <img
                  src={recipes[currentRecipe].image}
                  alt={recipes[currentRecipe].title}
                  onClick={() => openRecipeDetails(currentRecipe)}
                />
              </div>
              <div className="recipe-details">
                <h2>{recipes[currentRecipe].title}</h2>
                <button onClick={() => openRecipeDetails(currentRecipe)}>
                  {showRecipeDetails ? 'Cerrar' : 'Saber más'}
                </button>
                {showRecipeDetails && <p>{recipes[currentRecipe].description}</p>}
              </div>
              <div className="nav-buttons">
                <button onClick={nextRecipe}>{">"}</button>
              </div>
            </div>
          </div>
        </section>
      );
    }
    const CarrouselUno = () => {
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
    Para armar un carrusel de testimonios con un botón usando React, sigue estos pasos:

    1. Importa useState desde React y define un arreglo 'recipes' con objetos que contengan títulos, imágenes y descripciones.
    2. Crea un componente llamado 'CarrouselElemento'.
    3. Utiliza los estados 'currentRecipe' y 'showRecipeDetails' con 'useState'.
    4. Define funciones 'openRecipeDetails', 'nextRecipe', y 'prevRecipe' para cambiar las recetas y mostrar detalles.
    5. En el 'return', estructura el componente con un título, botones de navegación, una imagen y detalles.
    6. Implementa lógica para alternar entre "Saber más" y "Cerrar" según el estado de 'showRecipeDetails'.
    7. Estiliza el componente usando CSS para darle la apariencia deseada.
    8. Exporta el componente.
    `;
    const buttonCode = `
    import { useState } from 'react'
    import './CarrouselUno.css'

    const recipes = [
      {
        title: 'Ensalada de Verano',
        image: 'https://i.ibb.co/SsCLCNJ/ensalada-de-pollo-con-papas-0.jpg',
        description: 'Una deliciosa ensalada fresca para el verano.',
      },
      {
        title: 'Tacos de Pescado',
        image: 'https://i.ibb.co/26kJh29/tacos-de-Pescadoo.jpg',
        description: 'Tacos de pescado crujiente con salsa de aguacate.',
      },
      {
        title: 'Pasta Primavera',
        image: 'https://i.ibb.co/q5xTpxJ/fideos-primavera.jpg',
        description: 'Pasta con vegetales frescos y pesto casero.',
      },
      {
        title: 'Sopa de Tomate',
        image: 'https://i.ibb.co/FzjmWKk/sopa-de-lentejas-0.jpg',
        description: 'Sopa de tomate cremosa con albahaca.',
      },
      {
        title: 'Pizza Margherita',
        image: 'https://i.ibb.co/vkV6Zxc/pizza-napolitana-con-jamon-1.jpg',
        description: 'Pizza clásica italiana con mozzarella y albahaca.',
      },
    ];
    function CarrouselElemento() {
      const [currentRecipe, setCurrentRecipe] = useState(0);
      const [showRecipeDetails, setShowRecipeDetails] = useState(false);
      const openRecipeDetails = (index) => {
        setCurrentRecipe(index);
        setShowRecipeDetails(!showRecipeDetails); // Cambiar el estado de mostrar detalles
      };
      const nextRecipe = () => {
        setCurrentRecipe((currentRecipe + 1) % recipes.length);
      };
      const prevRecipe = () => {
          setCurrentRecipe((currentRecipe - 1 + recipes.length) % recipes.length);
      };
      return (
        <section>
          <h1 className='carrousel-title'>Carrusel de testimonios con un Boton</h1>
          <div className="recipe-carousel">
            <div className='recipe-date-total'>
            <div className="nav-buttons">
              <button onClick={prevRecipe}>{"<"} </button>
            </div>
              <div className="recipe">
                <img
                  src={recipes[currentRecipe].image}
                  alt={recipes[currentRecipe].title}
                  onClick={() => openRecipeDetails(currentRecipe)}
                />
              </div>
              <div className="recipe-details">
                <h2>{recipes[currentRecipe].title}</h2>
                <button onClick={() => openRecipeDetails(currentRecipe)}>
                  {showRecipeDetails ? 'Cerrar' : 'Saber más'}
                </button>
                {showRecipeDetails && <p>{recipes[currentRecipe].description}</p>}
              </div>
              <div className="nav-buttons">
                <button onClick={nextRecipe}>{">"}</button>
              </div>
            </div>
          </div>
        </section>
      );
    }
    export default CarrouselElemento
    `;
    const buttonCss = `
    .recipe-carousel {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px;
      width: 400px;
      max-width: 400px;
      margin: 0 auto;
    }
    .recipe-date-total{
        display: flex;
        flex-direction: row;
    }
    .recipe {
      display: flex;
      width: 150px;
      align-items: center;
    }
    
    .recipe img {
      width: 100%;
      height: auto;
      margin: auto;
      margin-left: 5px;
      border-radius: 50%;
    }
    .recipe-details {
        margin-top: 40px;
        text-align: left;
        width: 250px;
        text-align: center;
    }
    .recipe h2 {
      font-size: 24px;
      text-align: center; /* Alinea el título a la derecha */
    }
    .recipe button {
      background-color: #007BFF;
      color: white;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      display: block; /* Coloca el botón en un bloque para que esté debajo del título */
      margin-top: 10px; /* Espacio entre el título y el botón */
    }
    .recipe-details p {
      font-size: 16px;
      text-align: center; /* Alinea el texto a la derecha */
      margin-top: 10px; /* Espacio entre el botón y el texto */
    }
    .nav-buttons {
      display: flex;
      justify-content: space-between;
    }
    .nav-buttons button{
      font-size: 30px;
      font-weight: bold;
    }
    @media (max-width: 767px) {
      .recipe-carousel {
        width: 90%; /* Ocupa todo el ancho disponible */
      }
      .recipe {
        width: 100%; /* Ocupa todo el ancho disponible */
      }
      .recipe-details {
        width: 100%; /* Ocupa todo el ancho disponible */
      }
      .recipe-details h2{
        font-size: 16px;
      }
    }
    
    `;
    return (
        <section>
            <div className="card">
                <div className="card-content">
                <CarrouselElemento/>
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


export default CarrouselUno
