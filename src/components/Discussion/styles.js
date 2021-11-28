import { makeStyles } from '@material-ui/core/styles';
import palette from '../../static/palette';

const useStyles = makeStyles({
    newDiscussion: {
        backgroundColor: `${palette.background.gray} !important`,
        color: palette.text.dark_blue2,
        border: `1px dashed `,
        borderColor: palette.text.dark_blue2,
        padding: 10,
        marginTop: 5,
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: 10,
    },
    title: {
       padding: 5,
       fontFamily: 'Poppins',
       fontStyle :'bold',
       fontSize: 18,
       color: palette.text.dark_blue2,
       backgroundColor: `${palette.background.light_gray} !important`,
    },
    text: {
        color: palette.text.light_blue,

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
        borderRadius:5,
    },
    modalTitle: {
        padding: 10,
        textAlign: 'center'
    },
    modalContent: {
        width: '100%'
    },
    icon: {
        color: palette.background.dark_blue2,
        fontSize: 18,
        marginTop: 10,
        marginRight: 7
    },
    accordion: {
        BackgroundColor: palette.background.dark_blue2,
        border:`1px solid `,
        boxShadow: 'none',
        borderColor: palette.background.light_blue2,
        borderRadius: 10,
        marginTop: 5,
    },
    date: {
        color: palette.text.subtitle,
        fontStyle: 'italic'
    },
    input: {
        marginTop: 10,
        '&:hover fieldset': {
            borderColor: `grey !important`,
        },
    },
    button: {
        width: '100%',
        height: '34px',
        padding: '1px 7px 2px',
    }
});

export { useStyles };