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
      <h1 className='images-title'>Imagenes con acordeon emergente</h1>
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

  const infoContent = `
    Instrucciones para armar el componente 'ImageElemento':

    1. Importa React Hooks:
      Importa los hooks 'useState' y 'useEffect' de React al inicio del archivo.

    2. Importa el archivo de estilos:
      Importa el archivo de estilos 'ImagesDos.css' en el mismo archivo.

    3. Define el componente funcional:
      Crea una función llamada 'ImageElemento' que retornará la estructura del componente.

    4. Declara los estados:
      Declara tres estados usando 'useState' para controlar la apertura del acordeón de cada imagen.

    5. Crea funciones de manejo de clic:
      Define tres funciones ('handleImageClick', 'handleImageClickImagenUno', 'handleImageClickImagenDos') para manejar el clic en cada imagen y actualizar los estados correspondientes.

    6. Establece efectos con 'useEffect':
      Configura tres efectos con 'useEffect' para cada imagen. Estos efectos utilizan 'setTimeout' para cerrar automáticamente el acordeón después de 7 segundos.

    7. Estructura principal del componente:
      Dentro del retorno, crea la estructura principal utilizando JSX. Usa condiciones de clase para aplicar estilos dinámicos basados en los estados.

    8. Primera imagen:
      Define el primer contenedor de imagen con un texto descriptivo y una imagen que responde a los clics.

    9. Segunda imagen:
      Crea el segundo contenedor de imagen con texto y una imagen adicional.

    10. Tercera imagen:
        Añade el tercer contenedor de imagen con su texto y respectiva imagen.

    11. Exporta el componente:
        Exporta el componente 'ImageElemento' al final del archivo para su uso en otras partes de la aplicación.
  `;
  const buttonCode = `
  import { useState, useEffect } from 'react';
  import './ImagesDos.css';
  
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
          <div className={\`image-container-dos \${isAccordionOpen ? 'accordion-open' : ''}\`}>
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
          <div className={\`image-container-dos \${isAccordionOpenImagenUno ? 'accordion-open' : ''}\`}>
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
          <div className={\`image-container-dos \${isAccordionOpenImagenDos ? 'accordion-open' : ''}\`}>
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
      </section>
    );
  };
  
  export default ImageElemento;
  `;
  const buttonCss = `
    .contenerdor-elementos-imagesDos{
        width: 40%;
        margin: auto;
    }
    .imagesTresContainer {
        position: relative;
    }
    
    .image-container-dos {
        position: relative;
        overflow: hidden;
        width: 100%;
    }
    
    .hover-text-imagen-dos {
        text-align: center;
        display: flex; /* Añadida propiedad para usar flexbox */
        align-items: center; /* Centrar verticalmente en el medio */
        justify-content: center;
        position: absolute;
        top: 0;
        left: 105px;
        width: 0;
        height: 98%;
        background-color: rgba(0, 0, 0, 0.9); /* Color de fondo del texto */
        transition: width 0.5s ease, border 0.5s ease; /* Añadida transición para el borde */
        overflow: hidden;
        border: none;
        z-index: 2;
    }
    
    .image-container-dos:hover .hover-text-imagen-dos,
    .image-container-dos.accordion-open .hover-text-imagen-dos {
        width: 400px; /* Ancho deseado cuando se hace hover o se expande */
        z-index: 2;
    }
    .hover-image {
        border: red 3px solid;
        border-radius: 50%;
        width: 100px;
        min-height: 100px;
        height: 100px;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        /* Estilos específicos para pantallas más grandes (tabletas y escritorio) */
        .hover-text-imagen-dos {
            text-align: start;
            font-size: 15px; /* Tamaño de fuente para pantallas más grandes */
        }
        .contenerdor-elementos-imagesDos{
            width: 100%;
            margin: auto;
        }
    }
  `;

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