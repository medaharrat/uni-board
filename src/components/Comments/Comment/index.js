import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from "./styles";
import Delete from "@material-ui/icons/Delete";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Favorite } from "@material-ui/icons";
const Comment = ({ title, color }) => {
    const commentStyles = { color };
    const classes = useStyles(commentStyles);

    return (
        <Grid item lg={20} md={4} sm={6} xs={12}>
            <Card className={classes.comment}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red[500]" }} aria-label="recipe">
                            D
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Daniel"
                    subheader="September 14, 2021"
                />
                <CardContent>
                    { /* <Typography gutterBottom>{props.title}</Typography> */}
                    <Typography variant="body2" component="p">
                        {title}
                    </Typography>
                </CardContent>
                <CardActions
                    style={{ display: "flex", justifyContent: "flex-end" }}
                >
                    <IconButton aria-label="like" >
                        <FavoriteBorderRoundedIcon className={classes.icon} />
                    </IconButton>
                    {/* <IconButton>
                        <Delete id="delete-button" color="disabled" />
                    </IconButton> */}
                </CardActions>

            </Card>
        </Grid>
    );
}

export default Comment;