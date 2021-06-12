import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Paper, Grid, TextField, Typography } from '@material-ui/core';

import useStyles from './LoginForm.styles';
import { Login, SignUp } from './Components';

const LoginForm = props => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [method, setMethod] = useState('Sign Up');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Paper variant="outlined" className={classes.paper}>
          <Grid container alignItems="center" direction="column" className={classes.inputContainer}>
            {method === 'Sign Up' && (
              <SignUp firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} />
            )}
            <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
            <Button variant="contained" color="secondary" className={classes.submitButton}>
              {method}
            </Button>
          </Grid>
          <Grid container>
            <Button
              variant={method === 'Sign Up' && 'contained'}
              className={classes.button}
              onClick={() => {
                setMethod('Sign Up');
              }}
            >
              Sign Up
            </Button>
            <Button
              variant={method === 'Login' && 'contained'}
              className={classes.button}
              onClick={() => {
                setMethod('Login');
              }}
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
