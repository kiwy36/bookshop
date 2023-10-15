import './CarrouselsConteiner.css';
import CarrouselUno from './CarrouselUno/CarrouselUno';
import CarrouselDos from './CarrouselDos/CarrouselDos';
import CarrouselTres from './CarrouselTres/CarrouselTres';

const CarrouselConteiner = () => {
    return (
        <section className='seccion-contenedor-Carrousels' id='Carrousels'>
            <h1 className='title'>Carrousels</h1>
            <h2 className='texto-informativo'>Un carrusel es un elemento de interfaz de usuario que muestra una serie de elementos, como imágenes, texto o contenido multimedia, en una secuencia, permitiendo al usuario navegar a través de ellos de manera interactiva, generalmente mediante botones de flecha o puntos indicadores. Los carruseles son ampliamente utilizados en aplicaciones web y móviles para destacar contenido, ofrecer una experiencia de usuario dinámica y optimizar el espacio en pantalla al mostrar información relevante de forma compacta. </h2>
            <div className='contenedor-de-ejemplos-acc-Carrousels'>
                <CarrouselUno/>
                <CarrouselDos/>
                <CarrouselTres/>
            </div>
        </section>
    )
}

export default CarrouselConteiner