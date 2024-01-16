import './OthersConteiner.css'
import OtherUno from './OtherUno/OtherUno'
import OtherDos from './OtherDos/OtherDos'
import OtherTres from './OtherTres/OtherTres'


const OthersConteiner = () => {
    return (
        <section className='seccion-contenedor-Others' id='Others'>
            <h1 className='title'>Otras cosas</h1>
            <h2 className='texto-informativo'>Elementos sueltos que pueden ser interesantes que no encajen claramente en las categorías anteriores</h2>
            <div className='contenedor-de-ejemplos-acc-Others'>
                <OtherUno/>
                <OtherDos/>
                <OtherTres/>
            </div>
        </section>
    )
}

export default OthersConteiner