import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useAuthState, logout, useAuthDispatch } from '../../context';
import { useStyles } from './styles';
import { useRouter } from 'next/router';
import Bar from './Bar';
import clsx from  'clsx';

const Header = ({ title, zoomIndex, gridView, toggleMode }) => {
  const classes = useStyles();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  
  /*const faculties = [
    {name: "Faculty of Informatics", path: "/ik", abreviation: "IK"},
    {name: "Faculty of Sciences", path: "/ttk", abreviation: "TTK"},
    {name: "Faculty of Economics", path: "/gtk", abreviation: "GTK"},
  ]*/
  
  // Read dispatch method from context
  const dispatch = useAuthDispatch() 
  // Log out
  const handleLogout = () => {
    // Call the logout action
    logout(dispatch) 
    .then((res) => {
      // Navigate on logout
      router.push('/login')
      setTimeout(() => {
        alert('Successfully logged out!');
      }, 1000)
    })
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goToAbout = () => router.push('/about')

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
        </Grid>

        <Grid item>
          <Bar>
            <div>
              <IconButton 
                disableRipple 
                className={classes.iconBtn} 
                color="primary"
                aria-controls="primary-search-account-menu"
                onClick={toggleMode}
              >
                {!gridView ? (<WebAssetIcon className={classes.icon} />) : (<AppsIcon className={classes.icon} />)}
              </IconButton>
              <div className={classes.barrier} />
              <IconButton 
                disableRipple 
                className={classes.iconBtn} 
                color="primary"
                aria-controls="primary-search-account-menu"
                onClick={handleMenu}
              >
                <AccountCircle className={classes.icon} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                open={Boolean(anchorEl)}
                className={classes.menu}
                onClose={handleClose}
              >
                <MenuItem onClick={goToAbout}>About</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
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

          { /* Switch Faculties 
          <Grid className={ clsx(classes.container, classes.switch) }>
            {faculties.map((faculty) => (
            <Grid item key={faculty.abreviation}>
              <Bar vertical >
                <Tooltip title={faculty.name} placement="left" arrow>
                  <Typography className={ classes.textBtnContent }>
                    {faculty.abreviation}
                  </Typography>
                </Tooltip>
              </Bar>
            </Grid>
            ))}
          </Grid>
          */ }
        </Grid> 
      </Grid>
    </div>
  );
}

export default Header;
