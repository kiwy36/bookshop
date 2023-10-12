import { useState} from 'react'
import PropTypes from 'prop-types';
import './ToastsUno.css'

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
      const [loading, setLoading] = useState(false);
      const [showResponse, setShowResponse] = useState(false);
      const [robotResponse, setRobotResponse] = useState(false);
      const [buttonText, setButtonText] = useState('Iniciar Solicitud');
      const [isStartButtonDisabled, setStartButtonDisabled] = useState(false);
      const [isOkButtonPresent, setIsOkButtonPresent] = useState(false);
      const handleStartRequest = () => {
        // Verificar si el check está marcado.
        if (robotResponse) {
          setLoading(true);
          setShowResponse(false);
          setButtonText('Procesando...');
          setStartButtonDisabled(true);
          setIsOkButtonPresent(true); // Muestra el botón "Ok"
          setTimeout(() => {
            setLoading(false);
            setShowResponse(true);
            setButtonText('Iniciar Solicitud');
            setStartButtonDisabled(true);
          }, 5000);
        } else {
          setShowResponse(true);
          setLoading(false);
          setIsOkButtonPresent(true); // Muestra el botón "Ok" para "Usted es un robot"
          setStartButtonDisabled(true)
        }
      };
      const handleOkClick = () => {
        setShowResponse(false);
        setIsOkButtonPresent(false); // Oculta el botón "Ok"
        setStartButtonDisabled(false); // Desbloquea el botón "Iniciar Solicitud"
        setRobotResponse(false); // Reinicia el checkbox
      };

      return (
        <section>
          <h1 className='toasts-title'>Toast con verificacion y cartel emergente</h1>
          <div className="toast-container">
            <label>
              <input
                type="checkbox"
                checked={robotResponse}
                onChange={() => setRobotResponse(!robotResponse)}
                disabled={isOkButtonPresent} // Bloquea el checkbox si el botón "Ok" está presente
              />
              ¿Eres un robot?
            </label>
            <button onClick={handleStartRequest} disabled={isStartButtonDisabled}>
              {buttonText}
            </button>
            {loading && <div>Cargando...</div>}
            {showResponse && (
              <div className="toast">
                <h1>{robotResponse ? 'Solicitud enviada' : 'Usted es un robot'}</h1>
                {isOkButtonPresent && (
                  <button onClick={handleOkClick}>Ok</button>
                )}
              </div>
            )}
          </div>
        </section>
      );
    };
    const ToastsUno = () => {
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
      1. 'Importa React': Asegúrate de que en tu archivo estés importando React. Puedes agregar 'import React from 'react';' al principio del archivo si aún no lo has hecho.

      2. 'Importa useState': Importa 'useState' desde React para poder utilizar el estado en tu componente. Ya lo has importado correctamente en tu código.

      3. 'Definir el componente': Define un componente funcional llamado 'ToastsElemento' utilizando una función flecha 'const ToastsElemento = () => { ... }'.

      4. 'Inicializa el estado': Declara las siguientes variables de estado utilizando 'useState' y configúralas con sus valores iniciales: 'loading', 'showResponse', 'robotResponse', 'buttonText', 'isStartButtonDisabled', y 'isOkButtonPresent'.

      5. 'Maneja el botón de inicio': Crea una función llamada 'handleStartRequest' que se activará cuando se haga clic en el botón "Iniciar Solicitud". Dentro de esta función, implementa la lógica para manejar la solicitud, mostrar la carga y actualizar el estado según sea necesario.

      6. 'Maneja el botón "Ok"': Crea una función llamada 'handleOkClick' que se activará cuando se haga clic en el botón "Ok". Dentro de esta función, implementa la lógica para ocultar el mensaje de respuesta, ocultar el botón "Ok" y restablecer el estado.

      7. 'Renderiza el componente': En el retorno de la función del componente, estructura tu JSX para mostrar los elementos HTML necesarios, como etiquetas 'label', un botón y divs para mostrar mensajes y carga.

      8. 'Maneja el checkbox': Asegúrate de que el checkbox esté conectado a la variable de estado 'robotResponse' mediante el atributo 'checked' y que esté deshabilitado cuando el botón "Ok" esté presente.

      9. 'Botón "Iniciar Solicitud" deshabilitado': Asegúrate de que el botón "Iniciar Solicitud" esté deshabilitado cuando 'isStartButtonDisabled' sea 'true'. Esto se controlará en función de la lógica que establezcas.

      10. 'Botón "Ok" condicional': El botón "Ok" debe mostrarse dentro del div de respuesta solo si 'isOkButtonPresent' es 'true'. Asegúrate de que esté dentro de un bloque condicional.
    `;
    const buttonCode = `
    import { useState} from 'react'
    import './Toasts.css'
    const ToastsElemento = () => {
      const [loading, setLoading] = useState(false);
      const [showResponse, setShowResponse] = useState(false);
      const [robotResponse, setRobotResponse] = useState(false);
      const [buttonText, setButtonText] = useState('Iniciar Solicitud');
      const [isStartButtonDisabled, setStartButtonDisabled] = useState(false);
      const [isOkButtonPresent, setIsOkButtonPresent] = useState(false);
      const handleStartRequest = () => {
        // Verificar si el check está marcado.
        if (robotResponse) {
          setLoading(true);
          setShowResponse(false);
          setButtonText('Procesando...');
          setStartButtonDisabled(true);
          setIsOkButtonPresent(true); // Muestra el botón "Ok"
          setTimeout(() => {
            setLoading(false);
            setShowResponse(true);
            setButtonText('Iniciar Solicitud');
            setStartButtonDisabled(true);
          }, 5000);
        } else {
          setShowResponse(true);
          setLoading(false);
          setIsOkButtonPresent(true); // Muestra el botón "Ok" para "Usted es un robot"
          setStartButtonDisabled(true)
        }
      };
      const handleOkClick = () => {
        setShowResponse(false);
        setIsOkButtonPresent(false); // Oculta el botón "Ok"
        setStartButtonDisabled(false); // Desbloquea el botón "Iniciar Solicitud"
        setRobotResponse(false); // Reinicia el checkbox
      };
      return (
        <section>
          <h1 className='toasts-title'>Toast con verificacion y cartel emergente</h1>
          <div className="toast-container">
            <label>
              <input
                type="checkbox"
                checked={robotResponse}
                onChange={() => setRobotResponse(!robotResponse)}
                disabled={isOkButtonPresent} // Bloquea el checkbox si el botón "Ok" está presente
              />
              ¿Eres un robot?
            </label>
            <button onClick={handleStartRequest} disabled={isStartButtonDisabled}>
              {buttonText}
            </button>
            {loading && <div>Cargando...</div>}
            {showResponse && (
              <div className="toast">
                <h1>{robotResponse ? 'Solicitud enviada' : 'Usted es un robot'}</h1>
                {isOkButtonPresent && (
                  <button onClick={handleOkClick}>Ok</button>
                )}
              </div>
            )}
          </div>
        </section>
      );
    };
    export default ToastsElemento
    `;
    const buttonCss = `
    .toast-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 20vh;
    }
    .toast {
        background-color: black;
        color: white;
        border: aquamarine 2px solid;
        border-radius: 8px;
        padding: 20px;
        text-align: center;
        position: absolute;
        transition: transform 30s ease;
        margin-top: -10px;
    }
    .toast.hide {
        transform: translateY(-100%);
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


export default ToastsUno
