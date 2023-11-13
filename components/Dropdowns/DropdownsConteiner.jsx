import './DropdownsConteiner.css'
import DropdownsUno from './DropdownsUno/DropdownsUno'
import DropdownsDos from './DropdownsDos/DropdownsDos'
import DropdownsTres from './DropdownsTres/DropdownsTres'


const DropdownsConteiner = () => {
    return (
        <section className='seccion-contenedor-Dropdowns' id='Dropdowns'>
            <h1 className='title'>Dropdowns</h1>
            <h2 className='texto-informativo'>Los elementos Dropdown son componentes interactivos que permiten a los usuarios seleccionar una opción de una lista desplegable.</h2>
            <div className='contenedor-de-ejemplos-acc-Dropdowns'>
                <DropdownsTres/>
                <DropdownsUno/>
                <DropdownsDos/>
            </div>
        </section>
    )
}

export default DropdownsConteiner