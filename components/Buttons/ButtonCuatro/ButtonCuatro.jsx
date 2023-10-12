import { useState } from 'react';
import PropTypes from 'prop-types';
import './ButtonCuatro.css';

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
const Boton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <section>
      <h1 className='button-title-cuatro'>Un Botón generico con ventana emergente</h1>
      <div className="boton-container-cuatro">
        <button className="styled-button" onClick={handleButtonClick}>
          Presionar Botón
        </button>
        {showPopup && (
          <div className="popup">
            <p>Esto es una ventana emergente</p>
            <button className="popup-close-button" onClick={handlePopupClose}>
              Cerrar
            </button>
          </div>
        )}
      </div>
      <p className='boton-texto'>Las funciones del botón hirian por separado, la idea de esto es generar un boton que devualva un aviso de que fue utilizado</p>
    </section>
  );
};


const ButtonCuatro = () => {
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

  const infoContent = `Para generar este botón sigue los siguientes pasos:
  1. Crea el componente Boton con useState para controlar la ventana emergente.
  2. Define funciones handleButtonClick y handlePopupClose para mostrar/ocultar la ventana.
  3. Agrega un botón con clase "styled-button" y evento onClick para activar la ventana.
  4. Dentro de {showPopup && ...}, coloca el contenido del popup.
  5. Personaliza el mensaje en el <p> del popup.
  6. Ajusta los estilos CSS en Boton.css.
  7. Añade el popup con estilos y cierre con botón "popup-close-button".
  8. Exporta el componente Boton para reutilizarlo en otras partes de la aplicación.
  9. Adapta las funciones del botón según las necesidades actuales.`;
  const buttonCode = `
    import { useState } from 'react';
    import './ButtonCuatro.css';
    const Boton = () => {
      const [showPopup, setShowPopup] = useState(false);
      const handleButtonClick = () => {
        setShowPopup(true);
      };
      const handlePopupClose = () => {
        setShowPopup(false);
      };
      return (
        <section>
          <h1 className='button-title-cuatro'>Un Botón generico con ventana emergente</h1>
          <div className="boton-container-cuatro">
            <button className="styled-button" onClick={handleButtonClick}>
              Presionar Botón
            </button>
            {showPopup && (
              <div className="popup">
                <p>Esto es una ventana emergente</p>
                <button className="popup-close-button" onClick={handlePopupClose}>
                  Cerrar
                </button>
              </div>
            )}
          </div>
          <p className='boton-texto'>Las funciones del botón irían por separado,
          la idea de esto es generar un botón que devuelva un aviso de que fue utilizado</p>
        </section>
      );
    };
    export default Boton;`;

  const buttonCss = `
  .button-title-cuatro {
      font-size: 30px;
      font-weight: bold;
      color: aquamarine;
      text-align: center;
      margin-bottom: 10px;
      margin-top: 10px
  }
  .boton-container-cuatro {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30vh;
      position: relative;
      overflow: hidden;
  }

  .styled-button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
  }
  .popup {
      position: absolute;
      color: black;
      background-color: white;
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000;
  }
  .popup-close-button {
      background-color: #ccc;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
  }
  .boton-texto{
      margin-top: 15px;
      font-size: 20px;
  }`;

  return (
    <section>
      <div className="card">
        <div className="card-content">
          <Boton/>
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

export default ButtonCuatro