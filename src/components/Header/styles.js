import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'fixed',
    zIndex: 99,
<<<<<<< HEAD
    border: '1px solid black',
=======
    
>>>>>>> 7f0bec3a88e867c53749b81c9d023f30b669e5e6
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