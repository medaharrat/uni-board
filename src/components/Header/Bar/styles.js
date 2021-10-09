import { makeStyles } from '@material-ui/core/styles';
import palette from '../../../static/palette';

const useStyles = makeStyles({
    bar: {
        position: 'relative',
        borderRadius: 5,
        height: vertical => ((vertical == true) ? 'auto' : 50),
        width: vertical => ((vertical == true) ? 50 : 'auto'),
        margin: 10,
        padding: 10,
        backgroundColor: palette.background.default,
        boxShadow: palette.shadow,    
        cursor: 'default'
    }
});

export { useStyles };