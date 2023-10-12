import { useState} from 'react'
import PropTypes from 'prop-types';
import './ToastsDos.css'

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
    const ToastsElemento = () => {
        const [showToast, setShowToast] = useState(false);
        const [canShowToast, setCanShowToast] = useState(true);
        const [disableMouseEnter, setDisableMouseEnter] = useState(false);
        const handleMouseEnterToastDos = () => {
            if (canShowToast && !disableMouseEnter) {
                setShowToast(true);
                setTimeout(() => {
                setShowToast(false);
                setCanShowToast(false);
                // Habilita la posibilidad de mostrar el cartel después de 1 minuto.
                setTimeout(() => {
                    setCanShowToast(true);
                }, 60000); // 1 minuto
                // Deshabilita handleMouseEnter durante 1 minuto.
                setDisableMouseEnter(true);
                setTimeout(() => {
                    setDisableMouseEnter(false);
                }, 60000); // 1 minuto
                }, 15000); // Cierra el cartel automáticamente después de 15 segundos.
            }
        };
        const handleCloseToast = () => {
            setShowToast(false);
            // Habilita la posibilidad de mostrar el cartel después de 1 minuto.
            setTimeout(() => {
                setCanShowToast(true);
            }, 60000); // 1 minuto
            // Deshabilita handleMouseEnter durante 1 minuto.
            setDisableMouseEnter(true);
            setTimeout(() => {
                setDisableMouseEnter(false);
            }, 60000); // 1 minuto
        };
        return (
            <section>
                <h1 className='toasts-title-dos'>Cartel Emergente con cerrado automatico y manual</h1>
                <h1 className='toasts-textacom'>Lo pense para poner propagandas emergentes, esas que todo el mundo odia</h1>
                <div className="toast-container-dos">
                <div className="toast-dos" onMouseEnter={handleMouseEnterToastDos}>
                    <h1> Vea nuestras Promociones</h1>
                </div>
                {showToast && (
                    <div className="toast-volteo">
                    <h1>Visualizaciones de la promos</h1>
                    <h2>datos a</h2>
                    <h2>datos b</h2>
                    <h2>datos c</h2>
                    <h2>datos d</h2>
                    <h2>datos e</h2>
                    <h2>datos f</h2>
                    <button onClick={handleCloseToast}>
                        Cerrar
                    </button>
                    </div>
                )}
                </div>
            </section>
        );
    };
    const ToastsDos = () => {
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
        1. Importa las bibliotecas React: React, useState y useEffect.
        2. Importa el archivo de estilos './Toasts.css'.
        3. Declara una función llamada 'ToastsElemento' sin argumentos.
        4. Dentro de 'ToastsElemento', usa 'useState' para declarar tres estados: 'showToast', 'canShowToast' y 'disableMouseEnter'.
        5. Crea una función llamada 'handleMouseEnterToastDos'.
        6. En 'handleMouseEnterToastDos', verifica 'canShowToast' y 'disableMouseEnter'.
        7. Si ambas condiciones son verdaderas, establece 'showToast' en 'true' y configura un temporizador para cerrarlo después de 15 segundos. Luego, deshabilita 'canShowToast' durante 1 minuto y 'disableMouseEnter' durante 1 minuto.
        8. Crea una función llamada 'handleCloseToast'.
        9. Dentro de 'handleCloseToast', establece 'showToast' en 'false' y habilita 'canShowToast' después de 1 minuto, y habilita 'disableMouseEnter' después de 1 minuto.
        10. Renderiza JSX con un 'section', un 'h1' con clase 'toasts-title-dos', un 'div' con clase 'toast-container-dos', y dentro de ese 'div', un 'div' con clase 'toast-dos' que tiene un 'h1' y un 'div' condicional 'toast-volteo' con varios elementos 'h1', 'h2' y un botón 'Cerrar'.
    `;
    const buttonCode = `
    import React, { useState } from 'react';
    import './Toasts.css';

    const ToastsElemento = () => {
    const [showToast, setShowToast] = useState(false);
    const [canShowToast, setCanShowToast] = useState(true);
    const [disableMouseEnter, setDisableMouseEnter] = useState(false);

    const handleMouseEnterToastDos = () => {
        if (canShowToast && !disableMouseEnter) {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
            setCanShowToast(false);
            setTimeout(() => {
            setCanShowToast(true);
            }, 60000); // 1 minuto
            setDisableMouseEnter(true);
            setTimeout(() => {
            setDisableMouseEnter(false);
            }, 60000); // 1 minuto
        }, 15000); // Cierra el cartel automáticamente después de 15 segundos.
        }
    };

    const handleCloseToast = () => {
        setShowToast(false);
        setTimeout(() => {
        setCanShowToast(true);
        }, 60000); // 1 minuto
        setDisableMouseEnter(true);
        setTimeout(() => {
        setDisableMouseEnter(false);
        }, 60000); // 1 minuto
    };

    return (
        <section>
            <h1 className='toasts-title-dos'>Cartel Emergente con React</h1>
            <div className="toast-container-dos">
                <div className="toast-dos" onMouseEnter={handleMouseEnterToastDos}>
                <h1> Vea nuestras Promociones</h1>
                </div>
                {showToast && (
                <div className="toast-volteo">
                    <h1>Visualizaciones de la promos</h1>
                    <h2>datos a</h2>
                    <h2>datos b</h2>
                    <h2>datos c</h2>
                    <h2>datos d</h2>
                    <h2>datos e</h2>
                    <h2>datos f</h2>
                    <h2>datos g</h2>
                    <button onClick={handleCloseToast}>
                    Cerrar
                    </button>
                </div>
                )}
            </div>
        </section>
    );
    };
    export default ToastsElemento;
    `;
    const buttonCss = `
    .toast-container-dos {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 20vh;
        height: auto;
        position: relative;
        margin-top: 20px;
    }
    .toast-dos {
        background-color: black;
        min-width: 20rem;
        height: 1rem;
        color: white;
        border: aquamarine 2px solid;
        border-radius: 8px;
        padding: 20px;
        text-align: center;
        position: absolute;
        margin: auto;
        top: 0; /* Ajustamos la parte superior a 0 para que se abra a la misma altura */
    }
    .toast-volteo{
        background-color: black;
        min-width: 20rem;
        height: auto;
        color: white;
        border: aquamarine 2px solid;
        border-radius: 8px;
        padding: 20px;
        text-align: center;
        position: absolute;
        margin: auto;
        top: 0; /* Ajustamos la parte superior a 0 para que se abra a la misma altura */
    }
    `;
    return (
        <section>
            <div className="card">
                <div className="card-content">
                <ToastsElemento/>
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


export default ToastsDos
