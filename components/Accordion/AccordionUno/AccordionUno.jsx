import { useState } from 'react';
import PropTypes from 'prop-types';
import './AccordionUno.css';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onClick}>
        {title}
        {isOpen ? ' - Toque aquí para ocultar texto' : ' - Toque aquí para abrir texto'}
        <hr />
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
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

const AccordionUno = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReactCodeOpen, setIsReactCodeOpen] = useState(false);
  const [isCssCodeOpen, setIsCssCodeOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);

  const accordionInfo = `Los acordeones son elementos interactivos que permiten mostrar u ocultar contenido. En este caso, puedes explorar los códigos y detalles del Accordion Uno.`;
  const infoContent = `Para crear este código, sigue estos pasos:
  1. Instalar PropTypes: Comienza instalando la biblioteca PropTypes en tu proyecto. PropTypes es una herramienta que te ayuda a definir los tipos esperados de las propiedades que pasas a tus componentes de React. Instálala con el siguiente comando:  npm install prop-types
  2. Definir Componente AccordionItem: Crea el componente "Accordion". Este componente renderiza un elemento de acordeón con un título, contenido y comportamiento de clic para abrir/ocultar.
  PropTypes se utiliza para definir las propiedades del componente, como "title", "content", "isOpen" y "onClick".
  3. Definir Componente "Accordion": Crea el componente "Accordion". Este componente maneja el estado del acordeón. Define el contenido de información y la función "handleToggleAccordion" para cambiar el estado de apertura/ocultamiento del acordeón.
  4. Crear Contenido y Estilos: Define el texto informativo, como la descripción de los acordeones y su funcionamiento. Agrega estilos CSS para mejorar la apariencia del acordeón.
  5. Exportar Componente: Exporta el componente "Accordion" para poder usarlo en otros archivos.`;
  const accordionUnoCode = `
  import { useState } from 'react';
  import PropTypes from 'prop-types';
  import './AccordionUno.css';
  const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={onClick}>
          {title}
          {isOpen ? ' - Ocultar texto' : ' - Abrir texto'}
          <hr />
        </div>
        {isOpen && <div className="accordion-content">{content}</div>}
      </div>
    );
  };
  AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  const AccordionUno = () => {
    const [isOpen, setIsOpen] = useState(false);
    const accordionInfo = "Los acordeones son elementos interactivos.";
    const handleToggleAccordion = () => {
      setIsOpen(!isOpen);
    };
    return (
      <div className="accordion-wrapper">
        <AccordionItem
          title="Accordion Uno"
          content={accordionInfo}
          isOpen={isOpen}
          onClick={handleToggleAccordion}
        />
      </div>
    );
  };
  export default AccordionUno;`;
  const accordionUnoCss = `
  .accordion-item {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    cursor: pointer;
  }
  .accordion-title {
    font-size: 24px;
    font-weight: bold;
  }
  .accordion-content {
    font-size: 20px;
    margin-top: 10px;
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
      contentToCopy = accordionUnoCode;
    } else if (isCssCodeOpen) {
      contentToCopy = accordionUnoCss;
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
            title="Accordion Uno"
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
              <pre>{`${accordionUnoCode}`}</pre>
              <CopyButton text={accordionUnoCode} onCopy={handleCopy} />
            </div>
          )}
          {isCssCodeOpen && (
            <div className="code-section">
              <pre>{accordionUnoCss}</pre>
              <CopyButton text={accordionUnoCss} onCopy={handleCopy} />
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

export default AccordionUno;
