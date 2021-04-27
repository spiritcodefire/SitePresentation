import React, { useState }   from 'react';
import { useTranslation} from 'react-i18next';
import i18next from '../../../i18n';
import logoFr from '../../../asset/drapeauFr.png'
import flagEnglish from '../../../asset/flagEnglish.png'
import Pdf from "react-to-pdf";

const ref = React.createRef();

const useChangeFlag = () => {

    const [ContainerLangue, setContainerLangue] = useState( <img width="25px"  style={{paddingTop: '0px', }} src={logoFr} alt="logo France" /> )  
        
    const English = () => setContainerLangue( <img width="36px" style={{ marginRight: '5px' }} src={flagEnglish} alt="logo Angleterre" /> )  

    const French = () => setContainerLangue( <img width="25px"  style={{paddingTop: '0px', }} src={logoFr} alt="logo France" />)  
    
    return [ContainerLangue, English , French ]

}

const NavBar = () => {

    const { t } = useTranslation();

    useTranslation();
    const [ContainerLangue,  English , French] = useChangeFlag()
    
    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

// {t('SlideNew.2')} 

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand text-white" href="#"> My CV</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">  <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <Pdf targetRef={ref} className=""  filename="code-example.pdf">
                            {({ toPdf }) => <div className="nav-link" onClick={toPdf}>Edit-to-Pdf</div>}
                        </Pdf>  
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Langues
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                            <div className="dropdown-item" onClick={()=>{
                                handleClick('fr');
                                French();
                                }}>Francais
                            </div>

                            <div className="dropdown-item"  onClick={()=>{
                                handleClick('eng');
                                English();
                                }}>Anglais
                            </div>

                            <a className="dropdown-item" href="#">hebreu</a>
                        </div>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
