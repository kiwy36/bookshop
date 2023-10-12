import './ToastsContainer.css'
import ToastsUno from './ToastsUno/ToastsUno'
import ToastsDos from './ToastsDos/ToastsDos'
import ToastsTres from './ToastsTres/ToastsTres'

const ToastsConteiner = () => {
    return (
        <section className='seccion-contenedor-toasts' id='Toasts'>
            <h1 className='title'>Toasts</h1>
            <h2 className='texto-informativo'>Los Toasts son mensajes emergentes que brindan información breve o notificaciones al usuario, como confirmaciones o errores, en la interfaz de usuario.</h2>
            <div className='contenedor-de-ejemplos-acc-toasts'>
                <ToastsUno/>
                <ToastsDos/>
                <ToastsTres/>
            </div>
        </section>
    )
}

export default ToastsConteiner