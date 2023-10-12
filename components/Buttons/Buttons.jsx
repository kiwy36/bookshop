import './Buttons.css'
import ButtonUno from './ButtonUno/ButtonUno'
import ButtonDos from './ButtonDos/ButtonDos'
import ButtonTres from './ButtonTres/ButtonTres'
import ButtonCuatro from './ButtonCuatro/ButtonCuatro'

const Buttons = () => {
    return (
        <section className='seccion-contenedor-buttons' id='Buttons'>
            <h1 className='title'>Buttons</h1>
            <h2 className='texto-informativo'>Los botones son elementos interactivos que ejecutan acciones específicas en una interfaz. Pueden usarse para activar funciones como Enviar, Guarda, Eliminar o Copiar y más!!!, facilitando la interacción del usuario con la aplicación.</h2>
            <div className='contenedor-de-ejemplos-acc-buttons'>
                <ButtonUno/>
                <ButtonDos/>
                <ButtonTres/>
                <ButtonCuatro/>
            </div>
        </section>
    )
}

export default Buttons