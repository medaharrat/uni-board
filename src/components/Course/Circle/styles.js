import { makeStyles } from '@material-ui/core/styles';
import palette from '../../../static/palette';

const useStyles = makeStyles((theme) => ({
  box: {
    border: '2px solid ' + palette.background.dark_blue,
    
    padding: 20,
    margin: 10,
    backgroundColor: palette.background.light_gray
  },  
  divider: {
    margin: theme.spacing(2),
    borderTop: '5px',
    backgroundColor:palette.background.dark_blue,
  }
}));

export { useStyles };