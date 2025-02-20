import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import './CardTres.css';
const CopyButton = ({ text, onCopy }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    onCopy();
  };

  return (
    <button className="copy-button" onClick={copyToClipboard}>
      Copiar Texto
    </button>
  );
};

CopyButton.propTypes = {
  text: PropTypes.string.isRequired,
  onCopy: PropTypes.func.isRequired,
};
const CardsCarrousel =() => {
  const [current, setCurrent] = useState(0);
  const Biblioteca = [
    {
      id: 1,
      name: 'Don Quijote',
      author: 'Miguel de Cervantes',
      genre: 'Clásico',
      price: 260,
      image: 'https://i.ibb.co/5RXjz2r/Don-Quijote.jpg',
      synopsis: 'Las aventuras del ingenioso hidalgo Don Quijote y su fiel escudero Sancho Panza.'
    },
    {
      id: 2,
      name: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      genre: 'Ciencia Ficción',
      price: 200,
      image: 'https://i.ibb.co/MkwDHdd/Fahrenheit-451.jpg',
      synopsis: 'Un futuro distópico donde los libros son prohibidos.'
    },
    {
      id: 3,
      name: 'El Señor de los Anillos',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasía',
      price: 300,
      image: 'https://i.ibb.co/HgyDSQV/El-Se-or-de-los-Anillos.jpg',
      synopsis: 'Una épica aventura en un mundo de fantasía.'
    },
    {
      id: 4,
      name: 'Carrie',
      author: 'Stephen King',
      genre: 'Terror',
      price: 220,
      image: 'https://i.ibb.co/Nrx91Ss/Carrie.jpg',
      synopsis: 'Una joven con poderes telequinéticos se desata en venganza.'
    },
    {
      id: 5,
      name: 'Crónicas Marcianas',
      author: 'Ray Bradbury',
      genre: 'Ciencia Ficción',
      price: 180,
      image: 'https://i.ibb.co/YNt5Z2Z/Cr-nicas-Marcianas.jpg',
      synopsis: 'Historias sobre la colonización de Marte.'
    },
    {
      id: 6,
      name: 'El Hobbit',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasía',
      price: 280,
      image: 'https://i.ibb.co/MfcT8Kh/El-Hobbit.jpg',
      synopsis: 'El inicio de la búsqueda del anillo único.'
    },
    {
      id: 7,
      name: 'El Resplandor',
      author: 'Stephen King',
      genre: 'Terror',
      price: 240,
      image: 'https://i.ibb.co/C6Pzfdj/El-Resplandor.jpg',
      synopsis: 'Un hombre acepta un trabajo como cuidador de un hotel aislado.'
    },
    {
      id: 8,
      name: 'Crónicas de Narnia',
      author: 'C.S. Lewis',
      genre: 'Fantasía',
      price: 260,
      image: 'https://i.ibb.co/LgM0WqM/Cr-nicas-de-Narnia.jpg',
      synopsis: 'Aventuras en un mundo mágico lleno de criaturas asombrosas.'
    },
    {
      id: 9,
      name: 'Cementerio de Animales',
      author: 'Stephen King',
      genre: 'Terror',
      price: 210,
      image: 'https://i.ibb.co/Fn3sG41/Cementerio-de-Animales.jpg',
      synopsis: 'Una tenebrosa historia sobre el poder de la resurrección.'
    },
    {
      id: 10,
      name: 'Cantos de la Tierra Lejana',
      author: 'Arthur C. Clarke',
      genre: 'Ciencia Ficción',
      price: 190,
      image: 'https://i.ibb.co/Gvd72N9/Cantos-de-la-Tierra-Lejana.jpg',
      synopsis: 'Exploración de mundos lejanos y misterios del espacio.'
    },
    {
      id: 11,
      name: 'El Silmarillion',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasía',
      price: 320,
      image: 'https://i.ibb.co/jwSSz8J/El-Silmarillion.jpg',
      synopsis: 'La historia y mitología del mundo de Tolkien.'
    },
    {
      id: 12,
      name: 'El Principito',
      author: 'Antoine de Saint-Exupéry',
      genre: 'Fantasía',
      price: 180,
      image: 'https://i.ibb.co/pjFbj0J/El-Principito.jpg',
      synopsis: 'Un niño viaja por planetas y aprende lecciones de vida.'
    },
    {
      id: 13,
      name: 'Martian',
      author: 'Andy Weir',
      genre: 'Ciencia Ficción',
      price: 210,
      image: 'https://i.ibb.co/25xKKb9/Martian.jpg',
      synopsis: 'Un astronauta lucha por sobrevivir en Marte.'
    },
    {
      id: 14,
      name: 'Drácula',
      author: 'Bram Stoker',
      genre: 'Terror',
      price: 270,
      image: 'https://i.ibb.co/Yy0Krxv/Dr-cula.jpg',
      synopsis: 'El conde Drácula aterroriza Londres con su sed de sangre.'
    },
    {
      id: 15,
      name: 'El Bosque',
      author: 'Harlan Coben',
      genre: 'Misterio',
      price: 230,
      image: 'https://i.ibb.co/J20HVsn/el-bosque.jpg',
      synopsis: 'Un hombre investiga la desaparición de su hija en un bosque misterioso.'
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(current => (current + 3) % Biblioteca.length);
    }, 30000);
    return () => clearInterval(timer);
  }, [Biblioteca.length]);

  const nextCard = () => {
    setCurrent((current + 3) % Biblioteca.length);
  };
  const prevCard = () => {
    setCurrent(current => {
      let newCurrent = current - 3;
      if (newCurrent < 0) {
        newCurrent = Biblioteca.length - 3;
      }
      return newCurrent;
    });
  };
  return (
    <section>
      <div className="carousel-cardTres">
        <h1 className='card-title-tres'>Carrousel con Cards</h1>
        <div className='contenedor-cardsAndButtons'>
          <button className='botones-cardTres' onClick={prevCard}>🡰</button>
          <div className="card-display-cardTres">
            {Biblioteca.slice(current, current + 3).map(card => (
              <div key={card.id} className="card-cardTres">
                <img className='image-cardTres' src={card.image} alt={card.name} />
                <div className='libro-content'>
                  <h1 className='libro-titulo'>{card.name}</h1>
                  <div className='libro-item'>
                    <h1>Autor</h1>
                    <p>{card.author}</p>
                    <h1>Genero literario</h1>
                    <p>{card.genre}</p>
                    <h1>Precio</h1>
                    <p>{card.price} Kiwypesos</p>
                  </div>
                  <p className='libro-synopsis'>{card.synopsis}</p>
                </div>
              </div>
            ))}
          </div>
          <button className='botones-cardTres' onClick={nextCard}>🡲</button>
        </div>
      </div>
    </section>
  );
};


