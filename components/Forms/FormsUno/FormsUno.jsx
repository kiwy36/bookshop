import { useState } from 'react'
import PropTypes from 'prop-types';
import './FormsUno.css';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !isChecked) {
      let errorMessage = 'Por favor, complete ';
      if (!email) {
        errorMessage += 'el campo de correo electrónico ';
      }
      if (!password) {
        errorMessage += 'el campo de contraseña ';
      }
      if (!isChecked) {
        errorMessage += 'y marque la casilla.';
      }
      setError(errorMessage);
      setTimeout(() => {
        setError('');
      }, 5000);
    } else {
      console.log('Funciona');
    }
  };

  return (
    <section>
      <h1 className='forms-title'>Formulario clasico</h1>
      <form className='formUno ' onSubmit={handleSubmit}>
        <label htmlFor="formBasicEmail" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="formBasicEmail"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="formBasicPassword" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="formBasicPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="formBasicCheckbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label className="form-check-label" htmlFor="formBasicCheckbox">Check me out</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        {error && <h1>{error}</h1>}
      </form>
    </section>
  );
};
const FormsUno = () => {
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
  1. Uso de Hooks: El componente utiliza el hook 'useState' de React para gestionar el estado de email, contraseña, casilla de verificación y mensajes de error.

  2. Manejo de Formulario: La función 'handleSubmit' maneja el evento de envío del formulario, realizando validaciones y mostrando mensajes de error si es necesario.

  3. Validación de Campos: Se realiza una validación para asegurar que los campos de correo electrónico, contraseña y la casilla estén completos. Si no lo están, se muestra un mensaje detallando los campos faltantes.

  4. Estilo con CSS: El formulario utiliza estilos provenientes de un archivo externo 'FormsUno.css' para personalizar su apariencia.

  5. Labels y Placeholders: Se utilizan etiquetas 'label' para describir los campos y placeholders para proporcionar instrucciones visuales en los campos de entrada.

  6. Manejo de Estado: El estado se actualiza mediante funciones como 'setEmail', 'setPassword', y 'setIsChecked' en respuesta a eventos de cambio en los campos del formulario.

  7. Desactivación de Botón: Inicialmente, el botón de envío está activo, pero si algún campo está incompleto, se desactiva temporalmente y se muestra un mensaje de error.

  8. Consola de Funcionamiento: Si todos los campos están completos, al hacer clic en 'Submit', se imprime un mensaje en la consola indicando que el formulario funciona.

  9. Temporizador de Error: Se establece un temporizador de 5 segundos para que los mensajes de error desaparezcan automáticamente después de ser mostrados.

  10. Clases de Bootstrap: Se utilizan clases de Bootstrap para mejorar el estilo del formulario y el botón de envío.
  `;
  const buttonCode = `
  import { useState } from 'react';
  import './FormsUno.css';
  const FormsElemento = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!email || !password || !isChecked) {
        let errorMessage = 'Por favor, complete ';
        if (!email) {
          errorMessage += 'el campo de correo electrónico ';
        }
        if (!password) {
          errorMessage += 'el campo de contraseña ';
        }
        if (!isChecked) {
          errorMessage += 'y marque la casilla.';
        }
        setError(errorMessage);
        setTimeout(() => {
          setError('');
        }, 5000);
      } else {
        console.log('Funciona');
      }
    };
    return (
      <form className='formUno ' onSubmit={handleSubmit}>
        <label htmlFor="formBasicEmail" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="formBasicEmail"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
  
        <label htmlFor="formBasicPassword" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="formBasicPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="formBasicCheckbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label className="form-check-label" htmlFor="formBasicCheckbox">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {error && <h1>{error}</h1>}
      </form>
    );
  };
  export default FormsElemento
  `;
  const buttonCss = `
  .form-label {
      display: block;
      margin-bottom: 8px;
  }
  .form-control {
      width: 100%;
      margin-bottom: 16px;
  }
  .form-check {
      margin-bottom: 16px;
  }
  .btn-primary {
      cursor: pointer;
      background-color: #007bff;
      padding: 5px 15px;
      border-radius: 8px;
      font-size: 13px;
  }
  @media (max-width: 768px){
      .form-control{
          width: 60%;
      }
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

export default FormsUno