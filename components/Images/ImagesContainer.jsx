import './ImagesContainer.css'
import ImagesUno from './ImagesUno/ImagesUno'
import ImagesDos from './ImagesDos/ImagesDos'
import ImagesTres from './ImagesTres/ImagesTres'


const ImagesConteiner = () => {
    return (
        <section className='seccion-contenedor-Images' id='Images'>
            <h1 className='title'>Images</h1>
            <h2 className='texto-informativo'>Un componente de imagen en React, renderiza una imagen con tamaño y estilo predefinidos, mediante propiedades específicas proporcionadas externamente, brindando flexibilidad y personalización en su presentación visual.</h2>
            <div className='contenedor-de-ejemplos-acc-Images'>
                <ImagesUno/>
                <ImagesDos/>
                <ImagesTres/>
            </div>
        </section>
    )
}

export default ImagesConteiner