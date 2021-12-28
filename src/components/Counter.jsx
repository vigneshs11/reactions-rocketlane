import React, { useContext } from 'react';




const COUNT = 1
export const Counter = ({reactions, handleRemove}) => {

    let reactionsList = reactions.map(e => {
        if (e.count) {
            return (<div id={e.id} className='emoji'>{`${e.count}` + e.emoji}</div>);
        }
    })

    if(reactionsList.length) {
        return( 
            <div  className='counterTray' onClick={handleRemove}>{reactionsList}</div>
        )
    } else {
        return ('');
    }
 
     
}