import React , { useEffect, useState} from 'react';

export const Counter = ({ reactions, handleRemove, hid }) => {

    let [chid, setChid] = useState(0);
    useEffect(() => {
        console.log('hid changed')
        setChid(hid);
    }, [hid]);

    let reactionsList = reactions.map(e => {
        if (e.count) {
            let highlight = (chid === e.id) ? 'highLight emoji-container' : 'emoji-container'
            return (<div className={highlight}><span key={e.id} id={e.id} className='emoji'>{`${e.count} . ` + e.emoji}</span></div>);
        }
    })

    if (reactionsList.length) {
        return (
            <div className='counterTray' onClick={handleRemove}>{reactionsList}</div>
        )
    } else {
        return ('');
    }


}