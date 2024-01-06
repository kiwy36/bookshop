import { useState } from 'react'
import PropTypes from 'prop-types';
import './TablesUno.css';
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

const TableElemento = () => {
  const datos = [
    { id: 1, nombre: 'Item 1', descripcion: 'Descripción 1', precio: '$10' },
    { id: 2, nombre: 'Item 2', descripcion: 'Descripción 2', precio: '$15' },
    { id: 3, nombre: 'Item 3', descripcion: 'Descripción 3', precio: '$20' },
    { id: 4, nombre: 'Item 4', descripcion: 'Descripción 4', precio: '$25' },
  ];

  return (
    <table className="table-container-table-uno">
      <thead>
        <tr className="table-header-table-uno">
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {datos.map(item => (
          <tr key={item.id} className="table-row-table-uno">
            <td>{item.id}</td>
            <td>{item.nombre}</td>
            <td>{item.descripcion}</td>
            <td>{item.precio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


const TablesUno = () => {
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
    1. Importación de Estilos:
      Importamos los estilos del archivo './TablesUno.css' al componente para aplicar un diseño específico.
    2. Definición del Componente:
      Creamos el componente funcional 'TableElemento' que representará nuestra tabla.

    3. Datos de Ejemplo:
      Definimos un array llamado 'datos' que contiene objetos con información simulada para cada fila de la tabla.

    4. Estructura de la Tabla:
      Utilizamos la etiqueta <table> con la clase 'table-container' para encapsular la estructura de la tabla.

    5. Encabezado de la Tabla:
      Creamos el encabezado de la tabla con la etiqueta <thead> y una fila que contiene las clases 'table-header' para estilos específicos.

    6. Columnas del Encabezado:
      Definimos cuatro columnas con etiquetas <th> para representar las categorías: ID, Nombre, Descripción y Precio.

    7. Cuerpo de la Tabla:
      Utilizamos la etiqueta <tbody> para el cuerpo de la tabla, donde se mostrarán los datos de manera dinámica.

    8. Mapeo de Datos:
      Aplicamos el método 'map' sobre el array 'datos' para generar dinámicamente las filas de la tabla.

    9. Celdas de Datos:
      Cada objeto dentro del array se representa en una fila con celdas que contienen la información correspondiente.

    10. Exportación del Componente:
        Exportamos el componente 'TableElemento' para poder utilizarlo en otras partes de nuestra aplicación. Este componente representa una tabla en React con estilos definidos para mejorar su presentación.
  `;
  const buttonCode = `
  import './TablesUno.css';

  const TableElemento = () => {
    const datos = [
      { id: 1, nombre: 'Item 1', descripcion: 'Descripción 1', precio: '$10' },
      { id: 2, nombre: 'Item 2', descripcion: 'Descripción 2', precio: '$15' },
      { id: 3, nombre: 'Item 3', descripcion: 'Descripción 3', precio: '$20' },
      { id: 4, nombre: 'Item 4', descripcion: 'Descripción 4', precio: '$25' },
    ];
  
    return (
      <table className="table-container">
        <thead>
          <tr className="table-header">
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {datos.map(item => (
            <tr key={item.id} className="table-row">
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.descripcion}</td>
              <td>{item.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  export default TableElemento
  `;
  const buttonCss = `
  .table-container {
    width: 400px; /* Ancho de la tabla */
    margin: auto; /* Centrar la tabla en la página */
    border-collapse: collapse; /* Eliminar espacios entre celdas */
  }
  
  .table-header th,
  .table-row td {
      text-align: center; /* Centrar el texto en las celdas */
      padding: 10px; /* Espaciado interno en celdas */
      border: 1px solid #ddd; /* Líneas que delimitan las celdas */
  }
  
  .table-header th {
     background-color: #ea0909; /* Fondo de las celdas de encabezado */
  }
  `;

  return (
    <section>
      <div className="card">
        <div className="card-content">
          <h1 className='table-title'>Tabla generica</h1>
          <TableElemento/>
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


export default TablesUno