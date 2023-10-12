import './NavbarsConteiner.css'
import NavUno from './NavUno/NavUno'
import NavDos from './NavDos/NavDos'
import NavTres from './NavTres/NavTres'


const NavbarsConteiner = () => {
    return (
        <section className='seccion-contenedor-navbars' id='Navbars'>
            <h1 className='title'>Navbars</h1>
            <h2 className='texto-informativo'>El Navbar facilita la navegación del usuario a través del contenido del sitio. Los navbars suelen contener enlaces a las secciones clave del sitio, como páginas de inicio, categorías, perfiles de usuario y más. Además, pueden incluir elementos interactivos como botones de búsqueda o menús desplegables. Estos componentes de navegación ayudan a los visitantes a moverse de manera eficiente por el sitio, mejorando la experiencia del usuario y facilitando el acceso a la información deseada</h2>
            <div className='contenedor-de-ejemplos-acc-navbars'>
                <NavUno/>
                <NavDos/>
                <NavTres/>
            </div>
        </section>
    )
}

export default NavbarsConteiner