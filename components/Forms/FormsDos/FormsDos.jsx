import { useState,useEffect } from 'react'
import PropTypes from 'prop-types';
import './FormsDos.css';
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
const FormsElemento = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fechaNacimiento: '',
    direccion: '',
    tercerItem: '',
    acuerdoTramite: false,
    aceptaTerminos: false,
    confirmacionNoRobot: false,
  });
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastData, setToastData] = useState({});
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPasswordMatchError(false);
      setValidationError('');
    }, 4000);
    return () => clearTimeout(timeout);
  }, [passwordMatchError, validationError]);

  const handleNext = () => {
    if (step === 1) {
      if (!formData.email || !formData.password || !formData.confirmPassword) {
        setValidationError('Todos los campos deben estar completos.');
        setTimeout(() => setValidationError(''), 4000);
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setPasswordMatchError(true);
        setValidationError('Las contraseñas no coinciden.');
        return;
      }
    } else if (step === 2) {
      if (!formData.fechaNacimiento || !formData.direccion || !formData.tercerItem) {
        setValidationError('Todos los campos deben estar completos.');
        setTimeout(() => setValidationError(''), 4000);
        return;
      }
    }
    setStep(step + 1);
  };
  const handleBack = () => {
    setStep(step - 1);
  };

  const handleFinish = () => {
    if (!formData.acuerdoTramite || !formData.aceptaTerminos || !formData.confirmacionNoRobot) {
      setValidationError('Debes completar todos los checkboxes.');
      setTimeout(() => setValidationError(''), 5000);
      return;
    }
    setToastData({
      email: formData.email,
      fechaNacimiento: formData.fechaNacimiento,
      direccion: formData.direccion,
      tercerItem: formData.tercerItem,
    });
    setShowToast(true);
  };
  const handleToastDone = () => {
    setKey(Math.random());
    setShowToast(false);
    setStep(1);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      fechaNacimiento: '',
      direccion: '',
      tercerItem: '',
      acuerdoTramite: false,
      aceptaTerminos: false,
      confirmacionNoRobot: false,
    });
  };

  return (
    <section>
      <h1 className='forms-title'>Formulario en tres tiempos </h1>
    <div key={key} className="formulario-container-dos">
      {step === 1 && (
        <div>
          <h1>Formulario - Etapa 1</h1>
          <h1>Email: </h1>
          <input
            className='form-dos-input'
            type="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <h1>Password :</h1>
          <input
            className='form-dos-input'
            type="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <h1>Confirmacion :</h1>
          <input
            className='form-dos-input'
            type="password"
            placeholder="Confirmar contraseña"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          />
          {validationError && <h1 className="error-message">{validationError}</h1>}
          {passwordMatchError && <h1 className="error-message">{validationError}</h1>}
          <br />
          <button className='form-dos-etapa-button-etapaUno' onClick={handleNext}>Siguiente</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h1>Formulario - Etapa 2</h1>
          {/* Campos del formulario para la segunda etapa */}
          <h1>Fecha de nacimiento: </h1>
          <input
            className='form-dos-input'
            type="text"
            placeholder="Fecha de nacimiento"
            value={formData.fechaNacimiento}
            onChange={(e) => setFormData({ ...formData, fechaNacimiento: e.target.value })}
          />
          <h1>Dirección: </h1>
          <input
            className='form-dos-input'
            type="text"
            placeholder="Dirección"
            value={formData.direccion}
            onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
          />
          <h1>Otro dato: </h1>
          <input
            className='form-dos-input'
            type="text"
            placeholder="Tercer item"
            value={formData.tercerItem}
            onChange={(e) => setFormData({ ...formData, tercerItem: e.target.value })}
          />
          {validationError && <h1 className="error-message">{validationError}</h1>}
          <br />
          <button className='form-dos-etapa-button' onClick={handleBack}>Atrás</button>
          <button className='form-dos-etapa-button' onClick={handleNext}>Siguiente</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h1>Formulario - Etapa 3</h1>
          {/* Campos del formulario para la tercera etapa */}
          <label>
            Estoy de acuerdo con iniciar el trámite
            <input
              type="checkbox"
              checked={formData.acuerdoTramite}
              onChange={() => setFormData({ ...formData, acuerdoTramite: !formData.acuerdoTramite })}
            />
          </label>
          <br/>
          <label>
            Acepto los términos y condiciones
            <input
              type="checkbox"
              checked={formData.aceptaTerminos}
              onChange={() => setFormData({ ...formData, aceptaTerminos: !formData.aceptaTerminos })}
            />
          </label>
          <br />
          <label>
            Confirmo que no soy un robot
            <input
              type="checkbox"
              checked={formData.confirmacionNoRobot}
              onChange={() => setFormData({ ...formData, confirmacionNoRobot: !formData.confirmacionNoRobot })}
            />
          </label>
          <br />
          {validationError && <h1 className="error-message-tres">{validationError}</h1>}
          <button className='form-dos-etapa-button' onClick={handleBack}>Atrás</button>
          <button className='form-dos-etapa-button' onClick={handleFinish}>Terminado</button>
        </div>
      )}
      {showToast && (
        <div className="toast-container-tres">
          <h1>Datos del formulario:</h1>
          <p>Email: {toastData.email}</p>
          <p>Fecha de nacimiento: {toastData.fechaNacimiento}</p>
          <p>Dirección: {toastData.direccion}</p>
          <p>Tercer item: {toastData.tercerItem}</p>
          <button onClick={handleToastDone}>Listo</button>
        </div>
      )}
    </div>
    </section>
  );
};

