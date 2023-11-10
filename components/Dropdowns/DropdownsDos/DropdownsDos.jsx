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
      <div className="dropdown-header">
        <h1 className='dropdwn-subtitle'>{category}:</h1>
        <button onClick={toggleOptions} className="dropdown-dos-selection">
          {selectedOption}
        </button>
      </div>
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
  const [remitente, setRemitente] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [reiniciarVisible, setReiniciarVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [toastVisible, setToastVisible] = useState(false);
  const [toastContent, setToastContent] = useState('');
  const [condicionesCumplidas, setCondicionesCumplidas] = useState(false);
  const [faltaUnCampo, setFaltaUnCampo] = useState(false);
  const [key, setKey] = useState(0)

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
      selectedLugares !== 'Seleccionar Opción' &&
      remitente.trim() !== ''
    ) {
      setReiniciarVisible(true);
    } else {
      setReiniciarVisible(false);
    }
  };

  const handleTerminarClick = async () => {
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
    } else if (remitente.trim() === '') {
      return 'Remitente';
    }
    return '';
  };

  const resetState = () => {
    setSelectedAnimales('Seleccionar Opción');
    setSelectedColores('Seleccionar Opción');
    setSelectedLugares('Seleccionar Opción');
    setRemitente('');
    setReiniciarVisible(false);
    setCondicionesCumplidas(false);
    setFaltaUnCampo(false);
    setToastVisible(false);
    setKey(Math.random());
  };
  const sendEmailSimulado = async (data) => {
    try {
      // Puedes agregar aquí la lógica de simulación, como un retraso simulado
      console.log('Simulando envío de correo electrónico:', data);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simula un retraso de 2 segundos
  
      console.log('Correo electrónico enviado exitosamente');
    } catch (error) {
      console.error('Error al simular el envío de correo electrónico', error);
      throw error;
    }
  };
  const handleReiniciarClick = async () => {
    resetState();
    if (condicionesCumplidas) {
      await sendEmailSimulado({
        to: 'correo@ejemplo.com',
        subject: 'Nuevo formulario enviado',
        text: `Remitente: ${remitente}, Animal: ${selectedAnimales}, Color: ${selectedColores}, Lugar: ${selectedLugares}`,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section key={key} className='dropdown-conteiner-master'>
      <h1 className='dropdown-title'>Dropdown en formulario</h1>
      <form onSubmit={handleSubmit}>
      <div className="dropdown-element">
        {condicionesCumplidas && (
          <div className="toast-container">
            <div className="toast-dropdown">
              <div className="toast-content">
                <h1>{toastContent}</h1>
                <button onClick={handleReiniciarClick } className="toast-button">
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
        <div className='label-input-dropdown'>
          <label htmlFor="remitente">
            <h1 className="label-dropdown">Remitente:</h1>
          </label>
          <input
            type="text"
            value={remitente}
            onChange={(e) => setRemitente(e.target.value)}
            placeholder="Ingrese el remitente"
            id="remitente"
            className="input-dropdown"
          />
        </div>
        <br/>
        <button
          type="submit"
          onClick={handleTerminarClick}
          className="terminate-button-dropdown"
        >
          Terminar
        </button>
      </div>
      </form>
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

  const infoContent = `
    1. Comienza importando 'useState' y 'PropTypes' de React, así como el estilo CSS.
    2. Define el componente funcional 'Dropdown' que recibe 'options', 'onOptionSelect' y 'category' como props.
    3. Utiliza el hook 'useState' para manejar el estado de visibilidad y la opción seleccionada.
    4. Crea una función 'toggleOptions' para alternar la visibilidad de las opciones.
    5. Implementa 'selectOption' para actualizar la opción seleccionada, llamar a 'onOptionSelect' y ocultar las opciones.
    6. Construye la estructura del componente con un título y un botón desplegable.
    7. Renderiza las opciones solo si 'optionsVisible' es 'true'.
    8. Declara las PropTypes para 'options', 'onOptionSelect' y 'category'.

    9. Crea 'DropdownElemento', un componente funcional.
    10. Usa 'useState' para gestionar el estado de los animales, colores, lugares, remitente y más.
    11. Inicializa estados para visibilidad de reinicio, visibilidad de tostadas, contenido de tostadas, condiciones cumplidas y falta de un campo.
    12. Define funciones para manejar la selección de animales, colores y lugares.
    13. Crea 'checkTerminarButton' para habilitar o deshabilitar el botón Terminar.
    14. Implementa 'handleTerminarClick' para mostrar tostadas según las condiciones y simular el envío de correo.
    15. Añade 'handleCloseToast' para cerrar las tostadas.
    16. Define 'getCampoFaltante' para determinar qué campo falta al hacer clic en Terminar.
    17. Declara 'resetState' para restablecer todos los estados.
    18. Crea una función 'sendEmailSimulado' para simular el envío de correo.
    19. Modifica 'handleReiniciarClick' para llamar a 'resetState' y simular el envío solo si las condiciones están cumplidas.
    20. Exporta el componente 'DropdownElemento'.
  `;
  const buttonCode = `
    import { useState } from 'react'
    import PropTypes from 'prop-types';
    import './DropdownsDos.css';
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
          <div className="dropdown-header">
            <h1 className='dropdwn-subtitle'>{category}:</h1>
            <button onClick={toggleOptions} className="dropdown-dos-selection">
              {selectedOption}
            </button>
          </div>
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
      const [remitente, setRemitente] = useState('');
      // eslint-disable-next-line no-unused-vars
      const [reiniciarVisible, setReiniciarVisible] = useState(false);
      // eslint-disable-next-line no-unused-vars
      const [toastVisible, setToastVisible] = useState(false);
      const [toastContent, setToastContent] = useState('');
      const [condicionesCumplidas, setCondicionesCumplidas] = useState(false);
      const [faltaUnCampo, setFaltaUnCampo] = useState(false);
      const [key, setKey] = useState(0)

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
          selectedLugares !== 'Seleccionar Opción' &&
          remitente.trim() !== ''
        ) {
          setReiniciarVisible(true);
        } else {
          setReiniciarVisible(false);
        }
      };

      const handleTerminarClick = async () => {
        const campoFaltante = getCampoFaltante();
        if (campoFaltante === '') {
          setCondicionesCumplidas(true);
          setToastContent(
            'Usted ha elegido el animal: ${'selectedAnimales'}, color: ${'selectedColores'} y lugar: ${'selectedLugares'}'
          );
        } else {
          setFaltaUnCampo(true);
          setToastContent('Falta completar el campo correspondiente:' ${'campoFaltante'}');
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
        } else if (remitente.trim() === '') {
          return 'Remitente';
        }
        return '';
      };

      const resetState = () => {
        setSelectedAnimales('Seleccionar Opción');
        setSelectedColores('Seleccionar Opción');
        setSelectedLugares('Seleccionar Opción');
        setRemitente('');
        setReiniciarVisible(false);
        setCondicionesCumplidas(false);
        setFaltaUnCampo(false);
        setToastVisible(false);
        setKey(Math.random());
      };
      const sendEmailSimulado = async (data) => {
        try {
          // Puedes agregar aquí la lógica de simulación, como un retraso simulado
          console.log('Simulando envío de correo electrónico:', data);
          await new Promise(resolve => setTimeout(resolve, 2000)); // Simula un retraso de 2 segundos
      
          console.log('Correo electrónico enviado exitosamente');
        } catch (error) {
          console.error('Error al simular el envío de correo electrónico', error);
          throw error;
        }
      };
      const handleReiniciarClick = async () => {
        resetState();
        if (condicionesCumplidas) {
          await sendEmailSimulado({
            to: 'correo@ejemplo.com',
            subject: 'Nuevo formulario enviado',
            text: 'Remitente: ${'remitente'}, Animal: ${'selectedAnimales'}, Color: ${'selectedColores'}, Lugar: ${'selectedLugares'}',
          });
        }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
      };
      return (
        <section key={key} className='dropdown-conteiner-master'>
          <h1 className='dropdown-title'>Dropdown en formulario</h1>
          <form onSubmit={handleSubmit}>
          <div className="dropdown-element">
            {condicionesCumplidas && (
              <div className="toast-container">
                <div className="toast-dropdown">
                  <div className="toast-content">
                    <h1>{toastContent}</h1>
                    <button onClick={handleReiniciarClick } className="toast-button">
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
            <div className='label-input-dropdown'>
              <label htmlFor="remitente">
                <h1 className="label-dropdown">Remitente:</h1>
              </label>
              <input
                type="text"
                value={remitente}
                onChange={(e) => setRemitente(e.target.value)}
                placeholder="Ingrese el remitente"
                id="remitente"
                className="input-dropdown"
              />
            </div>
            <br/>
            <button
              type="submit"
              onClick={handleTerminarClick}
              className="terminate-button-dropdown"
            >
              Terminar
            </button>
          </div>
          </form>
        </section>
      );
    };
    export default DropdownElemento
  `;
  const buttonCss = `
    .dropdown-conteiner-master{
      margin: auto;
      text-align: center;
      width: 60%;
      min-width: 60%;
      min-height: 60vh;
      height: auto;
    }
    .dropdown-header {
      display:flex;
      flex-direction: row;
      margin-right: 10px;
    }
    .dropdwn-subtitle{
      font-size: 32px;
      color: #ffffff;
      width: 20%;
      min-width: 20%;
      margin-right: 10px;
    }

    .dropdown-dos-selection{
      width: 80%;
      min-width: 80%;
      padding: 10px;
      background-color: rgb(175, 173, 173);
      border:solid rgb(73, 72, 72) 5px;
      border-radius: 8px;
      font-size: 20px;
      margin-bottom: 5px;
      cursor: pointer;
    }
    .options-container{
      padding: 10px;
      background-color: rgb(175, 173, 173);
      border:solid rgb(73, 72, 72) 5px;
      border-radius: 8px;
      position: absolute;
      width: 40.3%;
      left: 34.5%;
      cursor: pointer;

    }

    .option{
      color: black;
      font-size: 20px;
      cursor: pointer;
      margin-bottom: 5px;
    }
    .dropdown-element{
      font-size: 20px;
    }
    .toast-container {
      position: relative;
    }
    .toast-dropdown {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 62vh;
      background: gray;
      border: solid 5px rgb(41, 41, 41);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
    }

    .toast-content {
      background-color: grey;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
    }

    .toast-button {
      margin-top: 10px;
      background-color: #007bff;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .label-input-dropdown{
      display: flex;
      flex-direction:row ;
      width: 100%;
    }
    .label-dropdown {
      font-size: 30px;
      color: #ffffff;
      width: 20%;
      margin-right: 10px;
    }

    .input-dropdown {
      padding: 5px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 5px;
      min-width: 76%;
      border: solid 5px rgb(65, 65, 65);
      background-color: rgb(189, 189, 189);
    }
    .terminate-button-dropdown {
      width: 100%;
      background-color: #007bff;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .terminate-button-dropdown:hover {
      background-color: #0056b3;
    }

    @media (max-width: 768px) {
      .dropdown-header{
          flex-direction: column;
      }

      .dropdwn-subtitle,
      .input-dropdown,
      .dropdown-dos-selection {
          width: 100%;
      }

      .options-container {
          left: 90px;
          width: 45%;
      }

      .label-input-dropdown {
          display: flex;
          flex-direction: column;
          align-items: center;
      }
      .label-dropdown{
          text-align: center;
          width: 100%;
          margin-right: 0;
          margin: auto;
      }
      .input-dropdown {
          margin: none;
      }
      .toast-dropdown{
          width: 100%;
          height: 80vh;
      }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      .dropdown-header{
          flex-direction: column; /* Cambia a disposición de columna */
      }

      .dropdwn-subtitle,
      .input-dropdown,
      .dropdown-dos-selection {
          width: 100%; /* Ocupa todo el ancho disponible */
      }

      .options-container {
          left: 23%;
          width: 50%;
      }

      .label-input-dropdown {
          display: flex;
          flex-direction: column; /* Cambia a disposición de columna */
          align-items: center; /* Centra horizontalmente */
      }
      .label-dropdown{
          text-align: center;
          width: 100%;
          margin-right: 0;
          margin: auto;
      }
      .input-dropdown {
          justify-content: center;
          align-items: center;
          margin: auto;
          width: auto;
      .toast-dropdown{
          width: 100%;
          height: 63vh;
      }
    }
  `;

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