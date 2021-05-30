import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

import openSocket from 'socket.io-client';
const socket = openSocket('http://127.0.0.1:4000', { transports: ['websocket'] });

function App() {
  useEffect(() => {
    axios.get('/api/teams').then(console.log).catch(console.log);
  }, []);

  const [response, setResponse] = useState('');

  useEffect(() => {
    socket.on('FromAPI', data => {
      setResponse(data);
    });
  }, []);

  console.log({ response });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

App.propTypes = {};

export default App;
