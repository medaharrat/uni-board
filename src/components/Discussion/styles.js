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
    },
    title: {
       padding: 5,
    },
    date: {
        color: palette.text.subtitle
    },
    modal: {
        fontFamily: 'Poppins',
        position: 'absolute',
        top: '50%',
        left: '50%',
        padding: 20,
        width: 400,
        backgroundColor: `${palette.background.white} !important`,
        transform: 'translate(-50%, -50%)',
    }
});

export { useStyles };