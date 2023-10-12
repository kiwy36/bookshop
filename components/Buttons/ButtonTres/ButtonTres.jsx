import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ButtonTres.css';

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
const Timer = () => {
  const [time, setTime] = useState(120);
  const [initialTime, setInitialTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);
//
  useEffect(() => {
    let timerInterval;
    if (running && time > 0) {
      timerInterval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setCompleted(true);
      setRunning(false);
      setShowCompletionMessage(true);
    }

    setShowInput(!running);
    return () => {
      clearInterval(timerInterval);
    };
  }, [running, time, initialTime]);
  useEffect(() => {
    if (showCompletionMessage) {
      const timeoutId = setTimeout(() => {
        setShowCompletionMessage(false);
      }, 10000); // 10 segundos en milisegundos
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showCompletionMessage]);

  const handleStartResetClick = () => {
    if (running) {
      setRunning(false);
      setCompleted(false);
      setTime(initialTime);
    } else {
      setRunning(true);
      setTime(initialTime);
      setShowInput(false);
      setShowCompletionMessage(false);
    }
  };

  const handleStopClick = () => {
    setRunning(false);
    setInitialTime(time);
    setTime(initialTime);
    setShowInput(true);
    setCompleted(false);
  };

  return (
    <section>
      <h1 className='button-title-tres'>Boton temporizador</h1>
      <div className="timer-container">
        {showInput ? (
          <input
            type="number"
            value={initialTime}
            onChange={(e) => setInitialTime(parseInt(e.target.value))}
            className="time-input"
            placeholder="Ingrese el tiempo en segundos"
          />
        ) : (
          <div className="time-display">{time}</div>
        )}
        <div className="buttons-container-timer">
          <button className='button-timer' onClick={handleStartResetClick}>
            {running ? 'Reset' : 'Play'}
          </button>
          <button  className='button-timer' onClick={handleStopClick} disabled={!running && !completed}>
            Stop
          </button>
        </div>
        {showCompletionMessage && <p className='boton-texto-tempo'>Temporizador terminado</p>}
      </div>
    <p className='boton-texto'>Los temporizadores internos en aplicaciones son esenciales para activar acciones como pausar videos por inactividad, mostrar anuncios en momentos estratégicos y validar formularios automáticamente, mejorando la experiencia y eficiencia del usuario.</p>
    </section>
  );
};

const ButtonTres = () => {
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

  const infoContent = `Para crear un temporizador interactivo en React:
  Importa useState y useEffect desde 'react'.
  Define el componente Timer.
  Utiliza estados para controlar el tiempo, el estado del temporizador y los mensajes.
  En el efecto, actualiza el tiempo usando setInterval si el temporizador está activo.
  Cuando el tiempo llega a 0, muestra un mensaje y detén el temporizador.
  Controla la visibilidad del input y el mensaje de finalización.
  Maneja los botones para iniciar, detener y reiniciar el temporizador.
  Exporta el componente Timer para usarlo en otras partes de tu aplicación.`;
  const buttonCode = `
  import { useState, useEffect } from 'react';
  import './ButtonTres.css';

  const Timer = () => {
    const [time, setTime] = useState(120);
    const [initialTime, setInitialTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [showInput, setShowInput] = useState(true);
    const [showCompletionMessage, setShowCompletionMessage] = useState(false);

    useEffect(() => {
      let timerInterval;

      if (running && time > 0) {
        timerInterval = setInterval(() => {
          setTime(prevTime => prevTime - 1);
        }, 1000);
      } else if (time === 0) {
        setCompleted(true);
        setRunning(false);
        setShowCompletionMessage(true);
      }

      setShowInput(!running);
      return () => {
        clearInterval(timerInterval);
      };
    }, [running, time, initialTime]);

    useEffect(() => {
      if (showCompletionMessage) {
        const timeoutId = setTimeout(() => {
          setShowCompletionMessage(false);
        }, 10000); // 10 segundos en milisegundos

        return () => {
          clearTimeout(timeoutId);
        };
      }
    }, [showCompletionMessage]);

    const handleStartResetClick = () => {
      if (running) {
        setRunning(false);
        setCompleted(false);
        setTime(initialTime);
      } else {
        setRunning(true);
        setTime(initialTime);
        setShowInput(false);
        setShowCompletionMessage(false);
      }
    };

    const handleStopClick = () => {
      setRunning(false);
      setInitialTime(time);
      setTime(initialTime);
      setShowInput(true);
      setCompleted(false);
    };

    return (
      <section>
        <h1 className='button-title-tres'>Boton temporizador</h1>
        <div className="timer-container">
          {showInput ? (
            <input
              type="number"
              value={initialTime}
              onChange={(e) => setInitialTime(parseInt(e.target.value))}
              className="time-input"
              placeholder="Ingrese el tiempo en segundos"
            />
          ) : (
            <div className="time-display">{time}</div>
          )}
          <div className="buttons-container-timer">
            <button className='button-timer' onClick={handleStartResetClick}>
              {running ? 'Reset' : 'Play'}
            </button>
            <button className='button-timer' onClick={handleStopClick} disabled={!running && !completed}>
              Stop
            </button>
          </div>
          {showCompletionMessage && <p className='boton-texto-tempo'>Temporizador terminado</p>}
        </div>
        <p className='boton-texto'>Por que un boton temporizador y eventos detonantes </p>
      </section>
    );
  };

  export default Timer;`;
  const buttonCss = `
  .button-title-tres {
    font-size: 30px;
    font-weight: bold;
    color: aquamarine;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px
  }
  .timer-container {
      margin: auto;
      justify-content: center;
      text-align: center;
      margin: 20px auto;
      width: 300px;
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .time-display {
      text-decoration: none;
      margin: auto;
      align-items: center;
      max-width: 50px;
      text-align: center;
      font-size: 30px;
      margin-bottom: 10px;
  }
  .buttons-container-timer {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 10px;
  }

  .button-timer {
      font-size: 16px;
      padding: 10px 20px;
      border: none;
      background-color: #007bff;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
  }

  .button-timer:disabled {
      background-color: #ccc;
      cursor: not-allowed;
  }
  .boton-texto-tempo{
      text-align: center;
  }

  .boton-texto{
      margin-top: 15px;
      font-size: 20px;
  }`;

  return (
    <section>
      <div className="card">
        <div className="card-content">
          <Timer/>
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

export default ButtonTres;

