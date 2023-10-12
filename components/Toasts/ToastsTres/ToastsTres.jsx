import { useState } from 'react'
import PropTypes from 'prop-types';
import './ToastsTres.css'

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
      const [result, setResult] = useState(null);
      const handleConfirm = () => {
        setShowToast(false);
        setResult('confirmed');
      };
      const handleDeny = () => {
        setShowToast(false);
        setResult('denied');
      };
      const handleCancel = () => {
        setShowToast(false);
      };
      const openToast = () => {
        setShowToast(true);
      };
      const closeToast = () => {
        setResult(null);
      };
      return (
        <section>
          <h1 className="toasts-title">Ventana de Confirmación Interactiva</h1>
          <div className='contenedor-toasts-tres'>
            <button className='toasts-button-tres-principal' onClick={openToast}>Terminar Tramite</button>
            {showToast && (
              <div className="toast-tres">
                <h1>Quieres Guardar cambios?</h1>
                <div className='button-row'>
                  <button className='toasts-button-tres' onClick={handleConfirm}>Guardar</button>
                  <button className='toasts-button-tres' onClick={handleDeny}>Descartar</button>
                  <button className='toasts-button-tres' onClick={handleCancel}>Cancelar</button>
                </div>
              </div>
            )}
            {result === 'confirmed' && (
              <div className="success-toast">
                <h1>Saved!</h1>
                <button className='toasts-button-result' onClick={closeToast}>Ok</button>
              </div>
            )}
            {result === 'denied' && (
              <div className="info-toast">
                <h1>Changes are not saved</h1>
                <button className='toasts-button-result' onClick={closeToast}>Ok</button>
              </div>
            )}
            {result === 'canceled' && (
              <div className="info-toast">
                <h1>Operation canceled</h1>
                <button className='toasts-button-result' onClick={closeToast}>Ok</button>
              </div>
            )}
          </div>
        </section>
      );
    };
    const ToastsTres = () => {
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
    1. Importamos el módulo 'useState' de React y el archivo CSS.
    2. Creamos un componente funcional llamado 'ToastsElemento'.
    3. Definimos dos estados, 'showToast' y 'result', utilizando 'useState'.
    4. Creamos las funciones 'handleConfirm', 'handleDeny', y 'handleCancel' para gestionar acciones.
    5. 'openToast' se encarga de mostrar el cuadro de diálogo.
    6. 'closeToast' reinicia el resultado a 'null' para cerrar el cuadro de diálogo.
    7. Usamos un componente 'section' que contiene un título descriptivo.
    8. Un botón principal con la clase 'toasts-button-tres-principal' inicia la interacción.
    9. El cuadro de diálogo se muestra cuando 'showToast' es verdadero.
    10. Dependiendo de 'result', se muestra un mensaje de éxito, de rechazo o de cancelación, junto con un botón "Ok".
    `;
    const buttonCode = `
    import { useState } from 'react'
    import './ToastsTres.css'

    const ToastsElemento = () => {
      const [showToast, setShowToast] = useState(false);
      const [result, setResult] = useState(null);
      const handleConfirm = () => {
        setShowToast(false);
        setResult('confirmed');
      };
      const handleDeny = () => {
        setShowToast(false);
        setResult('denied');
      };
      const handleCancel = () => {
        setShowToast(false);
      };
      const openToast = () => {
        setShowToast(true);
      };
      const closeToast = () => {
        setResult(null);
      };
      return (
        <section>
          <h1 className="toasts-title">Ventana de Confirmación Interactiva</h1>
          <div className='contenedor-toasts-tres'>
            <button className='toasts-button-tres-principal' onClick={openToast}>Terminar Tramite</button>
            {showToast && (
              <div className="toast-tres">
                <h1>Quieres Guardar cambios?</h1>
                <div className='button-row'>
                  <button className='toasts-button-tres' onClick={handleConfirm}>Guardar</button>
                  <button className='toasts-button-tres' onClick={handleDeny}>Descartar</button>
                  <button className='toasts-button-tres' onClick={handleCancel}>Cancelar</button>
                </div>
              </div>
            )}
            {result === 'confirmed' && (
              <div className="success-toast">
                <h1>Saved!</h1>
                <button className='toasts-button-result' onClick={closeToast}>Ok</button>
              </div>
            )}
            {result === 'denied' && (
              <div className="info-toast">
                <h1>Changes are not saved</h1>
                <button className='toasts-button-result' onClick={closeToast}>Ok</button>
              </div>
            )}
            {result === 'canceled' && (
              <div className="info-toast">
                <h1>Operation canceled</h1>
                <button className='toasts-button-result' onClick={closeToast}>Ok</button>
              </div>
            )}
          </div>
        </section>
      );
    };
    export default ToastsElemento
    `;
    const buttonCss = `
    .toast-tres {
        width: calc(100% - 2px);
        height: 100%;
        max-width: 100%;
        background-color: white;
        border: 1px solid #ddd;
        border-radius: 8px;
        text-align: center;
    }
    .button-row {
        max-width: 100%;
        display: flex;
        justify-content: center;
        gap: 10px;
    }
    .toasts-button-tres-principal{
        display: block;
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 10px 20px;
        font-size: 1rem;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
    }
    .toasts-button-tres-principal:hover {
        background-color: #0056b3;
    }
    .toasts-button-tres {
        display: block;
        margin:auto;
        width: 30%;
        padding: 10px 20px;
        font-size: 1rem;
        background-color: #007bff;
        color: white;
        border-radius: 8px;
        cursor: pointer;
        border: 1px solid #ddd;
    }
    @media (max-width: 768px) {
        .toasts-button-tres {
            font-size: 0.7rem;
            margin-bottom: 1px;
            margin: auto;
        }
    }
    .toasts-button-tres:hover {
        background-color: #0056b3;
    }
    .success-toast {
        font-size: 1.5rem;
        text-align: center;
        width: 100%;
        height: 100%;
        margin: auto;
        background-color: #28a745;
        color: white;
        position: absolute;
        top: 0;
        left: 0;
    }
    .success-toast h1{
        margin: 20px;
    }
    .info-toast {
        font-size: 1.5rem;
        text-align: center;
        width: 100%;
        height: 100%;
        margin: auto;
        background-color: #b81724;
        color: white;
        position: absolute;
        top: 0;
        left: 0;
    }
    .info-toast h1{
        margin: 20px;
    }
    .toasts-button-result{
        display: block;
        margin:auto;
        width: 30%;
        padding: 10px 20px;
        font-size: 1rem;
        background-color: #007bff;
        color: white;
        border-radius: 8px;
        cursor: pointer;
        border: 1px solid #ddd;
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


export default ToastsTres
