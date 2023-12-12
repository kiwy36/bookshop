import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import './ImagesDos.css';
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
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isAccordionOpenImagenUno, setIsAccordionOpenImagenUno] = useState(false);
  const [isAccordionOpenImagenDos, setIsAccordionOpenImagenDos] = useState(false);

  const handleImageClick = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleImageClickImagenUno = () => {
    setIsAccordionOpenImagenUno(!isAccordionOpenImagenUno);
  };

  const handleImageClickImagenDos = () => {
    setIsAccordionOpenImagenDos(!isAccordionOpenImagenDos);
  };

  // useEffect para la imagen 1
  useEffect(() => {
    const timerImagenUno = setTimeout(() => {
      setIsAccordionOpenImagenUno(false);
    }, 7000);

    return () => clearTimeout(timerImagenUno);
  }, [isAccordionOpenImagenUno]);

  // useEffect para la imagen 2
  useEffect(() => {
    const timerImagenDos = setTimeout(() => {
      setIsAccordionOpenImagenDos(false);
    }, 7000);

    return () => clearTimeout(timerImagenDos);
  }, [isAccordionOpenImagenDos]);

  // useEffect para la imagen principal
  useEffect(() => {
    const timerPrincipal = setTimeout(() => {
      setIsAccordionOpen(false);
    }, 7000);

    return () => clearTimeout(timerPrincipal);
  }, [isAccordionOpen]);

  return (
    <section className='contenerdor-elementos-imagesDos'>
      <section className='imagesTresContainer'>
        <div className={`image-container-dos ${isAccordionOpen ? 'accordion-open' : ''}`}>
          <div className="hover-text-imagen-dos">
            Majestuoso y feroz, el puma es un felino americano que domina vastas regiones. Su elegancia y destreza lo destacan como un depredador impresionante.
          </div>
          <img
            src="https://www.gba.gob.ar/sites/default/files/img_agroindustria/COMUNICADO_PROYECTO_puma.jpg"
            alt="Imagen muestra"
            className="hover-image"
            onClick={handleImageClick}
          />
        </div>
        <div className={`image-container-dos ${isAccordionOpenImagenUno ? 'accordion-open' : ''}`}>
          <div className="hover-text-imagen-dos">
            El hornero, ave símbolo de Argentina, construye nidos de barro únicos. Su laboriosa naturaleza y canto melodioso lo distinguen en los campos sudamericanos.
          </div>
          <img
            src="https://i.pinimg.com/564x/87/75/8b/87758bcd8c11f4797e904d6e95f9935b.jpg"
            alt="Segunda imagen muestra"
            className="hover-image"
            onClick={handleImageClickImagenUno}
          />
        </div>
        <div className={`image-container-dos ${isAccordionOpenImagenDos ? 'accordion-open' : ''}`}>
          <div className="hover-text-imagen-dos">
            El pudú pudú, ciervo más pequeño del mundo, habita los bosques sudamericanos. Su tamaño diminuto y cuernos cortos lo hacen encantador.
          </div>
          <img
            src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2WXC5VEFCZARLG2XIDOVD6I37U.jpg"
            alt="Cuarta imagen muestra"
            className="hover-image"
            onClick={handleImageClickImagenDos}
          />
        </div>
      </section>
      <div className='parteAcompante-imagesDos'>
        <h1>parte acompañante</h1>
      </div>
    </section>
  );
};

const ImagesDos = () => {
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


export default ImagesDos