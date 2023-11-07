import { useState } from 'react'
import PropTypes from 'prop-types';
import './DropdownsDos.css';
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


const Dropdown = ({ options, onOptionSelect, category }) => {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Seleccionar Opción');

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    onOptionSelect(option);
    setOptionsVisible(false);
  };

  return (
    <div className="dropdown-container">
      <h1>{category}:</h1>
      <button onClick={toggleOptions} className="dropdown-dos-selection">
        {selectedOption}
      </button>
      {optionsVisible && (
        <div className="options-container">
          {options.map((option, index) => (
            <div
              key={index}
              className="option"
              onClick={() => selectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onOptionSelect: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

const DropdownElemento = () => {
  const [selectedAnimales, setSelectedAnimales] = useState('Seleccionar Opción');
  const [selectedColores, setSelectedColores] = useState('Seleccionar Opción');
  const [selectedLugares, setSelectedLugares] = useState('Seleccionar Opción');
  
  // eslint-disable-next-line no-unused-vars
  const [reiniciarVisible, setReiniciarVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [toastVisible, setToastVisible] = useState(false);
  const [toastContent, setToastContent] = useState('');
  const [condicionesCumplidas, setCondicionesCumplidas] = useState(false);
  const [faltaUnCampo, setFaltaUnCampo] = useState(false);

  const handleAnimalesSelect = (option) => {
    setSelectedAnimales(option);
    checkTerminarButton();
  };

  const handleColoresSelect = (option) => {
    setSelectedColores(option);
    checkTerminarButton();
  };

  const handleLugaresSelect = (option) => {
    setSelectedLugares(option);
    checkTerminarButton();
  };

  const checkTerminarButton = () => {
    if (
      selectedAnimales !== 'Seleccionar Opción' &&
      selectedColores !== 'Seleccionar Opción' &&
      selectedLugares !== 'Seleccionar Opción'
    ) {
      setReiniciarVisible(true);
    } else {
      setReiniciarVisible(false);
    }
  };

  const handleTerminarClick = () => {
    const campoFaltante = getCampoFaltante();
    if (campoFaltante === '') {
      setCondicionesCumplidas(true);
      setToastContent(
        `Usted ha elegido el animal: ${selectedAnimales}, color: ${selectedColores} y lugar: ${selectedLugares}`
      );
    } else {
      setFaltaUnCampo(true);
      setToastContent(`Falta completar el campo correspondiente: ${campoFaltante}`);
    }
    setToastVisible(true);
  };

  const handleCloseToast = () => {
    setToastVisible(false);
    setFaltaUnCampo(false);
  };

  const getCampoFaltante = () => {
    if (selectedAnimales === 'Seleccionar Opción') {
      return 'Animal';
    } else if (selectedColores === 'Seleccionar Opción') {
      return 'Color';
    } else if (selectedLugares === 'Seleccionar Opción') {
      return 'Lugar';
    }
    return '';
  };

  const handleReiniciarClick = () => {
    setSelectedAnimales('Seleccionar Opción');
    setSelectedColores('Seleccionar Opción');
    setSelectedLugares('Seleccionar Opción');
    setReiniciarVisible(false);
    setCondicionesCumplidas(false);
    setFaltaUnCampo(false);
    setToastVisible(false);
  };

  return (
    <section className='dropdown-conteiner-master'>
      <h1 className='dropdown-title'>Dropdown en formulario</h1>
      <div className="dropdown-element">
        <Dropdown
          options={['Seleccionar Opción', 'Perro', 'Gato', 'Gorrión', 'Pez', 'Lagartija']}
          onOptionSelect={handleAnimalesSelect}
          category="Animal"
        />
        <Dropdown
          options={['Seleccionar Opción', 'Azul', 'Rojo', 'Rosa', 'Verde', 'Marrón']}
          onOptionSelect={handleColoresSelect}
          category="Color"
        />
        <Dropdown
          options={['Seleccionar Opción', 'Lagos', 'Llanuras', 'Desiertos', 'Montañas', 'Bosque']}
          onOptionSelect={handleLugaresSelect}
          category="Lugar"
        />
        <button
          onClick={handleTerminarClick}
          className="terminate-button"
        >
          Terminar
        </button>
        {condicionesCumplidas && (
          <div className="toast-container">
            <div className="toast-dropdown">
              <div className="toast-content">
                <h1>{toastContent}</h1>
                <button onClick={handleReiniciarClick} className="toast-button">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        )}
        {faltaUnCampo && (
          <div className="toast-container">
            <div className="toast-dropdown">
              <div className="toast-content">
                <h1>{toastContent}</h1>
                <button onClick={handleCloseToast} className="toast-button">
                  Volver
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};


const DropdownsDos = () => {
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

  const infoContent = ``;
  const buttonCode = ``;
  const buttonCss = ``;

  return (
    <section>
      <div className="card">
        <div className="card-content">
          <DropdownElemento/>
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

export default DropdownsDos