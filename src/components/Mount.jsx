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

    getReactions() {
        this.api.getReactionsList().then(results => {
            this.setState({
                reactions: [...results.data]
            })
        })
    }


  render() {
      return(
          <ReactionContext.Provider value={this.state.reactions}>
          <div className="mount">
          <Reactions  value={this.state.reactions}/>
          </div>
          </ReactionContext.Provider>
      );
  }
};

export default Mount