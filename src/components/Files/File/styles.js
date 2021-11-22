import { makeStyles } from '@material-ui/core/styles';
import palette from '../../../static/palette';

const useStyles = makeStyles({
    file: {
        backgroundColor: palette.comment.c1,  
        margin: 5,
    
        userSelect: 'none',
    },
    icon:{
        color: palette.background.dark_blue2,
    },
    pdf:{
        color: palette.background.dark_blue2,
        width: 50,
        height: 50,
        margin: 5,
    }
});

export { useStyles };