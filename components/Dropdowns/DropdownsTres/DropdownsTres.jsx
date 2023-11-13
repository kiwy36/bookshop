import { useState } from 'react'
import PropTypes from 'prop-types';
import './DropdownsTres.css';
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


const DropdownElemento = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    { label: 'Opción 1', link: 'https://ejemplo.com/opcion1' },
    { label: 'Opción 2', link: 'https://ejemplo.com/opcion2' },
    { label: 'Opción 3', link: 'https://ejemplo.com/opcion3' },
    { label: 'Opción 4', link: 'https://ejemplo.com/opcion4' },
  ];

  return (
    <section className='dropdown-tres-container-master'>
      <h1 className='dropdown-title'>Dropdown generico</h1>
      <div className="dropdown-tres-container">
        <button className="dropdown-tres-button" onClick={toggleDropdown}>
          Dropdown
        </button>
        {isOpen && (
          <div className="dropdown-tres-options">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => window.open(option.link, '_blank')}
                rel="noopener noreferrer"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const DropdownsTres = () => {
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
  1. Crea un nuevo archivo llamado 'DropdownsTres.css' en el mismo directorio que tu componente 'DropdownElemento.js'.
  2. Abre el archivo 'DropdownsTres.css' en tu editor de texto favorito.
  3. Define el estilo para la clase 'dropdown-tres-container'. Puedes establecer propiedades como 'position', 'display', y 'margin' según tus preferencias de diseño.
  4. Establece el estilo para la clase 'dropdown-tres-button'. Puedes ajustar propiedades como 'padding', 'background-color', y 'color' para personalizar la apariencia del botón cerrar/abrir.
  5. Define el estilo para la clase 'dropdown-tres-options'. Aquí, puedes establecer propiedades como 'display', 'position', y 'background-color' para el menú desplegable.
  6. Añade estilos para la clase 'dropdown-tres-options button'. Puedes establecer propiedades como 'padding', 'border', y 'cursor' para dar estilo a las opciones del menú.
  7. Agrega estilos para la clase 'dropdown-tres-options button:hover'. Esto cambiará la apariencia de las opciones cuando el cursor esté sobre ellas.
  8. Guarda y cierra el archivo 'DropdownsTres.css'.
  9. Asegúrate de que la importación del archivo CSS en tu componente sea correcta. Verifica que la ruta sea precisa y coincida con la ubicación del archivo CSS.
  10. Vuelve a tu aplicación React y verifica que los estilos se apliquen correctamente al componente 'DropdownElemento'. Si es necesario, ajusta los estilos en el archivo CSS para lograr el diseño deseado.
  `;
  const buttonCode = `
    import { useState } from 'react'
    import './DropdownsTres.css'
    const DropdownElemento = () => {
      const [isOpen, setIsOpen] = useState(false);
    
      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
    
      const options = [
        { label: 'Opción 1', link: 'https://ejemplo.com/opcion1' },
        { label: 'Opción 2', link: 'https://ejemplo.com/opcion2' },
        { label: 'Opción 3', link: 'https://ejemplo.com/opcion3' },
        { label: 'Opción 4', link: 'https://ejemplo.com/opcion4' },
      ];
    
      return (
        <div className="dropdown-tres-container">
          <button className="dropdown-tres-button" onClick={toggleDropdown}>
            Abrir Dropdown
          </button>
          {isOpen && (
            <div className="dropdown-tres-options">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => window.open(option.link, '_blank')}
                  rel="noopener noreferrer"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      );
    };
    export default DropdownElemento
  `;
  const buttonCss = `
  .dropdown-tres-container {
      position: relative;
      display: inline-block;
  }
  
  .dropdown-tres-button {
      padding: 10px;
      background-color: #3498db;
      color: #fff;
      border: none;
      cursor: pointer;
      width: 150px;
  }
  
  .dropdown-tres-options {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 148px;
  }
  
  .dropdown-tres-options button {
      padding: 10px;
      border: none;
      background-color: #f9f9f9;
      cursor: pointer;
      text-align: left;
  }
  
  .dropdown-tres-options button:hover {
      background-color: #ddd;
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

export default DropdownsTres