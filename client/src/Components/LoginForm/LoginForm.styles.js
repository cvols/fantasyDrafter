import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16)
    },
    opacity: 0.5
  },
  paper: {
    height: 500,
    width: 700,
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  container: {
    textAlign: 'center',
    background: theme.palette.primary.main,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    flex: 1
  },
  inputContainer: {
    marginTop: '10%'
  },
  submitButton: {
    marginTop: 20,
    width: '80%'
  }
}));

export default useStyles;
