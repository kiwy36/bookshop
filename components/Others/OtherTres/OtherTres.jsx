import { useState } from 'react'
import PropTypes from 'prop-types';
import './OtherTres.css';
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
        const [amount, setAmount] = useState('');
        const [fromCurrency, setFromCurrency] = useState('USD');
        const [toCurrency, setToCurrency] = useState('USD');
        const [convertedAmount, setConvertedAmount] = useState(null);

        const currencies = ['ARS', 'MXN', 'BRL', 'USD', 'CNY', 'EUR', 'GBP', 'JPY']; // Agrega otras monedas según sea necesario

        const handleAmountChange = (e) => {
            setAmount(e.target.value);
        };

        const handleFromCurrencyChange = (e) => {
            setFromCurrency(e.target.value);
        };

        const handleToCurrencyChange = (e) => {
            setToCurrency(e.target.value);
        };

        const handleConvert = () => {
            if (amount !== '') {
            const convertedValue = convertCurrency(amount, fromCurrency, toCurrency);
            setConvertedAmount(convertedValue);
            }
        };

        const convertCurrency = (amount, fromCurrency, toCurrency) => {
            // Agrega tasas de cambio reales o utiliza una API de conversión de moneda
            const exchangeRates = {
            ARS: 100,  // Tasa de cambio ficticia
            MXN: 20,   // Tasa de cambio ficticia
            BRL: 5,    // Tasa de cambio ficticia
            USD: 1,    // Tasa de cambio ficticia
            CNY: 6,    // Tasa de cambio ficticia
            EUR: 0.85, // Tasa de cambio ficticia
            GBP: 0.75, // Tasa de cambio ficticia
            JPY: 110,  // Tasa de cambio ficticia
            };

            const fromRate = exchangeRates[fromCurrency];
            const toRate = exchangeRates[toCurrency];

            if (fromRate && toRate) {
            return (amount / fromRate) * toRate;
            } else {
            return null;
            }
        };

        return (
            <div className="currency-converter">
                <div className="input-section">
                    <input type="number" value={amount} onChange={handleAmountChange} />
                    <select className='other-tres-select' value={fromCurrency} onChange={handleFromCurrencyChange}>
                        {currencies.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-section">
                    <select className='other-tres-select' value={toCurrency} onChange={handleToCurrencyChange}>
                        {currencies.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                    <button className='other-tres-button' onClick={handleConvert}>Convertir</button>
                </div>
                <div className="output-section">
                    {convertedAmount !== null && (
                        <p>
                            {amount} {fromCurrency} equivale a {convertedAmount.toFixed(2)} {toCurrency}
                        </p>
                    )}
                </div>
            </div>
        );
    };


    const OtherTres = () => {
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
    1. Importa el hook 'useState' de React para gestionar el estado en tu componente de conversión de moneda.

    2. Crea un componente funcional llamado 'OtherElemento' y establece los estados iniciales para 'amount', 'fromCurrency', 'toCurrency', y 'convertedAmount' utilizando 'useState'.
    
    3. Define un array llamado 'currencies' que contiene las opciones de monedas que el usuario puede seleccionar. Puedes agregar más monedas según sea necesario.
    
    4. Implementa las funciones de cambio de estado 'handleAmountChange', 'handleFromCurrencyChange', y 'handleToCurrencyChange' para actualizar los valores de 'amount', 'fromCurrency' y 'toCurrency' respectivamente, en respuesta a los eventos del usuario.
    
    5. Crea una función llamada 'handleConvert' que convierta la cantidad de la moneda de origen a la moneda de destino utilizando la función 'convertCurrency'. Actualiza el estado 'convertedAmount' con el resultado de la conversión.
    
    6. Implementa la función 'convertCurrency' que toma 'amount', 'fromCurrency', y 'toCurrency' como parámetros y utiliza tasas de cambio ficticias (o reales si prefieres) para realizar la conversión.
    
    7. Estructura el JSX del componente 'OtherElemento' con secciones para la entrada de datos, selección de monedas y el botón de conversión, y una sección de salida para mostrar el resultado de la conversión.
    
    8. Utiliza elementos de entrada, selección y botón en JSX para permitir al usuario ingresar la cantidad, seleccionar la moneda de origen y destino, y realizar la conversión.
    
    9. Asegúrate de que los valores del estado se reflejen correctamente en los elementos de entrada y selección para mantener la interfaz actualizada.
    
    10. Exporta el componente 'OtherElemento' al final del archivo para que pueda ser utilizado en otros archivos.
    `;
    const buttonCode = `
    import { useState } from 'react'
    import './OtherTres.css';
    const OtherElemento = () => {
        const [amount, setAmount] = useState('');
        const [fromCurrency, setFromCurrency] = useState('USD');
        const [toCurrency, setToCurrency] = useState('USD');
        const [convertedAmount, setConvertedAmount] = useState(null);

        const currencies = ['ARS', 'MXN', 'BRL', 'USD', 'CNY', 'EUR', 'GBP', 'JPY']; // Agrega otras monedas según sea necesario

        const handleAmountChange = (e) => {
            setAmount(e.target.value);
        };

        const handleFromCurrencyChange = (e) => {
            setFromCurrency(e.target.value);
        };

        const handleToCurrencyChange = (e) => {
            setToCurrency(e.target.value);
        };

        const handleConvert = () => {
            if (amount !== '') {
            const convertedValue = convertCurrency(amount, fromCurrency, toCurrency);
            setConvertedAmount(convertedValue);
            }
        };

        const convertCurrency = (amount, fromCurrency, toCurrency) => {
            // Agrega tasas de cambio reales o utiliza una API de conversión de moneda
            const exchangeRates = {
            ARS: 100,  // Tasa de cambio ficticia
            MXN: 20,   // Tasa de cambio ficticia
            BRL: 5,    // Tasa de cambio ficticia
            USD: 1,    // Tasa de cambio ficticia
            CNY: 6,    // Tasa de cambio ficticia
            EUR: 0.85, // Tasa de cambio ficticia
            GBP: 0.75, // Tasa de cambio ficticia
            JPY: 110,  // Tasa de cambio ficticia
            };

            const fromRate = exchangeRates[fromCurrency];
            const toRate = exchangeRates[toCurrency];

            if (fromRate && toRate) {
            return (amount / fromRate) * toRate;
            } else {
            return null;
            }
        };

        return (
            <div className="currency-converter">
                <div className="input-section">
                    <input type="number" value={amount} onChange={handleAmountChange} />
                    <select className='other-tres-select' value={fromCurrency} onChange={handleFromCurrencyChange}>
                        {currencies.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-section">
                    <select className='other-tres-select' value={toCurrency} onChange={handleToCurrencyChange}>
                        {currencies.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                    <button className='other-tres-button' onClick={handleConvert}>Convertir</button>
                </div>
                <div className="output-section">
                    {convertedAmount !== null && (
                        <p>
                            {amount} {fromCurrency} equivale a {convertedAmount.toFixed(2)} {toCurrency}
                        </p>
                    )}
                </div>
            </div>
        );
    };
    export default OtherElemento
    `;
    const buttonCss = `
    .currency-converter {
      width: 300px;
      max-width: 300px;
      margin: auto;
      background-color: #010000;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    
    .input-section,
    .output-section,
    .conversion-section {
      padding: 10px;
      display: flex;
      align-items: center;
    }
    
    .input-section input,
    .input-section select,
    .output-section p,
    .conversion-section button {
      margin-right: 10px;
      padding: 8px;
    }
    
    .other-tres-button {
      margin-left: 10px; /* Ajusta el margen izquierdo para separar el select del botón */
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 8px 12px;
      cursor: pointer;
      border-radius: 4px;
    }
    
    .other-tres-button:hover {
      background-color: #45a049;
    }
    
    .other-tres-select {
      padding: 8px;
      font-size: 14px;
    }
    `;

    return (
        <section>
            <div className="card">
                <div className="card-content">
                <h1 className='Other-title'>Convertidor ficticio</h1>
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


export default OtherTres