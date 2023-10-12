import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ButtonDos.css';

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

const ReactionButton = ({ icon, color }) => {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem(icon);
    return storedCount ? parseInt(storedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem(icon, count.toString());
  }, [count, icon]);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <button
      className="reaction-button"
      style={{ backgroundColor: color }}
      onClick={handleButtonClick}
    >
      {icon}<span className="reaction-button-count">{count}</span>
    </button>
  );
};

ReactionButton.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

const ReactionsContainer = () => {
  return (
    <section className='reactions-container-padre'>
      <h1 className='button-title-dos'>Reacciones</h1>
      <div className="reactions-container">
        <ReactionButton icon="😄" color="green"/>
        <ReactionButton icon="😆" color="orange"/>
        <ReactionButton icon="❤️" color="pink"/>
        <ReactionButton icon="😢" color="blue"/>
        <ReactionButton icon="😡" color="red"/>
      </div>
      <h1 className='boton-texto'>Botones para reacionar a eventos</h1>
    </section>
  );
};

const ButtonDos = () => {
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

  const infoContent = `1. Instala "prop-types".
  2. Importa los módulos necesarios: "useState" y "useEffect" de React.
  3. Importa el archivo CSS "ButtonDos.css".
  4. Define el componente "ReactionButton" que acepta las propiedades "icon" y "color".
  5. Dentro de "ReactionButton", utiliza "useState" para inicializar el estado del contador.
  6. Utiliza "useEffect" para actualizar el almacenamiento local cuando el contador cambie.
  7. Crea la función "handleButtonClick" para incrementar el contador al hacer clic en el botón.
  8. Renderiza un botón con la clase "reaction-button", estilo de fondo según el color y el ícono.
  9. Muestra el ícono y el contador dentro del botón.
  10. Define las PropTypes para "ReactionButton" con las propiedades "icon" y "color".
  11. Define el componente "ReactionsContainer".
  12. Dentro de "ReactionsContainer", muestra un título "Reacciones" y un contenedor de botones.
  13. Agrega varios componentes "ReactionButton" con diferentes íconos y colores.
  14. Exporta el componente "ReactionsContainer".`;
  const buttonCode = `
    import { useState, useEffect } from 'react';
    import PropTypes from 'prop-types';
    import './ButtonDos.css';

    const ReactionButton = ({ icon, color }) => {
      const [count, setCount] = useState(() => {
        const storedCount = localStorage.getItem(icon);
        return storedCount ? parseInt(storedCount) : 0;
      });

      useEffect(() => {
        localStorage.setItem(icon, count.toString());
      }, [count, icon]);

      const handleButtonClick = () => {
        setCount(count + 1);
      };

      return (
        <button
          className="reaction-button"
          style={{ backgroundColor: color }}
          onClick={handleButtonClick}
        >
          {icon}<span className="reaction-button-count">({count})</span>
        </button>
      );
    };

    ReactionButton.propTypes = {
      icon: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    };

    const ReactionsContainer = () => {
      return (
        <section className='reactions-container-padre'>
          <h1 className='button-title-dos'>Reacciones</h1>
          <div className="reactions-container">
            <ReactionButton icon="😄" color="green"/>
            <ReactionButton icon="😆" color="orange"/>
            <ReactionButton icon="❤️" color="pink"/>
            <ReactionButton icon="😢" color="blue" />
            <ReactionButton icon="😡" color="red" />
          </div>
          <h1 className='boton-texto'>Botones para reacionar a eventos</h1>
        </section>
      );
    };

    export default ReactionsContainer;
    `;
  const buttonCss = `
  .button-title-dos {
      font-size: 30px;
      font-weight: bold;
      color: aquamarine;
      text-align: center;
      margin-bottom: 10px;
      margin-top: 10px
  }
  .reactions-container-padre{
      display: flex;
      flex-direction: column;
      margin: auto;
      width: 90%;
      height: 300px;
      border: aquamarine 5px solid;
      justify-content: center;
      align-items: center;
  }
  .reactions-container {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 20px;
  }
  .reaction-button{
      margin-bottom: 10px;
      width: 10rem;
      padding: 1px;
      margin: 1px;
      border: none;
      padding: 10px 15px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      color: black;
      transition: background-color 0.3s;
  }
  .reaction-button:hover .reaction-button-count {
      display: none;
  }
  .boton-texto{
      margin-top: 15px;
      font-size: 20px;
  }
  `;

  return (
    <section>
      <div className="card">
        <div className="card-content">
          <ReactionsContainer/>
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

export default ButtonDos;

