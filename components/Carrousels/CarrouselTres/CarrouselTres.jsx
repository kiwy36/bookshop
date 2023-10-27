import { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types';
import './CarrouselTres.css'

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
    const CarrouselElemento = () => {
      const content = useMemo(() => [
          { text: 'Elemento 1', backgroundColor: 'red' },
          { text: 'Elemento 2', backgroundColor: 'blue' },
          { text: 'Elemento 3', backgroundColor: 'green' },
          { text: 'Elemento 4', backgroundColor: 'orange' },
        ], []);
      const [currentElementIndex, setCurrentElementIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentElementIndex((prevIndex) => (prevIndex + 1) % content.length);
        }, 10000);
        return () => {
          clearInterval(interval);
        };
      }, [content]);

      return (
        <section>
          <h1 className='carrousel-title'>Un carousel que actua como un footer</h1>
          <div className="carousel-conteiner-master-tres">
            <div className='elemento-acompañante-cr-tres'>
              <h1>Emulador del resto de la página</h1>
            </div>
            <div className="carousel-container-tres">
              <div className="carousel-tres">
                <h1
                  style={{
                    backgroundColor: content[currentElementIndex].backgroundColor,
                  }}
                >
                  {content[currentElementIndex].text}
                </h1>
              </div>
            </div>
          </div>
        </section>
      );
    };
    const CarrouselTres = () => {
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
      1. Importa los hooks de React necesarios.

      2. Asegúrate de tener un archivo CSS llamado 'CarrouselTres.css' para estilos.

      3. Crea un componente funcional llamado 'CarrouselElemento'.

      4. Utiliza 'useMemo' para definir un array de elementos 'content' que contiene objetos con texto y colores.

      5. Usa el estado local 'currentElementIndex' con 'useState' para rastrear el índice del elemento actual.

      6. Emplea 'useEffect' para establecer un intervalo que cambie el índice del elemento cada 10 segundos.

      7. Dentro de 'useEffect', devuelve una función para limpiar el intervalo cuando el componente se desmonte.

      8. Estructura el componente con etiquetas HTML para crear el carrusel.

      9. Incluye un título y un contenedor principal.

      10. Muestra el texto y el color del elemento actual según el índice en el carrusel.

      Estas instrucciones te permitirán crear un carrusel que se comporta como un pie de página, alternando entre elementos de texto y colores cada 10 segundos.
    `;
    const buttonCode = `
    import { useState, useEffect, useMemo } from 'react'
    import './CarrouselTres.css'

    const CarrouselElemento = () => {
      const content = useMemo(() => [
          { text: 'Elemento 1', backgroundColor: 'red' },
          { text: 'Elemento 2', backgroundColor: 'blue' },
          { text: 'Elemento 3', backgroundColor: 'green' },
          { text: 'Elemento 4', backgroundColor: 'orange' },
        ], []);
      const [currentElementIndex, setCurrentElementIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentElementIndex((prevIndex) => (prevIndex + 1) % content.length);
        }, 10000);
        return () => {
          clearInterval(interval);
        };
      }, [content]);

      return (
        <section>
          <h1 className='carrousel-title'>Un carousel que actua como un footer</h1>
          <div className="carousel-conteiner-master-tres">
            <div className='elemento-acompañante-cr-tres'>
              <h1>Emulador del resto de la página</h1>
            </div>
            <div className="carousel-container-tres">
              <div className="carousel-tres">
                <h1
                  style={{
                    backgroundColor: content[currentElementIndex].backgroundColor,
                  }}
                >
                  {content[currentElementIndex].text}
                </h1>
              </div>
            </div>
          </div>
        </section>
      );
    };
    export default CarrouselElemento
    `;
    const buttonCss = `
    .carousel-conteiner-master-tres{
        width: 80%;
        margin: auto;
    }
    .carousel-container-tres {
        width: 100%;
        overflow: hidden;
        position: relative;
    }
    .elemento-acompañante-cr-tres{
        height: 30vh;
        text-align: center;
        width: 100%;
    }
    .carousel-tres {
        display: flex;
        transition: transform 0.5s ease;
    }
    .carousel-tres h1 {
        flex: 1;
        text-align: center;
        padding: 20px;
        border: 1px solid #000;
    }
    .active {
        background-color: lightgray;
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


export default CarrouselTres
