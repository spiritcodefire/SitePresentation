import React from 'react'




const CharacterCard = props => {
    const { name, description,  photo, titredescript, languages } = props

    return (
        <div className="container border bg-light border-dark rounded-lg  m-3">
            <div>
                <img className="img-fluid mt-2" src={photo} alt="monImage"/>
            </div>

            <div className="text-dark mx-auto h3 p-5">
                {titredescript}
            </div>
            
            <div className="text-dark mx-auto h4 p-3">
                {name}
            </div>

              
            <div className="text-dark mx-auto h6 p-3">
                {description}
            </div>

            <hr/>  

            <button className="btn btn-danger mb-5">
                {languages}
            </button>
            



        </div>
    )
}



export default CharacterCard
