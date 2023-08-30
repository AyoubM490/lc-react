import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Another from "./Another";

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  const someStyle = {
    background: 'blue',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold'
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Another name="Andre" />
        <div>
          <span>{count}</span>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          true && <p style={someStyle}>{ 5 + 4 }</p>
        }
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
