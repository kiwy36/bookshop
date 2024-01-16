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
            setDisplay((prevDisplay) => prevDisplay + value);
        };

        const handleClear = () => {
            setDisplay('');
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
                    <button className='calculator-button ' onClick={() => handleButtonClick('/')}>/</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('(')}>(</button>

                    <button className='calculator-button ' onClick={() => handleButtonClick('4')}>4</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('5')}>5</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('6')}>6</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('*')}>*</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick(')')}>)</button>

                    <button className='calculator-button ' onClick={() => handleButtonClick('1')}>1</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('2')}>2</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('3')}>3</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('-')}>-</button>
                    <button className='calculator-button ' onClick={() => handleClear()}>C</button>

                    <button className='calculator-button ' onClick={() => handleButtonClick('0')}>0</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('.')}>.</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('%')}>%</button>
                    <button className='calculator-button ' onClick={() => handleButtonClick('+')}>+</button>
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

    const infoContent = ``;
    const buttonCode = ``;
    const buttonCss = ``;

    return (
        <section>
            <div className="card">
                <div className="card-content">
                <h1 className='Other-title'>Titulo del elemento</h1>
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