import React from 'react';
import { Trigger } from './Trigger';



class Reactions extends React.Component {

  constructor(props) {
      super(props)
  }

    render() {
        return (
            <React.Fragment>
            {/* <Counter /> */}
            <Trigger/>
            </React.Fragment>
            );
    };
}

export default Reactions;