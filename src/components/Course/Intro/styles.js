import { makeStyles } from '@material-ui/core/styles';
import palette from '../../../static/palette';

const useStyles = makeStyles({
  box: {
    userSelect: ' none',
    align: 'center',
    height: '30',
    width: '100',
  },
  title: {
    fontWeight: 300,
    color: palette.text.dark_blue,
  },  
  description: {
    color: palette.text.light_blue,
  },
});

export { useStyles };