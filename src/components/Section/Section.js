import React from 'react'
import styles from './Section.module.css'
import Card from '../Card/Card'
import PropTypes from 'prop-types' 
import List from './ListMarvel'

// import SectionItem from '../SectionItem/SectionItem'

const Section = (props) => {
    return (
        <div>
        
            <div className={styles.container}>
                {List.map((perso) => {
                                    return <Card title={perso.name} description={perso.description} isHero={perso.isHero} />
                            })}
            </div>

        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string
};
  

export default Section