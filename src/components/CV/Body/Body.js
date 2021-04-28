import React from 'react'
import { useTranslation } from 'react-i18next';

const Body = () => {
    const { t } = useTranslation();
    return (
        <div >
            <h5>{t('Body.1')}</h5>
            <div className="text-left p-4">

                <div className="slider0">
                    <p className="taillePAside font-weight-bold">{t('Body.2')}</p>
                    <p className="taillePAside"><span className="text-danger mr-1">&Phi;</span> {t('Body.3')}</p>
                    <p className="taillePAside"><span className="text-danger mr-1">&Phi;</span>{t('Body.4')}</p>
                    <p className="taillePAside"><span className="text-danger mr-1">&Phi;</span>{t('Body.5')}</p>
                    <p className="taillePAside"><span className="text-danger mr-1">&Phi;</span>{t('Body.6')}</p>
                    <p className="taillePAside"><span className="text-danger mr-1">&Phi;</span>{t('Body.7')}</p>
                    <p className="taillePAside mb-4"><span className="text-danger mr-1">&Phi;</span>{t('Body.8')}</p>
                </div>
                
                <div className="slider1">
                    <p className="taillePAside font-weight-bold">{t('Body.9')}</p>
                    <p className="taillePAside"><span className="text-danger mr-1">&Phi;</span>{t('Body.10')}</p>
                    <p className="taillePAside"><span className="text-danger mr-1">&Phi;</span>{t('Body.11')}</p>
                    <p className="taillePAside"><span className="text-danger mr-1">&Phi;</span>{t('Body.12')}</p>
                    <p className="taillePAside mb-4"><span className="text-danger mr-1">&Phi;</span>{t('Body.13')}</p>
                </div>

                <div className="slider2">
                    <p className="taillePAside font-weight-bold">{t('Body.14')}</p>
                    <p className="taillePAside"><span className="text-danger mr-1">&Phi;</span>{t('Body.15')}</p>
                    <p className="taillePAside"><span className="text-danger mr-1">&Phi;</span>{t('Body.16')}</p>
                    <p className="taillePAside"><span className="text-danger mr-1">&Phi;</span>{t('Body.17')}</p>
                </div>

            </div>
        </div>
    )
}

export default Body