const FormsDos = () => {
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
  1. Importar React Hooks: Importa los hooks 'useState' y 'useEffect' de React al principio del archivo.

  2. Importar Estilos: Importa el archivo de estilos 'FormsDos.css' al principio del archivo.

  3. Definir Función Principal: Define la función principal 'FormsElemento' que devuelve el contenido del formulario.

  4. Definir Estados con useState: Utiliza 'useState' para definir estados iniciales como 'step', 'formData', 'passwordMatchError', 'validationError', 'showToast', 'toastData', y 'key'.

  5. Configurar useEffect para Limpiar Errores: Usa 'useEffect' para limpiar los errores después de un tiempo determinado en 'passwordMatchError' y 'validationError'.

  6. Configurar Función handleNext: Crea la función 'handleNext' para validar y avanzar al siguiente paso del formulario.

  7. Configurar Función handleBack: Crea la función 'handleBack' para retroceder al paso anterior del formulario.

  8. Configurar Función handleFinish: Crea la función 'handleFinish' para validar y mostrar un mensaje de toast con los datos del formulario al finalizar.

  9. Configurar Función handleToastDone: Crea la función 'handleToastDone' para reiniciar el formulario al hacer clic en el botón 'Listo' del toast.

  10. Renderizar Componente: Renderiza el contenido del formulario con condicionales basados en el paso actual, utilizando clases CSS específicas para estilizar los elementos, como 'form-dos-input', 'form-dos-etapa-button', y 'error-message-tres'.

  Recuerda ajustar los estilos y nombres de clases según tus preferencias y diseño.
  `;
  const buttonCode = `
    import { useState,useEffect } from 'react'
    import './FormsDos.css';
    const FormsElemento = () => {
      const [step, setStep] = useState(1);
      const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        fechaNacimiento: '',
        direccion: '',
        tercerItem: '',
        acuerdoTramite: false,
        aceptaTerminos: false,
        confirmacionNoRobot: false,
      });
      const [passwordMatchError, setPasswordMatchError] = useState(false);
      const [validationError, setValidationError] = useState('');
      const [showToast, setShowToast] = useState(false);
      const [toastData, setToastData] = useState({});
      const [key, setKey] = useState(0);

      useEffect(() => {
        const timeout = setTimeout(() => {
          setPasswordMatchError(false);
          setValidationError('');
        }, 4000);
        return () => clearTimeout(timeout);
      }, [passwordMatchError, validationError]);

      const handleNext = () => {
        if (step === 1) {
          if (!formData.email || !formData.password || !formData.confirmPassword) {
            setValidationError('Todos los campos deben estar completos.');
            setTimeout(() => setValidationError(''), 4000);
            return;
          }

          if (formData.password !== formData.confirmPassword) {
            setPasswordMatchError(true);
            setValidationError('Las contraseñas no coinciden.');
            return;
          }
        } else if (step === 2) {
          if (!formData.fechaNacimiento || !formData.direccion || !formData.tercerItem) {
            setValidationError('Todos los campos deben estar completos.');
            setTimeout(() => setValidationError(''), 4000);
            return;
          }
        }
        setStep(step + 1);
      };
      const handleBack = () => {
        setStep(step - 1);
      };

      const handleFinish = () => {
        if (!formData.acuerdoTramite || !formData.aceptaTerminos || !formData.confirmacionNoRobot) {
          setValidationError('Debes completar todos los checkboxes.');
          setTimeout(() => setValidationError(''), 5000);
          return;
        }
        setToastData({
          email: formData.email,
          fechaNacimiento: formData.fechaNacimiento,
          direccion: formData.direccion,
          tercerItem: formData.tercerItem,
        });
        setShowToast(true);
      };
      const handleToastDone = () => {
        setKey(Math.random());
        setShowToast(false);
        setStep(1);
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
          fechaNacimiento: '',
          direccion: '',
          tercerItem: '',
          acuerdoTramite: false,
          aceptaTerminos: false,
          confirmacionNoRobot: false,
        });
      };

      return (
        <div key={key} className="formulario-container-dos">
          {step === 1 && (
            <div>
              <h1>Formulario - Etapa 1</h1>
              <h1>Email: </h1>
              <input
                className='form-dos-input'
                type="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <h1>Password :</h1>
              <input
                className='form-dos-input'
                type="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <h1>Confirmacion :</h1>
              <input
                className='form-dos-input'
                type="password"
                placeholder="Confirmar contraseña"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
              {validationError && <h1 className="error-message">{validationError}</h1>}
              {passwordMatchError && <h1 className="error-message">{validationError}</h1>}
              <br />
              <button className='form-dos-etapa-button-etapaUno' onClick={handleNext}>Siguiente</button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h1>Formulario - Etapa 2</h1>
              {/* Campos del formulario para la segunda etapa */}
              <h1>Fecha de nacimiento: </h1>
              <input
                className='form-dos-input'
                type="text"
                placeholder="Fecha de nacimiento"
                value={formData.fechaNacimiento}
                onChange={(e) => setFormData({ ...formData, fechaNacimiento: e.target.value })}
              />
              <h1>Dirección: </h1>
              <input
                className='form-dos-input'
                type="text"
                placeholder="Dirección"
                value={formData.direccion}
                onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
              />
              <h1>Otro dato: </h1>
              <input
                className='form-dos-input'
                type="text"
                placeholder="Tercer item"
                value={formData.tercerItem}
                onChange={(e) => setFormData({ ...formData, tercerItem: e.target.value })}
              />
              {validationError && <h1 className="error-message">{validationError}</h1>}
              <br />
              <button className='form-dos-etapa-button' onClick={handleBack}>Atrás</button>
              <button className='form-dos-etapa-button' onClick={handleNext}>Siguiente</button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h1>Formulario - Etapa 3</h1>
              {/* Campos del formulario para la tercera etapa */}
              <label>
                Estoy de acuerdo con iniciar el trámite
                <input
                  type="checkbox"
                  checked={formData.acuerdoTramite}
                  onChange={() => setFormData({ ...formData, acuerdoTramite: !formData.acuerdoTramite })}
                />
              </label>
              <br/>
              <label>
                Acepto los términos y condiciones
                <input
                  type="checkbox"
                  checked={formData.aceptaTerminos}
                  onChange={() => setFormData({ ...formData, aceptaTerminos: !formData.aceptaTerminos })}
                />
              </label>
              <br />
              <label>
                Confirmo que no soy un robot
                <input
                  type="checkbox"
                  checked={formData.confirmacionNoRobot}
                  onChange={() => setFormData({ ...formData, confirmacionNoRobot: !formData.confirmacionNoRobot })}
                />
              </label>
              <br />
              {validationError && <h1 className="error-message-tres">{validationError}</h1>}
              <button className='form-dos-etapa-button' onClick={handleBack}>Atrás</button>
              <button className='form-dos-etapa-button' onClick={handleFinish}>Terminado</button>
            </div>
          )}
          {showToast && (
            <div className="toast-container-tres">
              <h1>Datos del formulario:</h1>
              <p>Email: {toastData.email}</p>
              <p>Fecha de nacimiento: {toastData.fechaNacimiento}</p>
              <p>Dirección: {toastData.direccion}</p>
              <p>Tercer item: {toastData.tercerItem}</p>
              <button onClick={handleToastDone}>Listo</button>
            </div>
          )}
        </div>
      );
    };
    export default FormsElemento
  `;
  const buttonCss = `
  .formulario-container-dos {
    max-width: 300px;
    min-width: 300px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
  }

  .error-message-tres {
      font-size: 16px;
      color: #fff;
      margin-top: 10px;
  }

  .toast-container-tres {
      color: black;
      max-width: 250px;
      min-width: 250px;
      height: auto;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      background-color: #f0f0f0;
  }

  .toast-container-tres h1 {
      font-size: 18px;
      margin-bottom: 10px;
  }

  .toast-container-tres p {
      margin: 5px 0;
  }

  .toast-container-tres button {
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 8px 16px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin-top: 10px;
      cursor: pointer;
  }
  .form-dos-input{
      width: 100%;
      border: black 2px solid;
      border-radius: 8px;
      margin-bottom: 5px;
  }
  .form-dos-etapa-button{
      width: 45%;
      min-width: 45%;
      margin: 0 2.5%;
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 10px;
      margin-top: 10px;
      cursor: pointer;
      border-radius: 5px;
      font-size: 16px;
      transition: background-color 0.3s;
  }
  .form-dos-etapa-button:hover {
      background-color: #45a049;
  }
  .form-dos-etapa-button-etapaUno{
      width: 97%;
      min-width: 97%;
      margin: 0 3%;
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 10px;
      margin-top: 10px;
      cursor: pointer;
      border-radius: 5px;
      font-size: 16px;
      transition: background-color 0.3s;
  }
  .form-dos-etapa-button-etapaUno:hover {
      background-color: #45a049;
  }
  `;

  return (
    <section>
      <div className="card">
        <div className="card-content">
          <FormsElemento/>
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

export default FormsDos