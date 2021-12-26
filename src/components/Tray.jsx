import React, {useContext} from 'react';



export const Tray = ({showTray}) => {


    return (
        <ReactionContext.Consumer>
    <div className={showTray ? 'showTray' : 'hideTray'}>{reactions}</div>
        </ReactionContext.Consumer>
    );
}