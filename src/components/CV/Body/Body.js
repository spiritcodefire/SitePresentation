import React from 'react'
import { useTranslation } from 'react-i18next';

const Body = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h5>{t('Body.1')}</h5>
            <div className="text-left p-4">

                <p className="taillePAside font-weight-bold">{t('Body.2')}</p>
                <p className="taillePAside">{t('Body.3')}</p>
                <p className="taillePAside">{t('Body.4')}</p>
                <p className="taillePAside">{t('Body.5')}</p>
                <p className="taillePAside">{t('Body.6')}</p>
                <p className="taillePAside">{t('Body.7')}</p>
                <p className="taillePAside mb-4">{t('Body.8')}</p>

                <p className="taillePAside font-weight-bold">{t('Body.9')}</p>
                <p className="taillePAside">{t('Body.10')}</p>
                <p className="taillePAside">{t('Body.11')}</p>
                <p className="taillePAside">{t('Body.12')}</p>
                <p className="taillePAside mb-4">{t('Body.13')}</p>

                <p className="taillePAside font-weight-bold">{t('Body.14')}</p>
                <p className="taillePAside">{t('Body.15')}</p>
                <p className="taillePAside">{t('Body.16')}</p>
                <p className="taillePAside">{t('Body.17')}</p>

            </div>
        </div>
    )
}

export default Body
