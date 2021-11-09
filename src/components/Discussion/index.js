import React, { useState } from "react";
import {
    Box, Accordion, AccordionSummary, AccordionDetails, Typography
} from "@material-ui/core";
import { useStyles } from "./styles";
import Comments from "../Comments";

const Discussion = ({ discussions }) => {
    const [expanded, setExpanded] = useState(false);
    const classes = useStyles();
    
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box>
            <Typography>Discussions</Typography>
            {discussions.map((discussion, i) => (
                <Accordion square expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
                    <AccordionSummary aria-controls="panel-content" id="panel-header">
                        <Typography>{ discussion.title }</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Comments comments={discussion.comments} /> 
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}

export default Discussion;