import React from 'react'
// import styles from './HeaderSuite.module.css'
// import PropTypes from 'prop-types'
import Logoo from '../logoDev/logoDev'

const HeaderSuite = () => {
    return (
        <div className="text-center"> 
            
        <div className="bgimporte">
        <Logoo /> 
            <div className="text-dark h1 pt-5">Elie Sultan</div>
            <div className="text-black h1 pt-5">DEVELOPPEUR FULL-STACK</div>
        </div>
                
        </div>
    )
}

// Header.propTypes = {
//     title: PropTypes.string,
// };
  
export default HeaderSuite