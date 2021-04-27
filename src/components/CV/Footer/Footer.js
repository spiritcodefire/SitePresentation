import React from 'react'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    
//     <div className="container">
//     <div className="row">
//         <div className="col-4 border">{t('Footer.1')}</div>
//         <div className="col-4 border">{t('Footer.2')}</div>
//         <div className="col-4 border">{t('Footer.3')}</div>
//     </div>
// </div>

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-4">{t('Footer.1')}</div>
                    <div className="col-4">{t('Footer.2')}</div>
                    <div className="col-4">{t('Footer.3')}</div>
                </div>
            </div>

        </div>
      
    )
}

export default Footer
