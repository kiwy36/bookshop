import './FormsContainer.css'
import FormsUno from './FormsUno/FormsUno'
import FormsDos from './FormsDos/FormsDos'
import FormsTres from './FormsTres/FormsTres'


const FormsConteiner = () => {
    return (
        <section className='seccion-contenedor-Forms' id='Forms'>
            <h1 className='title'>Forms</h1>
            <h2 className='texto-informativo'>Un elemento form encapsula campos de entrada y facilita la gestión del estado y eventos del formulario. Permite controlar la entrada de datos, validarlos y ejecutar acciones al enviar el formulario. Es esencial para la interactividad y manipulación de datos. </h2>
            <div className='contenedor-de-ejemplos-acc-Forms'>
                <FormsUno/>
                <FormsDos/>
                <FormsTres/>
            </div>
        </section>
    )
}

export default FormsConteiner