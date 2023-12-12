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
  return (
    <div className="cube-container">
      <div className="cube">
        <div className="face front">
          <img src="https://previews.123rf.com/images/sylverarts/sylverarts1506/sylverarts150600306/40988884-brillante-patr%C3%B3n-transparente-con-figuras-sim%C3%A9tricas-entretejen.jpg" alt="Imagen 1" width={200} height={200}/>
        </div>
        <div className="face back">
          <img src="https://previews.123rf.com/images/fbatista72/fbatista721812/fbatista72181200099/113260258-abstracto-colorido-hex%C3%A1gono-cuadrado-geom%C3%A9trico-de-patrones-sin-fisuras-sim%C3%A9trica-caleidoscopio-moda.jpg" alt="Imagen 2" width={200} height={200} />
        </div>
        <div className="face left">
          <img src="https://previews.123rf.com/images/fbatista72/fbatista721811/fbatista72181102531/112914170-abstracto-colorido-hex%C3%A1gono-cuadrado-geom%C3%A9trico-de-patrones-sin-fisuras-sim%C3%A9trica-caleidoscopio-moda.jpg" alt="Imagen 3" width={200} height={200}/>
        </div>
        <div className="face right">
          <img src="https://us.123rf.com/450wm/fbatista72/fbatista721811/fbatista72181108746/113161736-abstracto-colorido-hex%C3%A1gono-cuadrado-geom%C3%A9trico-de-patrones-sin-fisuras-sim%C3%A9trica-caleidoscopio-moda.jpg?ver=6" alt="Imagen 4" width={200} height={200}/>
        </div>
        <div className="face top">
          <img src="https://us.123rf.com/450wm/essl/essl1504/essl150400343/39282936-modelo-incons%C3%BAtil-abstracto-geom%C3%A9trico-en-color-vector-papel-tapiz-de-fondo-de-la-vendimia-mosaico.jpg?ver=6" alt="Imagen 5" width={200} height={200}/>
        </div>
        <div className="face bottom">
          <img src="https://img.freepik.com/vector-premium/mandala-abstracto-patrones-fisuras_1159-22938.jpg" alt="Imagen 6" width={200} height={200}/>
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

  const infoContent = `
    1. Inicio del Componente:
      Comienzas definiendo un componente funcional llamado 'ImageElemento'. Este componente renderiza un contenedor con un cubo tridimensional que contiene seis caras, cada una con una imagen y una descripción.

    2. Estructura del Cubo:
      El cubo se encuentra dentro de un contenedor con la clase '.cube-container'. El tamaño y la perspectiva del cubo están definidos en este contenedor.

    3. Definición del Cubo:
      La clase '.cube' establece el tamaño del cubo y su estilo 3D. También tiene una animación de rotación que hace que el cubo gire en los ejes X e Y durante 10 segundos de forma infinita y lineal.

    4. Estilo de las Caras:
      Cada cara del cubo tiene la clase '.face' con dimensiones fijas y un borde sutil. Las imágenes están centradas en cada cara.

    5. Cara Frontal:
      La cara frontal ('.front') tiene la propiedad 'transform' para que se desplace en el eje Z, dando la ilusión de ser la cara principal del cubo.

    6. Cara Posterior:
      La cara posterior ('.back') rota 180 grados en el eje Y y también se desplaza en el eje Z.

    7. Caras Laterales:
      Las caras laterales ('.left' y '.right') rotan en el eje Y, mientras que las caras superior e inferior ('.top' y '.bottom') rotan en el eje X.

    8. Animación de Rotación:
      La animación ('@keyframes rotate') proporciona un movimiento continuo de rotación al cubo, dando una sensación dinámica al componente.

    9. Estilos Externos:
      El componente hace referencia a un archivo de estilos externo llamado 'ImagesUno.css' para mantener los estilos organizados y reutilizables.

    10. Final del Componente:
      El componente se exporta al final del archivo para su uso en otras partes de la aplicación.

    11. Definición de Estilos en CSS:
      En el archivo de estilos 'ImagesUno.css', estableces las reglas de estilo para el contenedor, el cubo y cada una de sus caras.

    12. Perspectiva y Margen:
      La perspectiva del cubo y el margen se definen en el contenedor principal para darle una apariencia tridimensional y centrada en la página.

    13. Estilo del Cubo:
      Definición del tamaño y estilo 3D del cubo, junto con la animación de rotación.

    14. Estilo de las Caras:
      Se establecen las propiedades de las caras individualmente, como el tamaño, la posición y los efectos de transformación.

    15. Animación Continua:
      La animación '@keyframes rotate' especifica la rotación desde 0 grados hasta 360 grados en ambos ejes, creando un bucle de rotación continuo para el cubo.
  `;
  const buttonCode = `
  import './ImagesUno.css';
  const ImageElemento = () => {
    return (
      <div className="cube-container">
        <div className="cube">
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
  export default ImageElemento
  `;
  const buttonCss = `
  .cube-container {
    perspective: 800px;
    margin: 50px auto;
  }
  .cube {
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    transform: rotateX(0deg) rotateY(0deg);
    animation: rotate 10s infinite linear;
  }
  .face {
    width: 200px;
    height: 200px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
  }
  .front {
    transform: translateZ(100px);
  }
  .back {
    transform: rotateY(180deg) translateZ(100px);
  }
  .left {
    transform: rotateY(-90deg) translateZ(100px);
  }
  .right {
    transform: rotateY(90deg) translateZ(100px);
  }
  .top {
    transform: rotateX(-90deg) translateZ(100px);
  }
  .bottom {
    transform: rotateX(90deg) translateZ(100px);
  }
  @keyframes rotate {
    from {
      transform: rotateX(0deg) rotateY(0deg);
    }
    to {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }
  `;

  return (
    <section>
      <div className="card">
        <div className="card-content">
          <h1 className='images-title'>Cubo con rotacion continua.</h1>
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