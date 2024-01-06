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
      <h1 className='images-title'>Elemento para subir imagenes</h1>
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

  const infoContent = `
    1. Importar useState de React:
      Importa la función 'useState' desde la librería React.
    2. Importar el archivo de estilos:
      Importa el archivo de estilos 'ImagesTres.css'.

    3. Definir el componente funcional ImageElemento:
      Crea un componente funcional llamado 'ImageElemento'.

    4. Utilizar el hook useState:
      Declara el estado 'imagenes' utilizando el hook 'useState' y establece su valor inicial como un array vacío.

    5. Crear la función handleImagenChange:
      Define la función 'handleImagenChange' que toma un evento como parámetro. Esta función se encargará de manejar el cambio en la selección de imágenes.

    6. Obtener la lista de archivos:
      Extrae la lista de archivos del evento utilizando 'event.target.files'.

    7. Manejar la carga de imágenes:
      Itera sobre la lista de archivos y utiliza un bucle para procesar cada archivo. Utiliza 'FileReader' para convertir cada archivo en una URL de datos y agrega esas URLs al estado 'imagenes'.

    8. Crear la función handleEliminarImagen:
      Define la función 'handleEliminarImagen' que toma un índice como parámetro. Esta función se encargará de eliminar una imagen específica del estado 'imagenes'.

    9. Renderizar el componente:
      Renderiza el componente con la estructura HTML y JSX necesaria.

    10. Input para seleccionar imágenes:
      Crea un input de tipo file dentro de un label con la clase 'input-label'. Este input tiene un id 'inputImagen' y tiene asociada la función 'handleImagenChange' para gestionar los cambios.

    11. Mostrar imágenes existentes:
      Muestra las imágenes existentes utilizando el estado 'imagenes' y un mapeo sobre el array. Cada imagen se muestra dentro de un div con la clase 'image-item' y tiene un botón asociado para eliminarla.

    12. Exportar el componente:
   Exporta el componente 'ImageElemento' para que pueda ser utilizado en otros archivos.
  `;
  const buttonCode = `
  import { useState } from 'react'
  import './ImagesTres.css'
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
              <img src={imagen} alt={'Imagen ${'index' + 1}'} className="imagesTres" />
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
  export default ImagesElemento
  `;
  const buttonCss = `
  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    width: 90%;
    margin: auto;
    border: #1ee8e4 solid 2px;
  }
  
  .input-wrapper {
    margin-right: 1px;
  }
  
  .input-label {
    display: block;
    width: 8rem;
    margin: auto;
  }
  
  .input-box {
    width: 8rem;
    height: 8rem;
    border: 2px dashed #3498db;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 20px auto; /* Alineado al centro y margen inferior */
  }
  
  .input-imagesTres {
    display: none;
  }
  
  .imagesTres {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
  }
  
  .button-imagesTres {
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    max-width: 8rem;
    padding: 2px;
    margin: 0;
  }
  
  .image-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0px;
  }
  
  .image-item {
    margin-bottom: 10px;
    text-align: center;
  }
  
  @media (min-width: 768px) {
    .image-container {
      align-items: center;
    }
  
    .input-box {
      margin: auto;
    }
  
    .image-wrapper {
      justify-content: space-between;
    }
  
    .image-item {
      width: 18%;
    }
  }
  @media (max-width: 767px) {
    .image-container {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  
    .input-label {
      width: 100%;
      margin-bottom: 1rem;
    }
  
    .input-box {
      width: 100%;
      min-width: 250px;
      height: 10rem;
      margin:  20px auto;
    }
  
    .imagesTres {
      width: 15rem;
      height: 10rem;
      object-fit: cover;
      margin: 1px;
    }
  
    .button-imagesTres {
      max-width: none;
      width: 15rem;
    }
  
    .image-wrapper {
      gap: 0.5rem;
    }
  
    .image-item {
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


export default ImagesTres