import { makeStyles } from '@material-ui/core/styles';
import palette from '../../static/palette';

const useStyles = makeStyles({
    newDiscussion: {
        backgroundColor: `${palette.background.gray} !important`,
        border: `1px dashed grey`,
        padding: 10,
        marginTop: 5,
        textAlign: 'center',
        cursor: 'pointer'
    }
});

export { useStyles };