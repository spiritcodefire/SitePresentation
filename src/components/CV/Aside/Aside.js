import React from 'react'
import { useTranslation } from 'react-i18next';
const Aside = () => {
    const { t } = useTranslation();
    return (
        <div className="text-left ml-3">
            <h6>{t('Aside.1')}</h6>
           <p className="taillePAside">{t('Aside.2')}</p>
           <p className="taillePAside">{t('Aside.3')}</p>
           <p className="taillePAside">{t('Aside.4')}</p>
           <p className="taillePAside">{t('Aside.5')}</p>
           <p className="taillePAside text-justify">{t('Aside.6')}</p>
           <p className="taillePAside">{t('Aside.7')}</p>
            <br/>
           <h6>{t('Aside.8')}</h6>
           <p className="taillePAside">{t('Aside.9')}</p>
           <p className="taillePAside">{t('Aside.10')}</p>
           <p className="taillePAside">{t('Aside.11')}</p>
           <br/>
           <h6>{t('Aside.12')}</h6>
           <p className="taillePAside">{t('Aside.13')}</p>
           <p className="taillePAside">{t('Aside.14')}</p>
           <p className="taillePAside">{t('Aside.15')}</p>
           <hr />
           <p className="taillePAside">{t('Aside.16')}</p>
           <p className="taillePAside">{t('Aside.17')}</p>
           <p className="taillePAside">{t('Aside.18')}</p>
           <hr />


        </div>
    )
}

export default Aside
