import { makeStyles } from '@material-ui/core/styles';
import palette from '../../static/palette';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    margin: 0, padding: 0,
    backgroundColor: palette.background.light,
    backgroundImage: 'url("./elte.png")',
    backgroundPosition: '50% 3%',
    backgroundSize: '150px',
    backgroundRepeat: 'no-repeat'
  },
  content: {
    position: 'fixed',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    paddingTop: 100,
    paddingBottom: 100,
    transition: 'transform .2s',
    cursor: 'grab',
  },
});

export { useStyles };