import './CardsConteiner.css'
import CardUno from './CardUno/CardUno'
import CardDos from './CardDos/CardDos'
import CardTres from './CardTres/CardTres'

const CardsConteiner = () => {
    return (
        <section className='seccion-contenedor-cards' id='Cards'>
            <h1 className='title'>Cards</h1>
            <h2 className='texto-informativo'>Las cards son versátiles mostrando artículos, productos y perfiles. Con contenido textual, gráfico y enlaces, mejoran la navegación y presentan datos en diseños ordenados. Su flexibilidad es clave para diseños modernos y receptivos en sitios y apps.</h2>
            <div className='contenedor-de-ejemplos-acc-cards'>
                <CardUno/>
                <CardDos/>
                <CardTres/>
            </div>
        </section>
    )
}

export default CardsConteiner