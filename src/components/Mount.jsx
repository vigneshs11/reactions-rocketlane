import Reactions from "./Reactions";
import Api from '../helpers/api'
import React, { useContext } from 'react';

import  reactionsContextProvider from '../context/reactionsContextProvider'


class Mount extends React.Component {

    static contextType = useContext(reactionsContextProvider)
    constructor(props) {
        super(props)
        const api = new Api();
    }

    componentWillMount() {
        this.getReactions();
    }

    getReactions() {
        debugger
        this.api.getReactionsList().then(results => {
     let { reactions, setReactions } = this.context;
        setReactions([...reactions,...results]);
        })
    }


  render() {
      return(
          <Reactions />
      );
  }
};

export default Mount