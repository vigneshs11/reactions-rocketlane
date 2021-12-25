import React, { useState, createContext } from 'react'

export const reactionsContext = createContext()

const ReactionsContextProvider = (props) => {
  const [reactions, setReactions] = useState([])

  return (
    <reactionsContext.Provider value={{reactions, setReactions}}>
        {props.children}
    </reactionsContext.Provider>
  )
}

export default ReactionsContextProvider