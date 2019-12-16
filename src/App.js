import React from 'react';
import { HelloGraph, AppointmentDateAndTime as Caldatime, mockCaldatimeData as zeMock} from '@vibrent/graph';
import logo from './logo.svg';
import './App.css';

const Hello = () => <h1>hello mars!</h1>;
console.log('hi^^');
console.log(zeMock);
function App() {
  return (
    <div className="App">
      <Hello />
      <HelloGraph />
      <Caldatime caldatimeData={zeMock} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
