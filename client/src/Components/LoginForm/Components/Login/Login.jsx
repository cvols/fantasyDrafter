import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

import useStyles from './Login.styles';

const Login = ({ email, setEmail, password, setPassword }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <TextField
        label="Email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        variant="outlined"
        className={classes.textField}
        type="email"
        required
        error
        helperText="Email is required"
      />
      <TextField
        label="Password"
        value={password}
        onChange={event => setPassword(event.target.value)}
        variant="outlined"
        className={classes.textField}
        type="password"
        required
      />
    </React.Fragment>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired
};

export default Login;
