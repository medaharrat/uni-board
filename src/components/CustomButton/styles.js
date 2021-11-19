import { makeStyles } from '@material-ui/core/styles';
import palette from '../../static/palette';

const useStyles = makeStyles({
  btn: {
    width: '192px',
    height: '34px',
    padding: '1px 7px 2px',
    letterSpacing: '3px',
    '&:hover': {
      backgroundColor: palette.button.blue,
      color: palette.text.light_gray,
    },
  },
  register: {
    backgroundColor: palette.button.blue,
    color: palette.text.light_gray,
  },
  cancel: {
    backgroundColor: palette.button.red,
  },
  default: {
    backgroundColor: palette.button.light_gray,
  },
  
});

export { useStyles };