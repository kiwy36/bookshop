import { useState } from 'react'
import PropTypes from 'prop-types';
import './TablesDos.css';
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
  const [productos, setProductos] = useState([]);
  const [nombreProducto, setNombreProducto] = useState('');
  const [precioProducto, setPrecioProducto] = useState('');
  const [total, setTotal] = useState(0);
  const [mostrarResumen, setMostrarResumen] = useState(false);

  const agregarProducto = () => {
    if (nombreProducto && precioProducto && !isNaN(parseFloat(precioProducto))) {
      const nuevoProducto = {
        nombre: nombreProducto,
        precio: parseFloat(precioProducto),
      };

      setProductos([...productos, nuevoProducto]);
      setTotal(total + parseFloat(precioProducto));
      setNombreProducto('');
      setPrecioProducto('');
    }
  };

  const eliminarProducto = (index) => {
    const productoEliminado = productos[index];
    setProductos(productos.filter((_, i) => i !== index));
    setTotal(total - productoEliminado.precio);
  };

  const terminarCompra = () => {
    setMostrarResumen(true);
  };
  const reiniciarComponente = () => {
    setProductos([]);
    setTotal(0);
    setMostrarResumen(false);
  };
  const descargarResumen = () => {
    const resumenTexto = productos.map((producto) => `${producto.nombre}: $${producto.precio.toFixed(2)}`).join('\n');
    const resumenConTotal = `${resumenTexto}\nTotal: $${total.toFixed(2)}`;
    const blob = new Blob([resumenConTotal], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'resumen_compra.txt';
    link.click();
  };

  return (
    <div>
      {mostrarResumen ? (
        <div className='resumen-compra'>
          <h1>Resumen de la compra:</h1>
          {productos.map((producto, index) => (
            <p key={index}>{`${producto.nombre}: $${producto.precio.toFixed(2)}`}</p>
          ))}
          <p>Total: ${total.toFixed(2)}</p>
          <button className='buttons-table-dos' onClick={reiniciarComponente}>
            OK
          </button>
          <button className='buttons-table-dos' onClick={() => setMostrarResumen(false)}>
            Cancelar
          </button>
          <button className='buttons-table-dos' onClick={descargarResumen}>
            Descargar Resumen
          </button>
        </div>
      ) : (
        <table className='table-container'>
          <thead>
            <tr className='table-header'>
              <th>Nombre del Producto</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr className='table-row'>
              <td>
                <input
                  placeholder='Nombre del Producto:'
                  type="text"
                  value={nombreProducto}
                  onChange={(e) => setNombreProducto(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder='Precio del Producto:'
                  type="number"
                  value={precioProducto}
                  onChange={(e) => setPrecioProducto(e.target.value)}
                />
              </td>
              <td>
                <button className='buttons-table-dos' onClick={agregarProducto}>
                  Agregar Producto
                </button>
              </td>
            </tr>
            {productos.map((producto, index) => (
              <tr key={index} className='table-row'>
                <td>{producto.nombre}</td>
                <td>${producto.precio.toFixed(2)}</td>
                <td>
                  <button className='buttons-table-dos' onClick={() => eliminarProducto(index)}>
                    Eliminar Producto
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className='last-row-table-dos'>
              <td>Total:</td>
              <td>${total.toFixed(2)}</td>
              <td>
                <button className='buttons-table-dos' onClick={terminarCompra}>
                  Terminar Compra
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

const TablesDos = () => {
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


export default TablesDos