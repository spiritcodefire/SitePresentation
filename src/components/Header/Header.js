import React from 'react'
import styles from './Header.module.css'
import PropTypes from 'prop-types'
import Button from '../button/button'

const Header = (props) => {
    const {title} = props
    return (
        < div className="text-center"> 
            
                <div className={styles.title}>
                    {title}
                </div>
                    <div className={styles.container}>
                        <div>    
                            <Button  nameButton="whatsapp"/>
                        </div>

                        <div>
                            <Button nameButton="telephone"/>
                        </div>
                    </div>
                
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string,
};
  
export default Header 