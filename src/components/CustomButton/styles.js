import { makeStyles } from '@material-ui/core/styles';
import palette from '../../static/palette';

const useStyles = makeStyles({
  default: {
    width: '192px',
    height: '34px',
    padding: '1px 7px 2px',
    backgroundColor: palette.button.gray,
    color: palette.text.light_gray,
    color: palette.text.light_gray,
    fontFamily: "Lucida Console",
    letterSpacing: '3px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: palette.background.dark_2,

    }
  },
  default_2: {
    width: '192px',
    height: '34px',
    padding: '1px 7px 2px',
    backgroundColor: palette.background.dark_blue2,
    color: palette.text.light_gray,
    color: palette.text.light_gray,
    fontFamily: "Lucida Console",
    letterSpacing: '3px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: palette.background.dark_2,

    }
  },
  register: {
    width: '192px',
    height: '34px',
    padding: '1px 7px 2px',
    backgroundColor: palette.button.green,
    color: palette.text.light_gray,
    fontFamily: "Lucida Console",
    letterSpacing: '3px',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: palette.background.dark_2,
    },
  },
  cancel: {
    width: '192px',
    height: '34px',
    backgroundColor: palette.button.red,
    color: palette.text.light_gray,
    color: palette.text.light_gray,
    fontFamily: "Lucida Console",
    padding: '1px 7px 2px',
    letterSpacing: '3px',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: palette.background.dark_2,

      
    },

  },
 
});

export { useStyles };