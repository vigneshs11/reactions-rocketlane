import React, {useContext} from 'react';



export const Tray = ({showTray}) => {

    //const ReactionContext = useContext(ReactionContext)

    return (
        <ReactionContext.Consumer>
    <div className={showTray ? 'showTray' : 'hideTray'}>value</div>
        </ReactionContext.Consumer>
    );
}