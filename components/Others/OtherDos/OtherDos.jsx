import { useState } from 'react'
import PropTypes from 'prop-types';
import './OtherDos.css';
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

    const OtherElemento = () => {
        const [password, setPassword] = useState('');

        const generatePassword = () => {
            const length = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
            const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let newPassword = '';

            for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            newPassword += characters.charAt(randomIndex);
            }

            setPassword(newPassword);
        };

        return (
            <div className="password-generator">
                <button className='contrase-button' onClick={() => generatePassword()}>Generar Contraseña</button>
                <div className="display-paswordd">{password}</div>
            </div>
        );
    };



    const OtherDos = () => {
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
        1. Importa el hook 'useState' de React para gestionar el estado en el componente de generación de contraseñas.

        2. Crea un componente funcional llamado 'OtherElemento' y establece el estado inicial de la contraseña utilizando 'useState'.
        
        3. Define la función 'generatePassword' para generar una contraseña aleatoria con longitud entre 10 y 16 caracteres, combinando letras minúsculas, mayúsculas y dígitos.
        
        4. Utiliza un botón con la clase 'contrase-button' para llamar a la función 'generatePassword' al hacer clic.
        
        5. En el JSX del componente, crea un contenedor con la clase "password-generator" que envuelve el botón y la visualización de la contraseña.
        
        6. Muestra la contraseña generada dentro de un elemento con la clase "display-password".
        
        7. Exporta el componente 'OtherElemento'.
        
        8. En el CSS (OtherDos.css), asegúrate de definir estilos para la "password-generator" y "display-password", así como el estilo para el botón con la clase 'contrase-button'.
        
        9. Ajusta el estilo del botón para que sea visualmente atractivo y fácil de identificar como un botón de generación de contraseña.
        
        10. Puedes agregar estilos adicionales según tus preferencias, como colores, márgenes y bordes, para mejorar la apariencia del generador de contraseñas.`;
    const buttonCode = `
        import { useState } from 'react'
        import './OtherDos.css';
        const OtherElemento = () => {
            const [password, setPassword] = useState('');
    
            const generatePassword = () => {
                const length = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
                const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                let newPassword = '';
    
                for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                newPassword += characters.charAt(randomIndex);
                }
    
                setPassword(newPassword);
            };
    
            return (
                <div className="password-generator">
                    <button className='contrase-button' onClick={() => generatePassword()}>Generar Contraseña</button>
                    <div className="display-paswordd">{password}</div>
                </div>
            );
        };
        export default OtherElemento
    `;
    const buttonCss = `
    .password-generator {
        max-width: 250px;
        margin: auto;
        background-color: #fff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    
    .display-paswordd {
        color: black;
        min-width: 250px;
        max-width: 250px;
        width: 250px;
        font-size: 24px;
        padding: 10px;
        text-align: center;
    }
    
    .contrase-button {
        width: 250px;
        font-size: 18px;
        padding: 15px;
        border: none;
        background-color: #4caf50;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    
    .contrase-button:hover {
        background-color: #45a049;
    }
    
    .contrase-button:active {
        background-color: #3e8e41;
    }
    `;

    return (
        <section>
            <div className="card">
                <div className="card-content">
                <h1 className='Other-title'>Generados de contraseñas alfa numerico</h1>
                <OtherElemento/>
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


export default OtherDos