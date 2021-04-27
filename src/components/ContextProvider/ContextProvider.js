import React, {useState} from 'react'

export const Context = React.createContext()


const ContextProvider = (props) => {
    const {children} = props

    const [contextProduct, setContextProduct] = useState({})


    const context = {
        contextProduct,
        setContextProduct,
    }

    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider
