import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CommentIcon from '@material-ui/icons/Comment';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Tooltip from '@material-ui/core/Tooltip';
import { useStyles } from './styles';
import Bar from './Bar';
import clsx from  'clsx';
import Link from 'next/link';

const Header = ({ title }) => {
  const classes = useStyles();

  return (
    <Grid>
      { /* The Top Bars */ }
      <Grid 
        container 
        justifyContent="space-between" 
        alignItems="flex-start" 
        className={classes.container}
      >
        <Grid item>
          <Bar>
            <Typography 
              className={classes.title} 
              align="center"
              color="primary"
              variant="overline" 
              noWrap
            >
              <Tooltip title="Home" placement="bottom" arrow>
                <Link href="/">
                  <b> Uniboard </b>
                </Link>
              </Tooltip>| IntMedia { title }  
            </Typography>
          </Bar>
        </Grid>

        <Grid item>
          <Bar>
            <Tooltip title="Notifications" placement="bottom" arrow>
              <IconButton disableRipple className={classes.iconBtn} color="primary">
                <NotificationsIcon className={classes.icon} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Settings" placement="bottom" arrow>
              <IconButton disableRipple className={classes.iconBtn} color="primary">
                <SettingsIcon className={classes.icon} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Account" placement="bottom" arrow>
              <IconButton disableRipple className={classes.iconBtn} color="primary">
                <AccountCircle className={classes.icon} />
              </IconButton>
            </Tooltip>
          </Bar>
        </Grid>
          
      </Grid>

      { /* The Tools Bar */ }
      <Grid className={ clsx(classes.container, classes.tools) }>
        <Grid item>
          <Bar vertical>
            <Tooltip title="Text" placement="right" arrow>
              <IconButton disableRipple className={classes.iconBtn} color="primary">
                <TextFieldsIcon className={classes.icon} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Comment" placement="right" arrow>
              <IconButton disableRipple className={classes.iconBtn} color="primary">
                <CommentIcon className={classes.icon} />
              </IconButton>
            </Tooltip>
            <Tooltip title="More actions" placement="right" arrow>
              <IconButton disableRipple className={classes.iconBtn} color="primary">
                <MoreHorizIcon className={classes.icon} />
              </IconButton>
            </Tooltip>
          </Bar>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Header;
