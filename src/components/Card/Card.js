import React from 'react'
import styles from './Card.module.css'
import PropTypes from 'prop-types'



function getColor(isHero) {
    if (isHero) {
      return  styles.minidivbgblue
    }  else if (isHero=== false) {
       return styles.minidivbgred
    } else {
        return styles.minidivbgrey}
}
const Card = (props) => {
    const {title, description, isHero} = props
    return ( 
    <div className={styles.cont}>  
        <div className={styles.container}>


            <div  className={ getColor(isHero) }>
               
            </div>

            <div className={styles.paramtitle}> 
                <h2>{title}</h2>
            </div>

        </div>

        <div>
            {description}
        </div>

    </div>
    
    
    )
}

Card.propTypes = {
    title: PropTypes.string,
    description : PropTypes.string,
    isHero : PropTypes.bool
};
  
export default Card