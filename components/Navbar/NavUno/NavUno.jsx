import { useState } from 'react'
import PropTypes from 'prop-types';
import './NavUno.css';
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
    const NavLateral = () => {
        const [isOpen, setIsOpen] = useState(false);
        const menuItems = [
            'Inicio', 'Opción 1', 'Opción 2', 'Opción 3', 'Cerrar Menú'
        ];
        const toggleNavbar = () => {
            setIsOpen(!isOpen);
        };
        return (
            <section className='navUno-padre'>
                <h1 className='nav-title'>Menu lateral colapsable con auto cerrado tras elegir una opción</h1>
                <div className='navUno-contenedor'>
                    <button className='navUno-Button' onClick={toggleNavbar}>
                        Menú
                    </button>
                    {isOpen && (
                        <nav>
                            <div className='navUno-contenedor-nav'>
                                {menuItems.map((item, index) => (
                                    <button className='navUno-Button' key={index} onClick={() => setIsOpen(false)}>
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </nav>
                    )}
                </div>
            </section>
        );
    };


    const NavUno = () => {
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
    Para armar el menú lateral colapsable con cierre automático al elegir una opción :
    1. Importa 'useState' desde React.
    2. Crea un componente funcional llamado 'NavLateral'.
    3. Usa 'useState' para manejar el estado de apertura y cierre del menú.
    4. Define un arreglo 'menuItems' con las opciones del menú.
    5. Crea una función 'toggleNavbar' para cambiar el estado del menú.
    6. En el retorno del componente, utiliza un <section> como contenedor principal.
    7. Agrega un título <h1> para describir el menú.
    8. Usa botones para el menú y controla su visibilidad con el estado 'isOpen'.
    9. Exporta el componente 'NavLateral' al final del archivo utilizando 'export default NavLateral'. Esto te permitirá utilizar este componente en otros archivos de tu aplicación React importándolo como sea necesario.
    Con estos nueve pasos, habrás creado un menú lateral en React que se colapsa automáticamente al elegir una opción y podrás utilizarlo en tu proyecto.`;
    const buttonCode = `
    import { useState } from 'react'
    import './NavUno.css';
    const NavLateral = () => {
        const [isOpen, setIsOpen] = useState(false);
        const menuItems = [
            'Inicio', 'Opción 1', 'Opción 2', 'Opción 3', 'Cerrar Menú'
        ];
        const toggleNavbar = () => {
            setIsOpen(!isOpen);
        };
        return (
            <section className='navUno-padre'>
                <h1 className='nav-title'>Menu lateral colapsable con auto cerrado tras elegir una opción</h1>
                <div className='navUno-contenedor'>
                    <button className='navUno-Button' onClick={toggleNavbar}>
                        Menú
                    </button>
                    {isOpen && (
                        <nav>
                            <div className='navUno-contenedor-nav'>
                                {menuItems.map((item, index) => (
                                    <button className='navUno-Button' key={index} onClick={() => setIsOpen(false)}>
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </nav>
                    )}
                </div>
            </section>
        );
    };
    export default NavLateral
    `;
    const buttonCss = `
    .navUno-padre{
        display: flex;
        width: 100%;
        flex-direction: column;
        margin: auto;
    }
    .navUno-contenedor{
        min-height: 42vh;
        height: auto;
        width: 40%;
    }
    .navUno-Button {
        background-color: #007BFF;
        color: #fff;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        margin-bottom: 10px;
        display: block;
        width: 100%;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        transition: background-color 0.3s ease;
    }
    .navUno-Button:hover {
        background-color: #0056b3;
    }
    .navUno-contenedor-nav button {
        display: block;
        width: 100%;
        text-align: left;
        padding: 8px 20px;
        border: none;
        background-color: transparent;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .navUno-contenedor-nav button:hover {
        color: black;
        background-color: #f2f2f2;
    }`;
    return (
        <section>
        <div className="card">
            <div className="card-content">
            <NavLateral/>
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

export default NavUno
