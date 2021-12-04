import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';
import { useAuthState, logout, useAuthDispatch } from '../../context';
import { useStyles } from './styles';
import { useRouter } from 'next/router';
import Bar from './Bar';
import clsx from  'clsx';

const Header = ({ title, zoomIndex }) => {
  const classes = useStyles();
  const router = useRouter();
  const faculties = [
    {name: "Faculty of Informatics", path: "/ik", abreviation: "IK"},
    {name: "Faculty of Sciences", path: "/ttk", abreviation: "TTK"},
    {name: "Faculty of Economics", path: "/gtk", abreviation: "GTK"},
  ]
  
  // Read dispatch method from context
  const dispatch = useAuthDispatch() 
  // Read user details from context
  const userDetails = useAuthState() 

  // Log out
  const handleLogout = () => {
    // Call the logout action
    // logout(dispatch) 
    // Navigate on logout
    router.push('/login')
    setTimeout(() => {
      alert('You\'re about to log out!');
    }, 1000)
  }

  return (
    <div>
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
              align="center"
              variant="overline" 
              noWrap
            >
              <Tooltip title="Home" placement="bottom" arrow>
                <b> ELTE </b>
              </Tooltip >| Uniboard { title }  
            </Typography>
          </Bar>
          
          { /* The Tools Bar 
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
          */ }
        </Grid>

        <Grid item>
          <Bar>
            {/* 
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
            */}
            <Tooltip title="Logout" placement="bottom" arrow>
              <IconButton 
                disableRipple 
                className={classes.iconBtn} 
                color="primary"
                aria-controls="primary-search-account-menu"
                onClick={handleLogout}
              >
                <ExitToAppIcon className={classes.icon} />
              </IconButton>
            </Tooltip>
          </Bar>

          { /* Zoom index */ }
          <Grid className={ clsx(classes.container, classes.zoomIndex) }>
            <Grid item>
              <Bar>
                <Typography variant="body1" className={ classes.textBtnContent }>
                  {zoomIndex}%
                </Typography>
              </Bar>
            </Grid>
          </Grid>

          { /* Switch Faculties */ }
          <Grid className={ clsx(classes.container, classes.switch) }>
            {faculties.map((faculty) => (
            <Grid item key={faculty.abreviation}>
              <Link href={faculty.path} className={classes.textBtn}>
              <Bar vertical>
                <Tooltip title={faculty.name} placement="left" arrow>
                  <Typography className={ classes.textBtnContent }>
                    {faculty.abreviation}
                  </Typography>
                </Tooltip>
              </Bar>
              </Link>
            </Grid>
            ))}
          </Grid>
        </Grid> 
      </Grid>
    </div>
  );
}

export default Header;
