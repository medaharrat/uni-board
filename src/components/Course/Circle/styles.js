import { makeStyles } from '@material-ui/core/styles';
import palette from '../../../static/palette';

const useStyles = makeStyles((theme) => ({
  box: {
    border: '1px solid ' + palette.background.light_blue,
    padding: 30,
    margin: 20,
    backgroundColor: palette.background.light_gray,
    borderRadius: 15,
    borderWidth: 2,
    maxWidth: 899
  },  
  divider: {
    margin: theme.spacing(2),
    borderTop: '5px',
    backgroundColor:palette.background.light_blue,
  },
  btnGroup: {
    padding: 10
  },
  registerBtn: {
    width: '192px',
    height: '34px',
    padding: '1px 7px 2px',
    letterSpacing: '3px',
    '&:hover': {
      backgroundColor: palette.button.blue,
      color: palette.text.light_gray,
    },
    backgroundColor: palette.button.blue,
    color: palette.text.light_gray,
  },
  success: {
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: 'green !important',
    },
  },
  buttonProgress: {
    color: 'green',
    position: 'absolute',
    marginTop: 5,
  },
  alert: {
    position: 'fixed',
    zIndex: 99,
    bottom: 20,
    left: 20
  },
}));

export { useStyles };