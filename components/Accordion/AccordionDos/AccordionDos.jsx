import { useState } from 'react';
import PropTypes from 'prop-types';
import './AccordionDos.css';

const AccordionItem = ({ content, isOpen, onClick }) => {
  return (
    <section>
      <h1 className="accordion-title-dos">Accodion de apertura lateral</h1>
      <div className={`accordion-item accordion-horizontal ${isOpen ? "expanded" : ""}`}>
        <div onClick={onClick}>
          {isOpen ? " - Toque aquí para ocultar texto" : " - Toque aquí para abrir texto"}
        </div>
        {isOpen && <div className="accordion-content-dos">{content}</div>}
      </div>
    </section>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

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

const AccordionDos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReactCodeOpen, setIsReactCodeOpen] = useState(false);
  const [isCssCodeOpen, setIsCssCodeOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);

  const accordionInfo = `La disposición lateral del acordeón también facilita la navegación y el acceso a contenido adicional. Los usuarios pueden explorar rápidamente las secciones expandidas sin perder de vista la estructura general. Además, el cambio visual de un cuadro compacto a un área de contenido más amplia al expandirse ofrece una experiencia interactiva y atractiva.`;
  const infoContent = `Para crear un acordeón horizontal en React, sigue estos pasos:
  1. Instala PropTypes: Asegúrate de tener PropTypes instalado en tu proyecto usando npm install prop-types.
  2. Define el Componente AccordionItem: Crea un componente que muestre un acordeón con "title", "content", "isOpen" y "onClick". Cambia su ancho y posición al expandirse. Usa PropTypes para definir propiedades.
  3. Define el Componente Accordion : Crea otro componente para gestionar el estado del acordeón. Incluye contenido y funciones para abrir/ocultar el acordeón.
  4. Agrega Estilos y Contenido: Utiliza CSS para lograr el acordeón horizontal y cambia de tamaño al expandirse. Añade información sobre su funcionamiento.
  5. Aplica position: sticky: Agrega position: sticky; al estilo de .accordion-item en CSS para mantener el acordeón arriba y superponerse a elementos debajo al expandirse. Ajusta top y z-index según necesites.
  6. Exporta el Componente: Asegúrate de exportar el componente Accordion.
  Siguiendo estos pasos, lograrás un acordeón horizontal con un efecto sticky al expandirse.`;
  const accordionDosCode = `
  import { useState } from 'react';
  import PropTypes from 'prop-types';
  import './AccordionDos.css';

  const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
      <div className={\`accordion-item accordion-horizontal \${isOpen ? "expanded" : ""}\`}>
        <div className="accordion-title-dos" onClick={onClick}>
          {title}<br />
          <hr />
          {isOpen ? " - Toque aquí para ocultar texto" : " - Toque aquí para abrir texto"}
        </div>
        {isOpen && <div className="accordion-content-dos">{content}</div>}
      </div>
    );
  };

  AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  const AccordionDos = () => {
    const [isOpen, setIsOpen] = useState(false);
    const accordionInfo = "Contenido del accordion";

    return (
      <section>
        <div className="card">
          <div className="card-content">
            <AccordionItem
              title="Accordion Dos"
              content={accordionInfo}
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </section>
    );
  };

  export default AccordionDos;
  `;

  const accordionDosCss = `/* Estilos CSS para el Acordeón */
    .accordion-item {
      border-bottom: 1px solid #ccc;
      padding: 10px 0;
      cursor: pointer;
    }
    .accordion-title-dos {
      font-size: 24px;
      font-weight: bold;
    }
    .accordion-content-dos {
      font-size: 20px;
      margin-top: 10px;
    }
    .accordion-horizontal {
      display: flex;
      flex-direction: column;
      width: 160px; /* Ajusta el ancho según tus necesidades */
      min-height: 170px;
      max-height: 170px;
      margin: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      overflow: hidden;
      transition: width 0.3s ease-in-out;
    }
    .expanded {
      position: sticky;
      width: 600px;
      top: 0;
      z-index: 1;
    }
    `;
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

  const handleCopy = () => {
    let contentToCopy;
    if (isInfoOpen) {
      contentToCopy = infoContent;
    } else if (isReactCodeOpen) {
      contentToCopy = accordionDosCode;
    } else if (isCssCodeOpen) {
      contentToCopy = accordionDosCss;
    }
    navigator.clipboard.writeText(contentToCopy);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };

  return (
    <section>
      <div className="card">
        <div className="card-content">
          <AccordionItem
            content={accordionInfo}
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
          <div className="accordion-sections">
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
              <pre>{`${accordionDosCode}`}</pre>
              <CopyButton text={accordionDosCode} onCopy={handleCopy} />
            </div>
          )}
          {isCssCodeOpen && (
            <div className="code-section">
              <pre>{accordionDosCss}</pre>
              <CopyButton text={accordionDosCss} onCopy={handleCopy} />
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

export default AccordionDos;