const CardTres = () => {
  const [isReactCodeOpen, setIsReactCodeOpen] = useState(false);
  const [isCssCodeOpen, setIsCssCodeOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleToggleReactCode = () => {
    setIsReactCodeOpen(!isReactCodeOpen);
    setIsCssCodeOpen(false);
    setIsInfoOpen(false);
  };

  const handleToggleCssCode = () => {
    setIsReactCodeOpen(false);
    setIsCssCodeOpen(!isCssCodeOpen);
    setIsInfoOpen(false);
  };

  const handleToggleInfo = () => {
    setIsInfoOpen(!isInfoOpen);
    setIsReactCodeOpen(false);
    setIsCssCodeOpen(false);
  };

  const handleCopy = (contentToCopy) => {
    navigator.clipboard.writeText(contentToCopy);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };

  const infoContent = `Explicación paso a paso de cómo armar el código: Importa las bibliotecas necesarias al principio del archivo: 'useState', 'useEffect', y 'PropTypes' de React.
  Importa la hoja de estilos 'CardTres.css'.
  Define un componente funcional llamado 'CardsCarrousel'.
  Dentro del componente, utiliza 'useState' para crear un estado 'current' e inicialízalo en 0.
  Crea un arreglo llamado 'Biblioteca' con objetos que representan libros con detalles como nombre, autor, género, precio e imagen.
  Utiliza 'useEffect' para establecer un temporizador que cambia el estado 'current' cada 30 segundos, haciendo que los libros del carrusel se desplacen.
  Define funciones 'nextCard' y 'prevCard' para avanzar y retroceder en el carrusel de libros.
  En el retorno del componente, crea una sección y un contenedor principal con un título 'Carrousel con Cards'.
  Agrega botones para avanzar y retroceder en el carrusel.
  Mapea los libros en el arreglo 'Biblioteca', mostrando sus detalles en tarjetas, y asegúrate de que el carrusel se actualice según el estado 'current'.`;
  const buttonCode = `
  import { useState, useEffect } from 'react'
  import PropTypes from 'prop-types';
  import './CardTres.css';
  const CardsCarrousel =() => {
    const [current, setCurrent] = useState(0);
    const Biblioteca = [
      {
        id: 1,
        name: 'Don Quijote',
        author: 'Miguel de Cervantes',
        genre: 'Clásico',
        price: 260,
        image: 'https://i.ibb.co/5RXjz2r/Don-Quijote.jpg',
        synopsis: 'Las aventuras del ingenioso hidalgo Don Quijote y su fiel escudero Sancho Panza.'
      },
      {
        id: 2,
        name: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        genre: 'Ciencia Ficción',
        price: 200,
        image: 'https://i.ibb.co/MkwDHdd/Fahrenheit-451.jpg',
        synopsis: 'Un futuro distópico donde los libros son prohibidos.'
      },
      {
        id: 3,
        name: 'El Señor de los Anillos',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasía',
        price: 300,
        image: 'https://i.ibb.co/HgyDSQV/El-Se-or-de-los-Anillos.jpg',
        synopsis: 'Una épica aventura en un mundo de fantasía.'
      },
      {
        id: 4,
        name: 'Carrie',
        author: 'Stephen King',
        genre: 'Terror',
        price: 220,
        image: 'https://i.ibb.co/Nrx91Ss/Carrie.jpg',
        synopsis: 'Una joven con poderes telequinéticos se desata en venganza.'
      },
      {
        id: 5,
        name: 'Crónicas Marcianas',
        author: 'Ray Bradbury',
        genre: 'Ciencia Ficción',
        price: 180,
        image: 'https://i.ibb.co/YNt5Z2Z/Cr-nicas-Marcianas.jpg',
        synopsis: 'Historias sobre la colonización de Marte.'
      },
      {
        id: 6,
        name: 'El Hobbit',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasía',
        price: 280,
        image: 'https://i.ibb.co/MfcT8Kh/El-Hobbit.jpg',
        synopsis: 'El inicio de la búsqueda del anillo único.'
      },
      {
        id: 7,
        name: 'El Resplandor',
        author: 'Stephen King',
        genre: 'Terror',
        price: 240,
        image: 'https://i.ibb.co/C6Pzfdj/El-Resplandor.jpg',
        synopsis: 'Un hombre acepta un trabajo como cuidador de un hotel aislado.'
      },
      {
        id: 8,
        name: 'Crónicas de Narnia',
        author: 'C.S. Lewis',
        genre: 'Fantasía',
        price: 260,
        image: 'https://i.ibb.co/LgM0WqM/Cr-nicas-de-Narnia.jpg',
        synopsis: 'Aventuras en un mundo mágico lleno de criaturas asombrosas.'
      },
      {
        id: 9,
        name: 'Cementerio de Animales',
        author: 'Stephen King',
        genre: 'Terror',
        price: 210,
        image: 'https://i.ibb.co/Fn3sG41/Cementerio-de-Animales.jpg',
        synopsis: 'Una tenebrosa historia sobre el poder de la resurrección.'
      },
      {
        id: 10,
        name: 'Cantos de la Tierra Lejana',
        author: 'Arthur C. Clarke',
        genre: 'Ciencia Ficción',
        price: 190,
        image: 'https://i.ibb.co/Gvd72N9/Cantos-de-la-Tierra-Lejana.jpg',
        synopsis: 'Exploración de mundos lejanos y misterios del espacio.'
      },
      {
        id: 11,
        name: 'El Silmarillion',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasía',
        price: 320,
        image: 'https://i.ibb.co/jwSSz8J/El-Silmarillion.jpg',
        synopsis: 'La historia y mitología del mundo de Tolkien.'
      },
      {
        id: 12,
        name: 'El Principito',
        author: 'Antoine de Saint-Exupéry',
        genre: 'Fantasía',
        price: 180,
        image: 'https://i.ibb.co/pjFbj0J/El-Principito.jpg',
        synopsis: 'Un niño viaja por planetas y aprende lecciones de vida.'
      },
      {
        id: 13,
        name: 'Martian',
        author: 'Andy Weir',
        genre: 'Ciencia Ficción',
        price: 210,
        image: 'https://i.ibb.co/25xKKb9/Martian.jpg',
        synopsis: 'Un astronauta lucha por sobrevivir en Marte.'
      },
      {
        id: 14,
        name: 'Drácula',
        author: 'Bram Stoker',
        genre: 'Terror',
        price: 270,
        image: 'https://i.ibb.co/Yy0Krxv/Dr-cula.jpg',
        synopsis: 'El conde Drácula aterroriza Londres con su sed de sangre.'
      },
      {
        id: 15,
        name: 'El Bosque',
        author: 'Harlan Coben',
        genre: 'Misterio',
        price: 230,
        image: 'https://i.ibb.co/J20HVsn/el-bosque.jpg',
        synopsis: 'Un hombre investiga la desaparición de su hija en un bosque misterioso.'
      },
    ];
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrent(current => (current + 3) % Biblioteca.length);
      }, 30000);
      return () => clearInterval(timer);
    }, [Biblioteca.length]);
    const nextCard = () => {
      setCurrent((current + 3) % Biblioteca.length);
    };
    const prevCard = () => {
      setCurrent(current => {
        let newCurrent = current - 3;
        if (newCurrent < 0) {
          newCurrent = Biblioteca.length - 3;
        }
        return newCurrent;
      });
    };
    return (
      <section>
        <div className="carousel-cardTres">
          <h1 className='card-title-tres'>Carrousel con Cards</h1>
          <div className='contenedor-cardsAndButtons'>
            <button className='botones-cardTres' onClick={prevCard}>🡰</button>
            <div className="card-display-cardTres">
              {Biblioteca.slice(current, current + 3).map(card => (
                <div key={card.id} className="card-cardTres">
                  <img className='image-cardTres' src={card.image} alt={card.name} />
                  <div className='libro-content'>
                    <h1 className='libro-titulo'>{card.name}</h1>
                    <div className='libro-item'>
                      <h1>Autor</h1>
                      <p>{card.author}</p>
                      <h1>Genero literario</h1>
                      <p>{card.genre}</p>
                      <h1>Precio</h1>
                      <p>{card.price} Kiwypesos</p>
                    </div>
                    <p className='libro-synopsis'>{card.synopsis}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className='botones-cardTres' onClick={nextCard}>🡲</button>
          </div>
        </div>
      </section>
    );
  };
  export default CardsCarrousel
  `;
  const buttonCss = `
  .carousel-cardTres {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contenedor-cardsAndButtons{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: auto;
  }
  .botones-cardTres{
      margin: 5px;
      border: 2px solid aquamarine;
      border-radius: 50%;
      font-size: 30px;
      padding: 10px;
  }
  .card-display-cardTres {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      flex-grow: 1; /* Para que ocupe el espacio restante en el medio */
      justify-content: space-between
  }
  .card-cardTres {
      min-width: 30%;
      width: 150px;
      height: 90vh;
      border: 2px solid #fff;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
  }
  .image-cardTres{
      margin: auto;
      margin-top: 5px;
      width: 80%;
      height: 44vh;
  }
  .libro-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      height: 40vh;
  }
  .libro-titulo {
      font-size: 20px;
      color: aquamarine;
      text-align: center;
      margin-top: 5px;
      height: 10vh;
      display: flex;
      justify-content:center ;
      align-items: center;
  }
  .libro-item {
      text-align: center;
      font-size: 14px;
      display: block;
      margin-top: 3px;
      height: 25vh;
  }
  .libro-item h1{
      margin-top: 5px;
      font-size: 20px;
  }

  .libro-item p {
      font-size: 15px;
      margin-top: 2px;
  }
  .libro-synopsis {
      height: 10vh;
      margin: 5px;
      font-size: 17px;
      text-align: start;
  }`;
  return (
    <section>
      <div className="card">
        <div className="card-content">
          <CardsCarrousel/>
          <div className="buttons-sections">
            <div className="section-button" onClick={handleToggleInfo}>
              Información
            </div>
            <div className="section-button" onClick={handleToggleReactCode}>
              Código React
            </div>
            <div className="section-button" onClick={handleToggleCssCode}>
              Código CSS
            </div>
          </div>
          {isReactCodeOpen && (
            <div className="code-section">
              <pre>{`${buttonCode}`}</pre>
              <CopyButton text={buttonCode} onCopy={() => handleCopy(buttonCode)} />
            </div>
          )}
          {isCssCodeOpen && (
            <div className="code-section">
              <pre>{buttonCss}</pre>
              <CopyButton text={buttonCss} onCopy={() => handleCopy(buttonCss)} />
            </div>
          )}
          {isInfoOpen && (
            <div className="info-section">
              <p>{infoContent}</p>
            </div>
          )}
          {copySuccess && <p className="copy-notice">Texto copiado al portapapeles</p>}
        </div>
      </div>
    </section>
  );
};

export default CardTres
