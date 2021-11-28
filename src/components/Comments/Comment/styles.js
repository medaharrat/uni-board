import { makeStyles } from '@material-ui/core/styles';
import palette from '../../../static/palette';

const useStyles = makeStyles({
    comment: {
        backgroundColor: palette.comment.c1,  
        margin: 5,
        boxShadow: 'none',
        userSelect: 'none',
    },
    icon:{
        color: palette.background.dark_blue2,
    }
});

export { useStyles };