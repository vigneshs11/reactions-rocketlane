import React, { useContext } from 'react';
import addReactions from '../assets/addReaction.png'
import { Tray  } from './Tray';
import useComponentVisible  from '../helper/useComponentVisible';




export const Trigger = ({reactions, handleClick}) => {
  const { ref, isComponentVisible } = useComponentVisible(false);


if(isComponentVisible) {
    return( 
        
        <div ref={ref}>
            <Tray ref={ref} showTray={isComponentVisible} reactions={reactions} handleClick={handleClick}/>
            <div  
            className='trigger'>
            <img src={addReactions}></img>
            </div>
        </div>
       
    );        
} else {
    return(  
        <div ref={ref}>
            <div  
            className='trigger'>
            <img src={addReactions}></img>
            </div>
        </div>  
        
        )
}
    

     
}