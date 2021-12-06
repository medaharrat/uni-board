import { makeStyles } from '@material-ui/core/styles';
import palette from '../../static/palette';

const useStyles = makeStyles({
    logo: {
        height: '45%',
        width: '45%'
    },
    elte: {
        height: 80,
        width: 190,
        margin: 10,
    },
    logoContainer:{
        textAlign: 'center',
        marginTop: '15%',
    },
    textContainer: {
        marginTop: 40,
        border: `1px dashed ${palette.borders.dark}`,
        padding: 20,
        borderRadius: 20,
        fontSize: 26
    },
    divider: {
        marginTop: 40,
        height: .4,
        width: 150,
        margin: 'auto',
        backgroundColor: palette.borders.dark
    },
    btn: {
        marginTop: 20
    }
});

export { useStyles };