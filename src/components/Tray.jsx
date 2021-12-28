import React, {useContext} from 'react';


export const Tray = ({showTray, reactions, handleClick}) => {

    let reactionList = reactions.filter(reaction => !reaction.selected).map(reaction =>(<div className="emoji"> {reaction.emoji}</div>));

    return (
    <div  
    onClick={handleClick}
    className={showTray ? 'showTray' : 'hideTray'}
    >{reactionList}
    </div>
    );
}