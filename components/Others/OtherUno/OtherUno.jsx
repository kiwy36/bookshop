import { useState } from 'react'
import PropTypes from 'prop-types';
import './OtherUno.css';
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
        const [display, setDisplay] = useState('');
        const handleButtonClick = (value) => {
            if (display.length < 20) {
                setDisplay((prevDisplay) => prevDisplay + value);
            }
        };
        const handleClear = () => {
            setDisplay('');
        };
        const handleBackspace = () => {
            setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
        };

        const handleCalculate = () => {
            try {
            setDisplay(eval(display).toString());
            } catch (error) {
            setDisplay('Error');
            }
        };
        return (
            <div className="calculator">
                <div className="display">{display}</div>
                <div className="buttons">
                    <button className='calculator-button ' onClick={() => handleButtonClick('7')}>7</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('8')}>8</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('9')}>9</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('(')}>(</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick(')')}>)</button>

                    <button className='calculator-button ' onClick={() => handleButtonClick('4')}>4</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('5')}>5</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('6')}>6</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('/')}>/</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('*')}>X</button>

                    <button className='calculator-button ' onClick={() => handleButtonClick('1')}>1</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('2')}>2</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('3')}>3</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('-')}>-</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('+')}>+</button>

                    <button className='calculator-button ' onClick={() => handleButtonClick('0')}>0</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('.')}>.</button>
                    <button className='calculator-button ' onClick={() => handleBackspace()}>←</button>
                    <button className='calculator-button ' onClick={() => handleClear()}>C</button>
                    <button className='calculator-button ' onClick={() => handleCalculate()}>=</button>
                </div>
            </div>
        );
    };


    const OtherUno = () => {
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
    1. Importa el hook 'useState' de React para gestionar el estado de la calculadora.

    2. Crea un componente funcional llamado 'Calculadora' y establece el estado inicial del 'display' utilizando 'useState'.

    3. Define las funciones 'handleButtonClick', 'handleClear', 'handleBackspace' y 'handleCalculate' para manejar las interacciones del usuario.

    4. En la función 'handleButtonClick', verifica que la longitud del 'display' sea menor que 20 antes de agregar un nuevo carácter. Esto evita que se exceda el límite de caracteres.

    5. En la función 'handleClear', establece el 'display' a una cadena vacía para borrar todos los valores.

    6. En la función 'handleBackspace', utiliza 'slice' para eliminar el último carácter del 'display', permitiendo borrar un valor a la vez.

    7. En la función 'handleCalculate', utiliza un bloque 'try-catch' para evaluar la expresión en el 'display'. Si hay un error, muestra "Error"; de lo contrario, muestra el resultado convertido a cadena.

    8. Estructura el JSX del componente 'Calculadora' con un contenedor principal con la clase "calculator".

    9. Dentro del contenedor, agrega un elemento con la clase "display" para mostrar el 'display' actual.

    10. Añade un contenedor con la clase "buttons" que contiene los botones numéricos, operadores y funciones. Cada botón utiliza la función correspondiente al hacer clic. Finalmente, exporta el componente 'Calculadora'.
    `;
    const buttonCode = `
    import { useState } from 'react'
    import './calculadora.css';
    const Calculadora = () => {
        const [display, setDisplay] = useState('');
        const handleButtonClick = (value) => {
            if (display.length < 20) {
                setDisplay((prevDisplay) => prevDisplay + value);
            }
        };
        const handleClear = () => {
            setDisplay('');
        };
        const handleBackspace = () => {
            setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
        };

        const handleCalculate = () => {
            try {
            setDisplay(eval(display).toString());
            } catch (error) {
            setDisplay('Error');
            }
        };
        return (
            <div className="calculator">
                <div className="display">{display}</div>
                <div className="buttons">
                    <button className='calculator-button ' onClick={() => handleButtonClick('7')}>7</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('8')}>8</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('9')}>9</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('(')}>(</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick(')')}>)</button>

                    <button className='calculator-button ' onClick={() => handleButtonClick('4')}>4</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('5')}>5</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('6')}>6</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('/')}>/</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('*')}>X</button>

                    <button className='calculator-button ' onClick={() => handleButtonClick('1')}>1</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('2')}>2</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('3')}>3</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('-')}>-</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('+')}>+</button>

                    <button className='calculator-button ' onClick={() => handleButtonClick('0')}>0</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('.')}>.</button>
                    <button className='calculator-button ' onClick={() => handleBackspace()}>←</button>
                    <button className='calculator-button ' onClick={() => handleClear()}>C</button>
                    <button className='calculator-button ' onClick={() => handleCalculate()}>=</button>
                </div>
            </div>
        );
    };
    export default Calculadora
    `;
    const buttonCss = `
        .calculator {
            width: 300px;
            max-width: 300px;
            margin: auto;
            background-color: #000000;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        .display {
            font-size: 24px;
            text-align: right;
            padding: 10px;
            border-bottom: 1px solid #ccc;
            min-height: 15px;
            height: 15px;
            background-color: #fff;
            color: #000000;
        }
        .buttons {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
        }
        .calculator-button {
            font-size: 20px;
            padding: 15px;
            border: none;
            background-color: #fff;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .calculator-button :hover {
            background-color: #e0e0e0;
        }
        .calculator-button :active {
            background-color: #ccc;
        }
    `;

    return (
        <section>
            <div className="card">
                <div className="card-content">
                <h1 className='Other-title'>Calculadora basica limitada a 20 caracteres</h1>
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


export default OtherUno