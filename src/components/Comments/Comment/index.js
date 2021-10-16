import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from "./styles";
import Delete from "@material-ui/icons/Delete";

const Comment = ({ title, color }) => {
    const commentStyles = {color};
    const classes = useStyles(commentStyles);
    
    return (
        <Grid item lg={2} md={4} sm={6} xs={12}>
            <Card className={classes.comment}>
                <CardContent>
                    { /* <Typography gutterBottom>{props.title}</Typography> */ }
                    <Typography variant="body2" component="p">
                        {title}
                    </Typography>
                </CardContent>
                <CardActions
                    style={{ display: "flex", justifyContent: "flex-end" }}
                >
                    <IconButton>
                        <Delete id="delete-button" color="disabled"/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default Comment;