import { useState } from 'react'
import PropTypes from 'prop-types';
import './NavTres.css';
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
    const NavBarraInferior = () => {
        const menuItems = [
            { label: '🏠', link: '#' },
            { label: '😀', link: '#opcion1' },
            { label: '😎', link: '#opcion2' },
            { label: '🚀', link: '#opcion3' },
            { label: '🌟', link: '#opcion4' }
        ];
        const handleButtonClick = (link) => {
            const newWindow = window.open(link, '_blank');
            if (newWindow) {
                newWindow.opener = null;
            }
        };
        return (
            <section>
                <h1 className='nav-title'>Navegador inferior con emoticonos</h1>
                <footer className='navBarraInferior'>
                    <nav className='navBarraInferior-contenedor'>
                        {menuItems.map((item, index) => (
                        <button
                            className='navBarraInferior-button'
                            key={index}
                            onClick={() => handleButtonClick(item.link)}
                            >
                            <h1>{item.label}</h1>
                        </button>
                        ))}
                    </nav>
                </footer>
            </section>
        );
    };


    const NavTres = () => {
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
        Aquí tienes las instrucciones con comillas simples en lugar de comillas invertidas:
        1. Importa useState: Al principio del archivo, importa el hook 'useState' de React para gestionar el estado si aún no lo has hecho.
        2. Importa los estilos: Importa el archivo de estilos 'NavTres.css' para aplicar los estilos al componente.
        3. Define el arreglo de elementos: Crea un arreglo llamado 'menuItems' que contenga objetos con propiedades 'label' (que será el emoticono) y 'link' (la URL a la que se dirigirá cuando se haga clic).
        4. Función handleButtonClick: Define la función 'handleButtonClick(link)' que abrirá una nueva pestaña con el enlace proporcionado y establecerá la seguridad adecuada.
        5. Estructura del componente: Define la función 'NavBarraInferior' como un componente funcional.
        6. Renderizado de botones: Dentro del componente, utiliza 'map' para recorrer 'menuItems' y generar botones para cada elemento. Asigna la función 'handleButtonClick' al evento 'onClick'.
        7. Exporta el componente: Al final del archivo, exporta el componente 'NavBarraInferior' utilizando 'export default' para que pueda ser utilizado en otros archivos.
        8. Documentación: Si es necesario, agrega comentarios o documentación para explicar el propósito y el uso del componente.
        Recuerda que este componente crea una barra de navegación horizontal en la parte inferior de la pantalla con emoticonos que abren enlaces en nuevas pestañas cuando se hace clic en ellos.
    `;
    const buttonCode = `
    import { useState } from 'react'
    import './NavTres.css';
    const NavBarraInferior = () => {
        const menuItems = [
            { label: '🏠', link: '#' },
            { label: '😀', link: '#opcion1' },
            { label: '😎', link: '#opcion2' },
            { label: '🚀', link: '#opcion3' },
            { label: '🌟', link: '#opcion4' }
        ];
        const handleButtonClick = (link) => {
            const newWindow = window.open(link, '_blank');
            if (newWindow) {
                newWindow.opener = null;
            }
        };
        return (
            <section>
                <footer className='navBarraInferior'>
                    <nav className='navBarraInferior-contenedor'>
                        {menuItems.map((item, index) => (
                        <button
                            className='navBarraInferior-button'
                            key={index}
                            onClick={() => handleButtonClick(item.link)}
                            >
                            <h1>{item.label}</h1>
                        </button>
                        ))}
                    </nav>
                </footer>
            </section>
        );
    };
    export default NavBarraInferior
    `;
    const buttonCss = `
    .navBarraInferior{
        width: 50%;
        margin: auto;
    }
    @media (max-width: 768px){
        .navBarraInferior{
        width:100% ;
        }
    }
    .navBarraInferior-contenedor{
        /*position: fixed;
        bottom: 0;
        left: 0;//para que este fijo en el fondo de la pantalla*/
        width: 100%;
        background-color: #333;
        padding: 10px 0;
        text-align: center;
        display: flex;
        justify-content: space-around;
    }
    .navBarraInferior-button {
        text-align: center;
        justify-content: center;
        display: inline-block;
        border: 2px solid #fff;
        margin: 0 10px;
        font-size: 24px;
        text-decoration: none;
        transition: transform 0.2s ease, border-radius 0.2s ease;
        border-radius: 50%;
        line-height: 50px;
        cursor: pointer;
    }
    .navBarraInferior-button:hover {
        transform: scale(1.2);
        background-color: #007bff;
    }
    `;
    return (
        <section>
        <div className="card">
            <div className="card-content">
            <NavBarraInferior/>
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

export default NavTres
