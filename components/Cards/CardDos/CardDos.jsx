import { useState } from 'react'
import PropTypes from 'prop-types';
import './CardDos.css';
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
const CardContenedoraDeElementos =() => {
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

  const infoContent = `informacion e instrucciones`;
  const buttonCode = `codigo jsx`;
  const buttonCss = `codigo css`;

  return (
    <section>
      <h1 className='card-title'>Card con visualizacion y botones para mostrar diferentes contenidos</h1>
      <div className="card">
        <div className="card-content">
          <div className='cont-fic-card'>
            <h1 className='card-title'>Contenido de la card</h1>
          </div>
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


const CardDos = () => {
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

  const infoContent = `Explicación paso a paso de cómo armar el código:

  1. Importa React y las Dependencias: Comienza importando React y las dependencias necesarias, en este caso, useState y PropTypes.
  2. Importa Estilos: También importa los estilos necesarios, que se encuentran en un archivo llamado 'CardDos.css'.
  3. Crea un Componente CopyButton: Define un componente llamado CopyButton' que acepta dos propiedades, 'text' y 'onCopy'. Este componente crea un botón que copiará el texto al portapapeles cuando se hace clic.
  4. PropTypes: Especifica los propTypes para 'CopyButton' para asegurarte de que las propiedades se utilicen correctamente.
  5. Componente Principal CardContenedoraDeElementos: Crea el componente principal llamado 'CardContenedoraDeElementos'. Este componente gestionará el estado de apertura de diferentes secciones y el éxito de la copia.
  6. Estados Iniciales: Define estados iniciales para controlar la apertura de las secciones y el éxito de la copia.
  7. Manejo de Apertura de Seccione: Implementa funciones para manejar la apertura de las secciones: 'handleToggleReactCode', 'handleToggleCssCode', y 'handleToggleInfo'. Estas funciones cambiarán los estados correspondientes para mostrar la sección deseada.
  8. Manejo de Copia al Portapapeles: Crea una función llamada 'handleCopy' que copia el contenido especificado al portapapeles y establece un estado para mostrar el mensaje de éxito.
  9. Contenido de Información, Código React y Código CSS: Define contenido para las secciones de información, código React y código CSS como cadenas de texto.
  10. Renderizado del Componente: Renderiza el componente en función del estado de apertura de las secciones y muestra los contenidos correspondientes. También muestra un mensaje de éxito si se copió el texto al portapapeles.
  11. Exporta el Componente: Al final del código, utiliza export default para exportar el componente `;
  const buttonCode = `
  import { useState } from 'react'
  import PropTypes from 'prop-types';
  import './CardDos.css';
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
  const CardContenedoraDeElementos =() => {
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

    const infoContent = 'informacion e instrucciones';
    const buttonCode = 'codigo jsx';
    const buttonCss = 'codigo css';
    return (
      <section>
        <h1 className='card-title'>Card con visualizacion y botones para mostrar diferentes contenidos</h1>
        <div className="card">
          <div className="card-content">
            <div className='cont-fic-card'>
              <h1 className='card-title'>Contenido de la card</h1>
            </div>
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
                <pre>{\`\${buttonCode}\`}</pre>
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
  export default CardContenedoraDeElementos;
  `;
  const buttonCss = `
  .card {
    color: #fff;
    border: 2px solid #fff;
    border-radius: 8px;
    min-height: 300px;
    max-height: auto;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 40px auto;
    width: 90%;
    max-width: 90%;
    overflow: hidden;
  }
  .card-content {
      display: flex;
      flex-direction: column;
  }
  .card-title{
      font-size: 30px;
      font-weight: bold;
      color: aquamarine;
      text-align: center;
      margin-bottom: 10px;
      margin-top: 10px
  }
  .card-texto{
      margin-top: 15px;
      font-size: 20px;
  }
  .code-section {
      margin-top: 20px;
  }
  .copy-button {
      margin-top: 10px;
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
  }
  .copy-button:hover {
      background-color: #1ee8e4;
  }
  .copy-notice {
      color: rgb(22, 202, 234);
      margin-top: 5px;
  }
  .buttons-sections {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
  }
  .section-button {
      width: 33%;
      margin: 1px;
      background-color: #fff;
      color: black;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 5px 10px;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;
  }
  .section-button:hover {
      background-color: #007bff;
      color: white;
  }
  .cont-fic-card h1{
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50vh;
      margin: auto;
      border: solid 1px gray;
      box-shadow:  0px 0px 10px gray
  }
  `;
  return (
    <section>
      <div className="card">
        <div className="card-content">
          <CardContenedoraDeElementos/>
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

export default CardDos
