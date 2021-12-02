import { makeStyles } from '@material-ui/core/styles';
import palette from '../../../static/palette';

const useStyles = makeStyles({
    placeholder: {
        backgroundColor: `${palette.background.gray} !important`,
        border: `1px dashed ${palette.borders.dark}`,
        borderRadius: 5,
        padding: 10,
        marginTop: 5,
        height: 190,
        width: 190,
        textAlign: 'center',
        cursor: 'default'
    },
    newComment: {
        color: 'blue',
        textDecoration: 'underline',
        cursor: 'pointer'
    },
    plus: {
        '&:hover': {
            backgroundColor: 'transparent !important',
        },
        color: palette.borders.dark,
        height: 30,
        width: 30,
        marginTop: '35%',
        align: 'center',
        cursor: 'pointer'
    },
    input: {
        marginTop: 10,
        '&:hover fieldset': {
            borderColor: `grey !important`,
        },
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
        borderRadius: 5,
    },
    text: {
        color: palette.text.dark_blue2,
        marginTop: 10,
        padding: 10
    },
    comment: {
        margin: 5,
        height: 50,
        width: 50,
    },
    c1: {
        backgroundColor: palette.comment.c1,
    },
    c2: {
        backgroundColor: palette.comment.c2,
    },
    c3: {
        backgroundColor: palette.comment.c3,
    },
    c4: {
        backgroundColor: palette.comment.c4,
    },
    selected: {
        border: '1px dashed black'
    },
    modalTitle: {
        padding: 10,
        textAlign: 'center'
    },
    button: {
        width: '100%',
        height: '34px',
        padding: '1px 7px 2px',
    },
    buttonProgress: {
        color: 'green',
        position: 'absolute',
        marginTop: 5,
        marginLeft: '47%'
    },
    colorIcon: {
        background: 'transparent !important',
    },
    alert: {
        marginTop: 70,
        width: '400px',
        margin: 'auto'
    }
});

export { useStyles };