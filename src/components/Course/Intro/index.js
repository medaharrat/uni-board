import React from "react";
import { useStyles } from "./styles";
import { Box, Divider, Typography, Grid } from "@material-ui/core";
import Comments from "../../Comments";

const Intro = ({ course }) => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.box}>

            <Grid>
                <Grid>
                    <Typography variant="h5">
                        { course.name }
                    </Typography>
                    <Typography variant="body2">
                        { course.description }
                    </Typography>
                </Grid>

                <Grid>
                    { /* Video or picture */ }
                </Grid>
            </Grid>

            <Grid>
                <Grid>
                    { /* Action buttons */ }
                </Grid>
            </Grid>

            <Divider />

            <Grid>
                <Grid>
                    <Comments />
                </Grid>
            </Grid>

        </Box>
    );
}

export default Intro;