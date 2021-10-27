import { makeStyles } from '@material-ui/core/styles';
import palette from '../../../static/palette';

const useStyles = makeStyles({
  box: {
    userSelect: ' none',
    align: 'center',
    height: '30',
    width: '100',
    backgroundColor: palette.background.dark_blue,
  },
  title: {
    color: palette.text.light_gray,

  },  
  description: {
    color: palette.text.light_gray,
  },
});

export { useStyles };