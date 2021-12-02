import { makeStyles } from '@material-ui/core/styles';
import palette from '../../../static/palette';

const useStyles = makeStyles({
    comment: {
        backgroundColor: commentStyles => (commentStyles.color),
        margin: 5,
        boxShadow: 'none',
        userSelect: 'none',
    },
    icon:{
        color: palette.background.dark_blue2,
    }
});

export { useStyles };