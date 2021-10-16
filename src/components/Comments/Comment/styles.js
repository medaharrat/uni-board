import { makeStyles } from '@material-ui/core/styles';
import palette from '../../../static/palette';

const useStyles = makeStyles({
    comment: {
        backgroundColor: styles => (styles.color),  
        margin: 5,
        userSelect: 'none',
    }
});

export { useStyles };