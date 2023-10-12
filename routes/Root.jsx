import './Root.css'
import HeaderComponent from '../components/Main/HeaderComponent'
import CustomNavbar from '../components/Navbar/customNavbar'
import ElementoAccordion from '../components/Accordion/ElementoAccordion'
import Buttons from '../components/Buttons/Buttons'
import CardsConteiner from '../components/Cards/CardsConteiner'
import NavbarsConteiner from '../components/Navbar/NavbarsConteiner'
import ToastsConteiner from '../components/Toasts/ToastsContainer'
const Root = () => {
  return (
    <div className='contenedorDeContenedores'>
      <div className="root">
        <CustomNavbar className="barraNavegacion"/>
        <div className="content">
          <HeaderComponent />
          <ElementoAccordion/>
          <Buttons/>
          <CardsConteiner/>
          <NavbarsConteiner/>
          <ToastsConteiner/>
          {/* Aquí puedes agregar el resto del contenido */}
        </div>
      </div>
    </div>
  )
}

export default Root