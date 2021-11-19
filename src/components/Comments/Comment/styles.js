import { makeStyles } from '@material-ui/core/styles';
import palette from '../../../static/palette';

const useStyles = makeStyles({
    comment: {
        backgroundColor: palette.background.light,  
        margin: 5,
        userSelect: 'none',
    },
    icon:{
        color: palette.background.dark_blue2,
    }
});

export { useStyles };