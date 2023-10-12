import { useState } from 'react';
import './customNavbar.css';

const CustomNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [
        'Inicio','Accordion', 'Buttons', 'Cards', 'Carrousels', 'Dropdowns',
        'Forms', 'Images', 'Navbars', 'Tables', 'Toasts', 'Others',
        'Cerrar Menú'
    ];

    const handleMenuItemClick = (item) => {
        if (item === 'Cerrar Menú') {
            setIsOpen(false);
        } else {
            setIsOpen(false);
        const targetElement = document.getElementById(item);
        if (targetElement) {
                window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
        }
    };
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`navbar-container ${isOpen ? 'open' : ''}`}>
            <div className='contenedor-toggle-button'>
                <button className="toggle-button" onClick={toggleNavbar}>
                    Menu
                </button>
            </div>
            <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul className="menu">
                {menuItems.map((item, index) => (
                    <li
                    key={index}
                    className="menu-item"
                    onClick={() => handleMenuItemClick(item)}
                    >
                    {item}
                    </li>
                ))}
                </ul>
            </nav>
        </div>
    );
}

export default CustomNavbar;
