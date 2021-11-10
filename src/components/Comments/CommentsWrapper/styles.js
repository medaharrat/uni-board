import { makeStyles } from '@material-ui/core/styles';
import palette from '../../../static/palette';

const useStyles = makeStyles({
    newComment: {
        backgroundColor: `${palette.background.gray} !important`,
        border: `1px dashed grey`,
        padding: 10,
        marginTop: 5,
        height: 120,
        width: 120,
        textAlign: 'center',
        cursor: 'pointer'
    },
    plus: {
        '&:hover': {
            backgroundColor: 'transparent !important',
        },
    }
});

export { useStyles };