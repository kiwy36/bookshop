import { useState } from 'react'
import PropTypes from 'prop-types';
import './NavDos.css';
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
    const NavHorizontal = () => {
        const menuItems = [
            { label: 'Inicio', link: '#' },
            { label: 'Opción 1', link: '#opcion1' },
            { label: 'Opción 2', link: '#opcion2' },
            { label: 'Opción 3', link: '#opcion3' },
            { label: 'Opción 4', link: '#opcion4' },
            { label: 'Opción 5', link: '#opcion5' }
        ];
        const handleButtonClick = (link) => {
            const newWindow = window.open(link, '_blank'); // Abre el enlace en una nueva pestaña
            if (newWindow) {
                newWindow.opener = null; // Evita que la nueva pestaña acceda al "opener" (buena práctica de seguridad)
            }
        };
        return (
            <section className='navDos-padre'>
                <h1 className='nav-title'>Menú horizontal siempre visible</h1>
                <nav className='navDos-contenedor-nav-horizontal'>
                    {menuItems.map((item, index) => (
                        <button
                            className='navDos-Button'
                            key={index}
                            onClick={() => handleButtonClick(item.link)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </section>
        );
    };
    const NavDos = () => {
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
    Para armar el siguiente,sigue los siguientes pasos:
    1. Definir el Componente: Para comenzar, necesitas crear un componente funcional llamado 'NavHorizontal' en tu aplicación React.
    2. Importar React y Estilos: Asegúrate de importar la biblioteca React y los estilos necesarios para dar estilo al componente.
    3. Definir las Opciones del Menú: Crea un arreglo de objetos llamado 'menuItems', donde cada objeto representa una opción del menú con su etiqueta y un enlace ficticio.
    4. Manejar los Clics: Define una función 'handleButtonClick' que abrirá los enlaces en nuevas pestañas cuando se hace clic en un botón.
    5. Estructura Principal: En el retorno del componente, crea una estructura principal que contiene el título y el contenedor de botones.
    6. Mapear Opciones: Utiliza un mapeo para recorrer el arreglo 'menuItems' y generar botones para cada opción de menú.
    7. Configurar los Botones: Configura cada botón con su etiqueta y llama a 'handleButtonClick' con el enlace correspondiente.
    8. Exportar el Componente: Finalmente, exporta el componente 'NavHorizontal' para que pueda ser utilizado en otros lugares de tu aplicación.
    `;
    const buttonCode = `
    const NavHorizontal = () => {
        const menuItems = [
            { label: 'Inicio', link: '#' }, // Cambia '#' por tu URL deseada
            { label: 'Opción 1', link: '#opcion1' },
            { label: 'Opción 2', link: '#opcion2' },
            { label: 'Opción 3', link: '#opcion3' },
            { label: 'Opción 4', link: '#opcion4' },
            { label: 'Opción 5', link: '#opcion5' }
        ];
        const handleButtonClick = (link) => {
            const newWindow = window.open(link, '_blank'); // Abre el enlace en una nueva pestaña
            if (newWindow) {
                newWindow.opener = null;
                // Evita que la nueva pestaña acceda al "opener" (buena práctica de seguridad)
            }
        };
        return (
            <section className='navDos-padre'>
                <h1 className='nav-title'>Menú horizontal siempre visible</h1>
                <nav className='navDos-contenedor-nav-horizontal'>
                    {menuItems.map((item, index) => (
                        <button
                            className='navDos-Button'
                            key={index}
                            onClick={() => handleButtonClick(item.link)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </section>
        );
    };
    export default NavHorizontal
    `;
    const buttonCss = `
        .navDos-padre {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            height: auto;
            border: solid 1px #fff;
            /*position: relative;*/
        }
        .navDos-contenedor-nav-horizontal {
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 10px 0;
            /*position: fixed; Agrega position: fixed al menú */
            /*top: 0; Fija el menú en la parte superior */
            /*background-color: #007BFF; Añade un fondo al menú  */
        }
        .navDos-Button {
            background-color: #007BFF;
            color: #fff;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            width: 18%;
            text-align: center;
            font-weight: bold;
            text-transform: uppercase;
            transition: background-color 0.3s ease;
        }
        .navDos-Button:hover {
            background-color: #0056b3;
        }
        @media (max-width: 768px) {
            .navDos-Button {
                width: 100%;
                margin-bottom: 1px;
                padding: 8px;
                font-size: 0.5rem;
            }
        }
    `;
    return (
        <section>
        <div className="card">
            <div className="card-content">
            <NavHorizontal/>
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

export default NavDos
