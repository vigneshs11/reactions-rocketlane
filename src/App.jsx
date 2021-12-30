import './App.css';
import React, { useEffect, useState } from 'react';
import Mount from './components/Mount';




function App() {

  let [contentId, setContentId] = useState(1)

  const toggleContent = () => {
    if (contentId == 1) setContentId(2)
    else setContentId(1)
  }
  return (<div>
    <button onClick={toggleContent} className='toggle'>Toggle Content ID</button>
    <Mount contentId={contentId} />
  </div>);
}

export default App;
