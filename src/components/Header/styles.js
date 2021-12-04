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
    right: 0,
  },
  zoomIndex: {
    top: '90%',
    right: 0,
    fontWeight: 600,
    fontSize: 14,
  },
  iconBtn: {
    backgroundColor: 'transparent !important',
    padding: 3,
    marginRight: 10,
  },
  textBtn: {
    height: 20, width: 20,
    color: palette.text.primary,
    fontWeight: 600,
    fontSize: 14,
    textDecoration: 'none !important',
    textAlign: 'center'
  },
  textBtnContent: {
    fontWeight: 600,
    fontSize: 14,
  },
  icon: {
    fill: palette.text.primary,
  },
}));

export { useStyles };