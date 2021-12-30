import './App.css';
import React, {useEffect, useState} from 'react';
import Mount  from './components/Mount';
import Summary  from './components/Summary';


const CONTENT_ID  = 1


function App() {

  // let contents = CONTENT_ID.map(content => {
  //   return (<div  key={content}><Mount contentId={content}/></div>)
  // })
  return(<div>
  <Mount contentId={CONTENT_ID} />
  </div>);
}

export default App;
