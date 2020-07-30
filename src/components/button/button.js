import React from 'react'
import styles from './button.module.css'
import PropTypes from 'prop-types'


const button = (props) => {
    const {nameButton} = props 
return (
    <button className={styles.button}>
        {nameButton}
    </button>
)}

button.propTypes = {
    nameButton: PropTypes.string,
};


export default button