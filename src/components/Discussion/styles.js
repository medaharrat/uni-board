import { makeStyles } from '@material-ui/core/styles';
import palette from '../../static/palette';

const useStyles = makeStyles({
    newDiscussion: {
        backgroundColor: `${palette.background.gray} !important`,
        color: palette.text.dark_blue2,
        border: `1px dashed `,
        borderColor: palette.text.light_blue2,
        padding: 10,
        marginTop: 5,
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: 15,

    },
    title: {
       padding: 5,
       fontFamily: 'Poppins',
       fontStyle :'bold',
       fontSize: 25,
       color: palette.text.dark_blue2,
       backgroundColor: `${palette.background.light_gray} !important`,
       
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
        borderRadius:5,
    },
    icon: {
        color: palette.background.dark_blue2,
    },
    accordion: {
        BackgroundColor: palette.background.dark_blue2,
        border:`1px solid grey`,
        borderRadius: 15,

    }
});

export { useStyles };