import { makeStyles } from '@material-ui/core';
import palette from '../../static/palette';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '25vh',
    paddingBottom: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
    backgroundColor: palette.background.default,
    borderRadius: '4px',
    boxShadow: palette.shadow,
    border: `1px solid ${palette.borders.light}`
  },
  submit: {
    marginBottom: 20
  },
  logo: {
    marginLeft: 90,
    marginTop: 30,
    marginBottom: 40,
    width: '50%',
    
  },
  progress: {
    position: 'absolute',
    width: '550px',
    borderRadius: '4px',
    marginTop: -30
  },
  alert: {
    marginTop: 70,
    width: '400px',
    margin: 'auto'
}
}));

export { useStyles };