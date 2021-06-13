import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

import useStyles from './SignUp.styles';

const SingUp = ({ firstName, setFirstName, lastName, setLastName }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <TextField
        label="First Name"
        value={firstName}
        onChange={event => setFirstName(event.target.value)}
        variant="outlined"
        className={classes.textField}
        required
      />
      <TextField
        label="Last Name"
        value={lastName}
        onChange={event => setLastName(event.target.value)}
        variant="outlined"
        className={classes.textField}
        required
      />
    </React.Fragment>
  );
};

SingUp.propTypes = {};

export default SingUp;
