import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Paper, Grid, TextField, Typography } from '@material-ui/core';

import useStyles from './LoginForm.styles';
import { Login, SignUp } from './Components';
import { TYPES } from '../../Context/types';
import { useDataLayer } from '../../Context/Context';

const LoginForm = props => {
  const [{ user }, dispatch] = useDataLayer();
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [method, setMethod] = useState('Sign Up');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    dispatch({
      type: TYPES.SET_USER,
      payload: {
        user: 'Chris'
      }
    });
  }, []);

  console.log({ user });

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Paper variant="outlined" className={classes.paper}>
          <Grid container alignItems="center" direction="column" className={classes.inputContainer}>
            <form noValidate>
              {method === 'Sign Up' && (
                <SignUp firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} />
              )}
              <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
              <Button variant="contained" color="secondary" className={classes.submitButton}>
                {method}
              </Button>
            </form>
          </Grid>
          <Grid container>
            <Button
              variant={method === 'Sign Up' ? 'contained' : null}
              className={classes.button}
              onClick={() => {
                setMethod('Sign Up');
              }}
            >
              Sign Up
            </Button>
            <Button
              variant={method === 'Login' ? 'contained' : null}
              className={classes.button}
              onClick={() => {
                setMethod('Login');
              }}
              type="submit"
            >
              Login
            </Button>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
