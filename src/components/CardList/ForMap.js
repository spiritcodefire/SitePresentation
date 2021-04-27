import React from 'react'
import characters from "../../utils/mesProjets"
import CharacterCard from "../CharacterCard/CharacterCard"





const CardList = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {characters.map(item => (
                        <CharacterCard

                            key={item.id}
                            name={item.name}
                            description={item.description}
                            isHero={item.isHero}
                            photo={item.photo}
                            titredescript={item.titredescript}
                            languages={item.languages}

                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardList