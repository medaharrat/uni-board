import { makeStyles } from '@material-ui/core/styles';
import palette from '../../../static/palette';

const useStyles = makeStyles({
    newComment: {
        backgroundColor: `${palette.background.gray} !important`,
        border: `1px dashed `,
        borderColor: palette.background.light_blue,
        padding: 10,
        marginTop: 5,
        height: 190,
        width: 190,
        textAlign: 'center',
        cursor: 'pointer'
    },
    plus: {
        '&:hover': {
            backgroundColor: 'transparent !important',
        },
        color: palette.background.light_blue,
        height: 30,
        width: 30,
        align: 'center',

    }
    ,
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
    },
    comment1: {
        backgroundColor: palette.comment.c1,  
        margin: 5,
        height: 50,
        width: 50,
        userSelect: 'none',
    },
    comment2: {
        backgroundColor: palette.comment.c2,  
        margin: 5,
        height: 50,
        width: 50,
        userSelect: 'none',
    },
    comment3: {
        backgroundColor: palette.comment.c3,  
        margin: 5,
        height: 50,
        width: 50,
        userSelect: 'none',
    },
    comment4: {
        backgroundColor: palette.comment.c4,  
        margin: 5,
        height: 50,
        width: 50,
        userSelect: 'none',
    },
   
});

export { useStyles };