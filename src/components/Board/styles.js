import { makeStyles } from '@material-ui/core/styles';
import palette from '../../static/palette';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    backgroundColor: palette.background.light,
  },
  content: {
    width:'100%',
    height:'100%',
    overflow: 'hidden',
    paddingTop: 100,
    paddingBottom: 100,
    transition: 'transform .2s',
    cursor: 'grab',
  },
  box: {
    width:'100%',
    height:'100%',
  }
});

export { useStyles };