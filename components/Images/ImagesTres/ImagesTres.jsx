import { useState } from 'react'
import PropTypes from 'prop-types';
import './ImagesTres.css';
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


const ImageElemento = () => {
  const [imagenes, setImagenes] = useState([]);

  const handleImagenChange = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      const nuevasImagenes = [...imagenes];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onloadend = () => {
          nuevasImagenes.push(reader.result);
          setImagenes([...nuevasImagenes]);
        };

        reader.readAsDataURL(file);
      }
    }
  };

  const handleEliminarImagen = (index) => {
    const nuevasImagenes = [...imagenes];
    nuevasImagenes.splice(index, 1);
    setImagenes(nuevasImagenes);
  };

  return (
    <div className="image-container">
      <div className="input-wrapper">
        <label htmlFor="inputImagen" className="input-label">
          <div className="input-box">
            <span>Elegir Imagen</span>
            <input
              type="file"
              id="inputImagen"
              onChange={handleImagenChange}
              className="input-imagesTres"
              multiple
            />
          </div>
        </label>
      </div>
      <div className="image-wrapper">
        {imagenes.map((imagen, index) => (
          <div key={index} className="image-item">
            <img src={imagen} alt={`Imagen ${index + 1}`} className="imagesTres" />
            <button
              onClick={() => handleEliminarImagen(index)}
              className="button-imagesTres"
            >
              Eliminar Imagen
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const ImagesTres = () => {
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
          <ImageElemento/>
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


export default ImagesTres