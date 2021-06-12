import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    width: '80%',
    marginTop: 10,
    '&:first-child': {
      marginTop: 0
    }
  }
}));

export default useStyles;
