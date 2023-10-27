import './DropdownsConteiner.css'
import DropdownsUno from './DropdownsUno/DropdownsUno'
import DropdownsDos from './DropdownsDos/DropdownsDos'
import DropdownsTres from './DropdownsTres/DropdownsTres'


const DropdownsConteiner = () => {
    return (
        <section className='seccion-contenedor-Dropdowns' id='Dropdowns'>
            <h1 className='title'>Dropdowns</h1>
            <h2 className='texto-informativo'>info sobre los Dropdowns</h2>
            <div className='contenedor-de-ejemplos-acc-Dropdowns'>
                <DropdownsUno/>
                <DropdownsDos/>
                <DropdownsTres/>
            </div>
        </section>
    )
}

export default DropdownsConteiner