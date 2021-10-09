import { makeStyles } from '@material-ui/core/styles';
import palette from '../../static/palette';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    backgroundColor: palette.background.light,
    cursor: 'grab',
    overflow: 'hidden',
  },
  content: {
    width:'100%',
    height:'100%',
  },
  box: {
    width:'100%',
    height:'100%',
    paddingTop: 100,
    transition: 'transform .2s'
  },
});

export { useStyles };