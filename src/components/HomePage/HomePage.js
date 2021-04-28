import React from 'react'
import Header from '../Header/Header'

import NavZone from '../NavZone/NavZone'
import BigContenant from '../BigContenant/BigContenant'
import QuiSuisJe from '../QuiSuisJe/QuiSuisJe'
import SuivezMoi from '../SuivezMoi/SuivezMoi'
import HeaderSuite from '../HeaderSuite/HeaderSuite'

const HomePage = () => {
    return (
        <>   
            <Header title="SpirithaCodesh.com"/>
            <HeaderSuite /> 
            <NavZone />
            <BigContenant />
            <QuiSuisJe />
            <SuivezMoi />
        </>
    )
}

export default HomePage
