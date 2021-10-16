import { makeStyles } from '@material-ui/core/styles';
import palette from '../../../static/palette';

const useStyles = makeStyles({
  box: {
    userSelect: ' none',
  },
  title: {
    color: palette.text.primary
  },  
  description: {
    color: palette.text.secondary
  },
});

export { useStyles };