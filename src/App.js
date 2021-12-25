import logo from './logo.svg';
import './App.css';
import ReactionsContextProvider from './context/reactionsContextProvider';
import Mount from './components/Mount'



function App() {

  return (

    <ReactionsContextProvider>
    <div className="App">
       <Mount />
    </div>
    </ReactionsContextProvider >
  );
}

export default App;
