import { makeStyles } from '@material-ui/core/styles';
import palette from '../../../static/palette';

const useStyles = makeStyles((theme) => ({
  box: {
    border: '1px solid ' + palette.background.dark_blue,
    padding: 20,
    margin: 10,
    backgroundColor: palette.background.light_gray,
    borderRadius: 10,
    borderWidth: 3,
    
  },  
  divider: {
    margin: theme.spacing(2),
    borderTop: '5px',
    backgroundColor:palette.background.dark_blue,
  },
  btnGroup: {
    padding: 10
  }
}));

export { useStyles };