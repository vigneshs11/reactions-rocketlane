import React from 'react'
import { render } from 'react-dom'
import  { SummaryHeader } from './SummaryHeader'
class Summary extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            currentView: 0
        }
    } 

    changeTab = (event) =>  {
        this.setState({ currentView: parseInt(event.target.id)})
    }

    filterByView(user) {
        if(this.state.currentView===0) return true;
        else return (this.state.currentView === user.reaction_id)
    }
    


    render() {
        // move to seperate component 
        let reactionMap = this.props.reactions.reduce((pv, cv) => {
             pv[cv.id]=cv.emoji
             return pv;
        }, {})
        let userList = this.props.users.filter(this.filterByView.bind(this)).map(user => {
            return (
            <div className='summary-list'>
            <div className='avatar'>    
            <img src={user.avatar} width="18" height="18"></img>
            </div>
            <div className='user-name'>
            <span className='avatar'>{reactionMap[user.reaction_id]}</span>
            {user.first_name} {user.last_name}
            </div>
            </div>)
            })
            console.log(this.props.users)

        return(
            <div className='summary-view'>
             <div className='summary-title'>Reactions</div>   
            <SummaryHeader  reactions={this.props.reactions} changeTab={this.changeTab} currentTab={this.state.currentView}/>
             {userList}
            </div>
        );
    }
}

export default Summary;