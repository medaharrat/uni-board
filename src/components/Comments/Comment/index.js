import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from "./styles";
import Delete from "@material-ui/icons/Delete";

const Comment = ({ title, student, date, color, handleDelete }) => {
    const commentStyles = { color };
    const classes = useStyles(commentStyles);
  
    return (
        <Grid item>
            <Card className={classes.comment}>
                <CardHeader
                    avatar={<Avatar>{student && student.name[0]}</Avatar>}
                    title={student && student.name}
                    subheader={date}
                />
                <CardContent>
                    <Typography variant="body2" component="p">
                        {`${title.substr(0, 1).toUpperCase()}${title.substr(1, title.length)}`}
                    </Typography>
                </CardContent>
                <CardActions
                    style={{ display: "flex", justifyContent: "flex-end" }}
                >
                    {/* <IconButton aria-label="like" >
                        <FavoriteBorderRoundedIcon className={classes.icon} />
                    </IconButton> */}
                    <IconButton onClick={handleDelete}>
                        <Delete id="delete-button" color="disabled" />
                    </IconButton>
                </CardActions>

            </Card>
        </Grid>
    );
}

export default Comment;