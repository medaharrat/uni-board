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
    fontWeight: 300

  },  
  description: {
    color: palette.text.secondary,
  },
});

export { useStyles };