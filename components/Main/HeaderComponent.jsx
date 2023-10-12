import './HeaderComponent.css';

const HeaderComponent = () => {
  return (
    <header className="header" id='Inicio'>
      <h1 className="title">Librería de Elementos por Kiwy</h1>
      <h1 className="subtitle">Ejemplos, Detalles e Instrucciones</h1>
      <div className="info-container">
        <div className="info-box">
          <h3 className="info-title">Sobre Nosotros/mi</h3>
          <p className="info-subtext">Soy un desarrollador novato que busca empezar a trabajar de programador, esto es parte de una lista de trabajos que presento en mi portfolio.</p>
        </div>
        <div className="info-box">
          <h3 className="info-title">El por que de este trabajo</h3>
          <p className="info-subtext">El objetivo de este trabajo es realizar una galeria de elementos y especificar como cambiar sus partes para utilizarlos y acelerar tiempos de produccion.</p>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
