import React from 'react' // c'est tout le logiciel 
import styles from './SectionItem.module.css' // son css
import PropTypes from 'prop-types' // son type

const SectionItem = (props) => {
    const {title, date, description} = props
    return (
        <div className={styles.container}> 
            <div className={styles.header}>
                <div>{title}</div>
                <div>{date}</div>
            </div>
            <div>{description}</div>
        </div>
    )
}

SectionItem.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string
};
  

export default SectionItem