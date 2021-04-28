import React from 'react'
import Header from '../HeaderCV/HeaderCV'
import Aside from '../Aside/Aside'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
// import NavBar from '../NavBar/NavBar'
// import i18next from '../../../i18n';
// import Pdf from "react-to-pdf";




const CV = () => {

    return (
        <div className="bodyS">


            <div className="grid-containerS" >
                <div className="item1S bg-dark"><Header/></div>
                <div className="item2S"><Aside/></div>
                <div className="item3S"><Body/></div> 
                <div className="item5S"><Footer/></div>
            </div>

        </div>
    )
}
export default CV
