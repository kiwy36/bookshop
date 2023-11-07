import { useState } from 'react'
import PropTypes from 'prop-types';
import './DropdownsUno.css';
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

const DropdownButton = ({ buttonName, options, onOptionClick, isOpen, onToggle, links }) => {
  return (
    <div className="custom-dropdown">
      <button onClick={onToggle} className="dropdown-button">
        {buttonName}
      </button>
      {isOpen && options && options.length > 0 && (
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <a
              key={index}
              href={links[index]} // Enlace correspondiente a la opción
              target="_blank" // Para abrir en una nueva pestaña
              rel="noopener noreferrer"
              className="dropdown-item"
              onClick={() => onOptionClick(option)}
            >
              {option}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

DropdownButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onOptionClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const DropdownElemento = () => {
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [openDropdown3, setOpenDropdown3] = useState(false);
  const [openDropdown4, setOpenDropdown4] = useState(false);

  const toggleDropdown1 = () => setOpenDropdown1(!openDropdown1);
  const toggleDropdown2 = () => setOpenDropdown2(!openDropdown2);
  const toggleDropdown3 = () => setOpenDropdown3(!openDropdown3);
  const toggleDropdown4 = () => setOpenDropdown4(!openDropdown4);

  const handleItemClick = (buttonIndex, action) => {
    console.log(`Boton ${buttonIndex} -op- ${action}`);
  };

  return (
    <section>
      <h1 className='dropdown-title'>Barra de navegaciones con botones estilo dropdown</h1>
    <div className='contenedor-DropdownButton-uno'>
      <div>
        <DropdownButton
          buttonName="Boton 1"
          options={['Option 1', 'Option 2', 'Option 3']}
          isOpen={openDropdown1}
          onToggle={toggleDropdown1}
          onOptionClick={(action) => handleItemClick(1, action)}
          links={[
            'linkbotonunoopcion1',
            'linkbotonunoopcion2',
            'linkbotonunoopcion3',
          ]}
        />
        <DropdownButton
          buttonName="Boton 2"
          options={['Option 1', 'Option 2', 'Option 3']}
          isOpen={openDropdown2}
          onToggle={toggleDropdown2}
          onOptionClick={(action) => handleItemClick(2, action)}
          links={[
            'linkbotondosopcion1',
            'linkbotondosopcion2',
            'linkbotondosopcion3',
          ]}
        />
        <DropdownButton
          buttonName="Boton 3"
          options={['Option 1', 'Option 2', 'Option 3']}
          isOpen={openDropdown3}
          onToggle={toggleDropdown3}
          onOptionClick={(action) => handleItemClick(3, action)}
          links={[
            'linkbotontresopcion1',
            'linkbotontresopcion2',
            'linkbotontresopcion3',
          ]}
        />
        <DropdownButton
          buttonName="Boton 4"
          options={['Option 1', 'Option 2', 'Option 3']}
          isOpen={openDropdown4}
          onToggle={toggleDropdown4}
          onOptionClick={(action) => handleItemClick(4, action)}
          links={[
            'linkbotoncuatroopcion1',
            'linkbotoncuatroopcion2',
            'linkbotoncuatroopcion3',
          ]}
        />
      </div>
    </div>
    </section>
  );
}



const DropdownsUno = () => {
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
    1. Importa los módulos necesarios al principio del archivo. En este caso, estamos importando 'useState' de React y 'PropTypes' para las validaciones de propiedades, además del archivo de estilos CSS.

    2. Define un componente funcional llamado 'DropdownButton' que acepta varias propiedades: 'buttonName', 'options', 'onOptionClick', 'isOpen', 'onToggle', y 'links'.

    3. Dentro del componente 'DropdownButton', crea un elemento 'div' con la clase CSS 'custom-dropdown'. Este elemento envolverá el botón y el menú desplegable.

    4. Crea un botón que se activará al hacer clic. Utiliza la propiedad 'buttonName' para mostrar el texto en el botón.

    5. A continuación, verifica si el menú debe estar abierto. Esto se controla mediante las propiedades 'isOpen' y 'options'.

    6. Si el menú está abierto, crea un elemento 'div' con la clase CSS 'dropdown-menu' para contener las opciones del menú desplegable.

    7. Mapea las opciones del menú utilizando un bucle sobre el array 'options'.

    8. Para cada opción, crea un elemento 'a' que servirá como enlace. Establece la clave (key), el enlace ('href'), y el texto de la opción.

    9. Añade el atributo 'target="_blank"' al enlace para que se abra en una nueva pestaña y agrega 'rel="noopener noreferrer"' para la seguridad.

    10. Implementa un controlador de eventos 'onClick' para la opción que ejecutará la función 'onOptionClick' pasando la opción seleccionada.

    11. Define las validaciones de propiedades para el componente 'DropdownButton' utilizando PropTypes. Asegúrate de que se cumplan las propiedades necesarias.

    12. Luego, define otro componente funcional llamado 'DropdownElemento'. En este componente, utiliza el hook 'useState' para gestionar el estado de apertura de los menús desplegables.

    13. Crea funciones 'toggleDropdownX' para cada menú, donde 'X' representa el número del botón. Estas funciones cambiarán el estado de apertura del menú.

    14. Implementa la función 'handleItemClick' que mostrará un mensaje en la consola cuando se haga clic en una opción. Utiliza 'console.log' para mostrar información.

    15. Finalmente, renderiza el contenido. En este caso, se muestra un título, "Barra de navegaciones con botones estilo dropdown", y los componentes 'DropdownButton'. Cada uno de ellos tiene propiedades específicas para personalizar su comportamiento.
  `;
  const buttonCode = `
    import { useState } from 'react'
    import PropTypes from 'prop-types';
    import './DropdownsUno.css';

    const DropdownButton = ({ buttonName, options, onOptionClick, isOpen, onToggle, links }) => {
      return (
        <div className="custom-dropdown">
          <button onClick={onToggle} className="dropdown-button">
            {buttonName}
          </button>
          {isOpen && options && options.length > 0 && (
            <div className="dropdown-menu">
              {options.map((option, index) => (
                <a
                  key={index}
                  href={links[index]} // Enlace correspondiente a la opción
                  target="_blank" // Para abrir en una nueva pestaña
                  rel="noopener noreferrer"
                  className="dropdown-item"
                  onClick={() => onOptionClick(option)}
                >
                  {option}
                </a>
              ))}
            </div>
          )}
        </div>
      );
    };
    
    DropdownButton.propTypes = {
      buttonName: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      onOptionClick: PropTypes.func.isRequired,
      isOpen: PropTypes.bool.isRequired,
      onToggle: PropTypes.func.isRequired,
      links: PropTypes.arrayOf(PropTypes.string).isRequired,
    };
    
    const DropdownElemento = () => {
      const [openDropdown1, setOpenDropdown1] = useState(false);
      const [openDropdown2, setOpenDropdown2] = useState(false);
      const [openDropdown3, setOpenDropdown3] = useState(false);
      const [openDropdown4, setOpenDropdown4] = useState(false);
    
      const toggleDropdown1 = () => setOpenDropdown1(!openDropdown1);
      const toggleDropdown2 = () => setOpenDropdown2(!openDropdown2);
      const toggleDropdown3 = () => setOpenDropdown3(!openDropdown3);
      const toggleDropdown4 = () => setOpenDropdown4(!openDropdown4);
      
      const handleItemClick = (buttonIndex, action) => {
        console.log('Boton ${'buttonIndex'} -op- ${'action'}');
      };

      return (
        <section>
          <h1 className='dropdown-title'>Barra de navegaciones con botones estilo dropdown</h1>
        <div className='contenedor-DropdownButton-uno'>
          <div>
            <DropdownButton
              buttonName="Boton 1"
              options={['Option 1', 'Option 2', 'Option 3']}
              isOpen={openDropdown1}
              onToggle={toggleDropdown1}
              onOptionClick={(action) => handleItemClick(1, action)}
              links={[
                'linkbotonunoopcion1',
                'linkbotonunoopcion2',
                'linkbotonunoopcion3',
              ]}
            />
            <DropdownButton
              buttonName="Boton 2"
              options={['Option 1', 'Option 2', 'Option 3']}
              isOpen={openDropdown2}
              onToggle={toggleDropdown2}
              onOptionClick={(action) => handleItemClick(2, action)}
              links={[
                'linkbotondosopcion1',
                'linkbotondosopcion2',
                'linkbotondosopcion3',
              ]}
            />
            <DropdownButton
              buttonName="Boton 3"
              options={['Option 1', 'Option 2', 'Option 3']}
              isOpen={openDropdown3}
              onToggle={toggleDropdown3}
              onOptionClick={(action) => handleItemClick(3, action)}
              links={[
                'linkbotontresopcion1',
                'linkbotontresopcion2',
                'linkbotontresopcion3',
              ]}
            />
            <DropdownButton
              buttonName="Boton 4"
              options={['Option 1', 'Option 2', 'Option 3']}
              isOpen={openDropdown4}
              onToggle={toggleDropdown4}
              onOptionClick={(action) => handleItemClick(4, action)}
              links={[
                'linkbotoncuatroopcion1',
                'linkbotoncuatroopcion2',
                'linkbotoncuatroopcion3',
              ]}
            />
          </div>
        </div>
        </section>
      );
    }
    export default DropdownElemento
  `;
  const buttonCss = `
    .contenedor-DropdownButton-uno{
      display: flex;
      justify-content: center;
    }
    .custom-dropdown {
      position: relative;
      display: inline-block;
    }
    .dropdown-button {
      width: 20vh;
      background: #3498db;
      color: #fff;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
    }
    .dropdown-menu {
      width: 20vh;
      position: absolute;
      top: 100%;
      left: 0;
      display: none;
      background: #fff;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }
    .custom-dropdown:hover .dropdown-menu {
      display: block;
    }
    .dropdown-item {
      text-align: center;
      padding: 10px 20px;
      cursor: pointer;
      color: black;
      display: block;
      text-decoration: none;
      border-bottom: 1px solid #ccc;
    }
    .dropdown-item:hover {
      background: #f0f0f0;
      color: black;
    }
    .custom-dropdown {
      display: inline-block;
      margin-right: 10px;
    }
    .custom-dropdown:nth-child(1) .dropdown-button {
      background: #3498db;
    }
    .custom-dropdown:nth-child(2) .dropdown-button {
      background: #e74c3c;
    }
    .custom-dropdown:nth-child(3) .dropdown-button {
      background: #ffcc00;
    }
    .custom-dropdown:nth-child(4) .dropdown-button {
      background: #66cc66;
    }
    @media (max-width: 768px) {
      .dropdown-button {
        width: 11vh;
        padding: 10px;
      }
      .dropdown-menu {
        width: 11vh;
        font-size: 18px;
        left: 0;
      }
      .dropdown-item{
        text-align: center;
        padding: 5px;
      }
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      .dropdown-button {
        width: auto;
        padding: 15px;
      }
      .dropdown-menu {
        width: auto;
        left: 0;
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

export default DropdownsUno