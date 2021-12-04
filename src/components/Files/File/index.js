import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import PictureAsPdfRoundedIcon from '@material-ui/icons/PictureAsPdfRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from "./styles";
import Delete from "@material-ui/icons/Delete";
import MoreVertIcon from '@material-ui/icons/MoreVert';

const File = ({ title, color }) => {
    const fileStyles = { color };
    const classes = useStyles(fileStyles);

    return (
        <Grid item>
            <Card className={classes.comment}>

                <CardContent>
                    { /* <Typography gutterBottom>{props.title}</Typography> */}
                    <Typography variant="body2" component="p">
                        {title}
                    </Typography>
                  <PictureAsPdfRoundedIcon className={classes.pdf}/>
                </CardContent>
                <CardActions
                    style={{ display: "flex", justifyContent: "flex-end" }}
                >
                    <IconButton aria-label="like" >
                        <GetAppRoundedIcon className={classes.icon} />
                        {/* <IconButton>
                        <Delete id="delete-button" color="disabled" />
                    </IconButton> */}

                        <a
                            href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                            download
                        >
                            Click to download
                        </a>
                    </IconButton>

                </CardActions>
            </Card>
        </Grid>
    );
}

export default File;