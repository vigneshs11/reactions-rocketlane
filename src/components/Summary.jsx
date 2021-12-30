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
        console.log('render')
        let userList = this.props.users.filter(this.filterByView.bind(this)).map(user => {
            return (
            <div className='summary-list'>
            <div className='avatar'>    
            <img src={user.avatar} width="150" height="80"></img>
            </div>
            <div className='user-name'>
            {user.first_name} {user.last_name}
            </div>
            </div>)
            })

        return(
            <div className='summary-view'>
            <SummaryHeader  reactions={this.props.reactions} changeTab={this.changeTab}/>
             {userList}
            </div>
        );
    }
}

export default Summary;