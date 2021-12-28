import React from 'react';
import { Trigger } from './Trigger';
import { Counter } from './Counter';


class Reactions extends React.Component {

  constructor(props) {
      super(props)

  }


    render() {
        let counterReactions = this.props.reactions;
        return (
            <div className='reactions'>
            <Trigger reactions={this.props.reactions} handleClick={this.props.handleClick}/>
            <Counter reactions={counterReactions} handleRemove={this.props.handleRemove}/>
            </div>
            );
    };
}

export default Reactions;