import { useState } from 'react'
import PropTypes from 'prop-types';
import './ImagesUno.css';
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
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [currentX, setCurrentX] = useState(45);
  const [currentY, setCurrentY] = useState(45);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    setCurrentY(currentY + deltaX);
    setCurrentX(currentX - deltaY);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <div
      className="cube-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className="cube"
        style={{
          transform: `rotateX(${currentX}deg) rotateY(${currentY}deg)`,
        }}
      >
        <div className="face front">
          <img src="imagen1.jpg" alt="Imagen 1" />
        </div>
        <div className="face back">
          <img src="imagen2.jpg" alt="Imagen 2" />
        </div>
        <div className="face left">
          <img src="imagen3.jpg" alt="Imagen 3" />
        </div>
        <div className="face right">
          <img src="imagen4.jpg" alt="Imagen 4" />
        </div>
        <div className="face top">
          <img src="imagen5.jpg" alt="Imagen 5" />
        </div>
        <div className="face bottom">
          <img src="imagen6.jpg" alt="Imagen 6" />
        </div>
      </div>
    </div>
  );
};

const ImagesUno = () => {
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


export default ImagesUno