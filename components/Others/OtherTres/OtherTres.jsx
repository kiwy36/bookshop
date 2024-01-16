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
                <select className='other-tres-select ' value={fromCurrency} onChange={handleFromCurrencyChange}>
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                    {currency}
                    </option>
                ))}
                </select>
            </div>
            <div className="conversion-section">
                <button className='other-tres-button' onClick={handleConvert}>Convertir</button>
            </div>
            <div className="output-section">
                {convertedAmount !== null && (
                <p>
                    {amount} {fromCurrency} equivale a {convertedAmount.toFixed(2)} {toCurrency}
                </p>
                )}
            </div>
            <div className="input-section">
                <select className='other-tres-select ' value={toCurrency} onChange={handleToCurrencyChange}>
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                    {currency}
                    </option>
                ))}
                </select>
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


export default OtherTres