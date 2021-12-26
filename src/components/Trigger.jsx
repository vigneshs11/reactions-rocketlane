import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import addReactions from '../assets/addReaction.png'
import { Tray  } from './Tray';





export const Trigger = ({hoverIn, hoverOut}) => {
  const [showTray, setShowTray] = useState(false);

    return( 
        <React.Fragment>
            <Tray showTray={showTray}/>
     <div 
    onMouseEnter={() => {setShowTray(true); }}
    onMouseLeave={() => { setShowTray(false); }}    
    className='trigger'>
    <img src={addReactions}></img>
    </div>
        </React.Fragment>
       
    );

     
}