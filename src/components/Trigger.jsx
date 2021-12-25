import React, { useContext } from 'react';
import  reactionsContextProvider from '../context/reactionsContextProvider'



export const Trigger = () => {

    const contextType = useContext(reactionsContextProvider)


    return( <div>{this.context.reactions}</div>)

     
}