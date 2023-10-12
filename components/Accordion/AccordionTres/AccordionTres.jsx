import { useState } from 'react';
import PropTypes from 'prop-types';
import './AccordionTres.css';
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <section className='contenedor-ac-tres'>
      <div className={`accordion-item-tres ${isOpen ? 'opened' : ''}`}>
        <div className="accordion-title-tres" onClick={onClick}>
          {title}
        </div>
        {isOpen && <div className="accordion-content-tres">{content}</div>}
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

const AccordionTres = () => {
  const [isReactCodeOpen, setIsReactCodeOpen] = useState(false);
  const [isCssCodeOpen, setIsCssCodeOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const items = [
    {
      title: 'Titulo 1',
      content: 'Contenido del Titulo 1...',
    },
    {
      title: 'Titulo 2',
      content: 'Contenido del Titulo 2...',
    },
    {
      title: 'Titulo 3',
      content: 'Contenido del Titulo 3...',
    },
    {
      title: 'Titulo 4',
      content: 'Contenido del Titulo 4...',
    },
  ];
  const infoContent = `Para crear un acordeón horizontal en React, sigue estos pasos:Paso 1: Crea una carpeta "Accordion" en tu proyecto React.
  Agrega "AccordionTres.js" y "AccordionTres.css" dentro de esta carpeta.
  Paso 2: Abre una terminal y ejecuta el comando "npm install prop-types" para instalar PropTypes en tu proyecto.
  Paso 3: En "AccordionTres.js", importa React, useState y PropTypes, junto con el archivo CSS.
  Paso 4: Define el componente "AccordionItem" para mostrar los títulos y contenido del acordeón.
  Paso 5: Asegúrate de que PropTypes esté instalado usando "npm install prop-types".
  Paso 6: Agrega PropTypes en "AccordionTres.js" para validar las propiedades del componente.
  Paso 7: Define el componente principal "AccordionTres" que contenga el estado y la lógica del acordeón.
  Paso 8: Exporta el componente principal "AccordionTres".`;
  const accordionTresCode = `import React, { useState } from "react";
  import PropTypes from "prop-types";
  import "./AccordionTres.css";

  const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
      <div className={\`accordion-item-tres \${isOpen ? "opened" : ""}\`}>
        <div className="accordion-title-tres" onClick={onClick}>
          {title}
        </div>
        {isOpen && <div className="accordion-content-tres">{content}</div>}
      </div>
    );
  };

  AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  const AccordionTres = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const items = [
      {
        title: "Titulo 1",
        content: "Contenido del Titulo 1...",
      },
      {
        title: "Titulo 2",
        content: "Contenido del Titulo 2...",
      },
      {
        title: "Titulo 3",
        content: "Contenido del Titulo 3...",
      },
      {
        title: "Titulo 4",
        content: "Contenido del Titulo 4...",
      },
    ];

    const handleToggleAccordion = (index) => {
      if (activeIndex === index) {
        setActiveIndex(null);
      } else {
        setActiveIndex(index);
      }
    };

    return (
      <div className="accordion-container-tres">
        <div className="accordion-tres">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={activeIndex === index}
              onClick={() => handleToggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    );
  };

  export default AccordionTres;
  `;
  const accordionTresCss = `/* Estilos CSS para el Acordeón */
  .accordion-container-tres {
    position: relative;
    display: flex;
    align-items: flex-start;
    overflow: hidden;
    margin: 10px;
  }
  .accordion-tres {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
  }

  .accordion-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    opacity: 0.5;
    pointer-events: none;
  }

  .accordion-item-tres {
    text-align: center;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 10px 0;
  }

  .accordion-title-tres {
    cursor: pointer;
    width: 30%;
    height: 100%;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: none;
    z-index: 2;
    position: sticky;
    top: 0;
  }
  .accordion-title-tres:hover{
    color: aquamarine;
  }
  .accordion-content-tres {
    width: 70%;
    border: solid 2px #fff;
    font-size: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 30%;
    padding: 20px;
    box-sizing: border-box;
    z-index: 1;
  }
  `;
  const handleToggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

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
      contentToCopy = accordionTresCode;
    } else if (isCssCodeOpen) {
      contentToCopy = accordionTresCss;
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
          <h1 className='accordion-title-acm'>Accordion con multitarjetas</h1>
          <div className="accordion-container-tres">
            <div className="accordion-overlay"></div>
            <div className="accordion-tres">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  isOpen={activeIndex === index}
                  onClick={() => handleToggleAccordion(index)}
                />
              ))}
            </div>
          </div>
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
              <pre>{`${accordionTresCode}`}</pre>
              <CopyButton text={accordionTresCode} onCopy={handleCopy} />
            </div>
          )}
          {isCssCodeOpen && (
            <div className="code-section">
              <pre>{accordionTresCss}</pre>
              <CopyButton text={accordionTresCss} onCopy={handleCopy} />
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

export default AccordionTres;
