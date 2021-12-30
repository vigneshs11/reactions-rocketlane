import React from 'react'
import { useEffect } from 'react'

// move to constant file
const ALL_OPTIONS = {
    "id": 0,
    "name": "ALL",
    "emoji": "All",
    "count": ''
}
export const SummaryHeader = ({reactions ,changeTab, currentTab}) => {


    //can be moved to a util and can be used commonly between summaryheader and counter components
    let totalCount = reactions.reduce((pv,cv)=> {
        return ( Number(cv.count) + pv);
    }, 0)
    ALL_OPTIONS['count'] = totalCount;
    let headerReactions = [ALL_OPTIONS].concat(reactions);
    let reactionsList = headerReactions.map(e => {
        if (e.count || e.name ==='ALL') {
            let headerClass = (currentTab === e.id) ? ' hight-light-tab summary-header-cell': 'dim-light-tab summary-header-cell';
            return (<div onClick={changeTab} className={headerClass} ><span  key={e.id} id={e.id}>{`${e.count} . ` + e.emoji}</span></div>);
        }
    })
    
    return(<div className="summary-header">{reactionsList}</div>)
}