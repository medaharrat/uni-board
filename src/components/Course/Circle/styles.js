import { makeStyles } from '@material-ui/core/styles';
import palette from '../../../static/palette';

const useStyles = makeStyles((theme) => ({
  box: {
    border: '1px dashed grey',
    padding: 20,
    margin: 10,
    backgroundColor: palette.background.white
  },  
  divider: {
    margin: theme.spacing(2)
  }
}));

export { useStyles };