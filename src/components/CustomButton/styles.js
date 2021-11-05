import { makeStyles } from '@material-ui/core/styles';
import palette from '../../static/palette';

const useStyles = makeStyles({
  btn: {
    width: '192px',
    height: '34px',
    padding: '1px 7px 2px',
    letterSpacing: '3px',
    color: palette.text.light_gray,
  },
  register: {
    backgroundColor: palette.button.green,
  },
  cancel: {
    backgroundColor: palette.button.red,
  },
  default: {
    backgroundColor: palette.button.gray,
  }
});

export { useStyles };