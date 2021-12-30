import React, {useContext} from 'react';
import Reactions from './Reactions';


export const Tray = ({showTray, reactions, handleClick, highlightId}) => {

    let reactionList = reactions.filter(reaction => !reaction.selected).map(reaction =>(
    <div onMouseOver={highlightId} className="emoji" id={reaction.id}> 
    {reaction.emoji}
    </div>));

    return (
    <div  
    onClick={handleClick}
    className={showTray ? 'showTray' : 'hideTray'}
    >{reactionList}
    </div>
    );
}