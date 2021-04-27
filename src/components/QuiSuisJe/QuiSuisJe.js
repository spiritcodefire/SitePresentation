import React from 'react'
import styles from './QuiSuisJe.module.css'
// import PropTypes from 'prop-types'
// import Button from '../button/button'

const QuiSuisJe = () => {
   
    return (
        <div className="container-fluid bg-secondary">
            <div className="container mt-5">
                <h3 className="h3 text-white text-center p-3">
                    Qui suis-je
                </h3>
                <div className="row">
                    <div className="col-md-4 col-12" >
                        <div className={styles.bgphoto}>
                            
                        </div>  
                    </div>
                    <div className="col-md-8  col-12 text-white text-left">
                        <p>Freelance depuis quatre ans, je suis développeuse full stack Ruby et Python.</p>
                        <p> Je me suis consacrée à de nombreux projets passionnants, dont ma propre startup (Cohome) et des formations pour adultes.</p>
                        <p>J'ai notamment créé un parcours de formation de niveau Licence pour OpenClassrooms : Développeur·se Python !</p>
                        <p>Quand je ne code pas, j'aime rire et randonner !</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


  
export default QuiSuisJe