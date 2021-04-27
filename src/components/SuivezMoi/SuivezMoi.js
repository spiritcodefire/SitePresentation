import React from 'react'
// import styles from './SuivezMoi.module.css'
// import PropTypes from 'prop-types'
// import Button from '../button/button'

const SuivezMoi = () => {
   
    return (
        <div className="container-fluid bg-dark">
            <div className="container p-5 ">
                < div className="row justify-content-center">
                    <div className="col-md-4 col-12">
                        <h3 className="h3 text-white">Suivez-moi !</h3>
                        <div>
                        <i className="fab fa-facebook-square text-white m-1" style={{fontSize : 50}}> </i>
                        <i className="fab fa-whatsapp-square text-white m-1" style={{fontSize : 50}}> </i>
                        <i className="fab fa-github-square text-white m-1" style={{fontSize : 50}}> </i>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <h3 className="h3 text-white">contactez moi !</h3>
                        <input className="form-control m-1" placeholder="Votre Nom"></input>
                        <input className="form-control m-1" placeholder="Entrez votre Email"></input>
                        <textarea className="form-control m-1" placeholder="Racontez moi votre projet" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button className="btn btn-primary btn-lg btn-block" style={{marginLeft : 4}}>Envoyez</button>
                    </div>
                </div>



                


            </div>
        </div>
    )
}


  
export default SuivezMoi