import { makeStyles } from '@material-ui/core/styles';

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
  facultyBtn: {
    fontWeight: 600,
  },
  icon: {
    fill: "#0078FF",
  },
}));

export { useStyles };