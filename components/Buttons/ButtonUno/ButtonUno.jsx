import { useState } from 'react';
import PropTypes from 'prop-types';
import './ButtonUno.css';

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

const ButtonItem = () => {
  const [isButtonTicked, setIsButtonTicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonTicked(!isButtonTicked);
  };

  return (
    <section>
      <h1 className="button-title-uno">Botón cambia estilos</h1>
      <div className="contenedor-boton">
        <div
          className={`button-item-uno ${isButtonTicked ? 'ticked' : ''}`}
          onClick={handleButtonClick}
        >
          <button className='button-uno-acc'>Elemento botón</button>
          <p className="boton-texto">Texto acompañante de ejemplo</p>
        </div>
      </div>
    </section>
  );
};

const ButtonUno = () => {
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

  const infoContent = `Para crear el botón en React, sigue estos pasos:
  Crea un componente "ButtonItem" en React usando el hook "useState" para controlar un estado llamado "isButtonTicked".
  Este estado cambiará entre "true" y "false" cada vez que se haga clic en un área del botón. El componente incluirá un botón con la clase "button-uno-acc" y un párrafo con la clase "boton-texto".
  El estilo de la clase "button-item-uno" se actualizará con la clase "ticked" si "isButtonTicked" es "true". El código final exportará el componente "ButtonItem".
`;
  const buttonUnoCode = `
  import { useState } from 'react';

  const ButtonItem = () => {
    const [isButtonTicked, setIsButtonTicked] = useState(false);

    const handleButtonClick = () => {
      setIsButtonTicked(!isButtonTicked);
    };

    return (
      <section>
        <div className="contenedor-boton">
          <div
            className={\`button-item-uno \${isButtonTicked ? 'ticked' : ''}\`}
            onClick={handleButtonClick}
          >
            <button className='button-uno-acc'>Elemento botón</button>
            <p className="boton-texto">Texto acompañante de ejemplo</p>
          </div>
        </div>
      </section>
    );
  };

  export default ButtonItem;`;

  const buttonUnoCss = `
  .button-title-uno {
    font-size: 24px;
    font-weight: bold;
    color: aquamarine;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px
  }
  .contenedor-boton{
      display: flex;
      flex-direction: column;
      margin: auto;
      width: 90%;
      height: 300px;
      border: aquamarine 5px solid;
      justify-content: center;
      align-items: center;
  }
  .button-item-uno {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height:100% ;
      background-color: black;
      color: white;
  }
  .button-item-uno.ticked {
      color: black;
      background-color: #fff;
  }
  .button-item-uno.ticked .button-uno-acc{
      color: white;
      background-color: black;
  }
  .button-uno-acc{
      font-size: 24px;
      border: 3px solid aquamarine;
      border-radius: 8px;
      margin-bottom: 10px;
  }
  .boton-texto{
      font-size: 20px;
  }`;

  return (
    <section>
      <div className="card">
        <div className="card-content">
          <ButtonItem/>
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
              <pre>{`${buttonUnoCode}`}</pre>
              <CopyButton text={buttonUnoCode} onCopy={() => handleCopy(buttonUnoCode)} />
            </div>
          )}
          {isCssCodeOpen && (
            <div className="code-section">
              <pre>{buttonUnoCss}</pre>
              <CopyButton text={buttonUnoCss} onCopy={() => handleCopy(buttonUnoCss)} />
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

export default ButtonUno;
