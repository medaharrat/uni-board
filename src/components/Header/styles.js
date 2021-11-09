import { makeStyles } from '@material-ui/core/styles';
import palette from '../../static/palette';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'fixed',
    zIndex: 99,
    userSelect: 'none'
  },
  tools: {
    top: '35%',
  },
  switch: {
    top: '35%',
    left: '94.5%',
  },
  zoomIndex: {
    top: '90%',
    left: '94.5%',
  },
  iconBtn: {
    backgroundColor: 'white',
    padding: 3,
    marginRight: 10,
  },
  textBtn: {
    backgroundColor: 'transparent !important',
    height: 20, width: 20,
    textAlign: 'center'
  },
  facultyBtn: {
    fontWeight: 600,
    fontSize: 14,
  },
  icon: {
    fill: palette.text.dark_1,
  },
}));

export { useStyles };