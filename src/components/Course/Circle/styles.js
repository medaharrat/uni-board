import { makeStyles } from '@material-ui/core/styles';
import palette from '../../../static/palette';

const useStyles = makeStyles((theme) => ({
  box: {
    border: '1px solid ' + palette.background.light_blue,
    padding: 30,
    margin: 20,
    backgroundColor: palette.background.light_gray,
    borderRadius: 30,
    borderWidth: 4,
    
  },  
  divider: {
    margin: theme.spacing(2),
    borderTop: '5px',
    backgroundColor:palette.background.light_blue,
  },
  btnGroup: {
    padding: 10
  }
}));

export { useStyles };