import './TablesContainer.css'
import TablesUno from './TablesUno/TablesUno'
import TablesDos from './TablesDos/TablesDos'
import TablesTres from './TablesTres/TablesTres'


const TablesConteiner = () => {
    return (
        <section className='seccion-contenedor-Tables' id='Tables'>
            <h1 className='title'>Tables</h1>
            <h2 className='texto-informativo'>Un componente Table facilita la creación y presentación de tablas en la interfaz de usuario. Permite estructurar datos tabulares de manera modular, reutilizable y eficiente, mejorando la organización y mantenimiento del código.</h2>
            <div className='contenedor-de-ejemplos-acc-Tables'>
                <TablesUno/>
                <TablesDos/>
                <TablesTres/>
            </div>
        </section>
    )
}

export default TablesConteiner