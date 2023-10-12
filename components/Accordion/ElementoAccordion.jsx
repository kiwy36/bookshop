import './Accordion.css'
import AccordionUno from './AccordionUno/AccordionUno';
import AccordionDos from './AccordionDos/AccordionDos';
const ElementoAccordion = () => {
  return (
    <section className='seccion-contenedor-accordion' id='Accordion'>
        <h1 className='title'>Accordion</h1>
        <h2 className='texto-informativo'>Un Accordion o acordeón es un componente de interfaz que muestra información organizada y plegable. Presenta una lista de elementos donde solo uno está abierto a la vez, ocultando los demás. Al hacer clic en un elemento cerrado, se expande para mostrar su contenido, mientras que el abierto se colapsa, permitiendo al usuario ver detalles adicionales sin saturar la pantalla. Es útil para presentar información detallada en espacios limitados de manera controlada.</h2>
        <div className='contenedor-de-ejemplos-acc'>
          <AccordionUno/>
          <AccordionDos/>
        </div>
    </section>
  )
}

export default ElementoAccordion