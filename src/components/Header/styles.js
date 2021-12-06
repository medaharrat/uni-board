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
    width: 70,
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 14,
    opacity: .9
  },
  iconBtn: {
    backgroundColor: 'transparent !important',
    padding: 3,
    marginRight: 10,
  },
  textBtn: {
    color: palette.text.primary,
    fontWeight: 600,
    fontSize: 14,
    textDecoration: 'none !important',
  },
  textBtnContent: {
    fontWeight: 600,
    fontSize: 14,
  },
  icon: {
    fill: palette.text.primary,
  },
  menu: {
    marginTop: 50
  },
  barrier: {
    position: 'absolute',
    borderRight: `1px solid ${palette.text.secondary}`,
    height: '25px',
    transform: 'translate(35px, -27px)',
  }
}));

export { useStyles };