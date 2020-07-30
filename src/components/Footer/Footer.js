import React from 'react'
import styles from './Footer.module.css'
import PropTypes from 'prop-types'

const Footer = (props) => {
    const {title, subTitle, phrase} = props
 return (
    <div className={styles.container}>
    <div className={styles.title}>{title}</div>
    <div className={styles.subTitle}>{subTitle}</div>
    <div className={styles.phrase}>{phrase}</div>
</div>
 )

}




Footer.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    phrase: PropTypes.string
};

export default Footer