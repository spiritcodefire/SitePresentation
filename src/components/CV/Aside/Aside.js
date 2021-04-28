import React from 'react'
import { useTranslation } from 'react-i18next';
const Aside = () => {
    const { t } = useTranslation();
    return (
        <div className="text-left ml-3">
            
            <div className="d-inline mx-1 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-terminal text-danger" viewBox="0 0 16 16">
                    <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"/>
                    <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z"/>
                </svg>
            </div>
            <h6 className="d-inline mt-n3">{t('Aside.1')}</h6>

            <div className="slidel0 ">
                <p className="taillePAside">{t('Aside.2')}</p>
                <p className="taillePAside">{t('Aside.3')}</p>
                <p className="taillePAside">{t('Aside.4')}</p>
                <p className="taillePAside">{t('Aside.5')}</p>
                <p className="taillePAside text-justify">{t('Aside.6')}</p>
                <p className="taillePAside">{t('Aside.7')}</p>
            </div>

            <br/>
            
            <div className="d-inline mx-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-emoji-laughing text-danger" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
                </svg>
            </div>

           <h6 className="d-inline">{t('Aside.8')}</h6>
           <div className="slidel1 ">
                <p className="taillePAside">{t('Aside.9')}</p>
                <p className="taillePAside">{t('Aside.10')}</p>
                <p className="taillePAside">{t('Aside.11')}</p>
            </div>

           <br/>
           <div className="d-inline mx-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-award text-danger" viewBox="0 0 16 16">
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                </svg>
           </div>

           <h6 className="d-inline">{t('Aside.12')}</h6>
           <div className="slidel2 mb-2">
                <p className="taillePAside">{t('Aside.13')}</p>
                <p className="taillePAside">{t('Aside.14')}</p>
                <p className="taillePAside">{t('Aside.15')}</p>
           </div>

          
           <div className="slidel3 ">
                <p className="taillePAside">{t('Aside.16')}</p>
                <p className="taillePAside">{t('Aside.17')}</p>
                <p className="taillePAside">{t('Aside.18')}</p>
           </div>
           


        </div>
    )
}

export default Aside
