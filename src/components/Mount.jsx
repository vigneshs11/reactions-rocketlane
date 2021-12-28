import Reactions from "./Reactions";
import Api   from '../helpers/api'
import React from 'react';



const ReactionContext = React.createContext('default');

class Mount extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            reactions: []
        }
        this.api = new Api();


    }


    componentDidMount() {
        this.getReactions();
    }


    async getReactions() {
       
        let reactionsList = await this.api.getReactionsList();
        let userContentReaction = await this.api.getUserContentReaction();
        let sanitizedReactions = reactionsList.data.map(reaction => {
           let count =  this.getCount(reaction.id, userContentReaction);

           return {
               ...reaction,
               count
           }
        })

        this.setState({
            reactions: [...sanitizedReactions]
        })
    }

    getCount(id, elems) { 
        let count=0; 
        for(let elem of elems.data) { 
            if (elem.reaction_id == id) count++; 
        }

        return count;
    } 



     handleClick(event) {
            let reaction = this.state.reactions.find(reaction => reaction.emoji.codePointAt(0).toString(16) == (event.target.innerHTML.trim().codePointAt(0).toString(16)))
         this.api.postReaction({
             "user_id": 2,
             "reaction_id": reaction.id,
             "content_id": 1
         }).then(() => {
             reaction.selected = true
             reaction.count+=1
             this.setState({
                 reactions: [...this.state.reactions]
             })
         })
        }

        handleRemove(event) {
            console.log('handle remove')
            let reaction = this.state.reactions.find(reaction => reaction.id == (event.target.id))
            if(reaction.selected) {
                reaction.selected = false
                reaction.count-=1
                this.setState({
                    reactions: [...this.state.reactions]
                })
            }
           
        }    


  render() {

    if(this.state.reactions.length) {
        return(
            <ReactionContext.Provider value={this.state.reactions}>
            <div className="mount">
            <Reactions  reactions={this.state.reactions} handleClick={this.handleClick.bind(this)} handleRemove={this.handleRemove.bind(this)}/>
            </div>
            </ReactionContext.Provider>
        );
    } else {
        return(
            <div>
                loading
            </div>
        )
    }
      
  }
};

export default Mount