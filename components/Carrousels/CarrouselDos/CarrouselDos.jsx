import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import './CarrouselDos.css'

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
    const destinations = [
      {
        title: 'Bariloche',
        images: [
          'https://www.conclusion.com.ar/wp-content/uploads/2020/07/bariloche.jpg',
          'https://www.travelandleisure.com/thmb/yPOfzSgzWNJ87Q4-z6K-RBHfDmM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bariloche-argentina-cathedral-BARIBARI0120-69b51d47e65d4f2ebabed5abcc6f094a.jpg',
          'https://www.travelandleisure.com/thmb/T5qU1R_bBPh8Ol2CY442sy-nK7Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/llao-llao-hotel-BARI1219-b7658ab6091f431bba309b8557db815f.jpg',
          'https://blogskystorage.s3.amazonaws.com/2023/04/post_thumbnail-8185a199c72f8d397102be63c27c6732-1536x1024.jpeg',
          'https://bariloche.org/wp-content/uploads/2014/11/refugios.jpg',
        ],
        description: 'Bariloche es famoso por su belleza natural, sus montañas cubiertas de nieve en invierno y sus lagos cristalinos en verano. Es un destino ideal para el esquí y el snowboard en invierno, y ofrece actividades al aire libre durante todo el año.',
        url: 'URL de Bariloche',
      },
      {
        title: 'Ushuaia',
        images: [
          'https://miro.medium.com/v2/resize:fit:1400/1*I4waGmtnO9fi9ij3yyAvxA.jpeg',
          'https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2023/02/la_ciudad_fueguina_de_ushuaia.jpg?fit=3264%2C2238&ssl=1',
          'https://taqsa.com.ar/wp-content/uploads/2023/06/Ushuaia-1-scaled.jpg',
          'https://conocerushuaia.com/wp-content/uploads/2017/08/laguna-esmeralda-frente.jpg',
          'https://imagenes.elpais.com/resizer/1I33IIsknINFFNoHXIZSG1BN5lo=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/MMK4P42NQEWHXRT6W64HXQ57BQ.jpg',
        ],
        description: 'Ushuaia, conocida como "el fin del mundo", es la ciudad más austral del mundo. Ofrece paisajes impresionantes, glaciares, montañas y una amplia variedad de actividades, desde excursiones en barco por el Canal Beagle hasta senderismo y exploración de la Antártida.',
        url: 'URL de ushuaia',
      },
      {
        title: 'El Calafate',
        images: [
          'https://sinatajosfilms.com/wp-content/uploads/2020/08/glaciarperitomoreno-1.jpg',
          'https://www.turismodelprado.tur.ar/wp-content/uploads/2019/10/calafate.jpg',
          'https://www.elcalafate.tur.ar/img/anunciantes/501/el-chalten-xl.jpg',
          'https://pasaportenomada.es/wp-content/uploads/2022/02/que-ver-y-que-hacer-en-el-calafate.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-s/01/bf/ac/3c/todo-glaciares-tour.jpg',
        ],
        description: 'El Calafate es el punto de acceso al famoso Parque Nacional Los Glaciares. Aquí, puedes visitar el majestuoso Glaciar Perito Moreno y explorar otros glaciares, lagos y paisajes naturales impresionantes.',
        url: 'URL de Calafate',
      },
      {
        title: 'Puerto Madryn',
        images: [
          'https://mapuchito.com.ar/wp-content/uploads/2023/06/ballena-680x423.webp',
          'https://mptnoticias.com/wp-content/uploads/2023/09/Imagen-Avistaje-de-ballenas-embarcado-960x540.jpg',
          'https://caletadesarrollos.com/images/01/madryn-1.webp',
          'https://www.appm.com.ar/wp-content/uploads/2022/12/2022-12-06-Viking-Jupiter-001.jpg',
          'https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2022/07/62cf4a78e8aef_450.jpg',
        ],
        description: 'Puerto Madryn es conocida por su increíble vida marina. Es un lugar perfecto para avistamiento de ballenas, pingüinos, lobos marinos y otras especies. Además, ofrece playas hermosas y actividades acuáticas.',
        url: 'URL de PMadryn',
      },
      {
        title: 'San Martín de los Andes',
        images: [
          'https://www.clarin.com/2021/07/28/IiOcIxAos_1256x620__1.jpg',
          'https://i0.wp.com/blog.pezzati.com/wp-content/uploads/2018/03/img-otono.jpg?resize=613%2C473&ssl=1',
          'https://i0.wp.com/realidadsm.com/wp-content/uploads/2020/02/camping-carpa.jpg?fit=816%2C500&ssl=1',
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/cd/b5/ec/los-pozones-de-caleufu.jpg?w=500&h=400&s=1',
          'https://www.chapelco.com/imagenes/institucional/sm1.jpg',
        ],
        description: 'San Martín de los Andes es un destino de montaña con paisajes de ensueño. Ofrece oportunidades para el senderismo, la pesca y la relajación en un entorno natural impresionante.',
        url: 'URL de sanmartin',
      },
    ];
    const CarrouselElemento = () => {
      const [currentDestination, setCurrentDestination] = useState(0);
      const [currentImage, setCurrentImage] = useState(0);
      useEffect(() => {
        const interval = setInterval(() => {
          if (currentImage < destinations[currentDestination].images.length - 1) {
            setCurrentImage(currentImage + 1);
          } else {
            setCurrentImage(0);
            setCurrentDestination((currentDestination + 1) % destinations.length);
          }
        }, 5000); // Cambio automático cada 5 segundos
        return () => {
          clearInterval(interval);
        };
      }, [currentImage, currentDestination]);
      return (
        <section>
          <h1 className='carrousel-title'>Carrousel en carrousel con boton multidireccional</h1>
          <div className="carrousel-container-dos-master">
            <div className="carrousel-container-dos">
              <div className="destination">
                <img src={destinations[currentDestination].images[currentImage]} alt={destinations[currentDestination].title} />
                <p className='destination-title'>{destinations[currentDestination].title}</p>
                <p className='destination-description'>{destinations[currentDestination].description}</p>
                <button className='consult-button'  onClick={() => window.open(destinations[currentDestination].url, '_blank')}>
                  Consulte planes de viaje
                </button>
              </div>
            </div>
            <div className="carrousel-dos-parteAcompañante">
              <h1>resto de la pagina</h1>
            </div>
          </div>
        </section>
      );
    };

    const CarrouselDos = () => {
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

    const infoContent = `
    Para crear un carrusel de destinos turísticos en React con cambios automáticos y un botón multidireccional, sigue estos 10 pasos:
    1. Importa React y las funciones 'useState' y 'useEffect'.

    2. Crea un arreglo 'destinations' con objetos para cada destino. Incluye títulos, imágenes, descripciones y URL de cada destino.

    3. Define un componente llamado 'CarrouselElemento'.

    4. Utiliza 'useState' para gestionar el estado actual del destino y de la imagen.

    5. Implementa un efecto con 'useEffect' para cambiar automáticamente la imagen cada 5 segundos y avanzar al siguiente destino.

    6. Estructura el componente con un título y dos contenedores: uno para el carrusel y otro para el contenido adicional.

    7. En el carrusel, muestra la imagen, título, descripción y un botón para consultar planes de viaje.

    8. Utiliza un botón multidireccional que redirige a la URL correspondiente al destino.

    9. Agrega estilos CSS para dar formato a los elementos y hacer que el carrusel sea atractivo visualmente.

    10. Exporta el componente 'CarrouselElemento' para utilizarlo en tu aplicación.
    `;
    const buttonCode = `
      import { useState, useEffect } from 'react'
      import './CarrouselDos.css'
      const destinations = [
        {
          title: 'Bariloche',
          images: [
            'https://www.conclusion.com.ar/wp-content/uploads/2020/07/bariloche.jpg',
            'https://www.travelandleisure.com/thmb/yPOfzSgzWNJ87Q4-z6K-RBHfDmM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bariloche-argentina-cathedral-BARIBARI0120-69b51d47e65d4f2ebabed5abcc6f094a.jpg',
            'https://www.travelandleisure.com/thmb/T5qU1R_bBPh8Ol2CY442sy-nK7Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/llao-llao-hotel-BARI1219-b7658ab6091f431bba309b8557db815f.jpg',
            'https://blogskystorage.s3.amazonaws.com/2023/04/post_thumbnail-8185a199c72f8d397102be63c27c6732-1536x1024.jpeg',
            'https://bariloche.org/wp-content/uploads/2014/11/refugios.jpg',
          ],
          description: 'Bariloche es famoso por su belleza natural, sus montañas cubiertas de nieve en invierno y sus lagos cristalinos en verano. Es un destino ideal para el esquí y el snowboard en invierno, y ofrece actividades al aire libre durante todo el año.',
          url: 'URL de Bariloche',
        },
        {
          title: 'Ushuaia',
          images: [
            'https://miro.medium.com/v2/resize:fit:1400/1*I4waGmtnO9fi9ij3yyAvxA.jpeg',
            'https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2023/02/la_ciudad_fueguina_de_ushuaia.jpg?fit=3264%2C2238&ssl=1',
            'https://taqsa.com.ar/wp-content/uploads/2023/06/Ushuaia-1-scaled.jpg',
            'https://conocerushuaia.com/wp-content/uploads/2017/08/laguna-esmeralda-frente.jpg',
            'https://imagenes.elpais.com/resizer/1I33IIsknINFFNoHXIZSG1BN5lo=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/MMK4P42NQEWHXRT6W64HXQ57BQ.jpg',
          ],
          description: 'Ushuaia, conocida como "el fin del mundo", es la ciudad más austral del mundo. Ofrece paisajes impresionantes, glaciares, montañas y una amplia variedad de actividades, desde excursiones en barco por el Canal Beagle hasta senderismo y exploración de la Antártida.',
          url: 'URL de ushuaia',
        },
        {
          title: 'El Calafate',
          images: [
            'https://sinatajosfilms.com/wp-content/uploads/2020/08/glaciarperitomoreno-1.jpg',
            'https://www.turismodelprado.tur.ar/wp-content/uploads/2019/10/calafate.jpg',
            'https://www.elcalafate.tur.ar/img/anunciantes/501/el-chalten-xl.jpg',
            'https://pasaportenomada.es/wp-content/uploads/2022/02/que-ver-y-que-hacer-en-el-calafate.jpg',
            'https://media-cdn.tripadvisor.com/media/photo-s/01/bf/ac/3c/todo-glaciares-tour.jpg',
          ],
          description: 'El Calafate es el punto de acceso al famoso Parque Nacional Los Glaciares. Aquí, puedes visitar el majestuoso Glaciar Perito Moreno y explorar otros glaciares, lagos y paisajes naturales impresionantes.',
          url: 'URL de Calafate',
        },
        {
          title: 'Puerto Madryn',
          images: [
            'https://mapuchito.com.ar/wp-content/uploads/2023/06/ballena-680x423.webp',
            'https://mptnoticias.com/wp-content/uploads/2023/09/Imagen-Avistaje-de-ballenas-embarcado-960x540.jpg',
            'https://caletadesarrollos.com/images/01/madryn-1.webp',
            'https://www.appm.com.ar/wp-content/uploads/2022/12/2022-12-06-Viking-Jupiter-001.jpg',
            'https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2022/07/62cf4a78e8aef_450.jpg',
          ],
          description: 'Puerto Madryn es conocida por su increíble vida marina. Es un lugar perfecto para avistamiento de ballenas, pingüinos, lobos marinos y otras especies. Además, ofrece playas hermosas y actividades acuáticas.',
          url: 'URL de PMadryn',
        },
        {
          title: 'San Martín de los Andes',
          images: [
            'https://www.clarin.com/2021/07/28/IiOcIxAos_1256x620__1.jpg',
            'https://i0.wp.com/blog.pezzati.com/wp-content/uploads/2018/03/img-otono.jpg?resize=613%2C473&ssl=1',
            'https://i0.wp.com/realidadsm.com/wp-content/uploads/2020/02/camping-carpa.jpg?fit=816%2C500&ssl=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/cd/b5/ec/los-pozones-de-caleufu.jpg?w=500&h=400&s=1',
            'https://www.chapelco.com/imagenes/institucional/sm1.jpg',
          ],
          description: 'San Martín de los Andes es un destino de montaña con paisajes de ensueño. Ofrece oportunidades para el senderismo, la pesca y la relajación en un entorno natural impresionante.',
          url: 'URL de sanmartin',
        },
      ];
      const CarrouselElemento = () => {
        const [currentDestination, setCurrentDestination] = useState(0);
        const [currentImage, setCurrentImage] = useState(0);
        useEffect(() => {
          const interval = setInterval(() => {
            if (currentImage < destinations[currentDestination].images.length - 1) {
              setCurrentImage(currentImage + 1);
            } else {
              setCurrentImage(0);
              setCurrentDestination((currentDestination + 1) % destinations.length);
            }
          }, 5000); // Cambio automático cada 5 segundos
          return () => {
            clearInterval(interval);
          };
        }, [currentImage, currentDestination]);
        return (
          <section>
            <h1 className='carrousel-title'>Carrousel en carrousel con boton multidireccional</h1>
            <div className="carrousel-container-dos-master">
              <div className="carrousel-container-dos">
                <div className="destination">
                  <img src={destinations[currentDestination].images[currentImage]} alt={destinations[currentDestination].title} />
                  <p className='destination-title'>{destinations[currentDestination].title}</p>
                  <p className='destination-description'>{destinations[currentDestination].description}</p>
                  <button className='consult-button' onClick={() => window.location.href = destinations[currentDestination].url}>
                    Consulte planes de viaje
                  </button>
                </div>
              </div>
              <div className="carrousel-dos-parteAcompañante">
                <h1>resto de la pagina</h1>
              </div>
            </div>
          </section>
        );
      };
      export default CarrouselElemento
    `;
    const buttonCss = `
      .carrousel-container-dos-master{
        display: flex;
        flex-direction:row ;
        height: 90vh;
        overflow: hidden;
      }
      .carrousel-container-dos {
          display: flex;
          justify-content: center;
          max-width: 25%;
          min-width: 25%;
          border: 1px solid #ddd;
          padding: 10px;
          box-sizing: border-box;
          height: 100%;
          min-height: 90vh;
      }
      .destination {
          display: flex;
          flex-direction: column;
          margin: 10px 0;
          padding: 10px;
      }
      .destination img {
          min-width: 100%;
          width: 100%;
          height: 30vh;
          border: 1px solid #ddd;
      }
      .destination-title{
          text-align: center;
          font-size: 24px;
          margin-top: 10px;
          margin-bottom: 10px;
      }
      .destination-description{
          color: white;
          font-size: 1rem;
          min-height: 30vh;
          height: 20vh;
      }
      .consult-button {
          display: block;
          background-color: #007BFF;
          color: white;
          padding: 20px;
          font-size: 18px;
          border: none;
          cursor: pointer;
          margin-top: auto;
          width: 100%;
          height: 20vh;
      }
      .carrousel-dos-parteAcompañante{
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 75%;
          min-width: 75%;
          height: 100%;
      }
      .carrousel-dos-parteAcompañante h1{
          text-align: center;
      }
      @media (max-width: 767px) {
          .carrousel-container-dos-master{
              height: 60vh;
              min-height: 60vh;
          }
          .carrousel-container-dos {
              min-width: 45%;
              max-width: 45%;
              padding: 0;
              margin: 0;
              max-height: 100%;
              min-height: 100%;
          }
          .destination{
              padding: 0;
              margin: 2px;
          }
          .destination img{
              height: auto;
              max-height: 20vh;
              min-height: 20vh;
          }
          .carrousel-dos-parteAcompañante {
              min-width: 54%;
              max-width: 54%;
              max-height: 60vh;
          }
          .consult-button {
              font-size: 16px;
              padding: 10px;
              height: 8vh;
              margin-top: 3vh;
          }
          .destination-title {
              font-size: 18px;
          }
          .destination-description {
              font-size: 12px;
              max-height: auto;
              margin-bottom: 0px;
              min-height: 10vh;
          }
      }
    `;
    return (
        <section>
            <div className="card">
                <div className="card-content">
                <CarrouselElemento/>
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


export default CarrouselDos
