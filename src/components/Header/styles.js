import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'fixed',
    zIndex: 99
  },
  tools: {
    top: '35%',
  },
  iconBtn: {
    backgroundColor: 'white',
    padding: 3,
    marginRight: 10
  },
  icon: {
    fill: "#0078FF",
  },
}));

export { useStyles };