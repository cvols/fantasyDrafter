import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { LoginForm } from './Components';
import theme from './theme';
import { DataLayer } from './Context/Context';
import reducer, { initialState } from './Context/reducer';

import openSocket from 'socket.io-client';
const socket = openSocket('http://127.0.0.1:4000', { transports: ['websocket'] });

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('/api/teams').then(console.log).catch(console.log);
  }, []);

  const [response, setResponse] = useState('');

  useEffect(() => {
    socket.on('FromAPI', data => {
      setResponse(data);
    });
  }, []);

  return (
    <DataLayer initialState={initialState} reducer={reducer}>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Switch>
              {user ? (
                <Route path="/">
                  <LoginForm />
                </Route>
              ) : (
                <Route path="/">
                  <LoginForm />
                </Route>
              )}
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </DataLayer>
  );
}

export default App;
