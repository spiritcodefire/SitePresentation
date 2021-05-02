import React from 'react'
import Header from '../HeaderCV/HeaderCV'
import Aside from '../Aside/Aside'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
;
// import NavBar from '../NavBar/NavBar'
// import i18next from '../../../i18n';
// import Pdf from "react-to-pdf";





const CV = () => {

    return (
        <div className=" color-change-2x">
   
            <div className="grid-containerS shadow-lg" >
                <div className="item1S bg-dark"><Header/></div>
                <div className="item2S bg-light"><Aside/></div>
                <div className="item3S bg-light"><Body/></div> 
                <div className="item5S bg-light"><Footer/></div>
            </div> 

        </div>
    )
}
export default CV
