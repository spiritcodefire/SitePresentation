import React from 'react'
import bogoss from '../../../asset/elieCoupé.jpeg'
import { useTranslation } from 'react-i18next';
const HeaderCV = () => {
    const { t } = useTranslation();
    return (
        // {t('SlideNew.1')}
        <div className="text-white container">
            <div className="row justify-content-between">

                <div className="col-8 col-xs-12">
                    <div className="text-left m-3">
                        <h5>Elie Sultan</h5>
                        <p className="taillePheader">{t('Header.1')}</p>
                        <p className="taillePheader">{t('Header.2')}</p>
                        <p className="taillePheader"><a className="text-decoration-none text-white" href="tel:+972532338015">{t('Header.3')}</a></p>
                        <p className="taillePheader"><a className="text-decoration-none text-white" href="mailto:sultan.elie@gmail.com">Email: sultan.elie@gmail.com</a></p>
                        <p className="taillePheader">{t('Header.4')}</p> 

                        


                    </div>
                </div>

                <div className="col-2 col-xs-12">
                    <figure className="figure">
                        <img className="figure-img img-fluid" src={bogoss} height="100px" alt="miniature" />
                    </figure>
                </div>

                <h2 className="mx-auto border px-5 p-2">{t('Header.5')}</h2> 
            </div>
            
        </div>
    )
}

export default HeaderCV
