import React from 'react'
import './CV.css'
import Header from '../HeaderCV/HeaderCV'
import Aside from '../Aside/Aside'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import i18next from '../../../i18n';
import Pdf from "react-to-pdf";

const ref = React.createRef();



const CV = () => {
    // function handleClick(lang) {
    //     i18next.changeLanguage(lang)
    // }
    return (
        <div className="bodyS">
            <NavBar />
            
            <div className="text-center">
                <Pdf targetRef={ref} filename="Best-Junior.pdf">
                    {({ toPdf }) => <div className="nav-link" onClick={toPdf}>Edit-to-Pdf</div>}
                </Pdf>  
            </div>

            <div className="grid-containerS" ref={ref}>
                <div className="item1S bg-dark"><Header/></div>
                <div className="item2S"><Aside/></div>
                <div className="item3S"><Body/></div> 
                <div className="item5S"><Footer/></div>
            </div>

        </div>
    )
}
export default CV
