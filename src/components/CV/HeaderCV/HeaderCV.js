import React, {useState} from 'react';
import { useTranslation} from 'react-i18next';
import i18next from '../../../i18n';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'

import bogoss from '../../../asset/elieCoupé.jpeg'

const HeaderCV = () => {
    const [photoIndex, setPhotoIndex] = useState(0) ;
    const [isOpen, setIsOpen] = useState(false) // photo pas touche
    const { t } = useTranslation();
    const images = [
        bogoss
    ];
  
    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }
    return (
        // {t('SlideNew.1')}
        
        <div className="text-white container" >
            <div className="row justify-content-between">
               
                <div className="col-8 col-xs-12">
                    <div className="text-left m-3 ">

                        
                        <h5 className="d-inline "> Elie Sultan</h5>
                        <div className="btn-group dropright d-inline">
                            <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe mb-2 text-danger" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                                </svg>
                            </button>
                            <div className="dropdown-menu">
                                <div className="dropdown-item" onClick={()=>{
                                    handleClick('fr');
                                    }}>Francais
                                </div>

                                <div className="dropdown-item"  onClick={()=>{
                                    handleClick('eng');
                                    }}>Anglais
                                </div>
                            </div>
                        </div>
                        <p className="taillePheader">{t('Header.1')}</p>
                        <p className="taillePheader">{t('Header.2')}</p>
                        <p className="taillePheader"><a className="text-decoration-none text-white" href="tel:+972532338015">{t('Header.3')}</a></p>
                        <p className="taillePheader"><a className="text-decoration-none text-white" href="mailto:sultan.elie@gmail.com">Email: sultan.elie@gmail.com</a></p>
                        <p className="taillePheader">{t('Header.4')}</p> 

                    </div>
                </div>

                <div className="col-2 col-xs-12">
                    <figure type="button" className="figure " onClick={() => setIsOpen(true)}>
                        <img className="figure-img img-fluid slide-in-elliptic-top-fwd d-none d-sm-block" src={bogoss} height="100px" alt="miniature" />
                    </figure>
                </div>
                {isOpen && (
                    <Lightbox
                      mainSrc={images[photoIndex]}
                      nextSrc={images[(photoIndex + 1) % images.length]}
                      prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                      onCloseRequest={() => setIsOpen(false)}
                      onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                      }
                      onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                      }
                    />
                )}

                <h2 className="mx-auto border border-danger px-5 p-2"><span className="">{t('Header.51')}</span>{" "}{t('Header.52')}</h2> 
            </div>
            
        </div>
    )
}

export default HeaderCV
