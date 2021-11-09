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
    fontWeight: 600,
    fontSize: 14,
  },
  iconBtn: {
    backgroundColor: 'transparent !important',
    padding: 3,
    marginRight: 10,
  },
  textBtn: {
    backgroundColor: 'transparent !important',
    height: 20, width: 20,
    textAlign: 'center',
    color: palette.text.primary,
    fontWeight: 600,
    fontSize: 14,
  },
  textBtnContent: {
    fontWeight: 600,
    fontSize: 14,
  },
  icon: {
    fill: palette.text.primary,
  },
  selected: {
    border: '1px solid black !important',
    borderRadius: 10
  }
}));

export { useStyles };