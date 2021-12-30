import React from 'react';
import { Trigger } from './Trigger';
import { Counter } from './Counter';


class Reactions extends React.Component {

  constructor(props) {
      super(props)

      this.state = {
          hid: 0
      }

  }

  highlightId = (event) => {
        console.log(event.target);
        this.setState({
            hid: event.target.id
        })
  }



    render() {
        let counterReactions = this.props.reactions;
        return (
            <div className='reactions'>
            <Counter reactions={counterReactions} handleRemove={this.props.handleRemove} hid={this.state.hid}/>
            <Trigger highlightId={this.highlightId} reactions={this.props.reactions} handleClick={this.props.handleClick}/>
            </div>
            );
    };
}

export default Reactions;