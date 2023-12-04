import { useState } from 'react'
import PropTypes from 'prop-types';
import './FormsTres.css';
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
  const [formData, setFormData] = useState({
    itemA: '',
    itemB: '',
    itemC: '',
    itemD: '',
  });
  const [showSelections, setShowSelections] = useState(false);
  const [key, setKey] = useState(0);
  const [showFinishButton, setShowFinishButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputChange = (item, option) => {
    setFormData({
      ...formData,
      [item]: option,
    });
  };
  const handleVolver = () => {
    setShowSelections(false);
    setShowFinishButton(true);
    setErrorMessage('');
  };
  const handleFinish = () => {
    // Puedes realizar acciones con formData aquí
    setShowSelections(true);
    setShowFinishButton(false);
  };
  const handleEnviar = () => {
    if (!formData.itemA || !formData.itemB || !formData.itemC || !formData.itemD) {
      setErrorMessage('Falta completar campos, presione volver y verifique.');
    } else {
      setErrorMessage('');
      setKey(Math.random());
      setShowSelections(false);
      setShowFinishButton(true);
      simulateDataSending(formData);
      setFormData({
        itemA: '',
        itemB: '',
        itemC: '',
        itemD: '',
      });
    }
  };
  const simulateDataSending = (data) => {
    // Puedes realizar acciones de envío simuladas aquí
    console.log('Enviando datos:', data);
    // Puedes realizar acciones adicionales, como redireccionar o hacer una solicitud a un servidor
    // Ejemplo de redirección después de 2 segundos (puedes ajustar según tus necesidades)
    setTimeout(() => {
      console.log('Datos enviados exitosamente');
      // Aquí puedes redirigir o realizar otras acciones después del envío
    }, 2000);
  };
  return (
    <section>
      <h1 className='forms-title'>Formulario con botones multiple opciones</h1>
      <div key={key} className="containerFormTres">
        <div className="formSectionFormTres">
          <h2>Item A</h2>
          <div className="formSectionFormTresOptions">
            {Array.from({ length: 5 }).map((_, index) => (
              <label className='labelFormTres' key={`opA${index}`}>
                {`Opción ${index + 1}A`}
                <input
                  type="radio"
                  name="itemA"
                  value={`op${index + 1}A`}
                  checked={formData.itemA === `op${index + 1}A`}
                  onChange={() => handleInputChange('itemA', `op${index + 1}A`)}
                />
              </label>
            ))}
          </div>
        </div>

        <div className="formSectionFormTres">
          <h2>Item B</h2>
          <div className="formSectionFormTresOptions">
            {Array.from({ length: 5 }).map((_, index) => (
              <label className='labelFormTres'  key={`opB${index}`}>
                {`Opción ${index + 1}B`}
                <input
                  type="radio"
                  name="itemB"
                  value={`op${index + 1}B`}
                  checked={formData.itemB === `op${index + 1}B`}
                  onChange={() => handleInputChange('itemB', `op${index + 1}B`)}
                />
              </label>
            ))}
          </div>
        </div>

        <div  className="formSectionFormTres">
          <h2>Item C</h2>
          <div className="formSectionFormTresOptions">
            {Array.from({ length: 5 }).map((_, index) => (
              <label  className='labelFormTres' key={`opC${index}`}>
                {`Opción ${index + 1}C`}
                <input
                  type="radio"
                  name="itemC"
                  value={`op${index + 1}C`}
                  checked={formData.itemC === `op${index + 1}C`}
                  onChange={() => handleInputChange('itemC', `op${index + 1}C`)}
                />
              </label>
            ))}
          </div>
        </div>
        <div  className="formSectionFormTres">
          <h2>Item D</h2>
          <div className="formSectionFormTresOptions">
            {Array.from({ length: 5 }).map((_, index) => (
              <label className='labelFormTres' key={`opD${index}`}>
                {`Opción ${index + 1}D`}
                <input
                  type="radio"
                  name="itemD"
                  value={`op${index + 1}D`}
                  checked={formData.itemD === `op${index + 1}D`}
                  onChange={() => handleInputChange('itemD', `op${index + 1}D`)}
                />
              </label>
            ))}
          </div>
        </div>
        {showSelections && (
          <div className='resultsFormTres'>
            <h1>Selecciones:</h1>
            <p>Item A: {formData.itemA}</p>
            <p>Item B: {formData.itemB}</p>
            <p>Item C: {formData.itemC}</p>
            <p>Item D: {formData.itemD}</p>
            <div className='buttonFormTresContainer'>
              <button className="buttonFormTres" onClick={handleVolver}>Volver</button>
              <button className="buttonFormTres" onClick={handleEnviar}>Enviar</button>
            </div>
            {errorMessage && <h1>{errorMessage}</h1>}
          </div>
        )}
        {showFinishButton && (
          <button className="buttonFormTres" onClick={handleFinish}>
            Terminar
          </button>
        )}
      </div>
    </section>
  );
};
const FormsTres = () => {
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
    1. Importa React y el hook 'useState' desde 'react'.
    2. Importa el archivo de estilos './FormsTres.css'.
    3. Define el componente 'FormsElemento'.
    4. Utiliza el hook 'useState' para gestionar estados.
    5. Crea estados para el formulario, visibilidad de selecciones, clave, botón de finalización y mensaje de error.
    6. Implementa funciones para el manejo de cambios, volver, finalizar y enviar.
    7. Agrega la simulación de envío de datos con 'simulateDataSending'.
    8. Estructura el retorno del componente con secciones para cada ítem del formulario.
    9. Muestra resultados y botones según la visibilidad.
    10. Añade estilos y clases a los elementos para el diseño y responsividad.
  `;
  const buttonCode = `
  import { useState } from 'react'
  import './FormsTres.css';
  const FormsElemento = () => {
    const [formData, setFormData] = useState({
      itemA: '',
      itemB: '',
      itemC: '',
      itemD: '',
    });
    const [showSelections, setShowSelections] = useState(false);
    const [key, setKey] = useState(0);
    const [showFinishButton, setShowFinishButton] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const handleInputChange = (item, option) => {
      setFormData({
        ...formData,
        [item]: option,
      });
    };
    const handleVolver = () => {
      setShowSelections(false);
      setShowFinishButton(true);
      setErrorMessage('');
    };
    const handleFinish = () => {
      // Puedes realizar acciones con formData aquí
      setShowSelections(true);
      setShowFinishButton(false);
    };
    const handleEnviar = () => {
      if (!formData.itemA || !formData.itemB || !formData.itemC || !formData.itemD) {
        setErrorMessage('Falta completar campos, presione volver y verifique.');
      } else {
        setErrorMessage('');
        setKey(Math.random());
        setShowSelections(false);
        setShowFinishButton(true);
        simulateDataSending(formData);
        setFormData({
          itemA: '',
          itemB: '',
          itemC: '',
          itemD: '',
        });
      }
    };
    const simulateDataSending = (data) => {
      // Puedes realizar acciones de envío simuladas aquí
      console.log('Enviando datos:', data);
      // Puedes realizar acciones adicionales, como redireccionar o hacer una solicitud a un servidor
      // Ejemplo de redirección después de 2 segundos (puedes ajustar según tus necesidades)
      setTimeout(() => {
        console.log('Datos enviados exitosamente');
        // Aquí puedes redirigir o realizar otras acciones después del envío
      }, 2000);
    };
    return (
      <div key={key} className="containerFormTres">
        <div className="formSectionFormTres">
          <h2>Item A</h2>
          <div className="formSectionFormTresOptions">
            {Array.from({ length: 5 }).map((_, index) => (
              <label className='labelFormTres' key={'opA${'index'}'}>
                {'Opción ${'index' + 1}A'}
                <input
                  type="radio"
                  name="itemA"
                  value={'op${'index' + 1}A'}
                  checked={formData.itemA === 'op${'index'+ 1}A'}
                  onChange={() => handleInputChange('itemA', 'op${'index'+ 1}A')}
                />
              </label>
            ))}
          </div>
        </div>
  
        <div className="formSectionFormTres">
          <h2>Item B</h2>
          <div className="formSectionFormTresOptions">
            {Array.from({ length: 5 }).map((_, index) => (
              <label className='labelFormTres'  key={'opB${'index'}'}>
                {'Opción ${'index' + 1}B'}
                <input
                  type="radio"
                  name="itemB"
                  value={'op${'index'+ 1}B'}
                  checked={formData.itemB === 'op${'index'+ 1}B'}
                  onChange={() => handleInputChange('itemB', 'op${'index' + 1}B')}
                />
              </label>
            ))}
          </div>
        </div>
        <div  className="formSectionFormTres">
          <h2>Item C</h2>
          <div className="formSectionFormTresOptions">
            {Array.from({ length: 5 }).map((_, index) => (
              <label  className='labelFormTres' key={'opC${'index'}'}>
                {'Opción ${'index' + 1}C'}
                <input
                  type="radio"
                  name="itemC"
                  value={'op${'index' + 1}C'}
                  checked={formData.itemC === 'op${'index' + 1}C'}
                  onChange={() => handleInputChange('itemC', 'op${'index' + 1}C')}
                />
              </label>
            ))}
          </div>
        </div>
        <div  className="formSectionFormTres">
          <h2>Item D</h2>
          <div className="formSectionFormTresOptions">
            {Array.from({ length: 5 }).map((_, index) => (
              <label className='labelFormTres' key={'opD${'index'}'}>
                {'Opción ${'index' + 1}D'}
                <input
                  type="radio"
                  name="itemD"
                  value={'op${'index' + 1}D'}
                  checked={formData.itemD === 'op${'index' + 1}D'}
                  onChange={() => handleInputChange('itemD', 'op${'index' + 1}D')}
                />
              </label>
            ))}
          </div>
        </div>
        {showSelections && (
          <div className='resultsFormTres'>
            <h1>Selecciones:</h1>
            <p>Item A: {formData.itemA}</p>
            <p>Item B: {formData.itemB}</p>
            <p>Item C: {formData.itemC}</p>
            <p>Item D: {formData.itemD}</p>
            <div className='buttonFormTresContainer'>
              <button className="buttonFormTres" onClick={handleVolver}>Volver</button>
              <button className="buttonFormTres" onClick={handleEnviar}>Enviar</button>
            </div>
            {errorMessage && <h1>{errorMessage}</h1>}
          </div>
        )}
        {showFinishButton && (
          <button className="buttonFormTres" onClick={handleFinish}>
            Terminar
          </button>
        )}
      </div>
    );
  };
  export default FormElemento
  `;
  const buttonCss = `
    .containerFormTres {
      min-width: 600px;
      max-width: 600px;
      margin: auto;
      padding: 20px;
      text-align: center;
    }

    .formSectionFormTres {
      margin-bottom: 20px;
    }
    .formSectionFormTresOptions{
      display: flex;
      flex-direction: row;
    }

    .labelFormTres {
      cursor: pointer;
      font-size: 15px;
      margin: 0 2px;
      display: block;
      margin-bottom: 10px;
      border: solid 3px aquamarine;
      padding: 5px 10px;
    }
    .labelFormTres:hover{
      border: solid 3px aquamarine;
      background-color: #fff;
      color: black;
    }
    .buttonFormTresContainer{
      display: flex;
      flex-direction: row;
    }
    .buttonFormTres {
      background-color: #4caf50;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin: 2px;
      margin-top: 7px;
    }

    .buttonFormTres:hover {
      background-color: #45a049;
    }
    .resultsFormTres {
      position: sticky;
      background-color: rgba(0, 0, 0, 0.8);
      color: #fff; /* Color del texto */
      padding: 20px;
      border-radius: 10px;
      z-index: 999;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    input[type="radio"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      display: inline-block;
      position: relative;
      background-color: #fff;
      border: 2px solid #ccc;
      border-radius: 50%;
      width: 13px;
      height: 13px;
      margin-right: 5px;
      cursor: pointer;
      margin:0 3px;
    }

    input[type="radio"]:checked {
      background-color: red;
      border-color: aquamarine;
    }

    input[type="radio"]:checked::before {
      content: '2022';
      color: red;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    @media only screen and (max-width: 480px){
      .containerFormTres {
          min-width: auto;
          max-width: 600px;
          margin: auto;
          padding: 0;
          text-align: center;
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

export default FormsTres